# DeadMTL Lore Review Notes

Status: current-state review
Task key: LH-10
Scope: lore consistency review
Server state: pending
Public claim boundary: no fake live-server claim, no playable custom-map claim

## Purpose

This file reviews the current DeadMTL lore docs for consistency before more lore is promoted into public pages, dispatches, map markers, event concepts, or server/community material.

This is a review note, not a rewrite task.

## Files reviewed

- `docs/lore/README.md`
- `docs/lore/COLLAPSE_TIMELINE.md`
- `docs/lore/SECTOR_01_SAINT_PAUL_EMARD.md`
- `docs/lore/INFRASTRUCTURE_COLLAPSE.md`
- `docs/lore/DISPATCH_ARC_PLAN.md`

## Files not present yet

- `docs/lore/CANON_BOUNDARY.md`
- `docs/lore/ZONE_STATUS_CANON.md`
- `docs/lore/FACTION_SEEDS.md`
- `docs/lore/MAP_LORE_MARKERS.md`

Missing files are not treated as failures if their parent task is not complete. They are tracked as pending work.

## Review rules

- Root/source website language must stay English.
- French and Montreal local names may appear as proper nouns and local flavor.
- Game server is pending, not live.
- Open access is planned, not live.
- No fake live-server claims.
- No playable custom-map claim.
- No Project Zomboid asset or official-affiliation claim.
- Lore files are planning/canon notes unless explicitly promoted by a public implementation task.
- In-world fiction and out-of-world project status must stay separate.
- Mystery should be preserved where useful.

## Consistency checks

| Check | Status | Notes |
|---|---|---|
| English root-site rule | pass | Lore docs use English as the source language. Montreal names and accents may appear as proper nouns. |
| Server-live claims | pass | Current lore doctrine keeps the game server pending. No lore file should imply players can connect now. |
| Open access claim | pass | Open access is planned, not live. This should remain the wording until a real launch task changes it. |
| Playable custom-map claim | pass | Lore docs should say planning, canon, tactical map, or future marker. They must not say playable custom Montreal map. |
| Project Zomboid assets | pass | Lore docs must not include or request copied Project Zomboid assets. |
| Public vs in-world split | watch | Dispatches are in-world. Operator notes and server notices are out-of-world. Keep this separation in future public pages. |
| Dates | pass with review needed | Collapse timeline dates appear usable as the canon backbone. Future dispatches should check against it before publication. |
| Zone statuses | pending | Full review depends on docs/lore/ZONE_STATUS_CANON.md being present and final enough to use. |
| Sector 01 consistency | pass with review needed | Saint-Paul-Emard should remain Sector 01, readable but unsafe, and not a tutorial or live playable claim. |
| Mystery preservation | pass | Signal Monk, Canal Cache, Westmount, tunnels, Oratory, and sealed zones should remain partly uncertain. |
| Public integration readiness | partial | Collapse Timeline is the strongest public candidate. Zone/faction/map-marker content should remain planning until reviewed. |

## Canon anchors to preserve

- Montreal, December 1993: the city is not recovering.
- Saint-Paul-Emard is Sector 01.
- Saint-Paul-Emard is readable, not safe.
- LaSalle pressure is tied to the Pont Mercier corridor failure.
- Angrignon is a transit zone, not a true buffer.
- Jolicoeur Barrier is a failing filter, not a permanent safe wall.
- Canal Edge is useful because it is risky.
- Verdun is contested through pockets, rationing, smuggling, and distrust.
- Ville-Marie is sealed and opaque.
- Signal Monk remains unresolved.
- Canal Cache remains unconfirmed.
- LaSalle Pressure Night confirms pressure cycles and Gate B instability.
- Westmount remains classified unless a later task opens it.
- Infrastructure markers are planning candidates, not implemented map features.

## Public integration candidates

| Candidate | Source | Recommended public form | Risk |
|---|---|---|---|
| Collapse Timeline | docs/lore/COLLAPSE_TIMELINE.md | Knowledge Center archive page | Low if non-claims stay visible |
| Sector 01 overview | docs/lore/SECTOR_01_SAINT_PAUL_EMARD.md | Knowledge Center or revised Saint-Paul-Emard page | Medium; avoid playable-sector wording |
| Jolicoeur Barrier | Sector 01 / marker seed | Dispatch or map marker | Low; keep as pressure marker |
| Canal Edge / Canal Cache | Existing dispatch + infrastructure note | Follow-up dispatch or marker | Medium; do not imply actual in-game cache |
| LaSalle pressure cycle | Existing dispatch + timeline | Event philosophy / future dispatch | Medium; do not imply scheduled live event |
| Verdun Trade Light | Dispatch arc plan | Future field report | Medium; faction status is not final |
| Infrastructure layer | docs/lore/INFRASTRUCTURE_COLLAPSE.md | Map-marker planning only for now | Medium; avoid implemented-marker claims |

## Follow-up tasks

| Task | Reason | Priority |
|---|---|---|
| Finish or verify docs/lore/CANON_BOUNDARY.md | Needed as the main public/private lore rule source | High |
| Finish or verify docs/lore/ZONE_STATUS_CANON.md | Needed before expanding map lore and faction territory | High |
| Finish or verify docs/lore/FACTION_SEEDS.md | Needed before faction rumors become public dispatches | Medium |
| Finish or verify docs/lore/MAP_LORE_MARKERS.md | Needed before implementing map lore markers | Medium |
| Review public Collapse Timeline page after build | Public page should stay archive/not announcement | High |
| Recheck existing dispatches against timeline | Prevent date/status drift | Medium |

## Drift risks

### Server status drift

Risk:
A lore page may accidentally sound like players are already joining or experiencing events.

Rule:
Use "server pending", "open access planned", "archive file", "planning canon", or "future event hook".

Avoid:
"players joined", "live event happened", "server territory", "current server event".

### Map claim drift

Risk:
Map lore may sound like a playable custom Project Zomboid map exists.

Rule:
Use "tactical website map", "planning marker", "map-lore candidate", or "future overlay".

Avoid:
"playable Montreal map", "implemented in-game", "confirmed route", "PZ export".

### Mystery drift

Risk:
Too many lore docs may overexplain the outbreak, signals, tunnels, and sealed zones.

Rule:
Keep unknown things unknown unless a specific canon task opens them.

Protected mysteries:
- outbreak origin
- Signal Monk source
- Canal Cache truth
- Westmount
- Ville-Marie tunnels
- Oratory rumor
- who controls Verdun pockets
- what authorities knew

## Review result

Current lore direction is coherent.

The strongest public-safe canon pillars are:

1. December 1993 collapse frame.
2. Saint-Paul-Emard as Sector 01.
3. LaSalle pressure via Pont Mercier corridor failure.
4. Canal routes as useful but dangerous.
5. Radio/archive/dispatch structure as partial knowledge.
6. Clear non-claims around server status and playable-map proof.

The main remaining risk is not contradiction. The main risk is premature public wording.

## Closing note

This review does not close all lore work. It gives the branch a consistency gate.

Future public integration should reference this file before promoting lore into pages, dispatches, map overlays, or event concepts.
