# DeadMTL — Localization Doctrine

## Root locale: FR-CA

The DeadMTL site is French FR-CA by default.
All UI text, labels, headings, CTAs, metadata, navigation, and descriptions must be in French.
No mixed-language UI is permitted on any single page.

## Future /en/ locale

An English version may be added under `/en/` in a future slice.
When added, it must be a complete, non-mixed English locale.
Do not add half-translated English pages without full consistency.
Document the /en/ route existence here when it is created.

## Rule: no mixed-language UI

One page = one language for UI copy.
A page in French must have French labels, headings, buttons, metadata, and navigation.
A page in English must have English labels, headings, buttons, metadata, and navigation.

## Proper noun exceptions

The following terms may appear as-is in any locale:
- DeadMTL (brand name)
- LaSalle, Saint-Paul-Emard, Ville-Emard, Cote-Saint-Paul, Verdun, Angrignon, Saint-Henri (Montreal place names)
- Pointe-Saint-Charles, Pont Mercier, Canal de Lachine (geographic proper nouns)
- Project Zomboid, The Indie Stone (third-party proper nouns)
- PZMapForge, pz-sud-ouest-montreal (repo/product names)
- Discord (platform name)
- GitHub (platform name)
- S-P-E (established abbreviation used as nav label)
- The Dead Line (in-world proper noun for metro layer)
- BBS (technical acronym used as brand aesthetic term)
- "Knox Event" (in-world proper noun from Project Zomboid lore)

## In-world voice exceptions

Dispatch markdown entries (src/content/dispatch/*.md) are in-world fiction.
They may be written in English, French, or a mix that serves the narrative voice.
They must be visually/contextually marked as diegetic content (in-world transmissions).
In-world quotes marked with blockquote or diegetic context markers may use any language.

Current dispatch entries are in English (survivor-voice field reports from 1993-1994 Montreal).
This is an intentional narrative choice, not a localization error.

## HTML entity convention

Use HTML entities for accented characters in .astro files:
- é → &eacute;  /  É → &Eacute;
- è → &egrave;
- ê → &ecirc;
- à → &agrave;
- â → &acirc;
- î → &icirc;
- ô → &ocirc;
- ù → &ugrave;
- û → &ucirc;
- ü → &uuml;
- ç → &ccedil;
- œ → &oelig;
- æ → &aelig;
- ' (apostrophe) → &rsquo;
- « → &laquo;  /  » → &raquo;

Do not mix direct accented characters with HTML entities in the same file.
Do not use ASCII approximations (e for é, etc.) in rendered text.

## Tone guidelines (FR-CA)

- Concis et atmosphérique
- Style radio-survie / terminal
- Saveur québécoise/montréalaise
- Pas de jargon corporatif
- Pas de traductions forcées si le terme anglais est établi (ex: "dispatch" comme nom de canal, "BBS")
- Éviter les anglicismes non nécessaires
- Les abréviations techniques peuvent rester en anglais (ex: BBS, PKT, TX, RX)

## Example translations

| English | French FR-CA |
|---------|-------------|
| Knowledge Center | Centre de Connaissances |
| Join | Rejoindre |
| Rules | Règles |
| Dispatch | Transmissions (nav label) / Canal Dispatch (brand name) |
| Community | Communauté |
| Assets | Ressources |
| Map/Grid | Carte / Grille |
| Server pending | Serveur en attente |
| Whitelist closed | Liste blanche fermée |
| Read more | Lire la suite |
| Signal online | Signal actif |
| Status | Statut |
| Archive | Archives |
| Home | Accueil |
| Season 0 | Saison 0 |
| Construction / Under construction | En construction |

## How to add new copy

1. Write all UI copy in French FR-CA.
2. Use HTML entities for accented characters.
3. Do not introduce English UI strings without documenting them as proper nouns.
4. If adding a new page, set the `lang` attribute remains `fr-CA` (inherited from Base.astro).
5. For in-world content (dispatch entries, lore quotes), use the appropriate diegetic markers.
6. Update this document if a new exception is added.

## Adding /en/ in the future

When adding English locale:
1. Create an `src/pages/en/` directory or use a routing adapter.
2. Do not mix `/en/` content with `/` FR-CA pages.
3. Ensure all metadata (title, description, og:locale) uses correct locale tags.
4. Update Base.astro to accept a `lang` prop or create a separate Base.en.astro layout.
5. Document the routing structure here.
