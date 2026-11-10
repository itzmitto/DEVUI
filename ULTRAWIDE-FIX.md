# DevUI ultrawide fix

Deze patch behoudt de bekende homepage op 1672 px en past **alleen** schermen van 2400 CSS-pixels of breder aan. Sidebar, navigatie, hero, tekst, buttons, codekaart en preview-elementen worden daar proportioneel groter gemaakt. Er wordt **geen** CSS `zoom` of `transform: scale` gebruikt voor de totale pagina.

## Eerst controleren

1. Chrome: `Ctrl + 0` (zoom 100%).
2. Terminal: `nvm use 24` en controleer `node -v` (Node v24.x).
3. `npm run dev` moet zonder foutmelding starten.

## Patch installeren (in bestaande GitHub repo)

```bash
cd /home/andre/Personal-Projects/DEVUI/DevUI
unzip -o ~/Downloads/DevUI-ULTRAWIDE-FIX.zip -d .
nvm use 24
npm run dev
```

Na visuele controle:

```bash
git add src/styles.css ULTRAWIDE-FIX.md
git commit -m "fix: improve DevUI sizing on ultrawide monitors"
git push origin main
```

De ZIP bevat geen `.git` en verandert geen React-routes of afbeeldingen.
