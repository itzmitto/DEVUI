# DevUI - Buttons pagina

Deze ZIP is een **patch** voor de bestaande DevUI GitHub-repository. Er zit geen `.git`, `package.json` of globale `src/styles.css` in, en ook geen `buttons1.tsx` of `buttons2.tsx`. Je bestaande homepage, sidebar, routings en responsive fixes blijven behouden.

## Installeren (Kubuntu / Linux)

```bash
cd /home/andre/Personal-Projects/DEVUI/DevUI

git status
unzip -o ~/Downloads/DevUI-BUTTONS-PAGINA-UPDATE.zip -d .
nvm use 24
npm run dev
```

Open `http://localhost:5173/buttons`.

## Wat zit er in?

- `src/pages/buttons.tsx`: de nieuwe pagina, met zoeken, filters, preview/code, en instructies.
- `src/pages/buttons.css`: de eigen responsive CSS; verandert niets aan `src/styles.css`.
- `src/components/buttons/ButtonGalleryCard.tsx`: één herbruikbare kaart per button.
- `src/components/buttons/buttonCatalog.ts`: vindt automatisch `buttons1.tsx`, `buttons2.tsx`, enzovoort.
- Bestaande `buttons1.tsx` en `buttons2.tsx` worden **niet** aangepast; de pagina gebruikt deze bestanden zoals ze al zijn.
- `src/vite-env.d.ts`: Vite-types voor de automatische bestandenzoeker.

## Zelf een button toevoegen

1. Maak `src/components/buttons/buttons3.tsx`.
2. Kopieer het template via de knop **Kopieer starter-template** onderaan `/buttons`.
3. Plak in het nieuwe bestand, pas de button en `buttonMeta` aan en sla op.

**Belangrijk:** de bestandsnamen moeten `buttons1.tsx`, `buttons2.tsx`, `buttons3.tsx`, enz. zijn. Gebruik een *default export* React-component die zonder verplichte props kan renderen. `buttonMeta` is optioneel; zonder metadata heet de kaart automatisch 'Button 3'.

Je hoeft de router of bibliotheek niet handmatig aan te passen. De Vite-server herlaadt de pagina automatisch wanneer je een bestand toevoegt.

## GitHub

Na het testen:

```bash
git add src/pages/buttons.tsx src/pages/buttons.css src/components/buttons src/vite-env.d.ts BUTTONS-PAGINA-README.md
git commit -m "feat: add extensible buttons component gallery"
git push origin main
```
