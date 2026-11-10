import { Link } from 'react-router-dom'
import CategoryCard from '../cards/CategoryCard'
import Icon from '../ui/Icon'

export default function ComponentGrid() {
  return (
    <section className="components-section" id="componenten" aria-labelledby="components-title">
      <div className="section-heading">
        <div><h2 id="components-title">Componenten</h2><p>Ontdek alle UI-componenten, van buttons tot complete layouts.</p></div>
        <Link to="/componenten" className="all-components">Alle componenten <Icon name="ri-arrow-right-line" /></Link>
      </div>
      <div className="category-grid">
        <CategoryCard title="Buttons" to="/buttons" description="Moderne en aanpasbare buttons in meerdere stijlen." variant="buttons" />
        <CategoryCard title="Cards" to="/cards" description="Flexibele cards voor content, producten en features." variant="cards" />
        <CategoryCard title="Formulieren" to="/formulieren" description="Complete en toegankelijke formulieren." variant="forms" />
        <CategoryCard title="Navigatie" to="/navigatie" description="Navbar, breadcrumbs en meer." variant="navigation" />
      </div>
    </section>
  )
}
