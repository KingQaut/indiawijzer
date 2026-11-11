// Turns content/index.js into the lists of pages the templates loop over.
import { sections as baseSections, about } from "../../content/index.js";
import { extra } from "../../content/extra.js";
import { ingredients } from "../../content/ingredients.js";

// Topics from content/extra.js are added to the end of their section.
const sections = baseSections.map((s) => ({ ...s, topics: [...s.topics, ...(extra[s.slug.nl] || [])] }));
import site from "./site.js";
import { readFileSync } from "node:fs";
import { yearCalendar } from "../../lib/festivals.mjs";

const readData = (name, fallback) => {
  try { return JSON.parse(readFileSync(new URL(name, import.meta.url), "utf8")); } catch { return fallback; }
};
const slugify = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const base = (lang) => (lang === "nl" ? "/" : "/en/");
const other = (lang) => (lang === "nl" ? "en" : "nl");
const L = (v, lang) => (v && typeof v === "object" ? v[lang] : v);

export default function () {
  const homePages = [], sectionPages = [], topicPages = [], newsPages = [], aboutPages = [];
  const nav = {}, search = {}, home = {}, rest = {};
  const toolPages = Object.fromEntries(Object.keys(site.tools).map((k) => [k, []])), cityPages = [];
  const tools = {}, toolBy = {}, cities = {}, kinds = {}, calendar = {}, guides = {};

  // Towns with enough places get their own page.
  const places = readData("places.json", {});
  const byCity = new Map();
  for (const k of site.kinds) {
    for (const x of places[k.key] || []) {
      if (!x.c) continue;
      if (!byCity.has(x.c)) byCity.set(x.c, { name: x.c, slug: slugify(x.c), total: 0, lists: {} });
      const c = byCity.get(x.c);
      (c.lists[k.key] ||= []).push(x);
      c.total++;
    }
  }
  const cityList = [...byCity.values()].filter((c) => c.total >= site.cityMin && c.slug)
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name, "nl"));

  // Festival and holiday dates, calculated for this year and the years after.
  const todayIso = new Date().toISOString().slice(0, 10);
  const firstYear = +todayIso.slice(0, 4);
  const years = Array.from({ length: site.calendarYears }, (_, i) => firstYear + i);
  const perYear = years.map((y) => yearCalendar(y));
  const allDays = perYear.flat();
  const horizon = new Date(Date.now() + 366 * 86400000).toISOString().slice(0, 10);
  const row = (key) => ({ key, dates: perYear.map((list) => list.find((d) => d.key === key)?.date || "") });
  const keysOf = (kind) => [...new Set(perYear[0].filter((d) => d.kind === kind).map((d) => d.key))];

  for (const lang of site.langs) {
    const alt = other(lang);
    const sectionUrl = (s, l) => `${base(l)}${s.slug[l]}/`;
    const topicUrl = (s, t, l) => `${sectionUrl(s, l)}${t.slug[l]}/`;

    const secs = sections.map((s) => ({
      key: s.slug.nl,
      icon: s.icon,
      title: s.title[lang],
      intro: s.intro[lang],
      url: sectionUrl(s, lang),
      alt: sectionUrl(s, alt),
      topics: s.topics.map((t) => ({
        key: t.slug.nl,
        title: t.title[lang],
        intro: t.intro[lang],
        body: t.body[lang],
        finder: t.finder,
        live: (t.live || []).map((x) => ({ u: x.u, t: L(x.t, lang) })),
        links: (t.links || []).map((x) => ({ u: x.u, t: L(x.t, lang), d: L(x.d, lang) })),
        url: topicUrl(s, t, lang),
        alt: topicUrl(s, t, alt),
      })),
    }));

    nav[lang] = secs;

    // Homepage halves (configured in site.js) and the remaining sections.
    const topics = secs.flatMap((s) => s.topics);
    const must = (x, what) => { if (!x) throw new Error(`site.js home: unknown ${what}`); return x; };
    home[lang] = site.home.map((h) => ({
      side: h.side, kicker: h.kicker[lang], title: h.title[lang], text: h.text[lang],
      more: h.sections.map((k) => must(secs.find((s) => s.key === k), `section "${k}"`)),
      links: h.topics.map(([k, icon]) => ({ icon, ...must(topics.find((t) => t.key === k), `topic "${k}"`) })),
    }));
    const used = site.home.flatMap((h) => h.sections);
    rest[lang] = secs.filter((s) => !used.includes(s.key));
    guides[lang] = site.guides.map((gd) => ({ icon: gd.icon, title: gd.title[lang], topics: gd.topics.map((k) => must(topics.find((t) => t.key === k), `guide topic "${k}"`)) }));
    const toolUrl = (k, l) => `${base(l)}${site.tools[k].slug[l]}/`;
    tools[lang] = Object.entries(site.tools).map(([key, t]) => ({ key, icon: t.icon, title: t.title[lang], intro: t.intro[lang], url: toolUrl(key, lang), alt: toolUrl(key, alt) }));
    toolBy[lang] = Object.fromEntries(tools[lang].map((t) => [t.key, t]));
    for (const t of tools[lang]) toolPages[t.key].push({ lang, url: t.url, alt: t.alt, title: t.title, description: t.intro, tool: t });

    kinds[lang] = site.kinds.map((k) => ({ key: k.key, icon: k.icon, color: k.color, label: k.label[lang], url: topics.find((t) => t.key === k.topic)?.url }));
    const cityUrl = (c, l) => `${toolUrl("cities", l)}${c.slug}/`;
    cities[lang] = cityList.map((c) => ({ ...c, url: cityUrl(c, lang), alt: cityUrl(c, alt) }));
    for (const c of cities[lang]) {
      cityPages.push({ lang, url: c.url, alt: c.alt, title: `${site.ui[lang].cityTitle} ${c.name}`, description: `${site.ui[lang].cityIntro} ${c.name}.`, city: c });
    }

    const wiki = (term) => `https://${lang}.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(term)}&go=Go`;
    const name = (d) => ({ ...d, name: site.days[d.key][lang], note: site.days[d.key].d?.[lang] || "", wiki: wiki(site.days[d.key].w[lang]) });
    calendar[lang] = {
      years,
      upcoming: allDays.filter((d) => d.date >= todayIso && d.date <= horizon).map(name),
      festivals: keysOf("festival").map(row).map(name),
      nl: keysOf("nl").map(row).map(name),
      in: keysOf("in").map(row).map(name),
    };

    const newsUrl = (l) => `${base(l)}${site.newsSlug[l]}/`;
    const aboutUrl = (l) => `${base(l)}${about.slug[l]}/`;

    homePages.push({ lang, url: base(lang), alt: base(alt), title: site.ui[lang].tagline, description: site.ui[lang].lead, home: true });
    newsPages.push({ lang, url: newsUrl(lang), alt: newsUrl(alt), title: site.ui[lang].news, description: site.ui[lang].newsIntro });
    aboutPages.push({
      lang, url: aboutUrl(lang), alt: aboutUrl(alt), title: about.title[lang], description: about.blocks[0].p[lang][0],
      blocks: about.blocks.map((b) => ({ h: b.h[lang], p: b.p[lang] })),
    });
    for (const s of secs) {
      sectionPages.push({ lang, url: s.url, alt: s.alt, title: s.title, description: s.intro, section: s });
      for (const t of s.topics) {
        topicPages.push({ lang, url: t.url, alt: t.alt, title: t.title, description: t.intro, section: s, topic: t });
      }
    }

    // Small search index: topics first, then every link.
    search[lang] = [
      ...secs.flatMap((s) => s.topics.map((t) => ({ t: t.title, d: t.intro, u: t.url, k: s.title + " " + t.body.join(" ") }))),
      ...tools[lang].map((t) => ({ t: t.title, d: t.intro, u: t.url, k: t.key === "calendar" ? Object.values(site.days).map((d) => d[lang]).join(" ") : t.key === "ingredients" ? ingredients.flat().join(" ") : "" })),
      ...cities[lang].map((c) => ({ t: `${site.ui[lang].cityTitle} ${c.name}`, d: `${site.ui[lang].cityIntro} ${c.name}.`, u: c.url })),
      ...secs.flatMap((s) => s.topics.flatMap((t) => t.links.map((x) => ({ t: x.t, d: x.d, u: x.u, x: 1 })))),
    ];
  }

  // Old addresses of topics that moved to another section keep working.
  const redirects = [];
  for (const [topicKey, oldSectionKey] of Object.entries(site.moved)) {
    for (const lang of site.langs) {
      const oldSec = nav[lang].find((x) => x.key === oldSectionKey);
      const t = nav[lang].flatMap((x) => x.topics).find((x) => x.key === topicKey);
      if (oldSec && t) redirects.push({ from: `${oldSec.url}${t.url.split("/").at(-2)}/`, to: t.url, title: t.title });
    }
  }

  const urls = { news: {}, about: {} };
  for (const p of newsPages) urls.news[p.lang] = p.url;
  for (const p of aboutPages) urls.about[p.lang] = p.url;

  const allPages = [...homePages, ...sectionPages, ...topicPages, ...Object.values(toolPages).flat(), ...cityPages, ...newsPages, ...aboutPages];
  return { homePages, sectionPages, topicPages, newsPages, aboutPages, toolPages, cityPages, allPages, nav, search, urls, home, rest, tools, cities, kinds, calendar, ingredients, guides, toolBy, redirects };
}
