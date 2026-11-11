// Refreshes the automatic parts of the site: news headlines, the lists of
// restaurants, places of worship, yoga studios and cricket clubs, the list of
// Dutch towns (for "India near me") and the euro–rupee rate.
// Runs daily in GitHub Actions.
//
// Rule: never make things worse. If a source is unreachable or returns
// suspiciously little, the previous data is kept.
//
// Usage: node scripts/fetch-data.mjs

import { readFile, writeFile } from "node:fs/promises";

const DATA = new URL("../src/_data/", import.meta.url);
const UA = "indiawijzer-site-builder/1.0";

// ── Settings ───────────────────────────────────────────────────────────────
// Any RSS feed works here. These are Google News searches limited to recent items.
const FEEDS = {
  nl: ["https://news.google.com/rss/search?q=India+(Nederland+OR+Nederlandse)+when:30d&hl=nl&gl=NL&ceid=NL:nl"],
  en: ["https://news.google.com/rss/search?q=India+(Netherlands+OR+Dutch)+when:30d&hl=en-IN&gl=IN&ceid=IN:en"],
};
const MAX_NEWS = 30;

const OVERPASS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];
const NL = 'area["ISO3166-1"="NL"][admin_level=2]->.nl;';
const QUERIES = {
  restaurants: `[out:json][timeout:120];${NL}nwr["amenity"~"^(restaurant|fast_food|cafe)$"]["cuisine"~"indian"](area.nl);out center tags;`,
  worship: `[out:json][timeout:120];${NL}nwr["amenity"="place_of_worship"]["religion"~"^(hindu|sikh|jain)$"](area.nl);out center tags;`,
  yoga: `[out:json][timeout:120];${NL}(nwr["sport"="yoga"]["name"](area.nl);nwr["leisure"~"^(fitness_centre|sports_centre)$"]["name"~"[Yy]oga"](area.nl););out center tags;`,
  cricket: `[out:json][timeout:120];${NL}(nwr["club"="sport"]["sport"~"cricket"]["name"](area.nl);nwr["leisure"~"^(sports_centre|pitch)$"]["sport"="cricket"]["name"](area.nl););out center tags;`,
};
const MIN_PLACES = { restaurants: 50, worship: 10, yoga: 10, cricket: 5 }; // fewer than this = treat as a failed fetch

// Town centres, used to let visitors pick a town and to name the town of
// places that have no address in OpenStreetMap.
const TOWNS_QUERY = `[out:json][timeout:120];${NL}node["place"~"^(city|town|village)$"]["name"](area.nl);out;`;
const MIN_TOWNS = 500;
const TOWN_NAMES = { "'s-Gravenhage": "Den Haag", "'s-Hertogenbosch": "Den Bosch" }; // everyday names
const NEAR_TOWN_KM = 4; // a place without address gets the nearest town centre within this distance

const RATE_URL = "https://api.frankfurter.dev/v1/latest?base=EUR&symbols=INR"; // European Central Bank reference rate

// ── Helpers ────────────────────────────────────────────────────────────────
async function get(url, opts = {}) {
  const res = await fetch(url, { ...opts, headers: { "User-Agent": UA, ...(opts.headers || {}) }, signal: AbortSignal.timeout(150_000) });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res;
}

const readJson = async (name, fallback) => {
  try { return JSON.parse(await readFile(new URL(name, DATA), "utf8")); } catch { return fallback; }
};
const writeJson = (name, data) => writeFile(new URL(name, DATA), JSON.stringify(data, null, 1) + "\n");

const decode = (s) =>
  s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .trim();

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : "";
};

export function parseRss(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
    const source = tag(item, "source");
    let title = tag(item, "title");
    // Google News appends " - Source" to every title.
    if (source && title.endsWith(" - " + source)) title = title.slice(0, -source.length - 3);
    const d = new Date(tag(item, "pubDate"));
    return { title, link: tag(item, "link"), source, date: isNaN(d) ? null : d.toISOString() };
  }).filter((x) => x.title && /^https?:\/\//.test(x.link));
}

