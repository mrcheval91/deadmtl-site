# DeadMTL Infrastructure Collapse

Status: draft infrastructure canon
Task key: LH-06
Scope: lore planning and future map-marker source
Server state: pending
Public claim boundary: no fake live-server claim, no playable custom-map claim

## Purpose

This file defines the DeadMTL infrastructure collapse layer.

It is a planning source for future:

- tactical map markers
- dispatch seeds
- event hooks
- faction routes
- Knowledge Center archive notes
- sector canon
- route and hazard planning

It does not implement map code.
It does not prove a playable Project Zomboid map.
It does not claim the server is live.

## Core rule

DeadMTL infrastructure should feel like a collapsing city network.

The city is not destroyed evenly.
It fails through chokepoints:

- bridges
- tunnels
- canals
- autoroutes
- rail corridors
- hospitals
- schools
- markets
- radio nodes
- power and water systems
- improvised barricades
- rumor networks

Infrastructure is both practical and mythic.

Grounded first:
people move through roads, bridges, alleys, service lanes, metro entrances, markets, clinics, and industrial corridors.

Mythic second:
some sealed areas become rumors because nobody can verify what is inside.

## Real reference vs DeadMTL event-state

| Layer | Meaning |
|---|---|
| Real reference | A real Montreal place, route, structure, or neighborhood used as inspiration |
| DeadMTL event-state | What that place means in the alternate 1993 collapse |
| Public state | What the website/player-facing archive may safely say |
| Classified state | What should remain withheld, vague, or internal until later canon work |

Do not treat a real Montreal reference as proof of in-game implementation.

## Infrastructure categories

| Category | Purpose in DeadMTL | Public use |
|---|---|---|
| Bridges | Control movement on and off the island, create pressure corridors | route markers, barricade lore, pressure events |
| Metro stations | Underground access, fear, sealed movement, rumor nodes | signal lore, hazard markers, classified gaps |
| Tunnels | Downtown/sealed-zone uncertainty | mythic risk, classified entries |
| Autoroutes | Fast movement turned into chokepoints and abandoned corridors | route pressure, vehicle wrecks, patrol lines |
| Canal routes | Slow movement, industrial access, fog, caches, crossings | Sector 01 routes, supply hooks |
| Hospitals | civic overload, triage failure, missing records | archive notes, rumors |
| Schools / CEGEP nodes | shelter, education archives, temporary camps | Knowledge Center hooks |
| Markets | food pressure, barter, rationing, faction contact | event hooks, supply rumors |
| Radio / BBS / archive nodes | survival knowledge, partial truth, signal fiction | dispatch system, Knowledge Center identity |
| Power / water | service failure, winter pressure, territory value | sector status, event triggers |

## Bridges

### Pont Mercier corridor

Real reference:
Major south / southwest access route connected to the LaSalle pressure story.

DeadMTL event-state:
The corridor fails as a reliable control line in early November 1993. After that, LaSalle becomes the main pressure source feeding movement northeast toward Angrignon and Sector 01.

Public state:
Reported failure and pressure corridor.

Use:
- LaSalle pressure
- Gate B instability
- Angrignon movement
- Jolicoeur Barrier events
- future pressure-night dispatches

Marker candidates:
- `DM-INF-BRIDGE-001` Pont Mercier Pressure Corridor
- `DM-INF-PRESSURE-001` LaSalle Northeast Movement

Claim boundary:
Do not claim a playable bridge route exists.

### Jacques-Cartier bridge

Real reference:
Iconic east/central bridge.

DeadMTL event-state:
Candidate for a destroyed, blocked, or military-controlled crossing in later east/central lore. It should not be used as a Season 0 active route.

Public state:
Future planning hook.

Use:
- citywide collapse imagery
- east-side pressure
- distant landmark/event reference

Marker candidate:
- `DM-INF-BRIDGE-002` Jacques-Cartier Dead Crossing

### Champlain bridge corridor

Real reference:
Major south-shore crossing.

DeadMTL event-state:
Potential distant pressure and evacuation myth. Better used as background strategic failure than an active early route.

