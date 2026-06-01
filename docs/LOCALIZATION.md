# DeadMTL — Localization Doctrine

## Canonical decision

**Root / source language: English.**

The public website at deadmtl.com is English by default.
French localization is future work and must be a separate route (/fr/) or proper i18n layer.
No franglais root UI is permitted.

## html lang

Root site: `<html lang="en">`
Future French: `<html lang="fr-CA">` on /fr/ pages only.

## Allowed exceptions in the English root

### Proper nouns and Montreal place names (French spelling preserved)

- **DeadMTL** — brand name
- **Montréal** — city name (use the accent)
- **Saint-Paul-Émard** — neighbourhood name
- **Ville-Émard** — neighbourhood name
- **Côte-Saint-Paul** — neighbourhood name
- **LaSalle** — borough name
- **Verdun** — borough name
- **Jolicoeur / Jolicoeur Barrier** — street/zone name
- **Pont Mercier** — bridge name
- **Canal de Lachine** — canal name
- **Angrignon** — park/borough name
- **Pointe-Saint-Charles** — neighbourhood name
- **Saint-Henri** — neighbourhood name
- **Project Zomboid**, **The Indie Stone** — third-party proper nouns
- **PZMapForge**, **pz-sud-ouest-montreal** — repo/product names
- **Discord**, **GitHub** — platform names
- **The Dead Line** — in-world proper noun for metro layer

### Diegetic terminal / BBS codes

Short terminal codes are atmospheric and may be English or neutral:
- `BBS`, `PKT:OK`, `RECV:OK`, `XMIT:OK`, `SYNC`, `RETRY`
- `CRIT`, `LOCK`, `ACTF`, `HOT`, `SELL` — sector status codes

These are aesthetic codes, not UI copy. They do not constitute mixed-language UI.

### In-world diegetic content

Dispatch markdown entries (src/content/dispatch/*.md) are in-world fiction.
Field reports are set in 1993–1994 Montréal. Their voice is English.
Operator notes are out-of-world project updates in English.

## No franglais UI rule

The following are NOT acceptable in the English root:
- French nav labels mixed with English
- French buttons alongside English page content
- French meta descriptions on English pages
- French section headings inside English-copy pages
- Mixed labels in data arrays rendered to the page

## HTML entities in source

**Do not put HTML entities inside JavaScript/TypeScript data strings.**

Wrong:
```typescript
{ title: 'Montr&eacute;al' }  // renders as literal &eacute;
```

Right:
```typescript
{ title: 'Montréal' }  // use real UTF-8 characters in data
```

HTML entities like `&mdash;`, `&rsquo;`, `&rarr;` are fine in `.astro` template markup.
Do not use `set:html` as a workaround for entity-encoded strings in data.

## Future French localization (/fr/)

When French is added:
1. Create `src/pages/fr/` mirroring the current route structure.
2. Do not mix French content into root `/` pages.
3. Update `Base.astro` to accept a `lang` prop.
4. French pages use `<html lang="fr-CA">`.
5. Add a language switcher (`EN | FR`) to the nav.
6. Update this document with the routing structure when /fr/ is created.
