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

## Still open

- Prices: the Leistungen page says "Angebot nach dem Erstgespräch". Add a price list once fixed.
- No images yet — the design is type-led on purpose. Photos can be added like on the main site.
- English version, if the offer is ever sold outside Germany.
