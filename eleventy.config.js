import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (cfg) {
  cfg.addPlugin(HtmlBasePlugin);
  cfg.addPassthroughCopy({ "src/assets": "assets" });
  cfg.addWatchTarget("./content/");
  cfg.addWatchTarget("./lib/");

  cfg.addFilter("date", (iso, lang) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return new Intl.DateTimeFormat(lang === "nl" ? "nl-NL" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Amsterdam" }).format(d);
  });
  // "2026-11-08" -> "zo 8 november 2026"; with short=true -> "8 nov"
  cfg.addFilter("day", (iso, lang, short) => {
    if (!iso) return "–";
    const opts = short ? { day: "numeric", month: "short" } : { weekday: "short", day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat(lang === "nl" ? "nl-NL" : "en-GB", { ...opts, timeZone: "UTC" }).format(new Date(iso + "T00:00:00Z"));
  });
  cfg.addFilter("host", (u) => {
    try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; }
  });
  cfg.addFilter("json", (v) => JSON.stringify(v));

  return {
    dir: { input: "src", output: "_site" },
    // Set PATH_PREFIX=/repo-name/ to preview on username.github.io/repo-name/
    pathPrefix: process.env.PATH_PREFIX || "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