Public state:
Rumored or reported, not detailed yet.

Use:
- off-island rumors
- failed evacuation references
- future south-shore pressure

Marker candidate:
- `DM-INF-BRIDGE-003` Champlain Evacuation Rumor

## Metro and underground

### Jolicoeur station area

Real reference:
Metro access near Sector 01 / southwest routes.

DeadMTL event-state:
Bleak, empty, avoided, and possibly sealed or partially flooded in local rumor. It should not become a simple fast-travel concept. It is an anxiety node.

Public state:
Rumored / unverified.

Use:
- Jolicoeur Barrier pressure
- signal rumors
- missing patrol stories
- underground fear

Marker candidate:
- `DM-INF-METRO-001` Jolicoeur Empty Platform

### Monk station area

Real reference:
Local metro anchor for the Monk Residential area.

DeadMTL event-state:
Connected to Signal Monk by atmosphere, not necessarily by literal signal source. Keep the exact source uncertain.

Public state:
Rumored / reported.

Use:
- Signal Monk
- residential fear
- local archive fragments

Marker candidate:
- `DM-INF-METRO-002` Monk Signal Vicinity

### Ville-Marie tunnel network

Real reference:
Downtown tunnels, metro, underground city, service corridors.

DeadMTL event-state:
Sealed, opaque, and dangerous. The public archive should not fully explain what happened underground.

Public state:
Classified / rumored.

Use:
- downtown sealed status
- mythic risk
- classified map gaps
- future high-risk dispatches

Marker candidates:
- `DM-INF-TUNNEL-001` Ville-Marie Sealed Tunnel
- `DM-INF-TUNNEL-002` Underground Route Unknown

Claim boundary:
Do not publish clean tunnel maps unless a later task deliberately creates a fictional archive layer.

## Autoroutes and rail corridors

### Cote-Saint-Paul industrial / autoroute edge

Real reference:
Industrial corridors, rail lines, viaducts, and road structures around the east side of Sector 01.

DeadMTL event-state:
Blocked route pressure and later expansion hook toward Pointe-Saint-Charles.

Public state:
Reported / provisional.

Use:
- Gate D
- industrial salvage
- blocked route lore
- future Pointe-Saint-Charles progression

Marker candidate:
- `DM-INF-ROAD-001` Industrial East Corridor

### Angrignon approach

Real reference:
Green space and road approaches near LaSalle / Ville-Emard.

DeadMTL event-state:
Transit zone, not a safe buffer. Open ground spreads movement but does not stop it.

Public state:
Confirmed planning anchor.

Use:
- LaSalle pressure
- Gate B
- Jolicoeur Barrier
- scouting events

Marker candidate:
- `DM-INF-ROAD-002` Angrignon Transit Ground

## Canal routes

### Canal de Lachine

Real reference:
Industrial waterway and route structure.

DeadMTL event-state:
One of the most important Sector 01 infrastructure boundaries. It creates fog, service lanes, industrial access, caches, crossings, and north-bank pressure.

Public state:
Confirmed planning anchor.

Use:
- Canal Edge
- Gate E
- Canal Cache
- Saint-Henri future route
- waterline hazards

Marker candidates:
- `DM-INF-CANAL-001` Canal Edge Service Route
- `DM-INF-CACHE-001` Canal Cache Mark
- `DM-INF-CROSSING-001` Saint-Henri North Bank Sightline

### Canal de l'Aqueduc

Real reference:
Southern water/infrastructure boundary near Verdun edge.

DeadMTL event-state:
A tense southern cut separating Sector 01 from Verdun pockets and smuggling pressure.

Public state:
Reported / provisional.

Use:
- Gate C
- Verdun contact
- smuggling rumors
- ration-event hooks

Marker candidate:
- `DM-INF-CANAL-002` Aqueduct South Cut

## Civic nodes

### Hospitals and clinics

DeadMTL event-state:
Hospitals are not simple safe zones. They represent overload, triage failure, missing records, contaminated rumors, and desperate resource movement.

