# DEADMTL Visual Direction

## Purpose

This document is the locked visual direction for the DeadMTL website. It exists so that any future contributor - designer, developer, or AI - can make visual decisions that are consistent with what is already built without reinventing or drifting the identity. It does not describe aspirations. It describes the ratified direction as it stands.

---

## Current Asset Inventory Summary

### Working Source Assets (`assets/`)

| File | Subject | Notes |
|------|---------|-------|
| `oratoire.png` | Saint Joseph's Oratory | Raw photo |
| `oratoire.fiveroses.png` | Oratory + Five Roses composite | Processed variant |
| `oratoire.pixel16.png` | Oratory pixelated (16px palette) | Dithered/reduced variant |
| `stadium.png` | Olympic Stadium | Raw photo |
| `stadium_neon.png` | Olympic Stadium - neon processed | Stylized variant |
| `stadium_neon-6.blue-neon-readable.png` | Stadium - neon-readable variant | Signal palette |
| `stadium_neon.blue-neon-readable.png` | Stadium - neon-readable variant | Signal palette |
| `turcot.png` | Turcot interchange | Infrastructure photo |
| `mtl_barricade.png` | Montreal street barricade | Street photo |
| `jacques_cartier.png` | Jacques-Cartier (bridge or metro) | Raw photo |
| `jacques_cartier.blue-neon-readable.png` | Jacques-Cartier - neon-readable | Signal palette |
| `lionel_groulx.png` | Lionel-Groulx metro station | Raw photo |
| `five_roses.png` | Five Roses flour sign | Raw photo - see rights note |
| `five_roses.medium93.png` | Five Roses - medium crop | Processed variant |
| `five_roses93.png` | Five Roses - 93% variant | Processed variant |
| `five_roses.blue-neon-readable.png` | Five Roses - neon-readable | Signal palette |
| `metro.png` | Metro signage | Raw photo - see rights note |
| `metro.blue-neon-readable.png` | Metro signage - neon-readable | Signal palette |
| `metromap.png` | Metro network map | See rights note |
| `metromap2.png` | Metro network map variant | See rights note |
| `mtllogo.png` | Montreal city logo area | See rights note |
| `mtllgo.blue-neon-readable.png` | Montreal logo - neon-readable | Signal palette |
| `proy.png` | Unknown - possibly municipal/Projet Montreal branding | See rights note |
| `proy.blue-neon-readable.png` | Proy - neon-readable variant | Signal palette |
| `ArrondissementsQuartiersMontreal_200802.svg` | City of Montreal arrondissement boundaries | Open data candidate - see rights note |
| `Untitled-1.jpg` | Unknown subject | Rights unknown - do not publish |

### Deployed Public Assets (`public/`)

| File | Subject |
|------|---------|
| `images/home/deadmtl-hero.jpg` | Homepage hero image |
| `images/home/deadmtl-hero.webp` | Hero - WebP full |
| `images/home/deadmtl-hero-sm.webp` | Hero - WebP small |
| `maps/arrondissements-quartiers-montreal-200802.svg` | Montreal arrondissement SVG (deployed) |
| `favicon.svg` | Site favicon |
| `scripts/dead-map.js` | Interactive map JavaScript |
| `scripts/main.js` | Global site JavaScript |

---

## Strongest Current Visual Direction

The site is built as a black terminal with cyan signal color as the primary communication channel. This is fully implemented in the design token system (`_tokens.scss`): `--void: #050607`, `--teal: #20D6C7`, `--red: #D9283A`, `--amber: #C98A32`. Every UI component - nav, hero, dispatch feed, panels, buttons, badges - uses these tokens consistently. Scanlines are active via CSS repeating gradients on `.term-hero` and `.dead-hero`. The `.bbs-block` and `.page-bbs-bar` components add 1993-era BBS connection-screen framing. All fonts are monospace (`Courier New, Consolas`). Border radius is `0` across the board. The hero uses a full-bleed Montreal landmark photo scrubbed to near-black with a directional scrim, leaving ruins visible on the right and text readable on the left.

