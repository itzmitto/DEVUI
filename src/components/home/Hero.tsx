import { useNavigate } from 'react-router-dom'
import Buttons1 from '../buttons/buttons1'
import Buttons2 from '../buttons/buttons2'
import Icon from '../ui/Icon'
import CodePreview from './CodePreview'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-starlight" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <img className="hero-knight" src="/images/knight.png" alt="Donkere ridder in gedetailleerd zwart-zilveren harnas" />
      <div className="hero-violet-haze" aria-hidden="true" />
      <div className="hero-copy">
        <div className="opensource-badge"><Icon name="ri-github-fill" /><span>Open Source</span></div>
        <h1 id="hero-title">Moderne Code<br /><span className="gradient-words">Componenten</span></h1>
        <p>Een hoogwaardige, herbruikbare verzameling UI-componenten, templates en code snippets. Kopieer, pas aan en gebruik direct in jouw project.</p>
        <div className="hero-actions">
          <Buttons1 onClick={() => navigate('/componenten')} />
          <Buttons2 href="/downloads/devui-starter-pack.zip" download="devui-starter-pack.zip" />
        </div>
      </div>
      <CodePreview />
    </section>
  )
}
