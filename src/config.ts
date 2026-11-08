// Central company data for the back-office site. Edit here – every page reads from this file.
// Legal details are copied verbatim from the main site (bn77-alb/sion-website, src/config.ts)
// so the Impressum of both sites stays identical. Do not change without approval.

export const site = {
  name: 'SION Consulting',
  url: 'https://backoffice.sionconsulting.de',

  representative: 'Egla Nela',
  registry: 'M32405002D',
  vatId: '',

  street: 'Rruga Jordan Misja nr. 116',
  zip: '1001',
  city: 'Tirana',
  countryDe: 'Albanien',

  email: 'info@sionconsulting.de',

  // The recruiting site. Linked in the footer so the two offers stay separate but connected.
  mainSite: 'https://www.sionconsulting.de',

  // n8n workflow "SION – Website Forms", formType=backoffice -> info@sionconsulting.de.
  // NOTE: the webhook's allowedOrigins must contain https://backoffice.sionconsulting.de,
  // otherwise the browser blocks reading the response and the form shows an error.
  // Set to '' to fall back to opening the visitor's email program.
  formEndpoint: 'https://norvia2.app.n8n.cloud/webhook/sion-website-forms',
};

export const nav: { href: string; label: string }[] = [
  { href: '/', label: 'Start' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/kontakt', label: 'Kontakt' },
];
