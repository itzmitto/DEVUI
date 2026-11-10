import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import ButtonGalleryCard from '../components/buttons/ButtonGalleryCard'
import {
  buttonCatalog,
  buttonCategories,
  makeButtonTemplate,
  nextButtonNumber,
} from '../components/buttons/buttonCatalog'
import './buttons.css'

type GalleryMode = 'preview' | 'code'

export default function ButtonsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Alle buttons')
  const [mode, setMode] = useState<GalleryMode>('preview')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [copyError, setCopyError] = useState(false)

  const visibleButtons = useMemo(() => {
    const query = search.toLocaleLowerCase('nl').trim()
    return buttonCatalog.filter(item => {
      const matchesCategory = category === 'Alle buttons' || category === item.category
      const content = [item.title, item.description, item.category, item.fileName, ...item.tags].join(' ').toLocaleLowerCase('nl')
      return matchesCategory && (!query || content.includes(query))
    })
  }, [search, category])

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

  function clearFilters() {
    setSearch('')
    setCategory('Alle buttons')
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
          <p>Een verzameling van jouw eigen React-buttons. Bekijk hoe ze werken, open de TypeScript-code en kopieer wat je nodig hebt.</p>
          <div className="btnlib-header-pills">
            <span><Icon name="ri-reactjs-line" /> React</span>
            <span><Icon name="ri-code-box-line" /> TypeScript</span>
            <span><Icon name="ri-palette-line" /> Tailwind CSS</span>
          </div>
        </div>
        <div className="btnlib-hero-stat" aria-label={`${buttonCatalog.length} buttons in de collectie`}>
          <div className="btnlib-stat-icon"><Icon name="ri-cursor-line" /></div>
          <span className="btnlib-stat-label">IN YOUR COLLECTION</span>
          <strong>{String(buttonCatalog.length).padStart(2, '0')}</strong>
          <span className="btnlib-stat-bottom">eigen componenten <Icon name="ri-arrow-up-right-line" /></span>
        </div>
      </header>

      <section className="btnlib-library" aria-label="Buttons-bibliotheek">
        <div className="btnlib-heading-row">
          <div>
            <span className="btnlib-section-label">EXPLORE COLLECTION</span>
            <h2>Alle buttons <span>({buttonCatalog.length})</span></h2>
            <p>Elke nieuwe <code>buttonsN.tsx</code> verschijnt automatisch in deze lijst.</p>
          </div>
          <a className="btnlib-add-link" href="#button-toevoegen"><Icon name="ri-add-line" /> Nieuwe button toevoegen</a>
        </div>

        <div className="btnlib-toolbar">
          <label className="btnlib-search">
            <Icon name="ri-search-line" />
            <input type="search" placeholder="Zoek op naam, stijl of bestand..." value={search} onChange={event => setSearch(event.target.value)} aria-label="Zoek buttons" />
            {search && <button type="button" aria-label="Zoekopdracht wissen" onClick={() => setSearch('')}><Icon name="ri-close-line" /></button>}
          </label>
          <div className="btnlib-view-controls" role="group" aria-label="Standaardweergave">
            <button type="button" className={mode === 'preview' ? 'active' : ''} aria-pressed={mode === 'preview'} onClick={() => setMode('preview')}><Icon name="ri-layout-grid-line" /> Preview</button>
            <button type="button" className={mode === 'code' ? 'active' : ''} aria-pressed={mode === 'code'} onClick={() => setMode('code')}><Icon name="ri-code-s-slash-line" /> Code</button>
          </div>
        </div>

        <div className="btnlib-filter-row" role="group" aria-label="Filter op categorie">
          {buttonCategories.map(item => (
            <button type="button" key={item} aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>
              {item === 'Alle buttons' && <Icon name="ri-apps-2-line" />}
              {item}
              <span>{item === 'Alle buttons' ? buttonCatalog.length : buttonCatalog.filter(button => button.category === item).length}</span>
            </button>
          ))}
        </div>

        <div className="btnlib-result-row">
          <span><Icon name="ri-checkbox-circle-line" /> {visibleButtons.length} {visibleButtons.length === 1 ? 'component' : 'componenten'} gevonden</span>
          <span>Gesorteerd op bestandsnummer <Icon name="ri-arrow-down-line" /></span>
        </div>

        {visibleButtons.length > 0 ? (
          <div className="btnlib-grid">
            {visibleButtons.map(item => (
              <ButtonGalleryCard key={item.id} item={item} globalMode={mode} copied={copiedId === item.id} onCopy={copyToClipboard} />
            ))}
            {category === 'Alle buttons' && !search.trim() && (
              <a href="#button-toevoegen" className="btnlib-new-slot">
                <span className="btnlib-new-slot-art"><Icon name="ri-add-line" /></span>
                <strong>Jouw volgende button</strong>
                <span>Voeg <code>buttons{nextNumber}.tsx</code> toe om hier je volgende component te tonen.</span>
                <span className="btnlib-new-slot-cta">Bekijk hoe <Icon name="ri-arrow-right-line" /></span>
              </a>
            )}
          </div>
        ) : (
          <div className="btnlib-empty">
            <Icon name="ri-search-eye-line" />
            <h3>Geen buttons gevonden</h3>
            <p>Probeer een andere zoekterm of zet de filters terug.</p>
            <button type="button" onClick={clearFilters}>Wis filters <Icon name="ri-refresh-line" /></button>
          </div>
        )}
      </section>

      <section className="btnlib-create" id="button-toevoegen">
        <div className="btnlib-create-content">
          <span className="btnlib-section-label">BUILD YOUR LIBRARY</span>
          <h2>Maak je volgende <span>button.</span></h2>
          <p>Maak een nieuw TSX-bestand in de bestaande map. DevUI ontdekt het automatisch en toont je button inclusief de echte broncode.</p>
          <div className="btnlib-path"><Icon name="ri-folder-code-line" /><code>{nextFile}</code></div>
          <button type="button" className="btnlib-template-button" onClick={() => copyToClipboard(makeButtonTemplate(nextNumber), 'template')}>
            <Icon name={copiedId === 'template' ? 'ri-check-line' : 'ri-file-copy-line'} />
            {copiedId === 'template' ? 'Template gekopieerd' : 'Kopieer starter-template'}
            <Icon name="ri-arrow-right-line" />
          </button>
        </div>
        <div className="btnlib-create-code" aria-hidden="true">
          <div className="btnlib-create-code-top"><span /><span /><span /><code>buttons{nextNumber}.tsx</code></div>
          <pre><span>export const</span> buttonMeta = {'{'}{String.fromCharCode(10)}  title: <em>'Mijn nieuwe button'</em>,{String.fromCharCode(10)}  category: <em>'Custom'</em>,{String.fromCharCode(10)}{'}'}{String.fromCharCode(10)}{String.fromCharCode(10)}<span>export default function</span> Buttons{nextNumber}() {'{'}{String.fromCharCode(10)}  <span>return</span> &lt;button&gt;Mijn button&lt;/button&gt;{String.fromCharCode(10)}{'}'}</pre>
        </div>
      </section>

      <p className="btnlib-announce" role="status" aria-live="polite">{copyError ? 'Kopiëren is mislukt. Controleer of je browser het klembord toestaat.' : copiedId ? 'Code is naar je klembord gekopieerd.' : ''}</p>
    </div>
  )
}
