import { useEffect, useState } from 'react'
import type { ButtonEntry } from './buttonCatalog'
import Icon from '../ui/Icon'

type GalleryMode = 'preview' | 'code'

type Props = {
  item: ButtonEntry
  globalMode: GalleryMode
  copied: boolean
  onCopy: (source: string, id: string) => void
  onExpand?: (item: ButtonEntry) => void
}

export default function ButtonGalleryCard({ item, globalMode, copied, onCopy, onExpand }: Props) {
  const [mode, setMode] = useState<GalleryMode>(globalMode)
  const Preview = item.Preview

  useEffect(() => setMode(globalMode), [globalMode])

  return (
    <article className="btnlib-card">
      <div className="btnlib-card-top">
        <span className="btnlib-number">#{String(item.number).padStart(3, '0')}</span>
        <span className="btnlib-category-badge">{item.category}</span>
        <span className="btnlib-file-name">{item.fileName}</span>
        {onExpand && (
          <button
            type="button"
            className="btnlib-expand"
            onClick={() => onExpand(item)}
            aria-label={`Open ${item.title} in groot voorbeeldvenster`}
            title="Vergroot preview"
          >
            <Icon name="ri-fullscreen-line" />
          </button>
        )}
      </div>

      <div className={`btnlib-stage ${mode === 'code' ? 'btnlib-stage-code' : ''}`}>
        {mode === 'preview' ? (
          <div className="btnlib-stage-center">
            <Preview />
          </div>
        ) : (
          <pre className="btnlib-code" tabIndex={0}><code>{item.source}</code></pre>
        )}
        <div className="btnlib-stage-label">
          <Icon name={mode === 'preview' ? 'ri-eye-line' : 'ri-code-s-slash-line'} />
          {mode === 'preview' ? 'Live preview' : 'TypeScript / TSX'}
        </div>
      </div>

      <div className="btnlib-card-info">
        <div className="btnlib-card-title-row">
          <h3>{item.title}</h3>
          <Icon name="ri-checkbox-blank-circle-line" />
        </div>
        <p>{item.description}</p>
        <div className="btnlib-tags">
          {item.tags.length ? item.tags.map(tag => <span key={tag}>{tag}</span>) : <span>React</span>}
        </div>
      </div>

      <div className="btnlib-card-actions">
        <div className="btnlib-card-tabs" role="group" aria-label={`Weergave ${item.title}`}>
          <button type="button" className={mode === 'preview' ? 'selected' : ''} aria-pressed={mode === 'preview'} onClick={() => setMode('preview')}>
            <Icon name="ri-eye-line" /> Preview
          </button>
          <button type="button" className={mode === 'code' ? 'selected' : ''} aria-pressed={mode === 'code'} onClick={() => setMode('code')}>
            <Icon name="ri-code-line" /> Code
          </button>
        </div>
        <button className={`btnlib-copy ${copied ? 'copied' : ''}`} type="button" onClick={() => onCopy(item.source, item.id)} title={`Kopieer ${item.fileName}`}>
          <Icon name={copied ? 'ri-check-line' : 'ri-file-copy-line'} />
          <span>{copied ? 'Gekopieerd' : 'Kopieer code'}</span>
        </button>
      </div>
    </article>
  )
}
