import { Check } from 'lucide-react'
import { CodeBlock } from '../components/CodeBlock'

const contrastExamples = [
  {
    label: 'Body text on background',
    fg: '#212121',
    bg: '#FAFAFA',
    ratio: '16.1:1',
    pass: true,
  },
  {
    label: 'Primary foreground on primary',
    fg: '#FFFFFF',
    bg: '#6F470B',
    ratio: '7.2:1',
    pass: true,
  },
  {
    label: 'Muted foreground on muted (small text)',
    fg: '#666666',
    bg: '#F1F3F5',
    ratio: '4.0:1',
    pass: false,
  },
]

const semanticItems = [
  <>Use <code className="font-mono text-xs bg-muted px-1 rounded">&lt;button&gt;</code> for clickable actions, not <code className="font-mono text-xs bg-muted px-1 rounded">&lt;div&gt;</code></>,
  <>Use <code className="font-mono text-xs bg-muted px-1 rounded">&lt;nav&gt;</code> for navigation regions</>,
  <>Use <code className="font-mono text-xs bg-muted px-1 rounded">&lt;main&gt;</code> for primary content</>,
  <>Use <code className="font-mono text-xs bg-muted px-1 rounded">&lt;section&gt;</code> for thematic grouping</>,
  <>Use <code className="font-mono text-xs bg-muted px-1 rounded">&lt;dialog&gt;</code> for modals</>,
  <>Icon-only buttons need <code className="font-mono text-xs bg-muted px-1 rounded">aria-label</code></>,
  <>All inputs need associated <code className="font-mono text-xs bg-muted px-1 rounded">&lt;label&gt;</code></>,
  <>Switches need <code className="font-mono text-xs bg-muted px-1 rounded">role="switch"</code> and <code className="font-mono text-xs bg-muted px-1 rounded">aria-checked</code></>,
  <>Tab order must match visual order</>,
]

export default function Accessibility() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-[1.75rem] font-extrabold tracking-tight">
          Accessibility
        </h1>
        <p className="mt-1 text-muted-foreground">
          Accessibility is mandatory, not optional. Every component and page must
          meet WCAG 2.1 AA as a minimum baseline.
        </p>
      </div>

      {/* Contrast Requirements */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Contrast Requirements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contrastExamples.map((ex) => (
            <div
              key={ex.label}
              className="rounded-xl border border-border/60 overflow-hidden"
            >
              <div
                className="p-5 min-h-[80px] flex items-center justify-center"
                style={{ backgroundColor: ex.bg, color: ex.fg }}
              >
                <span className="font-semibold text-sm">
                  Sample Text
                </span>
              </div>
              <div className="bg-card p-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">{ex.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ex.fg} on {ex.bg} &mdash; {ex.ratio}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-md ${
                    ex.pass
                      ? 'bg-success/10 text-success-text'
                      : 'bg-destructive/10 text-destructive-text'
                  }`}
                >
                  {ex.pass ? 'Pass' : 'Fail'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Ring Demo */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Focus Ring</h2>
        <div className="rounded-xl border border-border/60 bg-card p-5 space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Tab to me
            </button>
            <input
              type="text"
              placeholder="Or tab here..."
              className="px-3 py-2 rounded-lg border border-border bg-background text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            2px ring in <code className="font-mono text-xs bg-muted px-1 rounded">--ring</code> color.
            Never remove <code className="font-mono text-xs bg-muted px-1 rounded">:focus-visible</code>.
          </p>
        </div>
      </section>

      {/* Touch Target Reference */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Touch Target Minimums</h2>
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <div
              className="bg-primary/10 border-2 border-dashed border-primary rounded-lg flex items-center justify-center"
              style={{ width: 44, height: 44 }}
            >
              <span className="text-[10px] font-mono text-primary">44</span>
            </div>
            <span className="text-xs text-muted-foreground">
              44x44px — Standard
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="bg-primary/10 border-2 border-dashed border-primary rounded-lg flex items-center justify-center"
              style={{ width: 56, height: 56 }}
            >
              <span className="text-[10px] font-mono text-primary">56</span>
            </div>
            <span className="text-xs text-muted-foreground">
              56px — Primary nav
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          All interactive elements must meet these minimum touch target sizes.
        </p>
      </section>

      {/* Reduced Motion Rules */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Reduced Motion</h2>
        <div className="rounded-xl border border-border/60 bg-card p-5 space-y-3">
          <p className="font-semibold text-sm">
            Respect prefers-reduced-motion
          </p>
          <p className="text-sm text-muted-foreground">
            Disable keyframe animations but keep opacity transitions so the UI
            still feels responsive without causing discomfort.
          </p>
          <CodeBlock
            language="css"
            code={`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
          />
        </div>
      </section>

      {/* Semantic HTML Checklist */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Semantic HTML Checklist</h2>
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <ul className="space-y-0">
            {semanticItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 py-1.5">
                <Check className="size-4 text-success mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
