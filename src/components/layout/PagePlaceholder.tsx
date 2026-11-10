import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'

type Props = {
  title: string
  description?: string
  icon?: string
}

// Hier vervang je later de inhoud door je eigen pagina.
export default function PagePlaceholder({ title, description, icon = 'ri-layout-grid-line' }: Props) {
  return (
    <div className="placeholder-page">
      <Link to="/" className="back-link"><Icon name="ri-arrow-left-line" /> Terug naar Home</Link>
      <div className="placeholder-icon"><Icon name={icon} /></div>
      <p className="placeholder-eyebrow">DEVUI / {title.toUpperCase()}</p>
      <h1>{title}</h1>
      <p className="placeholder-description">{description || `Dit is alvast jouw ${title}-pagina. Je kunt deze later zelf verder bouwen.`}</p>
      <div className="placeholder-note"><Icon name="ri-code-s-slash-line" /><span>De route werkt. Voeg je eigen componenten toe in <code>src/pages/</code> en <code>src/components/</code>.</span></div>
    </div>
  )
}
