# DevUI – Cards grote preview

Deze patch verandert uitsluitend de galerij en voegt een popup toe. Je bestaande `cards1.tsx` tot en met `cards30.tsx` worden **niet** vervangen.

## Installeren

```bash
cd /home/andre/Personal-Projects/DEVUI/DevUI
# Controleer eerst of je eigen werk gecommit of veilig opgeslagen is:
git status
unzip -o ~/Downloads/DevUI-CARDS-POPUP-PATCH.zip -d .
nvm use 24
npm run dev
```

Open http://localhost:5173/cards en klik op het vergroot-icoon rechtsboven op een card. Sluiten kan met het kruisje, Escape, of een klik buiten het venster. Grote kaarten kunnen binnen de popup scrollen.

## Bestanden die de patch wijzigt
- `src/components/buttons/ButtonGalleryCard.tsx`: optionele expand-knop, alleen getoond op Cards.
- `src/pages/cards.tsx`: open/sluit state.
- `src/pages/cards.css`: knoppen en popup styling.
- `src/components/cards/CardPreviewModal.tsx`: nieuwe popup.

Je homepage, buttons, de kaarten zelf, en je `.git`-map blijven intact. Het gedeelde `ButtonGalleryCard.tsx` wordt overschreven, dus maak eerst een commit als je dit bestand zelf hebt aangepast.

## Naar GitHub (pas als de pagina werkt)

```bash
npm run build
git add src/components/buttons/ButtonGalleryCard.tsx src/components/cards/CardPreviewModal.tsx src/pages/cards.tsx src/pages/cards.css
git commit -m "feat: add fullscreen previews for cards"
git push origin main
```
