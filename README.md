# deadmtl-site

Static Astro site for DeadMTL — a Montréal survival network, server hub,
dispatch archive, map terminal, and media platform for a Project Zomboid world
set in winter 1993.

DeadMTL is an independent community project. It is not affiliated with
The Indie Stone.

## Current public status

- Static website: live.
- Game server: pending.
- Whitelist: closed.
- Discord: pending.
- Season 0: setup.
- Map: in progress.
- Site signal: online.

The site must never imply that the game server is online unless it actually is.
Use "Site Signal: Online" for the website and "Game Server: Pending" for the
server until that changes.

## Stack

- Astro v5 static site generator.
- SCSS compiled through Astro/Vite.
- Vanilla JavaScript for progressive enhancement.
- Astro Content Collections for dispatch entries.
- GitHub Pages deployment.
- No React.
- No Svelte.
- No CMS.
- No backend.
- No analytics.
- No runtime database.
- No runtime image upload.

## Local development

```powershell
npm install
npm run dev
npm run build
npm run preview
```

Common flow:

```powershell
cd E:\Omni\Zomboid\deadmtl-site

npm run build
npm run preview
```

Then open the local preview URL printed by Astro, usually:

```text
http://localhost:4321/
```

## Deployment

The site is static. Production deploy is handled by GitHub Pages on push to
`main`.

```powershell
git status --short
git add <files>
git commit -m "<message>"
git pull --rebase origin main
git push origin main
```

After pushing, watch the GitHub Pages workflow if needed:

```powershell
gh run list --repo mrcheval91/deadmtl-site --limit 3
gh run watch --repo mrcheval91/deadmtl-site
```

Production domain:

```text
deadmtl.com
```

## Project structure

```text
src/
  components/
    DeadMtlInteractiveMap.astro     Interactive tactical map component

  content/
    config.ts                       Astro content collection definitions
    dispatch/                       Dispatch markdown entries

  data/
    deadmtl-zones.ts                Zone metadata for the tactical map
    site-settings.ts                Optional site/homepage settings if enabled

  layouts/
    Base.astro                      Base HTML layout, nav, footer, head slots

  pages/
    index.astro                     Homepage
    construction.astro              Season 0 status / construction page
    404.astro                       Custom 404
    archive/                        Archive page
    assets/                         Asset/tooling page
    community/                      Community page
    dispatch/                       Dispatch index and dispatch entries
    join/                           Join / whitelist info
    knowledge/                      Knowledge Center
    map/                            Interactive tactical map
    rules/                          Server rules
    saint-paul-emard/               First active zone dossier

  styles/
    global.scss                     SCSS entry point
    _tokens.scss                    Design tokens
    _reset.scss                     CSS reset
    _layout.scss                    Layout primitives
    _components.scss                General reusable components
    _terminal.scss                  Terminal UI, homepage, cards, panels
    _map.scss                       Tactical map styles

public/
  favicon.svg
  images/
    home/
      deadmtl-hero.webp             Homepage hero WebP
      deadmtl-hero-sm.webp          Mobile homepage hero WebP
      deadmtl-hero.jpg              Homepage hero JPEG fallback
  maps/
    arrondissements-quartiers-montreal-200802.svg
  scripts/
    main.js                         Nav/ticker progressive enhancement
    dead-map.js                     Client-side tactical map logic

assets/
  Local source assets. Not every file here is shipped directly.

docs/
  HOMEPAGE_IMAGE.md                 Hero image source and derivative notes
  HOMEPAGE_HERO_SETTINGS.md         Hero settings notes, if added
  LOCALIZATION.md                   Language/localization doctrine
  MAP_SYSTEM.md                     Tactical map architecture and limits

scripts/
  inspect-map-svg.mjs               Non-destructive SVG inspection utility
  make-hero.py                      Hero derivative generator
  make-hero-v2.py                   Updated hero derivative generator
```

Some files above may exist only after their related slice has been applied.
Do not add duplicate README files at the repo root. Keep root documentation in
`README.md` and move supporting notes into `docs/`.

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage with hero image, status grid, access cards, map teaser, latest dispatches |
| `/rules/` | Server rules and code of conduct |
| `/join/` | Whitelist/join information; applications are not open yet |
| `/construction/` | Season 0 status and honest project limits |
| `/dispatch/` | Dispatch index |
| `/dispatch/[slug]/` | Individual dispatch entries |
| `/saint-paul-emard/` | First active zone dossier |
| `/map/` | Interactive Montréal tactical map |
| `/knowledge/` | Knowledge Center |
| `/assets/` | Tools, assets, PZMapForge links, devlog placeholders |
| `/community/` | Community/Discord placeholder; no fake invite |
| `/archive/` | Archive page |
| `/404` | Custom 404 |

