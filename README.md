# pce-landing-

QR-code landing page for Phoenix Creed Energies. Plain static HTML/CSS/JS, so there is no build step.

- **Contacts and socials:** edit `CONTACTS` at the top of `app.js`. Entries left empty are hidden.
- **Gallery:** add photos to `assets/gallery/` and list them in `PROJECTS` in `app.js`.
- **Partners:** edit the "Partnered with" list in `index.html`.
- **Preview locally:** `python3 -m http.server`, then open http://localhost:8000

Brand colors, fonts and logo come from `pce-website` and `pce-mobile`.

## Hosting (GitHub Pages)
Settings → Pages → Deploy from branch → `main` / root. Point the QR code at the published URL.

## Deploy
`vercel deploy --prod` publishes to https://go.pceenergies.com (Vercel project `pce-landing`). The QR code in `qr/` points there.
