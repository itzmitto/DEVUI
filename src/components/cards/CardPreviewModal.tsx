import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { ButtonEntry } from '../buttons/buttonCatalog'
import Icon from '../ui/Icon'

type Props = {
  item: ButtonEntry
  onClose: () => void
}

export default function CardPreviewModal({ item, onClose }: Props) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const Preview = item.Preview

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null

    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }

      // Zorg dat de tabfocus binnen de popup blijft.
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [onClose])

  return createPortal(
    <div
      className="cards-preview-modal"
      role="presentation"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="cards-preview-modal__panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="cards-preview-modal__header">
          <div className="cards-preview-modal__heading">
            <span className="cards-preview-modal__eyebrow">
              <Icon name="ri-fullscreen-line" /> Uitvergrote preview · #{String(item.number).padStart(3, '0')}
            </span>
            <h2 className="cards-preview-modal__title" id={titleId}>{item.title}</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="cards-preview-modal__close"
            onClick={onClose}
            aria-label="Sluit de grote preview"
            title="Sluiten (Esc)"
          >
            <Icon name="ri-close-line" />
          </button>
        </div>

        <div className="cards-preview-modal__stage">
          <div className="cards-preview-modal__canvas">
            <Preview />
          </div>
        </div>

        <div className="cards-preview-modal__footer">
          <span><Icon name="ri-eye-line" /> Volledige live preview</span>
          <span><code>{item.fileName}</code> · Sluit met Esc of het kruisje</span>
        </div>
      </div>
    </div>,
    document.body,
  )
}
