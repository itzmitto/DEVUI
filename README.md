# DevUI Code Library

React + TypeScript + Tailwind CSS v4 + Vite. De homepage is gebaseerd op de meegegeven screenshot, met een ridderasset die is aangepast op basis van de referentiescreenshot en bijpassende transparante rotsillustraties.

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
- `public/images/knight-reference.png` is de ridderafbeelding die op de homepage wordt gebruikt; `knight.png` is de eerdere ridderillustratie. `purple-cliffs.png` en `rock-accent.png` zijn de rotsillustraties.
- `public/downloads/devui-starter-pack.zip` is de demo-download voor de starterpackknop.

## Iconen

Het Remix Icon-stylesheet wordt via een **CDN-link in `index.html`** geladen. Gebruik bijvoorbeeld:

```tsx
<i className="ri-heart-line" aria-hidden="true" />
```

Alle iconen: https://remixicon.com

## Belangrijk

De pagina's behalve Home zijn opzettelijk eenvoudige placeholders, zodat je ze zelf kunt bouwen. De hero gebruikt een vrijgemaakte uitsnede van de meegeleverde referentiescreenshot. De overige details kunnen door browser, lettertypes en schermformaat licht afwijken. De CDN-iconen en Google Fonts laden via internet.
