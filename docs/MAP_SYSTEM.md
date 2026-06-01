# DeadMTL Map System

## Overview

The DeadMTL interactive tactical map is a client-side-only map layer built on
a real Montréal borough SVG. It shows zone status, danger, and metadata for
all reachable sectors of the Montréal island. No backend. No tracking. Static only.

## Source SVG Asset

**File:** `public/maps/arrondissements-quartiers-montreal-200802.svg`
**Original:** `assets/ArrondissementsQuartiersMontreal_200802.svg` (preserved as source evidence)
**Size:** ~11.9 MB
**Origin:** Adobe Illustrator SVG export, Montréal arrondissements and quartiers map (2002)
**Dimensions:** 4320 × 2016 px (viewBox: 0 0 4320 2016)
**Note:** Represents borough boundaries as of 2002, before post-merger revisions.

The SVG is served as a static public asset and fetched by JavaScript at runtime.
This keeps initial HTML payload small.

## SVG Layer Structure

| Layer ID              | Contents                        | Visibility         |
|-----------------------|---------------------------------|--------------------|
| `Eaux`                | Water bodies (rivers, lake)     | Always shown       |
| `Outline_MTL`         | Island outline                  | Always shown       |
| `Fond_arrond`         | Borough fill polygons           | Always shown       |
| `Parcs`               | Park areas                      | Always shown       |
| `PasMTL`              | Off-island areas                | Dimmed             |
| `LimArrondissements`  | Borough boundary lines          | Always shown       |
| `Noms_Arr`            | Borough name labels             | Dimmed             |
| `NomsQuartiers`       | Neighborhood name labels        | Hidden (too small) |
| `Groupe_rues`         | Road network                    | Hidden by default  |
| `Mares`               | Small ponds                     | Always shown       |
| `splitter`            | (Hidden layer, unused)          | Hidden             |

## Clickable Borough Groups

14 borough/area groups confirmed in `Fond_arrond`:

| SVG ID          | Name                              | Status              |
|-----------------|-----------------------------------|---------------------|
| `LaSalle`       | LaSalle                           | Overrun — pressure  |
| `Vardon`        | Verdun (note: "Vardon" in SVG)    | Contested           |
| `VilleMarie`    | Ville-Marie (downtown)            | Sealed              |
| `Lachine`       | Lachine                           | Contested           |
| `Ahuntsic`      | Ahuntsic-Cartierville             | Unknown             |
| `RDP_-_PAT`     | Rivière-des-Prairies/Pte-aux-T.  | Overrun             |
| `Mtl_Nord`      | Montréal-Nord                     | Contested           |
| `Pierrefonds`   | Pierrefonds-Roxboro               | Unknown             |
| `IleBizard`     | L'Île-Bizard                      | Unknown             |
| `Dorval`        | Dorval (airport)                  | Sealed              |
| `CoteStLuc`     | Côte-Saint-Luc                    | Unknown             |
| `SAB`           | Sainte-Anne-de-Bellevue           | Unknown             |
| `Senneville`    | Senneville                        | Unknown             |
| `Beauconsfield` | Beaconsfield                      | Unknown             |

## Zones Without SVG Polygons

The following zones have metadata but no separate polygon group in this SVG version.
They appear in the zone data file and the selector panel but cannot be clicked on the map.

- `SudOuest` — Sud-Ouest (contains Saint-Paul-Émard, Season 0 main enclave)
- `Plateau` — Plateau-Mont-Royal
- `NDG_CDN` — Côte-des-Neiges / Notre-Dame-de-Grâce
- `Rosemont` — Rosemont–La Petite-Patrie
- `HochelagaMSN` — Hochelaga-Maisonneuve
- `Villeray-StMichel` — Villeray–Saint-Michel–Parc-Extension
- `St-Leonard` — Saint-Léonard
- `Anjou` — Anjou
- `Mtl_Est` — Montréal-Est
- `Outremont` — Outremont
- `Westmount` — Westmount (classified)
- `Hampstead` — Hampstead

These may be represented as sub-areas within larger polygon groups in the 2002 SVG,
or they may have been merged at the time of this export. A newer SVG source would
resolve this.

## Zone Data File

