import { CodeBlock } from '../components/CodeBlock'

const breakpoints = [
  { name: 'sm', width: '640px', context: 'Small tablet' },
  { name: 'md', width: '768px', context: 'Tablet portrait' },
  { name: 'lg', width: '1024px', context: 'Desktop sidebar appears' },
  { name: 'xl', width: '1280px', context: 'Full KPI row' },
  { name: '2xl', width: '1536px', context: 'Large desktop' },
]

const spacingValues = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64]

const zIndexLayers = [
  { layer: 'Sticky filter bar', value: 10 },
  { layer: 'Dropdown / Popover', value: 10 },
  { layer: 'Sidebar', value: 20 },
  { layer: 'Mobile nav', value: 30 },
  { layer: 'Overlay', value: 30 },
  { layer: 'Modal', value: 40 },
  { layer: 'Toast', value: 50 },
]

const responsiveRules = [
  {
    component: 'Sidebar',
    mobile: 'Hidden (bottom nav)',
    tablet: 'Hidden (bottom nav)',
    desktop: 'Collapsible sidebar',
  },
  {
    component: 'Filter bar',
    mobile: 'Icon \u2192 stacked popover',
    tablet: 'Inline horizontal',
    desktop: 'Inline horizontal',
  },
  {
    component: 'KPI cards',
    mobile: '2-column grid',
    tablet: '3-column grid',
    desktop: 'Single row 5 columns',
  },
  {
    component: 'Charts',
    mobile: 'Full width stack',
    tablet: '2-column grid',
    desktop: '2\u20133 column grid',
  },
  {
    component: 'Modals',
    mobile: 'Full-screen sheet',
    tablet: 'Centered 480px',
    desktop: 'Centered 560px',
  },
]

export default function LayoutPage() {
  return (
    <div className="space-y-10">
      {/* Page Title */}
      <div>
        <h1 className="text-[1.75rem] font-extrabold tracking-tight">
          Layout
        </h1>
        <p className="mt-1 text-muted-foreground">
          App shell structure, breakpoints, spacing scale, z-index layers, and
          responsive adaptation rules.
        </p>
      </div>

      {/* ── App Shell Diagram ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">App Shell</h2>
        <p className="text-sm text-muted-foreground">
          The application frame consists of a collapsible sidebar, a sticky
          top bar, a scrollable main content area, and a mobile bottom
          navigation that replaces the sidebar on small viewports.
        </p>

        <div className="h-64 rounded-xl border border-border/60 overflow-hidden flex flex-col">
          <div className="flex flex-1 min-h-0">
            {/* Sidebar */}
            <div className="w-1/4 bg-accent border-r border-border/60 flex flex-col items-center justify-center text-xs text-muted-foreground gap-1 p-2">
              <span className="font-semibold text-foreground">Sidebar</span>
              <span>(hidden &lt;lg)</span>
              <span>w-56 / w-[60px]</span>
              <span>(collapsed)</span>
            </div>

            {/* Right column: topbar + main */}
            <div className="flex-1 flex flex-col min-h-0">
              {/* TopBar */}
              <div className="h-8 bg-muted border-b border-border/60 flex items-center px-3 text-xs text-muted-foreground shrink-0">
                <span className="font-semibold text-foreground">TopBar</span>
                <span className="ml-2">(sticky, z-20, h-12)</span>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-card flex items-center justify-center text-xs text-muted-foreground p-4">
                <div className="text-center space-y-1">
                  <span className="font-semibold text-foreground block">
                    &lt;main&gt; scrollable content
                  </span>
                  <span>max-w-[1400px] mx-auto px-5 sm:px-6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="h-8 bg-muted border-t border-border/60 flex items-center justify-center text-xs text-muted-foreground shrink-0">
            <span className="font-semibold text-foreground">MobileNav</span>
            <span className="ml-2">(fixed bottom, lg:hidden, z-30)</span>
          </div>
        </div>

        <CodeBlock
          language="text"
          code={`+------------------+--------------------------------------------+
|                  |  TopBar (sticky, z-20, h-12)               |
|    Sidebar       +--------------------------------------------+
|  (hidden <lg)    |                                            |
|  w-56 / w-[60px] |  <main> scrollable content area            |
|  (collapsed)     |  max-w-[1400px] mx-auto px-5 sm:px-6      |
|                  |                                            |
+------------------+--------------------------------------------+
| MobileNav (fixed bottom, lg:hidden, z-30)                     |
+---------------------------------------------------------------+`}
        />
      </section>

      {/* ── Breakpoints ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Breakpoints</h2>

        <div className="w-full rounded-xl border border-border/60 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted text-xs font-semibold uppercase text-muted-foreground">
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Min Width</th>
                <th className="px-4 py-3 text-left">Context</th>
              </tr>
            </thead>
            <tbody>
              {breakpoints.map((bp, i) => (
                <tr
                  key={bp.name}
                  className={i % 2 === 1 ? 'bg-muted/30' : ''}
                >
                  <td className="px-4 py-3 text-sm border-b border-border/40 font-mono font-semibold">
                    {bp.name}
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-border/40 font-mono">
                    {bp.width}
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-border/40">
                    {bp.context}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Spacing Scale ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Spacing Scale (8px grid)</h2>
        <p className="text-sm text-muted-foreground">
          All spacing derives from a base 8px grid. Use Tailwind spacing
          utilities (p-1 = 4px, p-2 = 8px, etc.).
        </p>

        <div className="rounded-xl border border-border/60 bg-card p-5 space-y-2">
          {spacingValues.map((value) => {
            const tailwindUnit = value / 4
            const label =
              tailwindUnit % 1 === 0
                ? `p-${tailwindUnit}`
                : `p-[${value}px]`
            return (
              <div key={value} className="flex items-center gap-3">
                <span className="w-14 text-xs font-mono text-muted-foreground text-right shrink-0">
                  {label}
                </span>
                <div
                  className="h-5 rounded bg-primary/20"
                  style={{ width: `${value * 3}px` }}
                />
                <span className="text-xs text-muted-foreground">
                  {value}px
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Z-Index Scale ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Z-Index Scale</h2>

        <div className="w-full rounded-xl border border-border/60 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted text-xs font-semibold uppercase text-muted-foreground">
                <th className="px-4 py-3 text-left">Layer</th>
                <th className="px-4 py-3 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {zIndexLayers.map((z, i) => (
                <tr
                  key={`${z.layer}-${z.value}`}
                  className={i % 2 === 1 ? 'bg-muted/30' : ''}
                >
                  <td className="px-4 py-3 text-sm border-b border-border/40">
                    {z.layer}
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-border/40 font-mono font-semibold">
                    {z.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Responsive Adaptation Rules ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Responsive Adaptation Rules</h2>

        <div className="w-full rounded-xl border border-border/60 overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted text-xs font-semibold uppercase text-muted-foreground">
                <th className="px-4 py-3 text-left">Component</th>
                <th className="px-4 py-3 text-left">Mobile (&lt;sm)</th>
                <th className="px-4 py-3 text-left">Tablet (md)</th>
                <th className="px-4 py-3 text-left">Desktop (lg+)</th>
              </tr>
            </thead>
            <tbody>
              {responsiveRules.map((rule, i) => (
                <tr
                  key={rule.component}
                  className={i % 2 === 1 ? 'bg-muted/30' : ''}
                >
                  <td className="px-4 py-3 text-sm border-b border-border/40 font-semibold">
                    {rule.component}
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-border/40">
                    {rule.mobile}
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-border/40">
                    {rule.tablet}
                  </td>
                  <td className="px-4 py-3 text-sm border-b border-border/40">
                    {rule.desktop}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
