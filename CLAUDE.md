# Indiawijzer – project notes for a new session

Relaunch of **indiawijzer.nl**: a portal about everything Indian in the Netherlands and everything Dutch in India (culture, food, immigration, study, business, family law). The old site is offline; nothing was migrated from it. Repository: `KingQaut/indiawijzer`, branch `main`.

The owner is not a developer. Explain steps as clicks in the GitHub website, not as terminal commands.

Product requirements document (a Claude doc owned by the owner, read it with the docs tools): https://claude.ai/artifact/VQTbvD29neg4aJpDDwco69

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
| All texts and links, Dutch + English | `content/index.js` (each link exists once, shared by both languages); later topics in `content/extra.js`, added to the end of their section; ingredient list in `content/ingredients.js` |
| Site name, contact e-mail, interface texts | `src/_data/site.js` |
| Turns content into page lists, nav, search index | `src/_data/catalog.js` |
| Templates | `src/*.njk`, `src/_includes/base.njk` |
| Design, search and list filter | `src/assets/style.css`, `src/assets/site.js` |
| Nightly data fetch (Google News RSS, OpenStreetMap Overpass, ECB rate via Frankfurter) | `scripts/fetch-data.mjs` → `src/_data/news.json`, `places.json`, `towns.json`, `rate.json` |
| Self-updating pages: near me (map), cities, festival calendar, now (clock, weather, rate) | `src/tools/*.njk`, `src/assets/tools.js`; titles and settings under `tools`, `kinds`, `days` in `src/_data/site.js` |
| Festival and holiday dates, calculated from sun and moon positions (no date tables) | `lib/festivals.mjs` |
| Map library (Leaflet 1.9.4, copied in, not an npm dependency) | `src/assets/vendor/leaflet/` |
| Build + publish (on push, nightly 04:17 UTC, manual) | `.github/workflows/deploy.yml` |
| Weekly link check, opens an issue when links break | `.github/workflows/links.yml` |

- Dutch lives at `/`, English at `/en/`, with translated slugs and hreflang links.
- Five sections, 43 topics (yoga and cricket added 11 Nov 2026 with automatic lists; 19 more that day in `content/extra.js`): India in Nederland, Naar Nederland, Naar India, Zakendoen, Familie en recht; plus news, about/disclaimer/privacy, search, sitemap, 404.
- The data fetch keeps the previous data when a source fails or returns suspiciously little.
- The nightly workflow commits the refreshed JSON back to `main` (bot commits "Automatic data update"). This also keeps GitHub from pausing the schedule. **Always `git pull --rebase origin main` before pushing.**
- `PATH_PREFIX=/indiawijzer/` at build time makes the site work under `kingqaut.github.io/indiawijzer/`; not set by default because the site is meant for the root of indiawijzer.nl.

Commands: `npm install`, `npm start` (local preview on port 8080), `npm run build`, `npm run update-data`.

## Added 11 November 2026 (merged to `main`, live)

