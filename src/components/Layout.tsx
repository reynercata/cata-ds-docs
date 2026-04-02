import { useState, useRef, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { Menu, Sun, Moon, Search, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { Sidebar } from './Sidebar'

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/colors': 'Colors',
  '/typography': 'Typography',
  '/motion': 'Motion',
  '/icons': 'Icons',
  '/components': 'Components',
  '/charts': 'Charts',
  '/layout': 'Layout',
  '/accessibility': 'Accessibility',
}

const searchEntries = [
  { title: 'Overview', path: '/', keywords: 'home introduction getting started design system' },
  { title: 'Colors', path: '/colors', keywords: 'color tokens surface brand feedback border tooltip chart palette swatch hex' },
  { title: 'Typography', path: '/typography', keywords: 'font host grotesk type scale size weight heading body label caption' },
  { title: 'Components', path: '/components', keywords: 'button badge input card shadow primary outline ghost destructive' },
  { title: 'Layout', path: '/layout', keywords: 'app shell sidebar topbar breakpoint spacing z-index responsive grid' },
  { title: 'Charts', path: '/charts', keywords: 'recharts bar line donut tooltip cursor animation svg' },
  { title: 'Motion', path: '/motion', keywords: 'easing cubic bezier duration animation fade scale slide keyframe' },
  { title: 'Icons', path: '/icons', keywords: 'lucide icon size stroke guidelines' },
  { title: 'Accessibility', path: '/accessibility', keywords: 'contrast focus ring touch target reduced motion semantic html wcag aria' },
]

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const pageTitle = pageTitles[location.pathname] ?? 'Cata DS'

  const filteredResults = searchQuery.trim()
    ? searchEntries.filter(e =>
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    setSearchOpen(false)
    setSearchQuery('')
  }, [location.pathname])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(prev => !prev)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-56 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 h-12 bg-background border-b border-border/40 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
            <span className="text-sm font-medium text-foreground">{pageTitle}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition cursor-pointer rounded-lg px-2.5 py-1.5 text-sm hover:bg-muted"
              aria-label="Search"
            >
              <Search className="size-4" />
              <span className="hidden sm:inline text-xs text-muted-foreground">Ctrl+K</span>
            </button>
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground transition cursor-pointer p-1.5 rounded-lg hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="size-5" /> : <Sun className="size-5" />}
            </button>
          </div>
        </header>

        {/* Search overlay */}
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
            <div className="fixed inset-0 bg-black/40" onClick={() => setSearchOpen(false)} />
            <div className="relative w-full max-w-md mx-4 rounded-xl border border-border/60 bg-card shadow-[0_20px_25px_rgba(111,71,11,0.10),0_8px_10px_rgba(111,71,11,0.04)] animate-[var(--animate-cata-scale-in)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40">
                <Search className="size-4 text-muted-foreground shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button onClick={() => setSearchOpen(false)} className="text-muted-foreground hover:text-foreground cursor-pointer">
                  <X className="size-4" />
                </button>
              </div>
              {filteredResults.length > 0 && (
                <ul className="p-2 max-h-64 overflow-y-auto">
                  {filteredResults.map((result) => (
                    <li key={result.path}>
                      <button
                        onClick={() => navigate(result.path)}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-accent transition-colors cursor-pointer"
                      >
                        {result.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {searchQuery.trim() && filteredResults.length === 0 && (
                <p className="p-4 text-sm text-muted-foreground text-center">No results found.</p>
              )}
            </div>
          </div>
        )}

        {/* Page content */}
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
