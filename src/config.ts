// Central company data for the back-office site. Edit here – every page reads from this file.
// Legal details are copied verbatim from the main site (bn77-alb/sion-website, src/config.ts)
// so the Impressum of both sites stays identical. Do not change without approval.

export const site = {
  name: 'SION Consulting',
  // Product name for the back-office offer, as agreed in the preview (06.11.2026).
  brand: 'Sion Office',
  brandLine: 'Backoffice-Service von SION Consulting',
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
  { href: '/preise', label: 'Preise' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/kontakt', label: 'Kontakt' },
];

// ---------------------------------------------------------------------------
// Price list – agreed 06.11.2026. All prices net, plus VAT where applicable.
// Change here; the Preise page and the price mentions read from this.
// ---------------------------------------------------------------------------
export type Package = {
  id: string;
  name: string;
  amount: string;
  unit: string;
  text: string;
  highlight?: boolean;
  tag?: string;
};

export const packages: Package[] = [
  {
    id: 'test',
    name: 'Test',
    amount: '690 €',
    unit: 'einmalig',
    text: '40 Stunden in 4 Wochen, eine feste Ansprechperson. Wird bei Weiterarbeit angerechnet.',
    highlight: true,
    tag: 'Zum Start',
  },
  {
    id: 'flex',
    name: 'Flex',
    amount: '29 €',
    unit: 'pro Stunde',
    text: 'Ab 20 Stunden im Monat, monatlich kündbar. Ideal für kleinere Betriebe und Spitzenzeiten.',
  },
  {
    id: 'halb',
    name: 'Halbe Kraft',
    amount: '1.590 €',
    unit: 'pro Monat',
    text: '80 Stunden im Monat, jede Woche dieselbe Person.',
  },
  {
    id: 'voll',
    name: 'Volle Kraft',
    amount: '2.890 €',
    unit: 'pro Monat',
    text: '160 Stunden im Monat, eine Person nur für Sie. 3 Monate Mindestlaufzeit, danach monatlich.',
  },
];

export const setupFee = 'Einrichtung (Zugänge, Vertragspaket, Einarbeitung in Ihre Abläufe): 490 € einmalig, entfällt nach dem Test.';

// Comparison: own office hire vs Minijob vs Sion Office
export const comparison: { label: string; own: string; mini: string; sion: string }[] = [
  {
    label: 'Suche und Einarbeitung',
    own: 'Stellenanzeige, Bewerbungen, Einarbeitung',
    mini: 'Stellenanzeige, Einarbeitung',
    sion: 'Erstgespräch, dann Start mit dem Test',
  },
  {
    label: 'Nebenkosten',
    own: 'Sozialabgaben, Arbeitsplatz, Software',
    mini: 'Pauschalabgaben von rund 30 %',
    sion: 'Keine – Sie zahlen nur die Stunden',
  },
  {
    label: 'Urlaub und Krankheit',
    own: 'Arbeit bleibt liegen',
    mini: 'Arbeit bleibt liegen',
    sion: 'Vertretung aus unserem Team',
  },
  {
    label: 'Bindung',
    own: 'Gesetzliche Kündigungsfristen',
    mini: 'Gesetzliche Kündigungsfristen',
    sion: 'Flex monatlich kündbar',
  },
];
