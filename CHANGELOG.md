# Changelog

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
