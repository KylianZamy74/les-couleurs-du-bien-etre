import { SITE } from "./site";
import { reviews, reviewsSummary } from "./reviews";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE.name,
  alternateName: `${SITE.name} ${SITE.tagline}`,
  url: SITE.url,
  image: new URL("/images/logo-couleurs-du-bien-etre.webp", SITE.url).toString(),
  description: SITE.description,
  telephone: SITE.phoneIntl,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.streetAddress,
    postalCode: SITE.postalCode,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: "FR",
  },
  areaServed: SITE.areaServed,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewsSummary.ratingValue,
    reviewCount: reviewsSummary.reviewCount,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
};

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: new URL(opts.path, SITE.url).toString(),
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: SITE.name,
    },
    areaServed: SITE.areaServed,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}
