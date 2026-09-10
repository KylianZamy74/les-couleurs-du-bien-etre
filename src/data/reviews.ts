/**
 * Sélection de 4 avis Google réels (sur 25, note globale 5,0/5), choisis pour
 * leur pertinence SEO/GEO : mention d'un service précis, de la localisation,
 * texte complet (pas tronqué par Google). Récupérés le 2026-09-10 via
 * recherche Google ("Les couleurs du bien-être Sarah Vidal Villaz").
 * Ne pas inventer/modifier le contenu — uniquement ajuster la sélection.
 */
export const reviews = [
  {
    author: "Valéry Pilot",
    rating: 5,
    text: "Massage parfait, très professionnel ! Je recommande sans hésitation et mon entourage aussi ! Ambiance détendue, Sarah vit sa passion et nous aide à nous déconnecter, ou à nous reconnecter avec nous même au besoin.",
  },
  {
    author: "Zaz BLZ",
    rating: 5,
    text: "Une vraie parenthèse enchantée ! Massage aux pierres chaudes, initiation aux bols tibétains, et diapasons, une sensation de bien-être unique. Je recommande vraiment Sarah pour sa bienveillance et son professionnalisme.",
  },
  {
    author: "François Vidal",
    rating: 5,
    text: "Que du bonheur, Sarah sait dénouer les tensions et ré-énergiser. Moment de plénitude perché au-dessus d'Annecy, dans la bulle de détente que Sarah a su créer.",
  },
  {
    author: "Maïlys Drevon",
    rating: 5,
    text: "L'accompagnement proposé par Sarah est un véritable voyage intérieur, guidé par les outils et techniques qu'elle transmet. La clé du changement pour aller vers soi.",
  },
] as const;

export const reviewsSummary = {
  ratingValue: 5.0,
  reviewCount: 25,
  source: "Google",
};
