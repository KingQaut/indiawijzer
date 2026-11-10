import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (cfg) {
  cfg.addPlugin(HtmlBasePlugin);
  cfg.addPassthroughCopy({ "src/assets": "assets" });
  cfg.addWatchTarget("./content/");

  cfg.addFilter("date", (iso, lang) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return new Intl.DateTimeFormat(lang === "nl" ? "nl-NL" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Amsterdam" }).format(d);
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