The BBS/emergency-broadcast register is consistent: ticker strips in blood-red, status blink animations, `[ BRACKET ]` eyebrows, monospaced uppercase labels, 1px hairline borders separating data panels, glow shadows on interactive elements. The municipality channel - `.municipal-notice` with stamped amber borders - grounds the interface in the fiction of a city administration that still exists but is failing.

---

## Final Visual Direction

DeadMTL is a 1993 Montreal survival terminal - not a game website, not a zombie-genre portal, not a sci-fi interface. It reads as the real surviving infrastructure of a city that had a catastrophic winter collapse: emergency broadcast residue, pirate BBS screens, municipal warning notices, degraded archive photographs, neon signal bleed through dark glass. The era is analogue-to-digital transition: no smooth gradients, no rounded corners, no hero animations beyond a status blink. The friction is intentional. The interface feels as though it is being transmitted, not rendered.

The color grammar is fixed: black void as the ground, cyan/teal as the operational signal frequency, red as the emergency register, amber as municipal warning state. These are not decorative choices - they are functional channels borrowed from real emergency communications systems of that era. Violating the grammar (adding green as a primary color, making the red decorative, using amber for positive states) breaks the fiction immediately. The monospaced font stack is the only acceptable typeface for interface elements. Georgia is permitted only for long-form prose dispatch entries where readability is the constraint.

Photography must be real Montreal. Landmark photographs with neon-signal color grading (the `blue-neon-readable` processing pipeline) and pixel-damage variants are the correct direction for hero and panel imagery. AI-generated apocalypse wallpaper, generic ruins from other cities, or glossy composite renders are prohibited: they break the specificity that makes the fiction credible. The Montreal landmarks - Olympic Stadium, the Oratory, Turcot, Lionel-Groulx, the Five Roses sign - are the visual canon. The site should feel like a city that the viewer recognizes as having actually existed, now seen through a terminal screen.

---

## Use List

- Black terminal base (`#050607` void, `#0B0D0F` terminal surface)
- Cyan / teal signal color (`#20D6C7`) as primary interactive and heading accent
- Red emergency accents (`#D9283A`) for alert states, ticker strips, field-report tags
- Amber warning states (`#C98A32`, `#D4780A` hot) for municipal notices, unverified status
- Scanlines via CSS `repeating-linear-gradient` on hero and panel sections
- Monospaced font stack (`Courier New, Consolas`) for all interface text
- Zero border-radius on all UI elements
- 1px hairline borders in dark graphite for panel separation
- BBS-style bracket eyebrows `[ LABEL ]`, uppercase letter-spacing labels
- Blinking status dots and ticker animations
- Montreal landmark photographs with neon-signal color grading
- Pixelated / dithered / halftone variants of photographs for secondary panels
- Municipal notice blocks with amber stamp treatment
- Archive panels presenting information as recovered documents or field reports
- Grid overlays in very low opacity for background depth
- CRT vignette (`box-shadow: inset`) on panels where degraded-screen feel is needed
- Glow shadows (`text-shadow`, `box-shadow`) tightly scoped to teal, red, and amber

---

## Avoid List

- Generic zombie apocalypse imagery (rotting flesh, cliched horror framing)
- Glossy sci-fi UI, rounded panels, gradient blobs, frosted glass not grounded in the terminal aesthetic
- Full pixel-art game aesthetic applied to the whole site - pixel damage is a texture, not the base register
- AI-generated apocalypse wallpaper, skylines, or composite ruins from unspecified cities
- Modern cyberpunk (neon purple, holographic blue, floating UI elements) that implies future-tech rather than 1993 collapse
- Fake server-live screenshots or in-game UI screenshots used as site imagery
- Claims, visuals, or layout elements implying a playable custom map exists or is accessible
- Project Zomboid assets, logos, UI screenshots, map tiles, or branding in any form
- Decorative overdesign: heavy drop shadows, textured backgrounds that compete with content, icon packs that look app-like
- Green as a primary brand color - `--green-term` exists only as a BBS terminal accent, not a structural signal
- Sans-serif typefaces for interface text
- Color tokens outside the established palette introduced without a specific functional reason

---

## Asset Source and Rights Note

**Proceed with caution on the following assets before any public use:**