Public state:
Mostly reported or rumored until specific locations are canonized.

Use:
- medical supply rumors
- missing patient records
- faction credibility
- infection uncertainty

Marker candidate:
- `DM-INF-CIVIC-001` Unverified Triage Site

### Schools and CEGEP nodes

DeadMTL event-state:
Schools and CEGEP buildings can become shelters, archive points, ration centers, or abandoned civic records. They should support Knowledge Center and public-terminal lore.

Public state:
Provisional.

Known hook:
LaSalle education/archive node as conceptual Knowledge Center framing.

Use:
- archive notes
- survivor education material
- local shelter rumors
- non-combat community memory

Marker candidates:
- `DM-INF-ARCHIVE-001` LaSalle Education Node
- `DM-INF-CIVIC-002` Classroom Shelter Record

## Markets and supply points

### Atwater Market area

Real reference:
Important Montreal market area near canal/west-central routes.

DeadMTL event-state:
Potential barter, rationing, and route-control location. It should be valuable but contested, not a clean safe hub.

Public state:
Future planning hook.

Use:
- food pressure
- faction contact
- route negotiation
- public rumor

Marker candidate:
- `DM-INF-MARKET-001` Atwater Ration Line

### Local corner stores and depanneur traces

Real reference:
Neighborhood-level supply points.

DeadMTL event-state:
Small stores become memory points, cache locations, conflict sites, and false rumors.

Public state:
Public-safe when attached to fictionalized location notes.

Use:
- Monk Residential
- Ville-Emard blocks
- dispatch seeds
- small events

Marker candidate:
- `DM-INF-SUPPLY-001` Boarded Corner Store

## Radio, BBS, and archive nodes

### Signal network

DeadMTL event-state:
DeadMTL knowledge moves through partial systems: radio, field notes, local terminals, BBS-like archive language, paper notices, and survivor repetition.

Public state:
Confirmed as site/fiction structure.

Use:
- Knowledge Center
- Dispatch archive
- Signal Monk
- operator notes
- field reports

Marker candidates:
- `DM-INF-SIGNAL-001` Signal Monk Capture Area
- `DM-INF-ARCHIVE-002` Public Terminal Node
- `DM-INF-SIGNAL-002` Repeater Unknown

### Archive nodes

DeadMTL event-state:
Archive nodes are not necessarily single buildings. They may be conceptual designations for where the network classifies knowledge.

Public state:
Confirmed as framing, provisional as physical map locations.

Use:
- Knowledge Center
- LaSalle node
- research files
- classified/public split

Marker candidate:
- `DM-INF-ARCHIVE-003` Archive Node Provisional

## Power and water

### Power

DeadMTL event-state:
Power is intermittent, local, improvised, and politically important. A powered building is not automatically safe. It may attract attention.

Public state:
Reported / local.

Use:
- radio signals
- shelter conflict
- event triggers
- night pressure
- faction leverage

Marker candidate:
- `DM-INF-UTILITY-001` Generator Noise Report

### Water

DeadMTL event-state:
Water access is a survival driver. Canal water, winter conditions, building plumbing, and ration points all create movement and conflict.

Public state:
Reported / provisional.

Use:
- Canal Edge
- Verdun rationing
- sector survival doctrine
- weather events

Marker candidate:
- `DM-INF-UTILITY-002` Water Line Dispute

## Landmark hooks

### Olympic Stadium

Real reference:
Iconic east Montreal landmark.

DeadMTL event-state:
Overrun or bombarded landmark candidate tied to the "Stadium Battle" concept. It should remain distant from Season 0 and not become early playable scope.

Public state:
Rumored / future canon pass required.

Use:
- east-side myth
- citywide collapse history
- visual identity
- future archive file

Marker candidate:
- `DM-INF-LANDMARK-001` Olympic Stadium Ruin

### Saint-Joseph Oratory area

Real reference:
Major Montreal landmark.

DeadMTL event-state:
Mythic infestation candidate. Use carefully. Keep grounded until a dedicated canon task decides how supernatural or symbolic the rumor becomes.

