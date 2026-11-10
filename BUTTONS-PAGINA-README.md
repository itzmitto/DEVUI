# DevUI – Buttons-pagina met 30 lege plekken

Deze ZIP kun je **direct uitpakken in je bestaande DEVUI GitHub-repo**. Er zit geen `.git` in. Je homepage, `src/styles.css`, `buttons1.tsx` en `buttons2.tsx` worden **niet** overschreven.

## Wat verandert?

- Geen zoekbalk en geen categorie-filterbalk meer.
- Preview / Code per kaart en de kopieerknop blijven werken.
- 30 **lege button-componenten** toegevoegd: `src/components/buttons/buttons3.tsx` t/m `buttons32.tsx`.
- Je bestaande `buttons1.tsx` en `buttons2.tsx` blijven ongewijzigd. Er zijn dus **32 componentkaarten** (2 voorbeelden + 30 lege plekken), plus een extra kaart om nieuwe buttons aan te maken.
- Je kunt alle 30 plekken apart invullen. Geen aanpassing aan de router of catalogus nodig.

## Installatie (Kubuntu)

```bash
cd /home/andre/Personal-Projects/DEVUI/DevUI
git status
unzip -o ~/Downloads/DevUI-BUTTONS-30-LEGE-SLOTS.zip -d .
nvm use 24
npm run dev
```

Open `http://localhost:5173/buttons`.

## Waar plak ik mijn eigen button-code?

Open **één bestand per button**. Bijvoorbeeld:

- Button 03: `src/components/buttons/buttons3.tsx`
- Button 04: `src/components/buttons/buttons4.tsx`
- Button 05: `src/components/buttons/buttons5.tsx`
- ...
- Button 32: `src/components/buttons/buttons32.tsx`

Alle bestanden bevatten een `buttonMeta` (titel en beschrijving) en een `default` React-component.
**Vervang in de `return (...)` de tijdelijke button door jouw eigen JSX**. Gebruik bijvoorbeeld Tailwind-classes. Wil je je card een naam geven, verander dan `buttonMeta.title` en `description`.

Voorbeeld voor `buttons3.tsx`:

```tsx
export const buttonMeta = {
  title: 'Mijn glow button',
  description: 'Een paarse button met glow-effect.',
  category: 'Eigen ontwerp',
  tags: ['Glow'],
}

export default function Buttons3() {
  return (
    <button type="button" className="rounded-xl bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-500">
      Klik hier
    </button>
  )
}
```

Het resultaat verschijnt meteen bij Button 03; het Code-tabblad toont de echte TSX-broncode uit hetzelfde bestand. De bestandsnaam moet precies `buttonsN.tsx` zijn en de component moet een `default export` hebben.

Voor button 33 en hoger kun je op de website onderaan het nieuwe template kopiëren.

## GitHub

```bash
npm run build
git add src/pages/buttons.tsx src/pages/buttons.css src/components/buttons src/vite-env.d.ts BUTTONS-PAGINA-README.md
git commit -m "feat: prepare 30 custom button slots"
git push origin main
```