export function parsePlaces(json) {
  const seen = new Set();
  return json.elements.map((e) => {
    const t = e.tags || {};
    const street = [t["addr:street"], t["addr:housenumber"]].filter(Boolean).join(" ");
    let w = t.website || t["contact:website"] || "";
    if (w && !/^https?:\/\//i.test(w)) w = "https://" + w;
    try { w = w ? new URL(w).href : ""; } catch { w = ""; }
    const city = TOWN_NAMES[t["addr:city"]] || t["addr:city"] || "";
    const lat = e.lat ?? e.center?.lat, lon = e.lon ?? e.center?.lon;
    const out = { n: (t.name || "").trim(), c: city, a: street, w, o: `${e.type}/${e.id}` };
    if (Number.isFinite(lat) && Number.isFinite(lon)) { out.y = +lat.toFixed(5); out.x = +lon.toFixed(5); }
    return out;
  }).filter((x) => {
    const key = (x.n + "|" + x.c + "|" + x.a).toLowerCase();
    if (!x.n || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort(byTown);
}
const byTown = (a, b) => !a.c - !b.c || a.c.localeCompare(b.c, "nl") || a.n.localeCompare(b.n, "nl"); // no town = last

// Cricket grounds are often mapped several times (club, ground, each pitch):
// keep one entry per club and drop bare pitch names such as "Veld 13".
export function clubsOnly(list) {
  const seen = new Set();
  return list.filter((x) => {
    const key = x.n.toLowerCase().replace(/\b(cricket|ground|club|cricketclub)\b/g, "").replace(/[^a-z0-9]/g, "") || x.n.toLowerCase();
    if (/^veld\s*\d*$/i.test(x.n) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function parseTowns(json) {
  const seen = new Set();
  return json.elements.map((e) => {
    const t = e.tags || {};
    return { n: TOWN_NAMES[t.name] || t.name, y: +e.lat.toFixed(4), x: +e.lon.toFixed(4), p: +t.population || 0 };
  }).filter((t) => t.n && !seen.has(t.n) && seen.add(t.n)).sort((a, b) => a.n.localeCompare(b.n, "nl"));
}

export const km = (a, b) => {
  const r = Math.PI / 180, dy = (a.y - b.y) * r, dx = (a.x - b.x) * r * Math.cos(((a.y + b.y) / 2) * r);
  return 6371 * Math.sqrt(dx * dx + dy * dy);
};

// Gives places without a town the name of the nearest town centre, if close by.
export function fillTowns(list, towns) {
  for (const p of list) {
    if (p.c || p.y == null) continue;
    let best = null, d = NEAR_TOWN_KM;
    for (const t of towns) { const k = km(p, t); if (k < d) { d = k; best = t; } }
    if (best) p.c = best.n;
  }
  return list.sort(byTown);
}

// ── News ───────────────────────────────────────────────────────────────────
async function updateNews() {
  const news = await readJson("news.json", { updated: null, nl: [], en: [] });
  let changed = false;
  for (const [lang, feeds] of Object.entries(FEEDS)) {
    try {
      const items = [];
      for (const url of feeds) items.push(...parseRss(await (await get(url)).text()));
      const seen = new Set();
      const unique = items
        .filter((x) => !seen.has(x.title.toLowerCase()) && seen.add(x.title.toLowerCase()))
        .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
        .slice(0, MAX_NEWS);
      if (!unique.length) throw new Error("feed returned no items");
      news[lang] = unique;
      changed = true;
      console.log(`news ${lang}: ${unique.length} items`);
    } catch (err) {
      console.warn(`news ${lang}: kept previous data (${err.message})`);
    }
  }
  if (changed) { news.updated = new Date().toISOString(); await writeJson("news.json", news); }
}

// ── Places ─────────────────────────────────────────────────────────────────
async function overpass(query) {
  let last;
  for (const url of OVERPASS) {
    try {
      const res = await get(url, { method: "POST", body: new URLSearchParams({ data: query }) });
      return await res.json();
    } catch (err) { last = err; }
  }
  throw last;
}

async function updatePlaces() {
  const places = await readJson("places.json", { updated: null, restaurants: [], worship: [] });
  let changed = false;

  let towns = await readJson("towns.json", []);
  try {
    const list = parseTowns(await overpass(TOWNS_QUERY));
    if (list.length < MIN_TOWNS) throw new Error(`only ${list.length} results`);
    towns = list;
    await writeJson("towns.json", towns);
    console.log(`towns: ${towns.length}`);
  } catch (err) {
    console.warn(`towns: kept previous data (${err.message})`);
  }

  for (const [key, query] of Object.entries(QUERIES)) {
    try {
      let list = parsePlaces(await overpass(query));
      if (key === "cricket") list = clubsOnly(list);
      if (list.length < MIN_PLACES[key]) throw new Error(`only ${list.length} results`);
      places[key] = fillTowns(list, towns);
      changed = true;
      console.log(`places ${key}: ${list.length}`);
    } catch (err) {
      console.warn(`places ${key}: kept previous data (${err.message})`);
    }
  }
  if (changed) { places.updated = new Date().toISOString(); await writeJson("places.json", places); }
}

// ── Euro–rupee rate ────────────────────────────────────────────────────────
async function updateRate() {
  try {
    const d = await (await get(RATE_URL)).json();
    const inr = d?.rates?.INR;
    if (!(inr > 20 && inr < 500)) throw new Error("implausible rate");
    await writeJson("rate.json", { inr, date: d.date, updated: new Date().toISOString() });
    console.log(`rate: 1 EUR = ${inr} INR`);
  } catch (err) {
    console.warn(`rate: kept previous data (${err.message})`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await updateNews();
  await updatePlaces();
  await updateRate();
}
