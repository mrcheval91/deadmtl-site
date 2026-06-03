# DeadMTL Dispatch Arc Plan

Status: draft dispatch planning canon
Task key: LH-07
Scope: lore planning
Server state: pending
Public claim boundary: no fake live-server claim, no playable custom-map claim

## Purpose

This file plans the first 12 in-world DeadMTL dispatches.

It does not publish new website posts.
It does not create Astro pages.
It does not claim the server is live.

A dispatch seed is a small planning entry that can later become:

- a public dispatch post
- a field report
- a Knowledge Center archive note
- a map marker source
- an event hook
- a faction rumor
- a timeline entry

## Rules

- Root/source website language stays English.
- The game server is pending, not live.
- Open access is planned, not live.
- Do not claim a playable custom Montreal map exists.
- Do not claim Project Zomboid export or load-test proof.
- Existing dispatches are canon anchors.
- New seeds are planning items until promoted by a later implementation task.
- Keep mystery where useful.
- Grounded first, mythic second.

## Dispatch types

| Type | Meaning |
|---|---|
| network-dispatch | In-world bulletin from the DeadMTL signal network |
| field-report | Survivor-level observation or local incident record |
| research-file | Archive/canon note that may mix field evidence and planning classification |

## Status values

| Status | Meaning |
|---|---|
| confirmed | Stable enough to reuse as a canon anchor |
| unverified | Useful report, but not fully confirmed |
| rumored | Survivor rumor or unreliable signal |
| classified | Public detail withheld |

## Arc overview

| Arc | Name | Purpose |
|---|---|---|
| Arc 1 | Sector 01 stabilizes | Establish Saint-Paul-Emard as readable but unsafe |
| Arc 2 | LaSalle pressure grows | Track pressure from the Pont Mercier / LaSalle corridor |
| Arc 3 | Signals and false signals | Build radio, BBS, and bait uncertainty |
| Arc 4 | Canal routes and caches | Make Canal Edge useful, risky, and ambiguous |
| Arc 5 | First faction rumors | Seed human pressure without locking factions too early |
| Arc 6 | First expansion hook | Point toward Saint-Henri, Verdun, and Pointe-Saint-Charles |

## Dispatch seeds

### 01. Sector 01 Opens

Type:
research-file

Date:
1993-12-18

Zone:
Saint-Paul-Emard

Status:
confirmed

Arc:
Arc 1 - Sector 01 stabilizes

Summary:
Saint-Paul-Emard is classified as Sector 01 because it is bounded, readable, and not fully lost. The sector combines Ville-Emard, Cote-Saint-Paul, Monk Residential, Jolicoeur Barrier, Canal Edge, and Angrignon Fringe into the first usable DeadMTL planning identity. It is not safe. It is simply the first area that can still be described.

Source:
- LH-03 Sector 01 canon
- LH-02 collapse timeline

Future use:
Knowledge Center archive entry or Sector 01 public explainer.

Public safety:
Planning/canon seed only. No live-server claim. No playable custom-map claim.

---

### 02. Gate B Downgraded

Type:
network-dispatch

Date:
1993-12-27

Zone:
Angrignon Fringe / Jolicoeur Barrier

Status:
reported

Arc:
Arc 1 - Sector 01 stabilizes

Summary:
Gate B is downgraded from watched to unstable after repeated movement along the western line. The barrier still holds, but the Angrignon side is no longer treated as a buffer. Patrol notes describe the area as open ground that spreads pressure instead of stopping it.

Source:
- LH-03 Sector 01 canon
- LH-06 infrastructure collapse
- Jolicoeur Barrier marker seed

Future use:
Event hook for western pressure and perimeter watch.

Public safety:
Planning seed only. No active server event implied.

---

### 03. Signal Monk

Type:
field-report

Date:
1994-01-10

Zone:
Monk Residential

Status:
unverified

Arc:
Arc 3 - Signals and false signals

Summary:
Frequency 88.7 resumes with a short looping signal captured near the south end of Monk. The message is fragmentary and repeats on a timed cycle. The source is not confirmed. It may be automated, active, or bait.

Source:
- Existing dispatch: `src/content/dispatch/signal-monk.md`
- LH-02 collapse timeline
- LH-03 Sector 01 canon

