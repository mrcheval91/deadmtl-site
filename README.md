# deadmtl-site

Static site for DeadMTL — Montreal survival world, server hub, lore archive,
and media platform set after the Knox Event, winter 1993–1994.

Built with Astro, SCSS (Cathedral of Decay design system), and plain JS.

## Stack

- [Astro](https://astro.build) v5 — static site generator
- SCSS — compiled by Astro's built-in Vite pipeline (no separate build step)
- Vanilla JS — mobile nav, snow particle effect, progressive enhancement only
- No React, no Svelte, no CMS, no external data

## Local Development

    npm install
    npm run dev        # dev server with HMR at http://localhost:4321
    npm run build      # build to dist/
    npm run preview    # preview production build

## Project Structure

    src/
      layouts/
        Base.astro              Base HTML layout with nav and footer
      pages/
        index.astro             Home page
        construction.astro      Server status / construction page
        404.astro               Custom 404
        saint-paul-emard/       First active zone dossier (Slice 02)
        dispatch/               Dispatch placeholder
        archive/                Archive placeholder
        map/                    Map placeholder
      styles/
        global.scss             SCSS entry point
        _tokens.scss            Design tokens (CSS custom properties + SCSS variables)
        _reset.scss             CSS reset
        _layout.scss            Container, grid, section layout
        _components.scss        All reusable components + zone, dispatch patterns
      content/
        config.ts               Astro Content Collection definitions
        dispatch/               Dispatch markdown entries
          signal-monk.md
          canal-cache.md
          lasalle-pressure-night.md
    public/
      favicon.svg               Text-based favicon
      scripts/
        main.js                 Served as static asset (mobile nav, snow effect)

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home (with latest dispatch section) |
| `/saint-paul-emard/` | Zone dossier — first active sector |
| `/dispatch/` | Dispatch index — all transmissions |
| `/dispatch/signal-monk/` | Entry: Signal Monk |
| `/dispatch/canal-cache/` | Entry: The Canal Cache |
| `/dispatch/lasalle-pressure-night/` | Entry: The LaSalle Pressure Night |
| `/construction/` | Season 0 status |
| `/archive/` | Placeholder |
| `/map/` | Placeholder |
| `/404` | Custom 404 |

## Content Collections

Dispatch entries live in `src/content/dispatch/` as Markdown files.
Schema fields: `title`, `slug`, `date` (ISO), `zone`, `signal`, `status`, `excerpt`.
Add new entries by creating a new `.md` file with required frontmatter.

## Design System

Theme: Cathedral of Decay.
Palette: midnight stone, slate violet-gray, candle bone, oxblood red, antique brass.
Typography: Georgia serif for display, system-ui for body, Courier New for mono.
All visuals are CSS-generated: no external images, no copyrighted PZ assets.

## Doctrine

- No Project Zomboid logos or copyrighted assets.
- No fake server launch claims.
- No fake gameplay claims.
- No pay-to-win language.
- All content is original text and placeholder.
- DeadMTL is an independent community project, not affiliated with The Indie Stone.