## Homepage hero

The homepage hero uses local static image derivatives under:

```text
public/images/home/
```

Current active derivatives:

```text
deadmtl-hero.webp
deadmtl-hero-sm.webp
deadmtl-hero.jpg
```

The source image is kept in `assets/` and should not be destroyed when making
web derivatives.

Hero requirements:

- Root site language is English.
- French/localized versions come later as separate locale routes or i18n.
- The image should remain a Montréal/Stade Olympique survival signal, not a
  generic dark texture.
- The status grid must stay honest:
  - Season 0: Setup
  - Game Server: Pending
  - Whitelist: Closed
  - Map: In Progress
  - Discord: Pending
  - Site Signal: Online

To change the hero image in the current static workflow:

1. Add or choose a source image under `assets/`.
2. Generate optimized web derivatives under `public/images/home/`.
3. Update the homepage image paths or the site settings file if enabled.
4. Run `npm run build`.
5. Commit and push.

A Facebook-style live upload UI would require a backend, CMS, or GitHub-writing
admin layer. Do not add that until deliberately scoped.

## Interactive map

The `/map/` page contains a client-side-only tactical map built from a local
Montréal borough SVG.

Current map architecture:

- `public/maps/arrondissements-quartiers-montreal-200802.svg`
- `src/data/deadmtl-zones.ts`
- `src/components/DeadMtlInteractiveMap.astro`
- `src/styles/_map.scss`
- `public/scripts/dead-map.js`
- `scripts/inspect-map-svg.mjs`
- `docs/MAP_SYSTEM.md`

The map is static and browser-side only. There is no backend, tracking, or
analytics.

Known limitation: the current SVG uses older borough boundaries and does not
expose every desired neighbourhood or borough as a distinct clickable polygon.
A better post-2002 SVG or custom DeadMTL-specific vector map is future work.

## Content collections

Dispatch entries live in:

```text
src/content/dispatch/
```

Expected frontmatter fields include:

```text
title
slug
date
zone
signal
status
excerpt
type
```

Add a new dispatch by creating a Markdown file in `src/content/dispatch/` with
the required frontmatter.

## Design direction

DeadMTL should feel like:

- 1993 Montréal emergency broadcast
- pirate municipal BBS
- contaminated city terminal
- tactical survival archive
- cheap degraded media, scanlines, cyan/red signal language

Visual doctrine:

- Cyan / teal: signal, network, identity.
- Red: threat, contamination, emergency.
- Amber: pending, warning, operational status.
- Bone / white: readable public text.
- Black: void, terminal base.

Do not turn the whole site into full pixel art. Use pixelization, halftone,
dither, and scanline effects as image/media treatment, while keeping UI text
sharp and readable.

## Language doctrine

Root/source site language is English.

Allowed in the English root:

- DeadMTL
- Project Zomboid
- The Indie Stone
- Montréal
- Saint-Paul-Émard
- LaSalle
- Verdun
- Jolicoeur
- Pont Mercier
- BBS / PKT / CRIT / LOCK / ACTF-style terminal codes

French localization can be added later as `/fr/` or a proper i18n layer. Do not
mix French UI and English UI on the root site.

## Asset doctrine

- Do not use Project Zomboid logos or copyrighted game assets.
- Do not hotlink external images.
- Use local, intentional, project-owned static assets.
- Keep source assets in `assets/`.
- Put optimized shipped images in `public/images/`.
- Document significant image sources and derivatives in `docs/`.

## Server and community doctrine

- No fake server launch claims.
- No fake player counts.
- No fake Discord invite.
- No fake uptime.
- No pay-to-win language.
- No donor gameplay perks.
- No gameplay advantage sales.
- The server is pending until a real server address is intentionally published.
- The whitelist is closed until the join process is intentionally opened.

## Validation checklist

Before committing:

```powershell
npm run build
git status --short
```

For homepage or visual work, also check:

- Root language remains English.
- No visible escaped HTML entities.
- No broken hero image paths.
- No false "game server online" wording.
- Hero/status remains readable on desktop and mobile.
- The map page still loads if map-related files were touched.

## Cleanup rule

The repository root should stay clean.

Keep:

```text
README.md
CHANGELOG.md
package.json
astro.config.mjs
src/
public/
assets/
docs/
scripts/
```

Do not keep generated package notes at root, such as:

```text
README.txt
INTEGRATION_NOTES.md
```

Move supporting notes into `docs/` with a clear filename.
