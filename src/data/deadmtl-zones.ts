/**
 * DeadMTL Zone Metadata — PROVISIONAL
 *
 * All zone values are working data, not canonical lore.
 * svgId values reference group IDs confirmed in the source SVG:
 *   public/maps/arrondissements-quartiers-montreal-200802.svg
 *   (Adobe Illustrator export, viewBox 0 0 4320 2016)
 *
 * SVG layer/group IDs confirmed in source:
 *   Fond_arrond (container), Eaux, Outline_MTL, Parcs, PasMTL,
 *   Groupe_rues, LimArrondissements, NomsQuartiers, Noms_Arr
 *
 * Clickable borough IDs confirmed in Fond_arrond:
 *   Vardon, VilleMarie, CoteStLuc, Mtl_Nord, Ahuntsic,
 *   IleBizard, Pierrefonds, Senneville, Beauconsfield,
 *   Dorval, Lachine, SAB, LaSalle, RDP_-_PAT
 *
 * Zones without svgId are not represented as separate polygon groups
 * in this SVG version (they may be merged into larger areas).
 * They carry metadata for future map overlay or list display.
 */

export type ZoneType =
  | 'arrondissement'
  | 'city'
  | 'sector'
  | 'outside'
  | 'unknown';

export type ZoneStatus =
  | 'pending'
  | 'contested'
  | 'sealed'
  | 'overrun'
  | 'military'
  | 'civilian'
  | 'archive'
  | 'unknown';

// Danger scale: 0 = minimal/unknown, 5 = collapse/sealed
export type DangerLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type ZoneVisibility =
  | 'public'       // rendered and labeled in public viewer
  | 'classified'   // rendered but details redacted
  | 'hidden';      // not shown in public view at all

export interface DeadMtlZone {
  id: string;           // DeadMTL internal ID
  svgId: string | null; // SVG group ID — null if no matching polygon
  name: string;
  type: ZoneType;
  status: ZoneStatus;
  danger: DangerLevel;
  visibility: ZoneVisibility;
  faction?: string;
  summary: string;
  notes?: string[];
  routes?: string[];
  tags?: string[];
}

// ─── Zones with confirmed SVG polygon groups ────────────────────────────────