Public state:
Rumored.

Use:
- mythic layer
- survivor rumor
- pilgrimage/avoidance stories

Marker candidate:
- `DM-INF-LANDMARK-002` Oratory Infestation Rumor

### Exterior-staircase neighborhoods

Real reference:
Montreal residential identity, especially dense older neighborhoods.

DeadMTL event-state:
Exterior stairs create vertical movement, visibility, barricade oddities, fall risks, rooftop glimpses, and survivor escape routes.

Public state:
Public-safe atmosphere layer.

Use:
- Plateau future lore
- residential movement
- visual identity
- dispatch imagery

Marker candidate:
- `DM-INF-RES-001` Exterior Staircase Block

## Map-marker readiness

The following marker candidates can later feed `docs/lore/MAP_LORE_MARKERS.md`.

| ID | Label | Type | Zone / area | Public state |
|---|---|---|---|---|
| DM-INF-BRIDGE-001 | Pont Mercier Pressure Corridor | bridge / pressure | LaSalle | reported |
| DM-INF-PRESSURE-001 | LaSalle Northeast Movement | pressure | LaSalle / Angrignon | confirmed planning |
| DM-INF-BRIDGE-002 | Jacques-Cartier Dead Crossing | bridge | East / central | rumored |
| DM-INF-BRIDGE-003 | Champlain Evacuation Rumor | bridge | South shore corridor | rumored |
| DM-INF-METRO-001 | Jolicoeur Empty Platform | metro / hazard | Jolicoeur | rumored |
| DM-INF-METRO-002 | Monk Signal Vicinity | metro / signal | Monk | reported |
| DM-INF-TUNNEL-001 | Ville-Marie Sealed Tunnel | tunnel / classified | Ville-Marie | classified |
| DM-INF-ROAD-001 | Industrial East Corridor | route / blocked | Cote-Saint-Paul | reported |
| DM-INF-ROAD-002 | Angrignon Transit Ground | route / pressure | Angrignon | confirmed planning |
| DM-INF-CANAL-001 | Canal Edge Service Route | canal / route | Canal Edge | confirmed planning |
| DM-INF-CACHE-001 | Canal Cache Mark | cache | Canal Edge | reported |
| DM-INF-CANAL-002 | Aqueduct South Cut | canal / gate | Verdun edge | reported |
| DM-INF-MARKET-001 | Atwater Ration Line | market / supply | Atwater area | rumored |
| DM-INF-SIGNAL-001 | Signal Monk Capture Area | signal | Monk Residential | reported |
| DM-INF-UTILITY-001 | Generator Noise Report | utility / signal | TBD | rumored |
| DM-INF-LANDMARK-001 | Olympic Stadium Ruin | landmark / hazard | Hochelaga-Maisonneuve | rumored |
| DM-INF-LANDMARK-002 | Oratory Infestation Rumor | landmark / rumor | Cote-des-Neiges area | rumored |
| DM-INF-RES-001 | Exterior Staircase Block | residential / route | Plateau candidate | public-safe atmosphere |

## Public wording

Use:

- "infrastructure collapse layer"
- "map-lore candidate"
- "reported"
- "rumored"
- "classified"
- "planning marker"
- "future tactical map layer"

Avoid:

- "implemented marker"
- "live event"
- "playable route"
- "custom map proof"
- "server route"
- "confirmed in-game location"

## Review checklist

Before using this file publicly:

- Check against `docs/lore/COLLAPSE_TIMELINE.md`.
- Check against `docs/lore/SECTOR_01_SAINT_PAUL_EMARD.md`.
- Check against `docs/lore/ZONE_STATUS_CANON.md` if present.
- Keep server state pending unless a launch task changes it.
- Keep map claims planning-only unless real playable export proof exists.
- Keep real Montreal references separate from DeadMTL event-state.

## Next use

This file can feed:

- `docs/lore/MAP_LORE_MARKERS.md`
- dispatch arc planning
- event philosophy
- faction seeds
- Knowledge Center archive pages
- future map overlay design
