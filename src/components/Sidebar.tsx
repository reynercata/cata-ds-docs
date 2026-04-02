import { NavLink } from 'react-router'
import { X, Palette, Type, Zap, Smile, Component, BarChart3, LayoutDashboard, Shield } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navGroups = [
  {
    label: 'Foundations',
    items: [
      { to: '/colors', name: 'Colors', icon: Palette },
      { to: '/typography', name: 'Typography', icon: Type },
      { to: '/motion', name: 'Motion', icon: Zap },
      { to: '/icons', name: 'Icons', icon: Smile },
    ],
  },
  {
    label: 'Components',
    items: [
      { to: '/components', name: 'Components', icon: Component },
      { to: '/charts', name: 'Charts', icon: BarChart3 },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { to: '/layout', name: 'Layout', icon: LayoutDashboard },
      { to: '/accessibility', name: 'Accessibility', icon: Shield },
    ],
  },
]

function NavContent({ onClose }: { onClose?: () => void }) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-4">
        <NavLink to="/" className="font-extrabold text-lg text-primary">
          Cata DS
        </NavLink>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Close sidebar"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 space-y-5 overflow-y-auto scrollbar-thin">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-1.5">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                        isActive
                          ? 'bg-accent text-foreground font-medium'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`
                    }
                  >
                    <item.icon className="size-4" />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-border/60">
        <NavLink
          to="/"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition-colors ${
              isActive
                ? 'bg-accent text-foreground font-medium'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`
          }
        >
          Overview
        </NavLink>
      </div>
    </>
  )
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 w-56 h-screen bg-background border-r border-border/60 overflow-y-auto scrollbar-thin z-20 flex-col">
        <NavContent />
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed left-0 top-0 w-64 h-full bg-background z-40 flex flex-col transition-transform duration-200 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <NavContent onClose={onClose} />
      </aside>
    </>
  )
}