export const DEADMTL_ZONES: DeadMtlZone[] = [

  // ── Priority / DeadMTL-relevant zones ──────────────────────────────────────

  {
    id: 'LaSalle',
    svgId: 'LaSalle',
    name: 'LaSalle',
    type: 'arrondissement',
    status: 'overrun',
    danger: 4,
    visibility: 'public',
    summary: 'Primary pressure front from the south. Pont Mercier barricade failure origin. High horde density. Not a playable zone in Season 0.',
    notes: [
      '[P] Pont Mercier corridor remains the main ingress route for LaSalle horde pressure.',
      '[P] CEGEP network and industrial warehouse district — archive candidate pending survey.',
    ],
    routes: ['Canal Edge', 'Verdun'],
    tags: ['pressure', 'horde-source', 'canal', 'pont-mercier'],
  },

  {
    id: 'Verdun',
    svgId: 'Vardon',
    name: 'Verdun',
    type: 'arrondissement',
    status: 'contested',
    danger: 2,
    visibility: 'public',
    summary: 'Riverfront arrondissement. Survivor pockets reported. Rationing, smuggling routes, tense controlled access. River side provides some natural barrier.',
    notes: [
      '[P] Wellington corridor shows signs of organized survivor activity.',
      '[P] Île-des-Sœurs access unknown — bridge condition unconfirmed.',
    ],
    routes: ['LaSalle', 'SudOuest'],
    tags: ['riverfront', 'civilian', 'contested', 'survivor-pockets'],
  },

  {
    id: 'VilleMarie',
    svgId: 'VilleMarie',
    name: 'Ville-Marie',
    type: 'arrondissement',
    status: 'sealed',
    danger: 4,
    visibility: 'public',
    summary: 'Downtown core. Government structures, tunnel network, financial district. Sealed by early military cordon. Extreme risk — collapse pressure from all sides.',
    notes: [
      '[P] Metro tunnel network beneath downtown represents an unknown variable.',
      '[P] Mont-Royal vantage point — operational value unclear.',
    ],
    routes: ['SudOuest', 'Plateau', 'NDG_CDN'],
    tags: ['downtown', 'sealed', 'tunnel-risk', 'military-cordon'],
  },

  {
    id: 'Lachine',
    svgId: 'Lachine',
    name: 'Lachine',
    type: 'arrondissement',
    status: 'contested',
    danger: 2,
    visibility: 'public',
    summary: 'Southwest industrial. Canal edge. Old locks district. Route toward LaSalle and island perimeter. Archive candidate — Lachine Canal heritage infrastructure.',
    notes: [
      '[P] Canal de Lachine service routes may still be passable.',
      '[P] Southern shoreline access to Lac Saint-Louis — evacuation route potential.',
    ],
    routes: ['LaSalle', 'Verdun', 'SudOuest'],
    tags: ['canal', 'industrial', 'contested', 'southwest'],
  },

  {
    id: 'Ahuntsic',
    svgId: 'Ahuntsic',
    name: 'Ahuntsic-Cartierville',
    type: 'arrondissement',
    status: 'unknown',
    danger: 2,
    visibility: 'public',
    summary: 'North shore access point. Pont Viau and Pont Papineau corridors. Status unclear — possible civilian holdout zones near Rivière-des-Prairies.',
    notes: [
      '[P] Airport proximity (Cartierville) — unclear if this has operational value.',
    ],
    routes: ['Mtl_Nord', 'Villeray-StMichel'],
    tags: ['north', 'river-crossing', 'unknown'],
  },

  {
    id: 'RDP-PAT',
    svgId: 'RDP_-_PAT',
    name: 'Rivière-des-Prairies / Pointe-aux-Trembles',
    type: 'arrondissement',
    status: 'overrun',
    danger: 4,
    visibility: 'public',
    summary: 'Far east. Industrial corridor. Petrochemical facilities. Overrun risk — eastern pressure. Limited strategic value in Season 0 scope.',
    notes: ['[P] Raffinerie status unknown. Chemical contamination risk not assessed.'],
    routes: ['Mtl_Est', 'Anjou'],
    tags: ['east', 'industrial', 'overrun', 'petrochemical'],
  },

  {
    id: 'Mtl_Nord',
    svgId: 'Mtl_Nord',
    name: 'Montréal-Nord',
    type: 'arrondissement',
    status: 'contested',
    danger: 3,
    visibility: 'public',
    summary: 'Dense residential north. High population density pre-event. Contested status — potential organized survivor factions reported.',
    notes: ['[P] Transit corridors remain contested.'],
    tags: ['north', 'dense-residential', 'contested'],
  },

  {
    id: 'Pierrefonds',
    svgId: 'Pierrefonds',
    name: 'Pierrefonds-Roxboro',
    type: 'arrondissement',
    status: 'unknown',
    danger: 1,
    visibility: 'public',
    summary: 'Western residential. Lower density. Unknown status — distance from downtown may have slowed initial spread.',
    notes: ['[P] Western approach corridor to island.'],
    tags: ['west', 'residential', 'unknown'],
  },

  {
    id: 'IleBizard',
    svgId: 'IleBizard',
    name: 'L\'Île-Bizard',
    type: 'arrondissement',
    status: 'unknown',
    danger: 1,
    visibility: 'public',
    summary: 'Small island northwest. Limited road access. Potential isolated survivor holdout. Low priority for Season 0.',
    tags: ['island', 'isolated', 'low-priority'],
  },

  {
    id: 'Dorval',
    svgId: 'Dorval',
    name: 'Dorval',
    type: 'city',
    status: 'sealed',
    danger: 3,
    visibility: 'public',
    summary: 'Airport district. Trudeau International (YUL). Sealed by early military intervention — unknown current status. No aircraft operational.',
    notes: ['[P] Airport perimeter may be held or abandoned.'],
    tags: ['airport', 'sealed', 'military'],
  },

  {
    id: 'CoteStLuc',
    svgId: 'CoteStLuc',
    name: 'Côte-Saint-Luc',
    type: 'city',
    status: 'unknown',
    danger: 2,
    visibility: 'public',
    summary: 'Residential municipality. Central island. Unknown status — civilian population density suggests contested.',
    tags: ['residential', 'central', 'unknown'],
  },

  {
    id: 'SAB',
    svgId: 'SAB',
    name: 'Sainte-Anne-de-Bellevue',
    type: 'city',
    status: 'unknown',
    danger: 1,
    visibility: 'public',
    summary: 'Westernmost point of the island. MacDonald College campus. Agricultural land. Possible food production value.',
    tags: ['west', 'agricultural', 'campus', 'unknown'],
  },

  {
    id: 'Senneville',
    svgId: 'Senneville',
    name: 'Senneville',
    type: 'city',
    status: 'unknown',
    danger: 0,
    visibility: 'public',
    summary: 'Small municipality. Forested. Far western island tip. Low immediate threat. Unknown.',
    tags: ['west', 'forested', 'small', 'unknown'],
  },

  {
    id: 'Beauconsfield',
    svgId: 'Beauconsfield',
    name: 'Beaconsfield',
    type: 'city',
    status: 'unknown',
    danger: 1,
    visibility: 'public',
    summary: 'West island residential suburb. Unknown status. Route toward off-island connections.',
    tags: ['west', 'suburb', 'unknown'],
  },

  // ── Zones without SVG polygon groups ───────────────────────────────────────
  // These have DeadMTL metadata but no separate polygon in the source SVG.
  // They may be covered by larger polygons or absent from this 2002 SVG version.

  {
    id: 'SudOuest',
    svgId: null,
    name: 'Sud-Ouest',
    type: 'arrondissement',
    status: 'contested',
    danger: 3,
    visibility: 'public',
    summary: 'Primary DeadMTL zone. Contains Saint-Paul-Émard, Ville-Émard, Côte-Saint-Paul. Canal corridors, industrial blocks, residential streets. Season 0 entry enclave.',
    notes: [
      'DeadMTL Season 0 primary enclave — see /saint-paul-emard/ for full dossier.',
      '[P] Multiple subzones with distinct threat profiles. See sector dossier.',
    ],
    routes: ['LaSalle', 'Verdun', 'Lachine', 'VilleMarie'],
    tags: ['season-0', 'entry-enclave', 'canal', 'saint-paul-emard', 'priority'],
  },

  {
    id: 'Plateau',
    svgId: null,
    name: 'Plateau-Mont-Royal',
    type: 'arrondissement',
    status: 'civilian',
    danger: 2,
    visibility: 'public',
    summary: 'Dense residential. Exterior staircases. High population pre-event. Civilian pocket status — possible organized survivor community in lower-density blocks.',
    notes: ['[P] Parc Lafontaine may serve as a rally/camp location.'],
    tags: ['residential', 'civilian', 'plateau', 'dense'],
  },

  {
    id: 'NDG_CDN',
    svgId: null,
    name: 'Côte-des-Neiges / Notre-Dame-de-Grâce',
    type: 'arrondissement',
    status: 'unknown',
    danger: 2,
    visibility: 'public',
    summary: 'Large west-central arrondissement. University district (UdeM, McGill proximity). Dense immigrant community areas. Unknown cohesion status.',
    tags: ['university', 'residential', 'west-central', 'unknown'],
  },

  {
    id: 'Rosemont',
    svgId: null,
    name: 'Rosemont–La Petite-Patrie',
    type: 'arrondissement',
    status: 'unknown',
    danger: 2,
    visibility: 'public',
    summary: 'Northeast residential. Industrial transition zone. Unknown status.',
    tags: ['northeast', 'residential', 'unknown'],
  },

  {
    id: 'HochelagaMSN',
    svgId: null,
    name: 'Hochelaga-Maisonneuve',
    type: 'arrondissement',
    status: 'overrun',
    danger: 4,
    visibility: 'public',
    summary: 'East-central industrial. Olympic stadium district. High overrun risk — eastern pressure corridor. Low civilian survivability.',
    notes: ['[P] Stade Olympique structure may be a landmark for navigation but not a safe zone.'],
    tags: ['east', 'industrial', 'overrun', 'stadium'],
  },

  {
    id: 'Villeray-StMichel',
    svgId: null,
    name: 'Villeray–Saint-Michel–Parc-Extension',
    type: 'arrondissement',
    status: 'unknown',
    danger: 2,
    visibility: 'public',
    summary: 'North-central. Dense residential. Unknown status — limited intel.',
    tags: ['north-central', 'residential', 'unknown'],
  },

  {
    id: 'St-Leonard',
    svgId: null,
    name: 'Saint-Léonard',
    type: 'arrondissement',
    status: 'unknown',
    danger: 2,
    visibility: 'public',
    summary: 'East-central residential. Unknown status.',
    tags: ['east-central', 'residential', 'unknown'],
  },

  {
    id: 'Anjou',
    svgId: null,
    name: 'Anjou',
    type: 'arrondissement',
    status: 'unknown',
    danger: 2,
    visibility: 'public',
    summary: 'East industrial/residential. Adjacent to Métropolitain autoroute. Unknown status.',
    tags: ['east', 'industrial', 'unknown'],
  },

  {
    id: 'Mtl_Est',
    svgId: null,
    name: 'Montréal-Est',
    type: 'city',
    status: 'overrun',
    danger: 4,
    visibility: 'public',
    summary: 'Far east. Petrochemical and refinery district. Overrun. Do not approach.',
    tags: ['east', 'petrochemical', 'overrun'],
  },

  {
    id: 'Outremont',
    svgId: null,
    name: 'Outremont',
    type: 'arrondissement',
    status: 'unknown',
    danger: 1,
    visibility: 'public',
    summary: 'Affluent residential. Central island. Unknown status — possibly early organized response.',
    tags: ['residential', 'central', 'unknown'],
  },

  {
    id: 'Westmount',
    svgId: null,
    name: 'Westmount',
    type: 'city',
    status: 'sealed',
    danger: 2,
    visibility: 'classified',
    summary: '[CLASSIFIED] Status details not available in public terminal.',
    tags: ['classified'],
  },

  {
    id: 'Hampstead',
    svgId: null,
    name: 'Hampstead',
    type: 'city',
    status: 'unknown',
    danger: 1,
    visibility: 'public',
    summary: 'Small residential municipality. Central island. Unknown status.',
    tags: ['residential', 'small', 'unknown'],
  },

];

/** Quick lookup by internal ID */
export const ZONE_BY_ID = new Map<string, DeadMtlZone>(
  DEADMTL_ZONES.map(z => [z.id, z])
);

/** Zones that have a matching SVG element */
export const SVG_ZONES = DEADMTL_ZONES.filter(z => z.svgId !== null);

/** Public-visible zones only */
export const PUBLIC_ZONES = DEADMTL_ZONES.filter(z => z.visibility !== 'hidden');
