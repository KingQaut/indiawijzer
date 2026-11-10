# Indiawijzer – project notes for a new session

Relaunch of **indiawijzer.nl**: a portal about everything Indian in the Netherlands and everything Dutch in India (culture, food, immigration, study, business, family law). The old site is offline; nothing was migrated from it. Repository: `KingQaut/indiawijzer`, branch `main`.

The owner is not a developer. Explain steps as clicks in the GitHub website, not as terminal commands.

## Hard requirement: low to no maintenance

No database, no CMS, no server, nothing that needs manual checking. Every design decision follows from this:

- Static site (Eleventy 3.1.8, the only dependency), hosted on GitHub Pages.
- Pages explain a topic briefly and link to the authority; avoid fees, dates, thresholds and addresses that go stale.
- Things that change weekly (film screenings, events, shops) get "search now" buttons that open a live search, not a maintained list.
- News and place lists refresh themselves nightly; links are checked weekly by a robot.

Do not add anything that needs regular human upkeep without asking the owner first.

## How it is built

| What | Where |
| --- | --- |
| All texts and links, Dutch + English | `content/index.js` (each link exists once, shared by both languages) |
| Site name, contact e-mail, interface texts | `src/_data/site.js` |
| Turns content into page lists, nav, search index | `src/_data/catalog.js` |
| Templates | `src/*.njk`, `src/_includes/base.njk` |
| Design, search and list filter | `src/assets/style.css`, `src/assets/site.js` |
| Nightly data fetch (Google News RSS, OpenStreetMap Overpass) | `scripts/fetch-data.mjs` → `src/_data/news.json`, `src/_data/places.json` |
| Build + publish (on push, nightly 04:17 UTC, manual) | `.github/workflows/deploy.yml` |
| Weekly link check, opens an issue when links break | `.github/workflows/links.yml` |

- Dutch lives at `/`, English at `/en/`, with translated slugs and hreflang links.
- Five sections, 22 topics: India in Nederland, Naar Nederland, Naar India, Zakendoen, Familie en recht; plus news, about/disclaimer/privacy, search, sitemap, 404.
- The data fetch keeps the previous data when a source fails or returns suspiciously little.
- The nightly workflow commits the refreshed JSON back to `main` (bot commits "Automatic data update"). This also keeps GitHub from pausing the schedule. **Always `git pull --rebase origin main` before pushing.**
- `PATH_PREFIX=/indiawijzer/` at build time makes the site work under `kingqaut.github.io/indiawijzer/`; not set by default because the site is meant for the root of indiawijzer.nl.

Commands: `npm install`, `npm start` (local preview on port 8080), `npm run build`, `npm run update-data`.

## Status (10 November 2026)

Done:
- Site built, tested in a browser (desktop and phone), pushed to GitHub.
- GitHub Pages switched on (source: GitHub Actions); publishing works.
- First live data fetch worked: 25 NL / 30 EN headlines, 356 restaurants, 38 temples and gurdwaras.

Waiting on the owner:
1. Enter `indiawijzer.nl` under Settings → Pages → Custom domain.
2. DNS at the domain provider: four `A` records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and `CNAME` `www` → `kingqaut.github.io`. Leave `MX` records alone.
3. Tick "Enforce HTTPS" once GitHub allows it.
4. Run the "Check links" workflow once and report what it flags.

Open points:
- **Homepage layout: decided and built.** Two halves side by side, no headline above them: saffron "India in Nederland" with an Indian skyline, Delft-blue "Nederland in India" with windmill, canal houses, cows and tulips, one sun shared across the seam. Which topics and sections appear in each half is set in `home` in `src/_data/site.js`; the drawings are `src/_includes/skyline-in.svg` and `skyline-nl.svg`; sections not assigned to a half (Zakendoen, Familie en recht) show as cards below with the news. Offered but not yet decided: a thin saffron block-print band or blue tile band at the top of inner pages to show which side a page belongs to.
- **Links are mostly unverified**: only a handful were confirmed by web search. Expect the first link check to flag some; fix them in `content/index.js`.
- **Texts need the owner's review**, especially the Dutch and the legal topics (adoption phase-out, OCI, nationality, tax treaty). All content was written from scratch.
- **Contact address** `info@indiawijzer.nl` in `src/_data/site.js` is a placeholder; the owner must confirm it exists or remove it.
- **Dutch news feed is loose**: it sometimes picks up stories unrelated to India–Netherlands. Tighten the query at the top of `scripts/fetch-data.mjs` if the owner finds it noisy.
- 44 restaurants have no town in OpenStreetMap and show as "Plaats onbekend".
- The owner was invited to name topics from the old site that are missing.
