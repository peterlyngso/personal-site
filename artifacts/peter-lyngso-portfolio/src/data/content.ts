export type Category = 'Labor' | 'Politics' | 'Documentary';
export type MediaKind = 'image' | 'video';

export interface ProjectCredit {
  role: string;
  name: string;
}

/**
 * A media item is intentionally content-owned so editorial changes do not
 * require changing page layout code. A missing src is a valid unassigned item
 * and renders as the site's dark media fallback.
 */
export interface MediaItem {
  kind: MediaKind;
  src?: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  objectPosition?: string;
  poster?: string;
}

export interface ProjectMedia {
  hero: MediaItem;
  previewLoop?: MediaItem;
  finishedWorkUrl?: string;
  gallery?: MediaItem[];
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  roles: string[];
  clientOutlet?: string;
  context?: string;
  media: ProjectMedia;
  credits?: ProjectCredit[];
  pressOutcomes?: string[];
}

export interface CategoryDoor {
  category: Category;
  projectSlug: string;
  media: MediaItem;
}

const unassignedMedia = (title: string): ProjectMedia => ({
  hero: {
    kind: 'image',
    alt: `${title} project media`,
    aspectRatio: '1.66 / 1',
  },
});

const representativeMedia = (
  src: string,
  alt: string,
  aspectRatio = '1.66 / 1',
): MediaItem => ({
  kind: 'image',
  src,
  alt,
  aspectRatio,
  objectPosition: '50% 50%',
});

export const projects: Project[] = [
  // --- LABOR ---
  {
    slug: 'colectivo-mpu',
    title: 'Colectivo',
    category: 'Labor',
    clientOutlet: 'More Perfect Union',
    roles: ['Producer', 'Director', 'Editor'],
    media: {
      hero: representativeMedia('/media/peter-labor-selection.jpg', 'Colectivo project media'),
      gallery: [
        representativeMedia('/media/peter-labor-selection.jpg', 'Colectivo project media, frame one'),
      ],
    },
  },
  {
    slug: 'ups-part-timer',
    title: 'UPS $25 Part-Timer Campaign',
    category: 'Labor',
    roles: [],
    media: unassignedMedia('UPS $25 Part-Timer Campaign'),
  },
  {
    slug: 'kellogg-strike',
    title: 'Kellogg Strike',
    category: 'Labor',
    clientOutlet: 'More Perfect Union',
    roles: [],
    media: unassignedMedia('Kellogg Strike'),
  },
  {
    slug: 'amazon-organizing',
    title: 'Amazon Organizing',
    category: 'Labor',
    roles: [],
    media: unassignedMedia('Amazon Organizing'),
  },
  {
    slug: 'tdu-teamsters',
    title: 'TDU / Teamsters',
    category: 'Labor',
    roles: [],
    media: unassignedMedia('TDU / Teamsters'),
  },
  {
    slug: 'essential-workers-democracy',
    title: 'Essential Workers for Democracy',
    category: 'Labor',
    roles: [],
    media: unassignedMedia('Essential Workers for Democracy'),
  },
  {
    slug: 'art-institute-workers-united',
    title: 'Art Institute Workers United',
    category: 'Labor',
    roles: [],
    media: unassignedMedia('Art Institute Workers United'),
  },
  {
    slug: 'gary-indiana-power',
    title: 'Gary Indiana Power Outage',
    category: 'Labor',
    clientOutlet: 'More Perfect Union',
    roles: [],
    media: unassignedMedia('Gary Indiana Power Outage'),
  },

  // --- POLITICS ---
  {
    slug: 'miguel-alvelo-rivera',
    title: 'Miguel Alvelo Rivera for State Representative',
    category: 'Politics',
    roles: ['Media Strategist', 'Producer', 'Director'],
    media: {
      hero: representativeMedia('/media/peter-politics-selection.jpg', 'Miguel Alvelo Rivera project media'),
    },
  },
  {
    slug: 'claudia-peralta',
    title: 'Claudia Peralta for School Board',
    category: 'Politics',
    roles: [],
    media: unassignedMedia('Claudia Peralta for School Board'),
  },
  {
    slug: 'rossana-rodriguez-sanchez',
    title: 'Rossana Rodriguez-Sanchez',
    category: 'Politics',
    roles: [],
    media: unassignedMedia('Rossana Rodriguez-Sanchez'),
  },
  {
    slug: 'graciela-guzman',
    title: 'Graciela Guzmán',
    category: 'Politics',
    roles: [],
    media: unassignedMedia('Graciela Guzmán'),
  },
  {
    slug: 'byron-sigcho-lopez',
    title: 'Byron Sigcho-Lopez',
    category: 'Politics',
    roles: [],
    media: unassignedMedia('Byron Sigcho-Lopez'),
  },
  {
    slug: 'robin-kelly',
    title: 'Robin Kelly',
    category: 'Politics',
    roles: [],
    media: unassignedMedia('Robin Kelly'),
  },
  {
    slug: 'raheem-uqdah',
    title: 'Raheem Uqdah',
    category: 'Politics',
    roles: [],
    media: unassignedMedia('Raheem Uqdah'),
  },
  {
    slug: 'anthony-quezada',
    title: 'Anthony Quezada',
    category: 'Politics',
    roles: [],
    media: unassignedMedia('Anthony Quezada'),
  },

  // --- DOCUMENTARY ---
  {
    slug: 'indiana-data-centers',
    title: 'Indiana Data Centers',
    category: 'Documentary',
    clientOutlet: 'More Perfect Union',
    roles: ['Director of Photography'],
    media: {
      hero: representativeMedia('/media/peter-documentary-selection.jpg', 'Indiana Data Centers project media'),
    },
  },
  {
    slug: 'indiana-solar-farms',
    title: 'Indiana Solar Farms',
    category: 'Documentary',
    roles: [],
    media: unassignedMedia('Indiana Solar Farms'),
  },
  {
    slug: 'south-bend-doc',
    title: 'South Bend Documentary Work',
    category: 'Documentary',
    roles: [],
    media: {
      hero: representativeMedia('/media/peter-documentary-selection.jpg', 'South Bend Documentary Work project media'),
    },
  },
];

export const homeCuration: {
  doors: CategoryDoor[];
  selectedWork: string[];
} = {
  doors: [
    {
      category: 'Labor',
      projectSlug: 'colectivo-mpu',
      media: representativeMedia('/media/peter-labor-door.jpg', 'Labor category representative media'),
    },
    {
      category: 'Politics',
      projectSlug: 'miguel-alvelo-rivera',
      media: representativeMedia('/media/peter-politics-door.jpg', 'Politics category representative media'),
    },
    {
      category: 'Documentary',
      projectSlug: 'indiana-data-centers',
      media: representativeMedia('/media/peter-documentary-door.jpg', 'Documentary category representative media'),
    },
  ],
  selectedWork: [
    'colectivo-mpu',
    'miguel-alvelo-rivera',
    'indiana-data-centers',
    'kellogg-strike',
    'south-bend-doc',
  ],
};

export const additionalCredits = [
  { show: 'Finding Your Roots', outlet: 'PBS' },
  { show: "I'll Be Gone in the Dark", outlet: 'HBO' },
  { show: 'Icons Unearthed', outlet: 'Nacelle' },
  { show: 'Nacelle / Netflix Productions', outlet: 'Netflix' },
  { show: 'Live Political Production', outlet: 'Various' },
];