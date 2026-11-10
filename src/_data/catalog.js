// Turns content/index.js into the lists of pages the templates loop over.
import { sections, about } from "../../content/index.js";
import site from "./site.js";

const base = (lang) => (lang === "nl" ? "/" : "/en/");
const other = (lang) => (lang === "nl" ? "en" : "nl");
const L = (v, lang) => (v && typeof v === "object" ? v[lang] : v);

export default function () {
  const homePages = [], sectionPages = [], topicPages = [], newsPages = [], aboutPages = [];
  const nav = {}, search = {};

  for (const lang of site.langs) {
    const alt = other(lang);
    const sectionUrl = (s, l) => `${base(l)}${s.slug[l]}/`;
    const topicUrl = (s, t, l) => `${sectionUrl(s, l)}${t.slug[l]}/`;

    const secs = sections.map((s) => ({
      icon: s.icon,
      title: s.title[lang],
      intro: s.intro[lang],
      url: sectionUrl(s, lang),
      alt: sectionUrl(s, alt),
      topics: s.topics.map((t) => ({
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
      ...secs.flatMap((s) => s.topics.flatMap((t) => t.links.map((x) => ({ t: x.t, d: x.d, u: x.u, x: 1 })))),
    ];
  }

  const urls = { news: {}, about: {} };
  for (const p of newsPages) urls.news[p.lang] = p.url;
  for (const p of aboutPages) urls.about[p.lang] = p.url;

  const allPages = [...homePages, ...sectionPages, ...topicPages, ...newsPages, ...aboutPages];
  return { homePages, sectionPages, topicPages, newsPages, aboutPages, allPages, nav, search, urls };
}
