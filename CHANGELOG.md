# Changelog

## [0.10.0] - 2026-06-02

### Changed
- `src/pages/construction.astro` â€” status pill: "Whitelist: CLOSED" replaced with "Access: OPEN PLANNED" (amber).
- `src/pages/index.astro` â€” status grid pill, ticker rotation, two static feed entries, Join card description and
  button label, knowledge module description, and rules card description updated to open-access framing.
  No whitelist or private-approval language on homepage.
- `src/pages/join/index.astro` â€” full copy rewrite. Open-access model described directly.
  Whitelist application steps and private-approval process removed. "Bans apply from first connection" retained.
- `src/pages/rules/index.astro` â€” hero body text, provisional panel, and panel 04 updated to open-access posture.
- `src/pages/knowledge/index.astro` â€” module description: "whitelist process" replaced with "open-access standards".
- `src/pages/knowledge/season-0-survival-primer/index.astro` â€” "whitelist server" replaced with "open server".
- `src/pages/community/index.astro` â€” meta description updated to reflect open-access framing.
- `src/content/dispatch/knowledge-center-survival-primer.md` â€” excerpt and body updated.
- `src/content/dispatch/season-0-network-terminal.md` â€” two body passages updated.
- `README.md` â€” route table, join route description, and invariants section updated.

### Policy
- Access model: open access planned. No whitelist, no application process, no private approval gate.
  Status wording across all public pages: "Access: OPEN PLANNED".
  Game server remains PENDING. No live server claim introduced.

## [0.9.0] - 2026-06-01

### Added
- Homepage hero image: `assets/stadium_neon.png` (Stade Olympique, destroyed, cyan neon).
- Web derivatives: `public/images/home/deadmtl-hero.webp` (1920Ã—1128, 417KB), `deadmtl-hero.jpg` (541KB fallback), `deadmtl-hero-sm.webp` (900Ã—529, 97KB mobile).
- `.dead-hero` CSS class family in `_terminal.scss` â€” teal corner brackets, dark gradient overlay, scanlines, caption.
- `.dead-status-grid` / `.dsg__item` / `.dsg__value` â€” visible server status grid in hero.
- `docs/HOMEPAGE_IMAGE.md` â€” source asset documentation.
- `scripts/make-hero.py` â€” image derivative generator (Python/Pillow, non-destructive).

### Changed
- `src/pages/index.astro` â€” complete homepage hero rewrite using real image.
  - Full-image hero with station status grid (Season 0: SETUP, Game Server: PENDING, Whitelist: CLOSED, Site Signal: ONLINE).
  - Map section updated to note interactive borough overlay now live at /map/.
  - CTAs: Season 0 Status, Read the Rules, Open the Map, Dispatch.
  - Closing quote attributed to "Field dispatch â€” Canal Edge, winter 1993".

## [0.8.0] - 2026-06-01

### Added
- Interactive MontrÃ©al tactical map (borough SVG overlay) at `/map/`.
- `public/maps/arrondissements-quartiers-montreal-200802.svg` â€” source SVG (4320Ã—2016, 2002 borough boundaries).
- `src/data/deadmtl-zones.ts` â€” zone metadata for 25 MontrÃ©al zones (14 SVG-mapped, 11 metadata-only).
- `src/components/DeadMtlInteractiveMap.astro` â€” interactive map component with mode bar, viewport, info panel, legend.
- `src/styles/_map.scss` â€” tactical map styles (terminal/navy aesthetic, danger tiers, zone interaction classes).
- `public/scripts/dead-map.js` â€” client-side map JS (SVG fetch, zone binding, click/keyboard, pan/zoom, mode switching).
- `scripts/inspect-map-svg.mjs` â€” SVG inspection utility (non-destructive, reports structure).
- `docs/MAP_SYSTEM.md` â€” full documentation of map architecture, SVG layers, zone data model, future work.
- `.gitattributes` â€” SVG whitespace config.

