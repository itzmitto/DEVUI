import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AppShell() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className={`app-shell ${collapsed ? 'is-collapsed' : ''}`}>
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} onToggle={() => setCollapsed(value => !value)} onCloseMobile={() => setMobileOpen(false)} />
      <div className="main-area">
        <Topbar onOpenMobile={() => setMobileOpen(true)} />
        <main className="page-content" key={location.pathname}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
