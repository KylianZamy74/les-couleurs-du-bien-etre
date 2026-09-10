export const SITE = {
  name: "Les couleurs du bien-être",
  tagline: "par Sarah Vidal",
  url: "https://www.lescouleursdubienetre.fr",
  description:
    "Praticienne en massages et soins énergétiques à Villaz, en Haute-Savoie. Sarah Vidal vous accompagne vers un mieux-être global : massages, reiki, bols tibétains et accompagnement personnalisé.",
  locality: "Villaz",
  region: "Haute-Savoie",
  areaServed: ["Annecy", "Villaz", "Haute-Savoie"],
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Massages",
    href: "/massages",
    children: [
      { label: "Massage intuitif", href: "/massages/massage-intuitif" },
      { label: "Massage aux pierres chaudes", href: "/massages/massage-pierres-chaudes" },
    ],
  },
  {
    label: "Soins énergétiques",
    href: "/soins-energetiques",
    children: [
      { label: "Reiki", href: "/soins-energetiques/reiki" },
      { label: "Bols tibétains", href: "/soins-energetiques/bols-tibetain" },
    ],
  },
  { label: "Accompagnement", href: "/accompagnement" },
];
