// Pages Function : ville et pays du visiteur, déduits par Cloudflare de son IP (rien n'est stocké). PostHog tourne
// sans cookie et efface l'IP avant sa propre géolocalisation : Analytics.astro joint donc ces valeurs aux événements.
type CfRequest = Request & { cf?: { city?: string; country?: string } };

export const onRequestGet = ({ request }: { request: CfRequest }) =>
  Response.json(
    { $geoip_city_name: request.cf?.city, $geoip_country_code: request.cf?.country },
    { headers: { "Cache-Control": "no-store" } },
  );
