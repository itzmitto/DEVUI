<p align="center">
  <img src="docs/images/devui-banner.svg" alt="DevUI Code Library — Kleine componenten. Grote ideeën." width="100%" />
</p>

<h1 align="center">DevUI Code Library</h1>

<p align="center">
  Een groeiende collectie React-componenten om te ontdekken, te kopiëren en zelf verder te bouwen.<br />
  Van glowing buttons tot dashboard-cards — gemaakt als creatief frontend-oefenproject.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_19-15121E?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-15121E?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-15121E?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Vite_7-15121E?style=for-the-badge&logo=vite&logoColor=C4A2FF" alt="Vite 7" />
</p>

<p align="center">
  <a href="https://devui-two.vercel.app/"><strong>Bekijk de live demo ↗</strong></a>
  &nbsp; · &nbsp;
  <a href="#snel-starten">Snel starten</a>
  &nbsp; · &nbsp;
  <a href="#zelf-componenten-toevoegen">Zelf bouwen</a>
  &nbsp; · &nbsp;
  <a href="https://github.com/itzmitto/DEVUI/issues">Idee of bug melden</a>
</p>

## Een kijkje in DevUI

[![DevUI-homepage met donkere interface, paarse accenten en componentcategorieën](docs/images/devui-homepage.png)](https://devui-two.vercel.app/)

## Wat zit erin?

| Onderdeel           | Wat je kunt doen                                                                  |
| ------------------- | --------------------------------------------------------------------------------- |
| **Buttons**         | Bekijk gradient-, glow- en outline-ontwerpen en kopieer hun TSX-code.             |
| **Cards**           | Ontdek kaarten met lichteffecten, grafieken en dashboard-elementen.               |
| **Preview & code**  | Wissel tussen de component en de broncode; open cards ook in een grotere preview. |
| **Eigen ontwerpen** | Voeg een genummerd TSX-bestand toe. De galerij ontdekt het automatisch.           |
| **Navigatie**       | Gebruik de sidebar en zoek naar pagina's en categorieën.                          |

<details>
<summary><strong>✦ Bekijk een selectie van de button-ontwerpen</strong></summary>

![Gradient-, outline- en glow-buttons uit de DevUI-collectie](docs/images/devui-button-designs.png)

</details>

<details>
<summary><strong>✦ Bekijk een selectie van de card-ontwerpen</strong></summary>

![DevUI-cards met gekleurde lichtaccenten, een muziekspeler en dashboard-elementen](docs/images/devui-card-designs.png)

</details>

## Snel starten

Gebruik **Node.js 22.12+** of **20.19+** en npm.

```bash
git clone https://github.com/itzmitto/DEVUI.git
cd DEVUI
npm install
npm run dev
```

Open het adres dat Vite in je terminal toont, meestal [localhost:5173](http://localhost:5173).

### Handige commando's

| Commando            | Functie                                                    |
| ------------------- | ---------------------------------------------------------- |
| `npm run dev`       | Start de lokale ontwikkelserver.                           |
| `npm run typecheck` | Controleer de TypeScript-types.                            |
| `npm run build`     | Controleer de types en maak een productiebuild in `dist/`. |
| `npm run preview`   | Bekijk de productiebuild lokaal, nadat je hebt gebouwd.    |

## Zelf componenten toevoegen

De galerijen laden genummerde bestanden automatisch. Handmatig registreren is niet nodig.

| Component | Bestand                                 | Metadata     |
| --------- | --------------------------------------- | ------------ |
| Button    | `src/components/buttons/buttons<N>.tsx` | `buttonMeta` |
| Card      | `src/components/cards/cards<N>.tsx`     | `cardMeta`   |

Vervang `<N>` door een vrij nummer, bijvoorbeeld `buttons33.tsx` als dat nog niet bestaat.

Exporteer je component als `default` en geef hem een titel, beschrijving en tags:

```tsx
// src/components/buttons/buttons33.tsx

export const buttonMeta = {
  title: "Violet Glow",
  category: "Gradient",
  description: "Een paarse actieknop met een zachte glow.",
  tags: ["Glow", "CTA"],
};

export default function Buttons33() {
  return (
    <button
      type="button"
      className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
    >
      Get started
    </button>
  );
}
```

Voor een card werkt hetzelfde patroon: gebruik `cards<N>.tsx`, `cardMeta` en een bijpassende componentnaam, bijvoorbeeld `Cards43`.

Sla op en bekijk je ontwerp op `/buttons` of `/cards` in de app.

## Projectindeling

```text
DEVUI/
├── public/
│   ├── images/             # Illustraties en decoratie
│   └── downloads/          # Demo-starterpack
├── src/
│   ├── components/
│   │   ├── buttons/        # Buttons, metadata en galerijlogica
│   │   ├── cards/          # Cards en vergrote preview
│   │   ├── home/           # Hero, code-preview en componenten-grid
│   │   ├── layout/         # Sidebar, topbar en app-shell
│   │   └── ui/             # Gedeelde UI en Icon-wrapper
│   ├── data/navigation.ts  # Menu-links en zoekbare pagina's
│   ├── pages/              # Pagina's en bijbehorende stijlen
│   ├── App.tsx             # Routes
│   └── styles.css          # Tailwind-import en globale stijlen
└── docs/images/            # Banner en afbeeldingen voor deze README
```

## Iconen

DevUI gebruikt [Remix Icon](https://remixicon.com/), geladen via het stylesheet in `index.html`.

```tsx
<i className="ri-heart-line" aria-hidden="true" />
```

Geef een knop met alleen een icoon ook een toegankelijke naam:

```tsx
<button type="button" aria-label="Toevoegen aan favorieten">
  <i className="ri-heart-line" aria-hidden="true" />
</button>
```

## Projectstatus

DevUI is in ontwikkeling. Home, Buttons en Cards zijn uitgewerkt; verschillende andere categorieën bevatten nog placeholders. De starterpack-download is een demo.

Google Fonts en Remix Icon worden via internet geladen. De ridderillustratie en rotsdecoraties zijn gebaseerd op aangeleverde referentiebeelden.

## Meebouwen

Een idee voor een component of een verbetering? [Open een issue](https://github.com/itzmitto/DEVUI/issues) of maak een pull request.

Voer bij codewijzigingen eerst de controles uit:

```bash
npm run typecheck
npm run build
```

---

<p align="center">
  Gemaakt door <a href="https://github.com/itzmitto"><strong>itzmitto</strong></a><br />
  <sub>Ontdek een ontwerp. Maak het van jou.</sub>
</p>
