// Refreshes the automatic parts of the site: news headlines and the lists of
// restaurants and places of worship. Runs daily in GitHub Actions.
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
};
const MIN_PLACES = { restaurants: 50, worship: 10 }; // fewer than this = treat as a failed fetch

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
    return { n: (t.name || "").trim(), c: t["addr:city"] || "", a: street, w, o: `${e.type}/${e.id}` };
  }).filter((x) => {
    const key = (x.n + "|" + x.c + "|" + x.a).toLowerCase();
    if (!x.n || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort((a, b) => !a.c - !b.c || a.c.localeCompare(b.c, "nl") || a.n.localeCompare(b.n, "nl")); // no town = last
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
  for (const [key, query] of Object.entries(QUERIES)) {
    try {
      const list = parsePlaces(await overpass(query));
      if (list.length < MIN_PLACES[key]) throw new Error(`only ${list.length} results`);
      places[key] = list;
      changed = true;
      console.log(`places ${key}: ${list.length}`);
    } catch (err) {
      console.warn(`places ${key}: kept previous data (${err.message})`);
    }
  }
  if (changed) { places.updated = new Date().toISOString(); await writeJson("places.json", places); }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await updateNews();
  await updatePlaces();
}
