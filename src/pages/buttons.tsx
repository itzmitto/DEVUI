import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import ButtonGalleryCard from '../components/buttons/ButtonGalleryCard'
import { buttonCatalog, makeButtonTemplate, nextButtonNumber } from '../components/buttons/buttonCatalog'
import './buttons.css'

type GalleryMode = 'preview' | 'code'

export default function ButtonsPage() {
  const [mode, setMode] = useState<GalleryMode>('preview')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [copyError, setCopyError] = useState(false)
  const nextNumber = nextButtonNumber()
  const nextFile = `src/components/buttons/buttons${nextNumber}.tsx`

  async function copyToClipboard(source: string, id: string) {
    try {
      await navigator.clipboard.writeText(source)
      setCopiedId(id)
      setCopyError(false)
    } catch {
      setCopiedId(null)
      setCopyError(true)
    }
  }

  return (
    <div className="buttons-page">
      <nav className="btnlib-breadcrumb" aria-label="Broodkruimelnavigatie">
        <Link to="/">Home</Link><Icon name="ri-arrow-right-s-line" />
        <Link to="/componenten">Componenten</Link><Icon name="ri-arrow-right-s-line" />
        <span aria-current="page">Buttons</span>
      </nav>

      <header className="btnlib-header">
        <div className="btnlib-header-content">
          <span className="btnlib-eyebrow"><Icon name="ri-code-s-slash-line" /> COMPONENT LIBRARY / 01</span>
          <h1>Buttons<span>.</span></h1>
          <p>Een plek voor al je zelfgemaakte React-buttons. Bekijk iedere button live, open de TypeScript-code en kopieer je component met één klik.</p>
          <div className="btnlib-header-pills">
            <span><Icon name="ri-reactjs-line" /> React</span>
            <span><Icon name="ri-code-box-line" /> TypeScript</span>
            <span><Icon name="ri-palette-line" /> Tailwind CSS</span>
          </div>
        </div>
        <div className="btnlib-hero-stat" aria-label={`${buttonCatalog.length} plekken in de collectie`}>
          <div className="btnlib-stat-icon"><Icon name="ri-cursor-line" /></div>
          <span className="btnlib-stat-label">IN YOUR COLLECTION</span>
          <strong>{String(buttonCatalog.length).padStart(2, '0')}</strong>
          <span className="btnlib-stat-bottom">button-componenten <Icon name="ri-arrow-up-right-line" /></span>
        </div>
      </header>

      <section className="btnlib-library" aria-label="Buttons-bibliotheek">
        <div className="btnlib-heading-row">
          <div>
            <span className="btnlib-section-label">YOUR COMPONENTS</span>
            <h2>Alle buttons <span>({buttonCatalog.length})</span></h2>
            <p>De eerste twee zijn voorbeelden. Je hebt daarnaast 30 lege plekken om je eigen buttons te maken.</p>
          </div>
          <a className="btnlib-add-link" href="#button-toevoegen"><Icon name="ri-add-line" /> Eigen code toevoegen</a>
        </div>

        <div className="btnlib-preview-toolbar">
          <span><Icon name="ri-layout-grid-line" /> Bekijk alle buttons direct, zonder zoeken of filters.</span>
          <div className="btnlib-view-controls" role="group" aria-label="Weergave voor alle buttons">
            <button type="button" className={mode === 'preview' ? 'active' : ''} aria-pressed={mode === 'preview'} onClick={() => setMode('preview')}><Icon name="ri-layout-grid-line" /> Preview</button>
            <button type="button" className={mode === 'code' ? 'active' : ''} aria-pressed={mode === 'code'} onClick={() => setMode('code')}><Icon name="ri-code-s-slash-line" /> Code</button>
          </div>
        </div>

        <div className="btnlib-grid">
          {buttonCatalog.map(item => (
            <ButtonGalleryCard key={item.id} item={item} globalMode={mode} copied={copiedId === item.id} onCopy={copyToClipboard} />
          ))}
          <a href="#button-toevoegen" className="btnlib-new-slot">
            <span className="btnlib-new-slot-art"><Icon name="ri-add-line" /></span>
            <strong>Nog meer buttons?</strong>
            <span>Maak <code>buttons{nextNumber}.tsx</code> om een nieuwe plek toe te voegen.</span>
            <span className="btnlib-new-slot-cta">Bekijk hoe <Icon name="ri-arrow-right-line" /></span>
          </a>
        </div>
      </section>

      <section className="btnlib-create" id="button-toevoegen">
        <div className="btnlib-create-content">
          <span className="btnlib-section-label">BUILD YOUR OWN</span>
          <h2>Maak je eigen <span>button.</span></h2>
          <p>Open een van de 30 lege bestanden: <code>buttons3.tsx</code> t/m <code>buttons32.tsx</code>. Vervang de <code>return (...)</code> door jouw eigen JSX en pas eventueel <code>buttonMeta</code> aan. Je button verschijnt direct hierboven.</p>
          <div className="btnlib-path"><Icon name="ri-folder-code-line" /><code>src/components/buttons/buttons3.tsx</code></div>
          <p>Alle 30 plekken zijn al aangemaakt. Voor nóg een button kun je zelf dit nieuwe bestand toevoegen:</p>
          <div className="btnlib-path"><Icon name="ri-file-add-line" /><code>{nextFile}</code></div>
          <button type="button" className="btnlib-template-button" onClick={() => copyToClipboard(makeButtonTemplate(nextNumber), 'template')}>
            <Icon name={copiedId === 'template' ? 'ri-check-line' : 'ri-file-copy-line'} />
            {copiedId === 'template' ? 'Template gekopieerd' : 'Kopieer nieuwe button-template'}
            <Icon name="ri-arrow-right-line" />
          </button>
        </div>
        <div className="btnlib-create-code" aria-label="Voorbeeld van code voor een lege plek">
          <div className="btnlib-create-code-top"><span /><span /><span /><code>buttons3.tsx</code></div>
          <pre><span>export default function</span> Buttons3() {'{'}{String.fromCharCode(10)}  <span>return</span> ({String.fromCharCode(10)}    &lt;button type="button"&gt;{String.fromCharCode(10)}      <em>Mijn eigen button</em>{String.fromCharCode(10)}    &lt;/button&gt;{String.fromCharCode(10)}  ){String.fromCharCode(10)}{'}'}</pre>
        </div>
      </section>

      <p className="btnlib-announce" role="status" aria-live="polite">{copyError ? 'Kopiëren is mislukt. Controleer of je browser het klembord toestaat.' : copiedId ? 'Code is naar je klembord gekopieerd.' : ''}</p>
    </div>
  )
}
