# DeadMTL Lore / History / Worldbuilding Chain

Status: active side-work chain
Task key: LH-00
Project: DeadMTL Lore / History / Worldbuilding
Scope: planning, canon, and writing only
Server state: pending
Public claim boundary: no fake live-server claim, no playable custom-map claim

## Purpose

This file defines the working lore/history/worldbuilding task chain for DeadMTL.

It gives relaxed lore work a stable home without blocking active website, server, or map work.

## Repo location

Lore planning files live under:

```text
docs/lore/
```

Task-chain and planning control files live under:

```text
docs/tasks/
```

Public website pages are separate and must not be changed by this setup task.

## Doctrine

DeadMTL lore work must respect these rules:

- Root/source website language stays English.
- French and Montreal local names are allowed as proper nouns and local flavor.
- Game server is pending, not live.
- Open access is planned, not live.
- Do not make fake live-server claims.
- Do not claim a playable custom map export exists.
- Do not claim Project Zomboid map/load proof unless it exists.
- Do not copy or include Project Zomboid assets.
- Do not touch media or map files unless a later task explicitly allows it.
- Keep the tone grounded: Montreal, December 1993, collapse, terminal/noir survival, civic breakdown, borough isolation, route pressure, and rumor-driven knowledge.

## Task chain

| Key | Title | Depends on | Output |
|---|---|---|---|
| LH-BRANCH | Open DeadMTL lore/worldbuilding side branch | none | Vikunja parent branch |
| LH-00 | Set up DeadMTL lore task chain | LH-BRANCH | `docs/tasks/LORE_HISTORY_WORLDBUILDING_CHAIN.md`, `docs/lore/README.md` |
| LH-01 | Write DeadMTL canon boundary and tone sheet | LH-00 | `docs/lore/CANON_BOUNDARY.md` |
| LH-02 | Draft master collapse timeline skeleton | LH-01 | `docs/lore/COLLAPSE_TIMELINE.md` |
| LH-03 | Canon pass for Sector 01 Saint-Paul-Emard | LH-02 | `docs/lore/SECTOR_01_SAINT_PAUL_EMARD.md` |
| LH-04 | Create island zone status canon table | LH-02 | `docs/lore/ZONE_STATUS_CANON.md` |
| LH-05 | Draft DeadMTL faction seed list | LH-03, LH-04 | `docs/lore/FACTION_SEEDS.md` |
| LH-06 | Draft DeadMTL infrastructure collapse layer | LH-04 | `docs/lore/INFRASTRUCTURE_COLLAPSE.md` |
| LH-07 | Plan first DeadMTL dispatch arc | LH-02, LH-03, LH-05 | `docs/lore/DISPATCH_ARC_PLAN.md` |
| LH-08 | Publish first public archive article: Collapse Timeline | LH-02 | future public Knowledge Center page |
| LH-09 | Prepare map lore marker content plan | LH-04, LH-06, LH-07 | `docs/lore/MAP_LORE_MARKERS.md` |
| LH-10 | Review DeadMTL lore side-work for consistency | LH-01 through LH-07 | `docs/lore/REVIEW_NOTES.md` |

## Relaxed side-work tasks

These are tiny writing tasks that can be done without opening a full implementation thread.

| Key | Title | Depends on | Done means |
|---|---|---|---|
| LH-SIDE-01 | Add one timeline event | LH-02 | One event is added to the timeline |
| LH-SIDE-02 | Write one faction seed | LH-05 | One faction seed is added |
| LH-SIDE-03 | Write one dispatch seed | LH-07 | One dispatch seed is added |
| LH-SIDE-04 | Add one map lore marker candidate | LH-09 | One marker candidate is added |

## File types

Use markdown for lore planning:

```text
docs/lore/*.md
```

Use Astro pages only when a later implementation task explicitly promotes a lore file into a public website page.

## Public/private split

Public-safe lore can appear later in the Knowledge Center, Dispatch archive, or map page.

Private or uncertain planning should stay in `docs/lore/` until reviewed.

Use these labels inside lore files where useful:

- Public-safe
- Provisional
- Rumored
- Classified
- Internal planning

## Claim boundary

Lore files may describe:

- fictional zone status
- planning state
- in-world reports
- map-lore concepts
- future dispatch hooks
- faction rumors
- archive notes

Lore files must not claim:

- the game server is live
- players can connect now
- a playable custom Montreal map exists
- Project Zomboid export has been proven
- Project Zomboid assets are included
- official affiliation with The Indie Stone

## Validation

After LH-00 changes:

```powershell
npm run build
git status --short
```

Expected result:

- build passes
- only intended markdown/doc files are changed or added
- no media files changed
- no map files changed
- no server config changed
