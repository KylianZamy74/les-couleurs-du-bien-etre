export const SITE = {
  name: "Les couleurs du bien-être",
  tagline: "par Sarah Vidal",
  url: "https://www.lescouleursdubienetre.fr",
  description:
    "Praticienne en massages et soins énergétiques à Villaz, en Haute-Savoie. Sarah Vidal vous accompagne vers un mieux-être global : massages, reiki, bols tibétains et accompagnement personnalisé.",
  locality: "Villaz",
  region: "Haute-Savoie",
  areaServed: ["Annecy", "Villaz", "Haute-Savoie"],
  // Coordonnées reprises de la fiche Google Business publique de Sarah (source
  // publique et autoritaire, pas inventées) — à lui faire confirmer avant mise en ligne.
  streetAddress: "Rte des Fontaines",
  postalCode: "74370",
  phone: "06 50 01 67 14",
  phoneIntl: "+33650016714",
  email: "couleursdubienetre@gmail.com",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Les+couleurs+du+bien-%C3%AAtre/@45.9622459,6.2162983,530m/data=!3m2!1e3!4b1!4m6!3m5!1s0x478b896354558f6f:0xf0f6f8cee70ee60a!8m2!3d45.9622459!4d6.2162983!16s%2Fg%2F11tp7sv5gr",
} as const;

// Réponse FAQ « comment réserver », commune à toutes les pages (pas de
// formulaire de contact : rendez-vous par téléphone ou e-mail).
export const BOOKING_ANSWER = `Le plus simple est de m'appeler au ${SITE.phone} ou de m'écrire à ${SITE.email} : nous convenons ensemble d'un créneau adapté à vos disponibilités.`;

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
      { label: "Bols tibétains", href: "/soins-energetiques/bols-tibetains" },
    ],
  },
  { label: "Accompagnement", href: "/accompagnement" },
  { label: "Blog", href: "/blog" },
];

// Pages publiées mais exclues de l'indexation (balise robots + sitemap).
export const NOINDEX_PATHS: string[] = ["/blog", "/404"];

export const CATEGORIES = {
  massages: { name: "Massages", path: "/massages", all: "tous les massages" },
  soins: { name: "Soins énergétiques", path: "/soins-energetiques", all: "tous les soins énergétiques" },
} as const;
