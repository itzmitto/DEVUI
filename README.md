# DevUI Code Library

React + TypeScript + Tailwind CSS v4 + Vite. De homepage is gebaseerd op de meegegeven screenshot, met zelf gegenereerde transparante ridder- en rotsillustraties.

## Starten

Zorg dat Node.js 22.12+ of 20.19+ is geïnstalleerd en voer uit:

```bash
npm install
npm run dev
```

Open het adres dat Vite in de terminal toont, meestal http://localhost:5173.

Voor controle en productie:

```bash
npm run typecheck
npm run build
```

## Projectindeling

- `src/pages/Home.tsx` is de homepage.
- `src/pages/buttons.tsx`, `cards.tsx` enzovoort zijn alvast klikbare maar lege vervolgpagina's.
- `src/components/buttons/buttons1.tsx` is de paarse gradientknop.
- `src/components/buttons/buttons2.tsx` is de outline/download-knop.
- `src/components/layout/` bevat de sidebar, topbar en standaard page-placeholder.
- `src/components/home/` bevat de hero, de code-preview, feature-strip en kaarten.
- `src/data/navigation.ts` bevat alle menu-links en routes voor zoeken.
- `src/styles.css` bevat Tailwind-import én de pixelgerichte stijlen.
- `public/images/knight.png` en `purple-cliffs.png` zijn transparante, gegenereerde assets.
- `public/downloads/devui-starter-pack.zip` is de demo-download voor de starterpackknop.

## Iconen

Het Remix Icon-stylesheet wordt via een **CDN-link in `index.html`** geladen. Gebruik bijvoorbeeld:

```tsx
<i className="ri-heart-line" aria-hidden="true" />
```

Alle iconen: https://remixicon.com

## Belangrijk

De pagina's behalve Home zijn opzettelijk eenvoudige placeholders, zodat je ze zelf kunt bouwen. De heroillustratie is een nieuwe, vergelijkbare afbeelding en geen identieke kopie van het bronpersonage. De CDN-iconen en Google Fonts laden via internet.

## Aanpassing van de homepage (10 november 2026)

- `public/images/knight-cutout.png` is de nieuwe ridderillustratie, uit de referentie losgemaakt met zachte transparante randen. Geen zichtbare screenshot-rechthoek en geen meegekopieerde navigatie.
- `src/components/home/Hero.tsx` gebruikt deze afbeelding direct.
- De bergdecoratie in de sidebar en de Starter Pack-kaart zijn opnieuw gepositioneerd.
- Op brede schermen heeft de content een maximale breedte van 1440px voor evenwichtige verhoudingen.

**Belangrijk bij screenshots vergelijken:** de aangeleverde doelafbeelding is 1672 × 941 pixels. Een opname van 1852 × 1180 pixels toont door de andere resolutie en eventuele browserzoom een andere hoeveelheid lege ruimte. Vergelijk bij voorkeur beide op 100% zoom en hetzelfde browserformaat.
