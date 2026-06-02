# DeadMTL Homepage Hero Image

## Source Asset

**File:** `assets/stadium_neon.png`
**Dimensions:** 1713 × 1007 px
**Ratio:** ~1.70:1 (wide, near 16:9)
**Size:** 2486 KB
**Description:** Stade Olympique de Montréal destroyed, winter atmosphere, cyan neon terminal
treatment. Shows the Olympic tower collapsed, rubble-filled parking lot, stopped vehicles,
"Stade Olympique" signage, and "TUNNEL SHERBROOKE FERMÉ / POLICE" emergency notice.

## Why This Image

- The Stade Olympique tower is the most immediately recognizable Montreal landmark worldwide
- Already rendered in pure cyan/teal neon — matches the terminal aesthetic without additional processing
- 1.7:1 ratio works well as a wide cinematic hero
- Contains diegetic text ("Stade Olympique", "TUNNEL FERMÉ") that reinforces the 1993 survival setting
- Dark parking lot and rubble composition provides excellent negative space for overlay text
- Image is already dark enough; simple brightness reduction preserves the cyan neon glow

## Web Derivatives

| File | Dimensions | Size | Format |
|------|-----------|------|--------|
| `public/images/home/deadmtl-hero.webp` | 1920 × 1128 | 417 KB | WebP (quality 82) |
| `public/images/home/deadmtl-hero.jpg`  | 1920 × 1128 | 541 KB | JPEG (quality 85, progressive) |
| `public/images/home/deadmtl-hero-sm.webp` | 900 × 529 | 97 KB | WebP mobile (quality 78) |

Generated using Python/Pillow. Original preserved unmodified.

## CSS Treatment

Source: `src/styles/_terminal.scss` — `.dead-hero` class family.

- `filter: brightness(0.55) saturate(1.1)` on `<img>` to darken for text readability
- Linear gradient overlay on `.dead-hero__content`: opaque at bottom, transparent at top
- Four corner bracket spans (`.dead-hero__corner`) in teal with glow
- Thin scanline repeating-gradient overlay on content layer
- Top accent line via `::before` pseudo-element
- Bottom caption in the image corner (hidden on mobile)

## Usage in Homepage

The hero is the first element after the sticky nav. It renders:
- Full viewport width
- `clamp(400px, 65vh, 780px)` height
- `loading="eager"` `fetchpriority="high"` for LCP optimization
- WebP with JPG fallback via `<picture>` element
- Server status grid immediately visible in the hero content

## Alternatives Considered

| Asset | Reason not chosen |
|-------|------------------|
| `five_roses.blue-neon-readable.png` | Strong but zombie in foreground less iconic as hero; Five Roses building less globally recognizable |
| `jacques_cartier.blue-neon-readable.png` | Good bridge shot; narrower impact than Olympic stadium |
| `turcot.png` | Very local, very Montreal — excellent secondary image candidate |
| `mtl_barricade.png` | Strong survival imagery but composition less suited for wide hero |
| `lionel_groulx.png` | Good metro feel; weaker as fullscreen hero |
