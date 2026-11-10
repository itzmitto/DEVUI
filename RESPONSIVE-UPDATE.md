# DevUI responsive patch

**Wat verandert er?**

- De homepage is niet meer begrensd op 1440px: de breedte past zich aan het scherm aan.
- Vanaf 1801px groeien hero, ridder, codekaart, typografie en componentkaarten mee.
- Op tablets (761–1120px) opent de sidebar via een mobiel menuknopje.
- De componentkaarten schakelen van vier naar twee naar één kolom.
- Kleine horizontale overflow door decoratieve achtergrondlagen is weggewerkt.

**Installatie (Linux):**

```bash
cd /home/andre/Personal-Projects/DEVUI/DevUI
unzip -o ~/Downloads/DevUI-RESPONSIVE-CSS-PATCH.zip -d .
npm run dev
```

Daarna, als het er goed uitziet:

```bash
git add src/styles.css RESPONSIVE-UPDATE.md
git commit -m "fix: improve DevUI responsive layout on desktop and mobile"
git push origin main
```

Druk `Ctrl + 0` in de browser om het zoomniveau terug op 100% te zetten. Bestaande `.git` blijft behouden.