- **Backlog**: the owner approved a long list of additions, limited to things that cost nothing to maintain. It lives in the requirements document under "Content backlog". The complicated items were built first; the many evergreen text pages and search buttons are still to do.
- **Built**: yoga and cricket lists; "India near me" (`/in-de-buurt/`) with a Leaflet map; city pages (`/steden/…`, one per town with at least `cityMin` places); festival calendar (`/kalender/`); "now" page (`/nu/`) with clocks, calling hours, live weather and air quality (Open-Meteo, fetched in the visitor's browser) and the euro–rupee rate.
- **First real fetches (11 Nov 2026, after merging)**: coordinates and 2,436 towns came through and every restaurant now has a town. The yoga and cricket queries timed out on both OpenStreetMap servers (the fetch step then takes 10 minutes instead of 2) because they used patterns (`~`) on the common keys `sport` and `leisure`; they were rewritten to exact matches. Lesson: in Overpass queries start with an exact `key=value`. If `places.json` still has no `yoga` list, read the "Refresh news, places and exchange rate" step in the "Build and publish" log. The cloud session cannot reach OpenStreetMap itself, so queries can only be tried through that workflow.
- Places without an address get the nearest town centre within 4 km (`fillTowns`), which should shrink the "Plaats onbekend" group.
- Festival dates were checked against published calendars for 2023–2029. Janmashtami and Raksha Bandhan can differ by a day between traditions; the page says so. Karva Chauth and Paryushan were left out because their rules were not reliable to calculate. Islamic holidays are left out on purpose (moon sighting).
- **Second batch, same day**: ingredient translator (`/ingredienten/`); two Wikidata lists in `src/_data/wiki.json` (27 Dutch heritage sites in India on the heritage topic, 9 Gandhi memorials on a new Gandhi topic), refreshed nightly by `updateWikidata` in the fetch script; 19 new topics (ayurveda, dance and music, wedding, languages, museums and archives, Gandhi, bringing family, diplomas and driving licence, scams and emergencies, Dutch customs, practical travel, when to go, responsible travel, importing, hiring talent, death and funerals, property and inheritance) and extra search buttons on restaurants and shops. All new texts and links are unreviewed and unverified, like the rest.
- **Dropped**: Bollywood films shot in the Netherlands and the company lists (Wikidata had only two films; not good enough). "This day in shared history" is not built: it needs a list of dated facts that someone has checked.
- **Backlog still open** (see "Content backlog" in the requirements document): the remaining evergreen pages, among them food (vegetarian and Jain, tea, recipes), history (VOC by region, Hortus Malabaricus, Suriname route, timeline), Dutch people in India, schools and childcare, customs rules, sector pages, study and science, giving, the "I am…" entry points and checklists.
- To run the fetch script by hand inside a cloud session, prefix it with `NODE_USE_ENV_PROXY=1`; Wikidata, Frankfurter and Open-Meteo are reachable there, OpenStreetMap is not.

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
- **Homepage layout: decided and built.** Two halves side by side, no headline above them: Delft-blue "India in Nederland" on the left with the Dutch scene (windmill, canal houses, cows and tulips), saffron "Nederland in India" on the right with the Indian skyline, one sun shared across the seam. Each half shows the country you are in, not the country the topic comes from; the owner asked for this swap on 10 November 2026. The Indian scene has a palace, palms, a tiger and marigolds; the owner had a tuk-tuk removed, do not add it back. Which topics and sections appear in each half is set in `home` in `src/_data/site.js`; the drawings are `src/_includes/skyline-in.svg` and `skyline-nl.svg`; sections not assigned to a half (Zakendoen, Familie en recht) show as cards below with the news. Offered but not yet decided: a thin saffron block-print band or blue tile band at the top of inner pages to show which side a page belongs to.
- **Links are mostly unverified**: only a handful were confirmed by web search. Expect the first link check to flag some; fix them in `content/index.js`.
- **Texts need the owner's review**, especially the Dutch and the legal topics (adoption phase-out, OCI, nationality, tax treaty). All content was written from scratch.
- **Contact address** `info@indiawijzer.nl` in `src/_data/site.js` is a placeholder; the owner must confirm it exists or remove it.
- **Dutch news feed is loose**: it sometimes picks up stories unrelated to India–Netherlands. Tighten the query at the top of `scripts/fetch-data.mjs` if the owner finds it noisy.
- **Places-of-worship list stays Hindu, Sikh and Jain only** (owner decision, 10 Nov 2026): leaving out mosques, churches and Buddhist temples is deliberate, to keep things simple.
- **Restaurant list stays Indian cuisine only** (owner decision, 10 Nov 2026): do not add places tagged Surinamese. The "Rotishop bij mij in de buurt" search button covers roti shops.
- 44 restaurants have no town in OpenStreetMap and show as "Plaats onbekend".
- The owner was invited to name topics from the old site that are missing.
- **To look into (owner, 11 Nov 2026): OpenStreetMap versus Google Maps.** The lists and the "Kaart" links use OpenStreetMap, while the "search now" buttons open Google Maps, which the owner found confusing. Options offered, not yet chosen: a short line above the buttons saying they open Google Maps, or making the "Kaart" links open Google Maps too.