**File:** `src/data/deadmtl-zones.ts`

Defines zone metadata for all known sectors. Data shape:

```typescript
interface DeadMtlZone {
  id: string;           // DeadMTL internal ID
  svgId: string | null; // SVG group ID (null if not in SVG)
  name: string;
  type: ZoneType;       // arrondissement | city | sector | outside | unknown
  status: ZoneStatus;   // pending | contested | sealed | overrun | military | civilian | archive | unknown
  danger: 0 | 1 | 2 | 3 | 4 | 5;
  visibility: ZoneVisibility; // public | classified | hidden
  faction?: string;
  summary: string;
  notes?: string[];
  routes?: string[];
  tags?: string[];
}
```

**All zone values are PROVISIONAL** — pending canonical assignment by the operator.

## Astro Component

**File:** `src/components/DeadMtlInteractiveMap.astro`

- Renders mode bar, SVG viewport, info panel, legend, and disclaimer
- Serializes PUBLIC_ZONES into a `<script type="application/json">` tag
- Loads `public/scripts/dead-map.js` as a deferred static script

## Client-Side JS

**File:** `public/scripts/dead-map.js`

Responsibilities:
1. Fetch SVG from `/maps/arrondissements-quartiers-montreal-200802.svg`
2. Inject SVG into viewport, make it responsive
3. Apply zone classes and data attributes to SVG group elements
4. Handle click/keyboard selection — show zone info in panel
5. Manage display mode switching (status/danger/faction/infra/lore)
6. Pan and zoom via CSS transform (mouse, touch, wheel, keyboard)
7. Road layer toggle

## Map SCSS

**File:** `src/styles/_map.scss` (imported in `global.scss`)

Classes:
- `.dead-map` — root container
- `.dead-map__modebar` — mode switcher bar
- `.dead-map__mode-btn` — mode button
- `.dead-map__shell` — viewport + panel row
- `.dead-map__viewport` — SVG container
- `.dead-map__panel` — info panel
- `.dead-map__legend` — legend row
- `.dead-map__disclaimer` — bottom disclaimer
- `.dead-map__zoom` — zoom control overlay
- `.dead-map-zone` — applied to SVG groups by JS
- `.dead-map-zone--selected` — selected zone
- `.dead-map-zone--danger-0` through `--danger-5` — danger tiers
- `.dead-map-zone--classified` — classified zone (no interaction)

## Visibility Model

Zones support three visibility states:

| State        | Behavior                                          |
|--------------|---------------------------------------------------|
| `public`     | Shown and fully labeled in public viewer          |
| `classified` | Shown on map (dimmed), details redacted in panel  |
| `hidden`     | Not shown in public view at all                   |

Currently no zones are `hidden`. Westmount is `classified`.
This model supports future operator/viewer split without requiring auth.

## SVG Inspection Script

**File:** `scripts/inspect-map-svg.mjs`

```bash
node scripts/inspect-map-svg.mjs
```

Reports SVG structure, layer IDs, borough group IDs, element counts, and
ID presence check. Does not modify the source SVG.

## Integrating Into Map Page

The component is integrated into `src/pages/map/index.astro`.
It replaces the previous ASCII hex-grid placeholder.
The Season 0 sector table is preserved below the interactive map.

## Future Work

- [ ] Obtain or create SVG with `SudOuest` and other missing borough polygons
- [ ] Add road layer with performance optimization (thin strokes, level-of-detail)
- [ ] Metro/tunnel layer (The Dead Line) — separate SVG overlay
- [ ] Faction overlay mode (color-coded by faction when lore is assigned)
- [ ] Infrastructure mode (bridges, waterways, key buildings)
- [ ] Lore mode (event markers, sector events from dispatch system)
- [ ] Zone markers at correct coordinates (faction base, archive nodes, etc.)
- [ ] Mobile touch pan/pinch-zoom polish
- [ ] Print / export mode
- [ ] Operator admin view (show hidden zones)

## Static / Public Safety

- No backend, no API calls, no auth
- No tracking or analytics
- SVG loaded via static fetch from same origin
- All zone data is compiled into the page at build time
- No live server claims — all zone statuses are lore/planning data
