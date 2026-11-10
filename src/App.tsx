import { Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Home from './pages/Home'
import Buttons from './pages/buttons'
import Cards from './pages/cards'
import Formulieren from './pages/formulieren'
import Navigatie from './pages/navigatie'
import Layouts from './pages/layouts'
import Modals from './pages/modals'
import Tabs from './pages/tabs'
import UiElements from './pages/ui-elements'
import Overig from './pages/overig'
import Componenten from './pages/componenten'
import StarterPacks from './pages/starter-packs'
import Templates from './pages/templates'
import Snippets from './pages/snippets'
import Tools from './pages/tools'
import Docs from './pages/docs'
import Changelog from './pages/changelog'
import Login from './pages/login'
import NotFound from './pages/not-found'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="cards" element={<Cards />} />
        <Route path="formulieren" element={<Formulieren />} />
        <Route path="navigatie" element={<Navigatie />} />
        <Route path="layouts" element={<Layouts />} />
        <Route path="modals" element={<Modals />} />
        <Route path="tabs" element={<Tabs />} />
        <Route path="ui-elements" element={<UiElements />} />
        <Route path="overig" element={<Overig />} />
        <Route path="componenten" element={<Componenten />} />
        <Route path="starter-packs" element={<StarterPacks />} />
        <Route path="templates" element={<Templates />} />
        <Route path="snippets" element={<Snippets />} />
        <Route path="tools" element={<Tools />} />
        <Route path="docs" element={<Docs />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