Future use:
Existing canon anchor. Can feed map marker, event, or follow-up dispatch.

Public safety:
Already public as a dispatch. Do not overexplain the signal source.

---

### 04. Canal Cache

Type:
field-report

Date:
1994-01-18

Zone:
Canal Edge

Status:
unconfirmed

Arc:
Arc 4 - Canal routes and caches

Summary:
A supply mark is found near the Gate E corridor along the canal service route. The mark points toward a workshop near the waterline, but the cache is not physically confirmed. It may be intact, already taken, or deliberately false.

Source:
- Existing dispatch: `src/content/dispatch/canal-cache.md`
- LH-03 Sector 01 canon
- LH-06 infrastructure collapse

Future use:
Existing canon anchor. Can feed Canal Edge marker, supply event, or route-risk note.

Public safety:
Already public as a dispatch. Do not imply the cache exists in-game.

---

### 05. The Jolicoeur Knock

Type:
field-report

Date:
1994-01-24

Zone:
Saint-Paul-Emard / Jolicoeur Barrier

Status:
unverified

Arc:
Arc 3 - Signals and false signals

Summary:
A repeating impact is heard after dark along the Jolicoeur Barrier. The sound comes in sets of three, stops when lanterns approach, then resumes farther down the line. No breach is confirmed. The barrier watch logs movement near the Angrignon side, but poor visibility prevents verification.

Source:
- LH-SIDE-03 dispatch seed
- LH-SIDE-04 marker candidate
- LH-03 Sector 01 canon

Future use:
Small field-report dispatch, map marker note, or perimeter event.

Public safety:
Planning seed only. No live event implied.

---

### 06. Verdun Trade Light

Type:
field-report

Date:
1994-01-29

Zone:
Aqueduct South Cut / Verdun edge

Status:
rumored

Arc:
Arc 5 - First faction rumors

Summary:
A light signal is reported south of the Aqueduct cut. The pattern repeats twice, then disappears. Some believe it marks a Verdun ration contact. Others believe it is a trap meant to pull watchers away from the western line. No exchange is confirmed.

Source:
- LH-03 Sector 01 canon
- LH-06 infrastructure collapse
- Verdun contested pocket lore

Future use:
Faction seed, smuggling hook, or Gate C event.

Public safety:
Planning seed only. Faction identity remains provisional until LH-05.

---

### 07. LaSalle Pressure Night

Type:
network-dispatch

Date:
1994-02-02

Zone:
Angrignon Fringe / Jolicoeur Barrier

Status:
confirmed

Arc:
Arc 2 - LaSalle pressure grows

Summary:
Movement from LaSalle peaks overnight on February 1st and tests the western side of Sector 01. Angrignon absorbs part of the movement, Jolicoeur reports direct contact, and Gate B remains unstable afterward. The sector holds, but the pressure interval appears to be shortening.

Source:
- Existing dispatch: `src/content/dispatch/lasalle-pressure-night.md`
- LH-02 collapse timeline
- LH-03 Sector 01 canon

Future use:
Existing canon anchor. Can feed event philosophy, pressure calendar, and map marker work.

Public safety:
Already public as a dispatch. Do not turn estimate windows into guaranteed live events.

---

### 08. Canal Fog Mark

Type:
research-file

Date:
1994-02-06

Zone:
Canal Edge

Status:
reported

Arc:
Arc 4 - Canal routes and caches

Summary:
A second mark is reported along the Canal Edge, but it does not match the earlier cache notation exactly. The mark may be a route sign, warning, copycat signal, or false trail. Morning fog makes line-of-sight unreliable and increases the chance that different groups are reading the same symbols differently.

Source:
- LH-06 infrastructure collapse
- Canal Cache canon anchor
- LH-03 Sector 01 canon

Future use:
Map marker, archive note, or follow-up Canal Cache dispatch.

Public safety:
Planning seed only. No claim of implemented marker.

---

### 09. The East Corridor Silence

Type:
network-dispatch

Date:
1994-02-10

Zone:
Cote-Saint-Paul Industrial Edge

Status:
reported

Arc:
Arc 6 - First expansion hook

Summary:
The Industrial East Corridor goes quiet after several nights of metallic movement near the blocked route. No breach, signal, or return report follows. The silence is more worrying than the noise because it removes one of the few predictable warning signs on the eastern side.