### Changed
- `src/pages/map/index.astro` â€” replaced decorative ASCII grid with real interactive map component.
- `src/styles/global.scss` â€” added `@use 'map'` import.

## [0.3.0] - 2026-05-31

### Added
- Astro Content Collection: `src/content/config.ts` with `dispatch` collection
  (glob loader, Astro v5 Content Layer API).
- Three dispatch entries in `src/content/dispatch/`:
  - `signal-monk.md` â€” Jan 10, 1994. Monk Residential. Looping signal, unverified.
  - `canal-cache.md` â€” Jan 18, 1994. Canal Edge. Supply mark, unconfirmed.
  - `lasalle-pressure-night.md` â€” Feb 2, 1994. Angrignon Fringe. Pressure surge, confirmed.
- `src/pages/dispatch/index.astro` â€” full dispatch list (replaces placeholder).
  Sorted most-recent-first. Shows title, date, zone, excerpt, status badge.
- `src/pages/dispatch/[slug].astro` â€” individual dispatch entry page.
  Signal metadata header, rendered markdown body, back/zone navigation.
- Homepage: latest 2 dispatches section above closing quote. `getCollection` import.
- README: updated routes table, content collections section, structure listing.

### Changed
- `src/pages/saint-paul-emard/index.astro` â€” dispatch hook cards are now links
  to `/dispatch/signal-monk/`, `/dispatch/canal-cache/`, `/dispatch/lasalle-pressure-night/`.
  Section sub-text updated to reflect entries are live.
- `src/styles/_components.scss` â€” added dispatch-list, dispatch-card, dispatch-meta,
  signal-header, dispatch-entry, entry-nav component styles.

## [0.2.0] - 2026-05-31

### Added
- `src/pages/saint-paul-emard/index.astro` â€” first active zone dossier page.
  Sections: hero, sector status dossier, boundaries, 4 subzones, 5 neighbor
  pressure cards, 5 access gates, gameplay role, 3 dispatch hook teasers, closing quote.
- New SCSS patterns in `_components.scss`:
  dossier-grid, dossier-stat, boundary-grid, boundary-item, subzone-grid,
  subzone-card, gate-list, gate-item, hook-grid, hook-card, gameplay-list.

### Changed
- Nav: added "S-P-E" link to `/saint-paul-emard/` in Base.astro (nav and footer).
- Homepage: "Enter Enclave" button now links to `/saint-paul-emard/` instead of `/construction`.
- Map placeholder: added link to `/saint-paul-emard/` active zone.
- Copy: corrected "winter 1993" to "winter 1993â€“1994" in Base.astro (Ã—2) and index.astro (Ã—2).
- README: updated routes table and structure listing for Slice 02.

### Removed
- `src/scripts/main.js` â€” duplicate of `public/scripts/main.js`. Unused by build.

## [0.1.0] - 2026-05-31

### Added
- Initial Astro v5 static site foundation.
- Cathedral of Decay design system:
  - _tokens.scss: CSS custom properties (midnight stone, oxblood, brass, violet, snow palette)
  - _reset.scss: accessible reset with prefers-reduced-motion handling
  - _layout.scss: container, feature grid, district grid, zone-split layout
  - _components.scss: nav, hero, buttons, feature cells, district cards, zone map,
    construction page, 404 page, footer, placeholder pages
- Base layout (Base.astro) with sticky nav, footer, SCSS import, favicon.
- Home page: hero with snow layer, active zone (Saint-Paul-Emard) with CSS map grid,
  MVP status banner, 6-cell feature grid, 5 district pressure cards.
- Construction page: branded, blinking signal, enclave name, clean links.
- 404 page: "District Not Found" themed.
- Placeholder pages: /dispatch, /archive, /map.
- Vanilla JS: mobile nav toggle, snow particle generator (35 flakes, reduced-motion safe).
- SVG favicon (CSS-only, no external assets).
- .gitignore, tsconfig.json, astro.config.mjs.
- README with stack docs and doctrine notes.

