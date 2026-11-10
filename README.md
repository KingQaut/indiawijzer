# Indiawijzer

Portal for everything Indian in the Netherlands and everything Dutch in India.
Dutch at `/`, English at `/en/`.

## How it stays low-maintenance

- **No database, no CMS, no server.** The site is plain HTML files, generated from one content file and hosted for free on GitHub Pages. Nothing to patch, nothing to hack.
- **Explain briefly, link to the source.** Pages avoid fees, dates and addresses that go out of date, and send visitors to the authority that sets them (IND, embassies, RVO, …).
- **Self-updating parts.** Every night GitHub rebuilds the site and refreshes:
  - news headlines about India and the Netherlands (RSS),
  - the lists of Indian restaurants and of temples/gurdwaras (OpenStreetMap).
  If a source is down, yesterday's data is kept.
- **"Search now" buttons** for things that change weekly (film screenings, events, shops) open a live search instead of a list that someone has to maintain.
- **Weekly link check.** If a link breaks, GitHub opens an issue and e-mails you. No e-mail means nothing to do.

## Where things are

| What | File |
| --- | --- |
| All texts and links (NL + EN) | `content/index.js` |
| Site name, e-mail address, interface texts | `src/_data/site.js` |
| News feeds and map queries | `scripts/fetch-data.mjs` (top of file) |
| Design | `src/assets/style.css` |
| Page templates | `src/*.njk`, `src/_includes/base.njk` |
| Nightly publish / weekly link check | `.github/workflows/` |

## Working on it locally

```bash
npm install
```

```bash
npm start
```

Then open http://localhost:8080. `npm run update-data` fetches fresh news and places.

## Going live

1. Create a GitHub account and an empty **public** repository, and push this folder to its `main` branch.
2. In the repository: **Settings → Pages → Source: GitHub Actions**.
3. Open the **Actions** tab and run **Build and publish** once. The site appears at `https://<user>.github.io/<repo>/`.
   (For this preview address, add a repository variable or temporarily set `PATH_PREFIX=/<repo>/` in the build step; not needed once the real domain is connected.)
4. In **Settings → Pages → Custom domain** enter `indiawijzer.nl`, then at your domain registrar set the DNS records GitHub shows (four `A` records for `indiawijzer.nl`, a `CNAME` for `www`). Tick **Enforce HTTPS** when it becomes available.
5. Run **Check links** once from the Actions tab and fix whatever it reports in `content/index.js`.
