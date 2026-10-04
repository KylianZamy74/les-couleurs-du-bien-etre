/**
 * Sélection de 5 avis Google réels (sur 27, note globale 5,0/5, vérifié le 2026-09-29), choisis pour
 * leur pertinence SEO/GEO : mention d'un service précis, de la localisation,
 * texte complet (pas tronqué par Google). Récupérés le 2026-09-10 via
 * recherche Google ("Les couleurs du bien-être Sarah Vidal Villaz").
 * Ne pas inventer/modifier le contenu — uniquement ajuster la sélection.
 */
export const reviews = [
  {
    // Avis de septembre 2026 (séance d'août), mis en avant à la demande de Kylian.
    author: "Johann Le Rolland",
    rating: 5,
    text: "C'est m'a 7ème scéance de 1h30 avec Sarah et c'est toujours aussi agréable, j'arrive avec des tensions de partout et je repars peace and love et détendue comme jamais😌\nSarah a vraiment un don !!\n\nSi vous avez des tensions dû à votre travail ou pour un moment de lâcher prise, c'est l'endroit rêvé",
  },
  {
    author: "Valéry Pilot",
    rating: 5,
    text: "Massage parfait, très professionnel ! Je recommande sans hésitation et mon entourage aussi ! Ambiance détendue, Sarah vit sa passion et nous aide à nous déconnecter, ou à nous reconnecter avec nous même au besoin.",
  },
  {
    author: "Zaz BLZ",
    rating: 5,
    text: "Une vraie parenthèse enchantée ! Massage aux pierres chaudes, initiation aux bols tibétains, et diapasons, une sensation de bien-être unique. Je recommande vraiment Sarah pour sa bienveillance et son professionnalisme.",
  },
  {
    author: "Janin Alyson",
    rating: 5,
    text: "J'ai eu la chance de découvrir les services de cette professionnelle du massage et de l'accompagnement personnalisé, et je ne peux que la recommander chaleureusement ! Son approche est à la fois douce et efficace, et elle sait vraiment s'adapter à chaque besoin. Ses massages sont tout simplement incroyables, particulièrement l'hiver, quand l'ambiance au coin du feu et la table chauffante ajoutent un confort exceptionnel. Un vrai moment de détente et de bien-être ! Elle est d'une aide précieuse. Vous ne serez pas déçu !",
  },
  {
    author: "Maïlys Drevon",
    rating: 5,
    text: "L'accompagnement proposé par Sarah est un véritable voyage intérieur, guidé par les outils et techniques qu'elle transmet. La clé du changement pour aller vers soi.",
  },
] as const;

export const reviewsSummary = {
  ratingValue: 5.0,
  reviewCount: 27,
  source: "Google",
};
