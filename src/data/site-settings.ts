export const siteSettings = {
  site: {
    name: 'DEADMTL',
    rootLanguage: 'en',
  },

  meta: {
    homeTitle: 'Home',
    homeDescription:
      'DeadMTL — Montréal survival network for Project Zomboid. Winter 1993. Sector maps, dispatch, server rules, and Season 0 preparation. Server pending.',
  },

  home: {
    hero: {
      eyebrow: 'DEADMTL.BBS.MTL ▸ SURVIVAL NETWORK ▸ WINTER 93/94',
      title: 'DEADMTL',
      tagline: 'The city is dead. The network lives.',
      body:
        'A Montréal survival network for Project Zomboid. Winter 1993. Sector maps, field dispatches, server rules, and Season 0 preparation for the Saint-Paul-Émard enclave.',

      images: {
        sourceAsset: 'assets/stadium_neon.blue-neon-readable.png',
        desktopWebp: '/images/home/deadmtl-hero.webp',
        mobileWebp: '/images/home/deadmtl-hero-sm.webp',
        fallbackJpg: '/images/home/deadmtl-hero.jpg',
      },

      caption: [
        'STADE OLYMPIQUE',
        'MONTRÉAL — SECTOR SCAN',
        'WINTER 1993',
      ],

      ctas: [
        { label: 'Season 0 Status', href: '/construction/', tone: 'red' },
        { label: 'Read the Rules', href: '/rules/', tone: 'ghost' },
        { label: 'Open the Map', href: '/map/', tone: 'teal' },
        { label: 'Dispatch', href: '/dispatch/', tone: 'ghost' },
      ],
    },
  },

  serverStatus: [
    { label: 'Season 0', value: 'SETUP', tone: 'amber' },
    { label: 'Game Server', value: 'PENDING', tone: 'red' },
    { label: 'Whitelist', value: 'CLOSED', tone: 'red' },
    { label: 'Map', value: 'IN PROGRESS', tone: 'teal' },
    { label: 'Discord', value: 'PENDING', tone: 'amber' },
    { label: 'Site Signal', value: 'ONLINE', tone: 'teal' },
  ],
} as const;

export type SiteSettings = typeof siteSettings;
