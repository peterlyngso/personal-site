export type Category = 'Labor' | 'Politics' | 'Documentary';

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  roles: string[]; // e.g., ['Producer', 'Director', 'Editor']
  clientOutlet?: string; 
  context?: string; // Editorial context/description
  thumbnailVideo?: string; // Local path to mp4 (for immediate cinematic browsing)
  thumbnailStill?: string; // Local path to fallback/still image
  embedUrl?: string; // Link to the finished work (YouTube/Vimeo)
  credits?: ProjectCredit[];
  pressOutcomes?: string[]; // Press hits or tangible outcomes
  isDraft?: boolean; // Indicates the entry is pending full verification/assets
}

export const projects: Project[] = [
  // --- LABOR ---
  {
    slug: 'colectivo-mpu',
    title: 'Colectivo',
    category: 'Labor',
    clientOutlet: 'More Perfect Union',
    roles: ['Producer', 'Director', 'Editor'],
    context: 'A deeply reported look at the Colectivo organizing effort. [DRAFT: Awaiting full editorial context]',
    isDraft: true,
  },
  {
    slug: 'ups-part-timer',
    title: 'UPS $25 Part-Timer Campaign',
    category: 'Labor',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'kellogg-strike',
    title: 'Kellogg Strike',
    category: 'Labor',
    clientOutlet: 'More Perfect Union',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'amazon-organizing',
    title: 'Amazon Organizing',
    category: 'Labor',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'tdu-teamsters',
    title: 'TDU / Teamsters',
    category: 'Labor',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'essential-workers-democracy',
    title: 'Essential Workers for Democracy',
    category: 'Labor',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'art-institute-workers-united',
    title: 'Art Institute Workers United',
    category: 'Labor',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'gary-indiana-power',
    title: 'Gary Indiana Power Outage',
    category: 'Labor',
    clientOutlet: 'More Perfect Union',
    roles: [],
    isDraft: true,
  },

  // --- POLITICS ---
  {
    slug: 'miguel-alvelo-rivera',
    title: 'Miguel Alvelo Rivera for State Representative',
    category: 'Politics',
    roles: ['Media Strategist', 'Producer', 'Director'],
    context: 'Campaign media strategy and production for Miguel Alvelo Rivera. [DRAFT: Awaiting full editorial context]',
    isDraft: true,
  },
  {
    slug: 'claudia-peralta',
    title: 'Claudia Peralta for School Board',
    category: 'Politics',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'rossana-rodriguez-sanchez',
    title: 'Rossana Rodriguez-Sanchez',
    category: 'Politics',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'graciela-guzman',
    title: 'Graciela Guzmán',
    category: 'Politics',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'byron-sigcho-lopez',
    title: 'Byron Sigcho-Lopez',
    category: 'Politics',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'robin-kelly',
    title: 'Robin Kelly',
    category: 'Politics',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'raheem-uqdah',
    title: 'Raheem Uqdah',
    category: 'Politics',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'anthony-quezada',
    title: 'Anthony Quezada',
    category: 'Politics',
    roles: [],
    isDraft: true,
  },

  // --- DOCUMENTARY ---
  {
    slug: 'indiana-data-centers',
    title: 'Indiana Data Centers',
    category: 'Documentary',
    clientOutlet: 'More Perfect Union',
    roles: ['Director of Photography'],
    context: 'Visual documentation of data centers in Indiana. [DRAFT: Awaiting full editorial context]',
    isDraft: true,
  },
  {
    slug: 'indiana-solar-farms',
    title: 'Indiana Solar Farms',
    category: 'Documentary',
    roles: [],
    isDraft: true,
  },
  {
    slug: 'south-bend-doc',
    title: 'South Bend Documentary Work',
    category: 'Documentary',
    roles: [],
    isDraft: true,
  },
];

export const additionalCredits = [
  { show: 'Finding Your Roots', outlet: 'PBS', notes: '[DRAFT]' },
  { show: "I'll Be Gone in the Dark", outlet: 'HBO', notes: '[DRAFT]' },
  { show: 'Icons Unearthed', outlet: 'Nacelle', notes: '[DRAFT]' },
  { show: 'Nacelle / Netflix Productions', outlet: 'Netflix', notes: '[DRAFT: Various Roles]' },
  { show: 'Live Political Production', outlet: 'Various', notes: '[DRAFT]' },
];
