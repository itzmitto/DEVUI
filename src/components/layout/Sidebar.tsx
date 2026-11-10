import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories, mainNavigation } from '../../data/navigation'
import Icon from '../ui/Icon'

type Props = {
  collapsed: boolean
  mobileOpen: boolean
  onToggle: () => void
  onCloseMobile: () => void
}

export default function Sidebar({ collapsed, mobileOpen, onToggle, onCloseMobile }: Props) {
  const [toolsOpen, setToolsOpen] = useState(false)
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `side-link ${isActive ? 'active' : ''}`

  return (
    <>
      {mobileOpen && (
        <button className="mobile-shade" aria-label="Sluit menu" onClick={onCloseMobile} />
      )}
      <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-brand-row">
          <Link to="/" className="brand" onClick={onCloseMobile} aria-label="DevUI home">
            <svg className="brand-mark" viewBox="0 0 58 54" fill="none" aria-hidden="true">
              <path d="M23 11 8 27l15 16M35 11l15 16-15 16" stroke="url(#brand-gradient)" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs><linearGradient id="brand-gradient" x1="4" y1="8" x2="52" y2="45" gradientUnits="userSpaceOnUse"><stop stopColor="#dc95ff"/><stop offset=".53" stopColor="#b163fa"/><stop offset="1" stopColor="#9453ee"/></linearGradient></defs>
            </svg>
            {!collapsed && <span className="brand-text"><strong>DevUI</strong><small>Code Library</small></span>}
          </Link>
          <button type="button" className="collapse-btn" onClick={onToggle} aria-label={collapsed ? 'Open zijbalk' : 'Klap zijbalk in'}>
            <Icon name={collapsed ? 'ri-arrow-right-s-line' : 'ri-arrow-left-s-line'} />
          </button>
        </div>

        <div className="sidebar-scroll">
          <nav className="sidebar-menu" aria-label="Hoofdnavigatie">
            {mainNavigation.map(item => (
              <NavLink to={item.path} key={item.path} end={item.path === '/'} className={navClass} title={collapsed ? item.title : undefined} onClick={onCloseMobile}>
                <Icon name={item.icon} />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
            <button type="button" className={`side-link tools-toggle ${toolsOpen ? 'tools-expanded' : ''}`} onClick={() => setToolsOpen(value => !value)} title={collapsed ? 'Tools' : undefined} aria-expanded={toolsOpen}>
              <Icon name="ri-tools-line" />
              {!collapsed && <><span>Tools</span><Icon name="ri-arrow-down-s-line" className="tool-chevron" /></>}
            </button>
            {toolsOpen && !collapsed && (
              <NavLink to="/tools" className={navClass} onClick={onCloseMobile}>
                <Icon name="ri-terminal-box-line" />
                <span>Alle tools</span>
              </NavLink>
            )}
          </nav>

          <div className="side-divider" />
          {!collapsed && <p className="category-label">Categorieën</p>}
          <nav className="category-menu" aria-label="Component categorieën">
            {categories.map(item => (
              <NavLink to={item.path} key={item.path} className={navClass} title={collapsed ? item.title : undefined} onClick={onCloseMobile}>
                <Icon name={item.icon} />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {!collapsed && (
          <div className="sidebar-bottom-art" aria-hidden="true">
            <img src="/images/purple-cliffs.png" alt="" />
          </div>
        )}
        {!collapsed && (
          <Link className="sidebar-starter" to="/starter-packs" onClick={onCloseMobile}>
            <span className="starter-icon"><Icon name="ri-box-3-line" /></span>
            <span className="starter-text"><strong>Starter Pack</strong><small>Snel starten met een complete set.</small></span>
            <span className="starter-arrow"><Icon name="ri-arrow-right-line" /></span>
          </Link>
        )}
      </aside>
    </>
  )
}