Source:
- LH-03 Sector 01 canon
- LH-06 infrastructure collapse
- future Pointe-Saint-Charles route hook

Future use:
Expansion hook toward Pointe-Saint-Charles and industrial routes.

Public safety:
Planning seed only. Does not imply playable expansion.

---

### 10. Ration Names

Type:
field-report

Date:
1994-02-13

Zone:
Verdun edge / Gate C

Status:
rumored

Arc:
Arc 5 - First faction rumors

Summary:
A list of names is found folded inside a ration wrapper near the southern cut. The names may be a queue, a debt list, a casualty record, or a warning. The handwriting is consistent, but the paper has been handled by more than one person.

Source:
- LH-03 Sector 01 canon
- LH-06 infrastructure collapse
- future faction seed work

Future use:
Faction rumor, Verdun contact, archive clue, or event prop.

Public safety:
Planning seed only. No real person names should be used.

---

### 11. North Bank Glimpse

Type:
field-report

Date:
1994-02-17

Zone:
Canal de Lachine / Saint-Henri sightline

Status:
unverified

Arc:
Arc 6 - First expansion hook

Summary:
A watcher on the Sector 01 canal edge reports movement on the north bank near the Saint-Henri side. The figure appears to wave once, then disappears behind industrial structures. No crossing attempt follows. The report is logged because the north bank has been quiet for too long.

Source:
- LH-03 Sector 01 canon
- LH-06 infrastructure collapse
- Saint-Henri expansion hook

Future use:
Future Saint-Henri route hook or canal crossing marker.

Public safety:
Planning seed only. Does not imply the north bank is reachable.

---

### 12. The Next Pressure Window

Type:
research-file

Date:
1994-02-18 to 1994-02-22

Zone:
LaSalle / Angrignon / Jolicoeur

Status:
reported

Arc:
Arc 2 - LaSalle pressure grows

Summary:
Based on the previous LaSalle pressure intervals, the next western pressure window is estimated between February 18th and February 22nd. The estimate is useful, but not reliable enough to treat as a schedule. Pressure does not announce itself, and the pattern may already be changing.

Source:
- Existing dispatch: LaSalle Pressure Night
- LH-02 collapse timeline
- LH-03 Sector 01 canon

Future use:
Event philosophy, pressure-night live ops concept, map marker note.

Public safety:
Planning seed only. No scheduled live event claim.

## Arc notes

### Arc 1 - Sector 01 stabilizes

Goal:
Make Saint-Paul-Emard readable without making it safe.

Seeds:
- Sector 01 Opens
- Gate B Downgraded

### Arc 2 - LaSalle pressure grows

Goal:
Make the Pont Mercier / LaSalle pressure line the first major external force.

Seeds:
- LaSalle Pressure Night
- The Next Pressure Window

### Arc 3 - Signals and false signals

Goal:
Build uncertainty through repeated sounds, radio loops, and unclear intent.

Seeds:
- Signal Monk
- The Jolicoeur Knock

### Arc 4 - Canal routes and caches

Goal:
Make Canal Edge useful, dangerous, and ambiguous.

Seeds:
- Canal Cache
- Canal Fog Mark

### Arc 5 - First faction rumors

Goal:
Seed human organization without locking factions too early.

Seeds:
- Verdun Trade Light
- Ration Names

Dependency note:
These remain provisional until LH-05 faction seed work is completed.

### Arc 6 - First expansion hook

Goal:
Point beyond Sector 01 without promising playable expansion.

Seeds:
- The East Corridor Silence
- North Bank Glimpse

## Existing canon anchors

These dispatches already exist publicly and should not be contradicted:

- `signal-monk`
- `canal-cache`
- `lasalle-pressure-night`

Operator/project dispatches may exist separately, but this plan focuses on in-world dispatch seeds.

## Promotion rule

A dispatch seed becomes public only through a later implementation task.

Promotion checklist:

- title and slug selected
- type confirmed
- date checked against timeline
- zone checked against zone canon
- no fake live-server claim
- no playable custom-map claim
- no contradiction with existing dispatches
- Astro content file created only when explicitly scoped

## Next use

This plan can feed:

- `src/content/dispatch/` entries
- map marker planning
- faction seed work
- event philosophy
- Knowledge Center archive pages
- timeline revisions