- `metromap.png`, `metromap2.png` - Metro network maps are copyrighted by the Societe de transport de Montreal (STM). Do not publish without a licensing review or replacement with original artwork.
- `metro.png`, `metro.blue-neon-readable.png` - Metro signage photography may include trademarked STM elements.
- `mtllogo.png`, `mtllgo.blue-neon-readable.png` - If this contains the Ville de Montreal logo, that logo is a registered trademark. Do not use in site branding or in any context that implies official endorsement.
- `proy.png`, `proy.blue-neon-readable.png` - Subject unknown. If this is Projet Montreal or another political/municipal party mark, do not publish.
- `five_roses.png` and variants - The Five Roses flour sign is a Montreal landmark, but the sign design is a registered trademark of Ardent Mills (formerly Rogers Sugar predecessor). Photography of the sign as urban landscape is generally acceptable for editorial/atmospheric use; direct reproduction of the logo itself requires clearance.
- `ArrondissementsQuartiersMontreal_200802.svg` - Likely sourced from Ville de Montreal open data (donnees ouvertes). Confirm the specific dataset license before redistribution; most Montreal open data is CC BY 4.0 or similar.
- `Untitled-1.jpg` - Source and rights entirely unknown. Do not publish until provenance is established.
- `deadmtl-hero.jpg/webp` - Document the source and license of the hero photograph. If it is an original photograph of a Montreal location, document the photographer.

**Photographs of public architecture and urban infrastructure** taken from public vantage points are generally acceptable under Canadian copyright law for editorial/non-commercial use. For commercial use, confirm freedom of panorama coverage and verify no trademark elements are prominent.

---

## Public / Private Asset Path Rule

Assets in `assets/` are the working source pool. They are not served publicly and may contain items not cleared for publication.

Assets in `public/` are deployed with every build and are publicly accessible at the site URL. Before moving any asset from `assets/` to `public/`, confirm:

1. The rights question above is resolved for that specific file.
2. No Project Zomboid or other game publisher material is present in the file.
3. No fake server-live or fake custom-map content is embedded.

Do not copy assets from `assets/` to `public/` as part of automated build steps. Movement is a manual, reviewed action.

---

## Claim Boundary

The DeadMTL site is a community website for a Project Zomboid server community set in Montreal. It is **not**:

- A live server monitoring interface (do not imply the server is always online)
- A playable custom Montreal map (do not claim a custom map is available unless it is)
- An official Project Zomboid product, endorsed by The Indie Stone
- A City of Montreal official resource

All lore, collapse fiction, district records, and survivor dispatches are original creative work set in the DeadMTL fiction. They do not derive from Project Zomboid's own lore, maps, or narrative.

---

## Future Usage Guidance

When adding new pages, components, or assets:

1. **New photography**: Must be real Montreal. Process through the neon-signal grading pipeline (compare to existing `*.blue-neon-readable.png` variants for reference). Document the source and confirm rights before placing in `public/`.

2. **New UI components**: Consume existing tokens from `_tokens.scss`. Do not introduce new color values outside the established palette without a Charter-level reason. Do not add border-radius. Do not add new typefaces.

3. **New textures or overlays**: Scanlines, halftone, dither, and grid overlays are the established texture vocabulary. CSS-native implementations are strongly preferred over image assets for performance and maintainability.

4. **Animation**: Confine animation to the established vocabulary: `status-blink` (step-end, 1.5-2s), ticker transitions (opacity fade), and short hover transitions (0.12-0.15s). No entrance animations, parallax, or scroll-driven effects.

5. **Lore documents and archive panels**: Use the `.municipal-notice`, `.transmission-header`, `.dispatch-feed`, and `.term-panel` components. Maintain the fiction that the content is a transmitted document, not a webpage. Do not introduce visual metaphors that break the in-fiction frame (e.g., social media cards, blog post thumbnails, star ratings).

6. **Maps and geographic elements**: The arrondissement SVG and `dead-map.js` are the established map system. Future map work extends this layer. Do not introduce third-party map tile services (Mapbox, Google Maps, Leaflet with OpenStreetMap tiles styled to look modern) without explicit direction - they break the terminal register.
