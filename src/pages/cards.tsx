import { useState } from 'react'
import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import ButtonGalleryCard from '../components/buttons/ButtonGalleryCard'
import './buttons.css'
import './cards.css'

type CardModule = {
  default: ComponentType
  cardMeta?: {
    title?: string
    category?: string
    description?: string
    tags?: readonly string[]
  }
}

// Alle cards1.tsx, cards2.tsx, ... automatisch inladen.
const modules = import.meta.glob<CardModule>(
  '../components/cards/cards[0-9]*.tsx',
  { eager: true },
)
const sources = import.meta.glob<string>(
  '../components/cards/cards[0-9]*.tsx',
  { eager: true, query: '?raw', import: 'default' },
)

const cards = Object.entries(modules)
  .map(([path, file]) => {
    const number = Number(path.match(/cards(\d+)\.tsx$/)?.[1] ?? 0)
    return {
      id: `card-${number}`,
      number,
      fileName: `cards${number}.tsx`,
      title: file.cardMeta?.title ?? `Card ${String(number).padStart(2, '0')}`,
      category: file.cardMeta?.category ?? 'Eigen ontwerp',
      description: file.cardMeta?.description ?? 'Een lege kaart om zelf te ontwerpen.',
      tags: file.cardMeta?.tags ?? ['Custom'],
      Preview: file.default,
      source: sources[path] ?? '',
    }
  })
  .filter(card => card.number > 0)
  .sort((a, b) => a.number - b.number)

type Mode = 'preview' | 'code'

export default function CardsPage() {
  const [mode, setMode] = useState<Mode>('preview')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [error, setError] = useState(false)

  async function copyCode(source: string, id: string) {
    try {
      await navigator.clipboard.writeText(source)
      setCopiedId(id)
      setError(false)
    } catch {
      setError(true)
      setCopiedId(null)
    }
  }

  return (
    <main className="buttons-page cards-page">
      <nav className="btnlib-breadcrumb" aria-label="Broodkruimelnavigatie">
        <Link to="/">Home</Link>
        <Icon name="ri-arrow-right-s-line" />
        <Link to="/componenten">Componenten</Link>
        <Icon name="ri-arrow-right-s-line" />
        <span aria-current="page">Cards</span>
      </nav>

      <header className="btnlib-header">
        <div className="btnlib-header-content">
          <span className="btnlib-eyebrow">
            <Icon name="ri-layout-grid-line" /> COMPONENT LIBRARY / 02
          </span>
          <h1>Cards<span>.</span></h1>
          <p>
            Bouw je eigen React-cards. Bekijk iedere kaart live,
            bekijk de TSX-code en kopieer die met één klik.
          </p>
          <div className="btnlib-header-pills">
            <span><Icon name="ri-reactjs-line" /> React</span>
            <span><Icon name="ri-code-box-line" /> TypeScript</span>
            <span><Icon name="ri-palette-line" /> Tailwind CSS</span>
          </div>
        </div>
        <div className="btnlib-hero-stat">
          <div className="btnlib-stat-icon"><Icon name="ri-id-card-line" /></div>
          <span className="btnlib-stat-label">IN YOUR COLLECTION</span>
          <strong>{String(cards.length).padStart(2, '0')}</strong>
          <span className="btnlib-stat-bottom">card-componenten</span>
        </div>
      </header>

      <section className="btnlib-library" aria-label="Cards-bibliotheek">
        <div className="btnlib-heading-row">
          <div>
            <span className="btnlib-section-label">YOUR COMPONENTS</span>
            <h2>Alle cards <span>({cards.length})</span></h2>
            <p>Card 01 is een voorbeeld. Cards 02 t/m 30 zijn leeg voor je eigen code.</p>
          </div>
          <a className="btnlib-add-link" href="#card-toevoegen">
            <Icon name="ri-add-line" /> Zelf een card maken
          </a>
        </div>

        <div className="btnlib-preview-toolbar">
          <span><Icon name="ri-layout-grid-line" /> Alle cards, zonder zoekbalk of filters.</span>
          <div className="btnlib-view-controls" role="group" aria-label="Weergave">
            <button type="button" className={mode === 'preview' ? 'active' : ''}
              onClick={() => setMode('preview')} aria-pressed={mode === 'preview'}>
              <Icon name="ri-eye-line" /> Preview
            </button>
            <button type="button" className={mode === 'code' ? 'active' : ''}
              onClick={() => setMode('code')} aria-pressed={mode === 'code'}>
              <Icon name="ri-code-line" /> Code
            </button>
          </div>
        </div>

        <div className="btnlib-grid">
          {cards.map(card => (
            <ButtonGalleryCard
              key={card.id}
              item={card}
              globalMode={mode}
              copied={copiedId === card.id}
              onCopy={copyCode}
            />
          ))}
        </div>
      </section>

      <section className="btnlib-create" id="card-toevoegen">
        <div className="btnlib-create-content">
          <span className="btnlib-section-label">BUILD YOUR OWN</span>
          <h2>Maak je eigen <span>card.</span></h2>
          <p>
            Open een bestand van <code>cards2.tsx</code> tot en met <code>cards30.tsx</code>
            in <code>src/components/cards/</code>. Vervang de voorbeeld-JSX door
            je eigen card en sla op. Je ontwerp verschijnt automatisch hierboven.
          </p>
          <div className="btnlib-path">
            <Icon name="ri-folder-code-line" />
            <code>src/components/cards/cards2.tsx</code>
          </div>
        </div>
      </section>
      <p className="btnlib-announce" role="status" aria-live="polite">
        {error ? 'Kopiëren mislukt: controleer klembordrechten.' : copiedId ? 'Code gekopieerd.' : ''}
      </p>
    </main>
  )
}
