# Changelog

## [0.8.0] - 2026-06-01

### Added
- Interactive Montréal tactical map (borough SVG overlay) at `/map/`.
- `public/maps/arrondissements-quartiers-montreal-200802.svg` — source SVG (4320×2016, 2002 borough boundaries).
- `src/data/deadmtl-zones.ts` — zone metadata for 25 Montréal zones (14 SVG-mapped, 11 metadata-only).
- `src/components/DeadMtlInteractiveMap.astro` — interactive map component with mode bar, viewport, info panel, legend.
- `src/styles/_map.scss` — tactical map styles (terminal/navy aesthetic, danger tiers, zone interaction classes).
- `public/scripts/dead-map.js` — client-side map JS (SVG fetch, zone binding, click/keyboard, pan/zoom, mode switching).
- `scripts/inspect-map-svg.mjs` — SVG inspection utility (non-destructive, reports structure).
- `docs/MAP_SYSTEM.md` — full documentation of map architecture, SVG layers, zone data model, future work.
- `.gitattributes` — SVG whitespace config.

### Changed
- `src/pages/map/index.astro` — replaced decorative ASCII grid with real interactive map component.
- `src/styles/global.scss` — added `@use 'map'` import.

## [0.3.0] - 2026-05-31

### Added
- Astro Content Collection: `src/content/config.ts` with `dispatch` collection
  (glob loader, Astro v5 Content Layer API).
- Three dispatch entries in `src/content/dispatch/`:
  - `signal-monk.md` — Jan 10, 1994. Monk Residential. Looping signal, unverified.
  - `canal-cache.md` — Jan 18, 1994. Canal Edge. Supply mark, unconfirmed.
  - `lasalle-pressure-night.md` — Feb 2, 1994. Angrignon Fringe. Pressure surge, confirmed.
- `src/pages/dispatch/index.astro` — full dispatch list (replaces placeholder).
  Sorted most-recent-first. Shows title, date, zone, excerpt, status badge.
- `src/pages/dispatch/[slug].astro` — individual dispatch entry page.
  Signal metadata header, rendered markdown body, back/zone navigation.
- Homepage: latest 2 dispatches section above closing quote. `getCollection` import.
- README: updated routes table, content collections section, structure listing.

### Changed
- `src/pages/saint-paul-emard/index.astro` — dispatch hook cards are now links
  to `/dispatch/signal-monk/`, `/dispatch/canal-cache/`, `/dispatch/lasalle-pressure-night/`.
  Section sub-text updated to reflect entries are live.
- `src/styles/_components.scss` — added dispatch-list, dispatch-card, dispatch-meta,
  signal-header, dispatch-entry, entry-nav component styles.

## [0.2.0] - 2026-05-31

### Added
- `src/pages/saint-paul-emard/index.astro` — first active zone dossier page.
  Sections: hero, sector status dossier, boundaries, 4 subzones, 5 neighbor
  pressure cards, 5 access gates, gameplay role, 3 dispatch hook teasers, closing quote.
- New SCSS patterns in `_components.scss`:
  dossier-grid, dossier-stat, boundary-grid, boundary-item, subzone-grid,
  subzone-card, gate-list, gate-item, hook-grid, hook-card, gameplay-list.

### Changed
- Nav: added "S-P-E" link to `/saint-paul-emard/` in Base.astro (nav and footer).
- Homepage: "Enter Enclave" button now links to `/saint-paul-emard/` instead of `/construction`.
- Map placeholder: added link to `/saint-paul-emard/` active zone.
- Copy: corrected "winter 1993" to "winter 1993–1994" in Base.astro (×2) and index.astro (×2).
- README: updated routes table and structure listing for Slice 02.

### Removed
- `src/scripts/main.js` — duplicate of `public/scripts/main.js`. Unused by build.

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
