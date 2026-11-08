# sion-backoffice

Back-office website for SION Consulting — **https://backoffice.sionconsulting.de**

Separate from the recruiting site (`bn77-alb/sion-website`) so prospects for the back-office
offer (Steuerkanzleien, Hausverwaltungen, KMU) never land on the driver-placement pages.

## Stack

Astro, static output, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push
to `main`. The custom domain comes from `public/CNAME`.

German only for now. The recruiting site stays DE + EN.

## Local

```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

## Where to edit what

| What | File |
|---|---|
| Company data, address, e-mail, form endpoint | `src/config.ts` |
| Navigation | `src/config.ts` (`nav`) |
| Prices and the comparison table | `src/config.ts` (`packages`, `setupFee`, `comparison`) |
| Pages | `src/pages/*.astro` |
| Inquiry form fields | `src/components/AnfrageForm.astro` |
| Form submit logic | `src/scripts/forms.ts` |
| Design tokens and shared classes | `src/styles/global.css` (copied from the main site) |

## Forms

The inquiry form posts `formType=backoffice` to the n8n workflow **SION – Website Forms**
(`https://norvia2.app.n8n.cloud/webhook/sion-website-forms`), which e-mails it to
`info@sionconsulting.de`.

**The webhook's `allowedOrigins` must include `https://backoffice.sionconsulting.de`.**
Without it the browser cannot read the response and the form shows an error even though the
data arrived.

## DNS

`backoffice` CNAME → `bn77-alb.github.io`, managed at Squarespace (registrar and DNS for
sionconsulting.de). The apex and `www` stay on the recruiting site.

## Prices (agreed 06.11.2026)

| Package | Price | What it is |
|---|---|---|
| Test | 690 € once | 40 hours in 4 weeks, credited against later work |
| Flex | 29 €/hour | from 20 hours a month, cancellable monthly |
| Halbe Kraft | 1.590 €/month | 80 hours a month, same person every week |
| Volle Kraft | 2.890 €/month | 160 hours a month, 3 months minimum, then monthly |

Setup (access, contract pack, onboarding) 490 € once, waived after the test.
All net, plus VAT where applicable.

## Still open

- No images yet — the design is type-led on purpose. Photos can be added like on the main site.
- Phone: this site uses **+49 1520 9511259**, a separate back-office line. The recruiting number
  (+49 176 72664625) stays off this site on purpose, so calls here don't mix with candidate traffic.
- English version, if the offer is ever sold outside Germany.
- Redirect `/back-office` on the main site to this domain (one line in that repo's astro.config.mjs).
