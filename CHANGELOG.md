# Changelog

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
