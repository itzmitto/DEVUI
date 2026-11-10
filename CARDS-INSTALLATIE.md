# DevUI Cards — 30 componenten

Deze ZIP is een **update voor je bestaande DevUI-project**; hij bevat geen `.git`-map en geen extra `DevUI/`-map.

## Installeren (Linux-terminal)

```bash
cd /home/andre/Personal-Projects/DEVUI/DevUI
git status
unzip -o ~/Downloads/DevUI-CARDS-30-UPDATE.zip -d .
nvm use 24
npm run dev
```

Ga naar `http://localhost:5173/cards`.

## Waar schrijf je zelf code?

- `src/components/cards/cards1.tsx`: uitgewerkte testkaart.
- `src/components/cards/cards2.tsx` t/m `cards30.tsx`: 29 lege testplekken.
- Pas in een card het `cardMeta` object en de JSX in `return (...)` aan.
- De Cards-pagina ontdekt de TSX-bestanden automatisch.

De pagina gebruikt voor zijn weergave dezelfde bestaande `src/pages/buttons.css` en `src/components/buttons/ButtonGalleryCard.tsx` als de Buttons-pagina. Die bestanden **worden niet vervangen**. Daarom moet de eerdere Buttons-pagina-update al geïnstalleerd zijn.

## GitHub

```bash
npm run build
git add src/pages/cards.tsx src/pages/cards.css src/components/cards/ CARDS-INSTALLATIE.md
git commit -m "feat: add 30-card gallery with example"
git push origin main
```

Let op: `unzip -o` overschrijft bestaande versies van `cards.tsx`, `cards.css` en `cards1.tsx` t/m `cards30.tsx`. Maak eerst een commit als daar eigen werk in staat.
