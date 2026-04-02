import { CodeBlock } from '../components/CodeBlock'
import { shadows } from '../data/tokens'
import { Plus } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */
function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-[1.25rem] font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Button code snippets                                               */
/* ------------------------------------------------------------------ */
const buttonCode = `{/* Primary */}
<button className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold transition-colors">
  Primary Action
</button>

{/* Outline */}
<button className="inline-flex items-center justify-center rounded-full border border-ring text-primary bg-transparent px-6 py-2.5 text-sm font-semibold transition-colors">
  Outline
</button>

{/* Ghost */}
<button className="inline-flex items-center justify-center rounded-lg bg-transparent text-muted-foreground px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted hover:text-foreground">
  Ghost
</button>

{/* Destructive */}
<button className="inline-flex items-center justify-center rounded-full bg-destructive text-white px-6 py-2.5 text-sm font-semibold transition-colors">
  Delete
</button>`

const iconButtonCode = `{/* Icon button sizes: size-7, size-9, size-10, size-12 */}
<button className="inline-flex items-center justify-center size-7 rounded-lg bg-muted"><Plus className="size-3.5" /></button>
<button className="inline-flex items-center justify-center size-9 rounded-lg bg-muted"><Plus className="size-4" /></button>
<button className="inline-flex items-center justify-center size-10 rounded-lg bg-muted"><Plus className="size-5" /></button>
<button className="inline-flex items-center justify-center size-12 rounded-lg bg-muted"><Plus className="size-5" /></button>`

const badgeCode = `{/* Success solid */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-success text-foreground">Success</span>
{/* Success soft */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-success/12 text-success-text">Success</span>
{/* Warning solid */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-warning text-foreground">Warning</span>
{/* Warning soft */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-warning/12 text-primary">Warning</span>
{/* Info solid */}     <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-secondary text-foreground">Info</span>
{/* Info soft */}      <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-secondary/12 text-info">Info</span>
{/* Destructive */}    <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-destructive text-white">Error</span>
{/* Destructive soft */<span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-destructive/8 text-destructive-text">Error</span>`

const inputCode = `{/* Default */}
<input className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background" placeholder="Default" />

{/* Focused */}
<input className="w-full border border-ring rounded-md px-3 py-2 text-sm bg-background ring-2 ring-ring/30" placeholder="Focused" />

{/* Error */}
<input className="w-full border border-destructive rounded-md px-3 py-2 text-sm bg-background ring-2 ring-destructive/10" placeholder="Error" />
<p className="text-xs text-destructive-text mt-1">This field is required.</p>`

const cardCode = `{/* Standard */}
<div className="rounded-xl border border-border/60 bg-card p-5">Standard card</div>

{/* Hover shadow */}
<div className="rounded-xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-md">Hover me</div>

{/* Chart card */}
<div className="rounded-xl border border-border/60 bg-card">
  <div className="flex items-center justify-between p-5 pb-0">
    <h3 className="text-[15px] font-semibold">Chart Title</h3>
    <button className="text-xs text-muted-foreground hover:text-foreground">View all</button>
  </div>
  <div className="p-5 h-32 flex items-center justify-center text-muted-foreground text-sm">
    Chart placeholder
  </div>
</div>`

/* ------------------------------------------------------------------ */
/*  Badge helper                                                       */
/* ------------------------------------------------------------------ */
const badge = 'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold'

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Components() {
  return (
    <div className="space-y-12">
      <h1 className="text-[1.75rem] font-extrabold tracking-tight">
        Components
      </h1>

      {/* ---- Buttons ------------------------------------------------ */}
      <Section title="Buttons">
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold transition-colors">
            Primary Action
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-ring text-primary bg-transparent px-6 py-2.5 text-sm font-semibold transition-colors">
            Outline
          </button>
          <button className="inline-flex items-center justify-center rounded-lg bg-transparent text-muted-foreground px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted hover:text-foreground">
            Ghost
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-destructive text-white px-6 py-2.5 text-sm font-semibold transition-colors">
            Delete
          </button>
        </div>
        <CodeBlock code={buttonCode} language="tsx" />
      </Section>

      {/* ---- Icon Button Sizes -------------------------------------- */}
      <Section title="Icon Button Sizes">
        <div className="flex flex-wrap items-end gap-3">
          <button className="inline-flex items-center justify-center size-7 rounded-lg bg-muted">
            <Plus className="size-3.5" />
          </button>
          <button className="inline-flex items-center justify-center size-9 rounded-lg bg-muted">
            <Plus className="size-4" />
          </button>
          <button className="inline-flex items-center justify-center size-10 rounded-lg bg-muted">
            <Plus className="size-5" />
          </button>
          <button className="inline-flex items-center justify-center size-12 rounded-lg bg-muted">
            <Plus className="size-5" />
          </button>
        </div>
        <CodeBlock code={iconButtonCode} language="tsx" />
      </Section>

      {/* ---- Badges ------------------------------------------------- */}
      <Section title="Badges">
        <div className="flex flex-wrap gap-3">
          <span className={`${badge} bg-success text-foreground`}>Success</span>
          <span className={`${badge} bg-success/12 text-success-text`}>Success</span>
          <span className={`${badge} bg-warning text-foreground`}>Warning</span>
          <span className={`${badge} bg-warning/12 text-primary`}>Warning</span>
          <span className={`${badge} bg-secondary text-foreground`}>Info</span>
          <span className={`${badge} bg-secondary/12 text-info`}>Info</span>
          <span className={`${badge} bg-destructive text-white`}>Error</span>
          <span className={`${badge} bg-destructive/8 text-destructive-text`}>Error</span>
        </div>
        <CodeBlock code={badgeCode} language="tsx" />
      </Section>

      {/* ---- Inputs ------------------------------------------------- */}
      <Section title="Inputs">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <input
              className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background"
              placeholder="Default"
              readOnly
            />
          </div>
          <div>
            <input
              className="w-full border border-ring rounded-md px-3 py-2 text-sm bg-background ring-2 ring-ring/30"
              placeholder="Focused"
              readOnly
            />
          </div>
          <div>
            <input
              className="w-full border border-destructive rounded-md px-3 py-2 text-sm bg-background ring-2 ring-destructive/10"
              placeholder="Error"
              readOnly
            />
            <p className="text-xs text-destructive-text mt-1">
              This field is required.
            </p>
          </div>
        </div>
        <CodeBlock code={inputCode} language="tsx" />
      </Section>

      {/* ---- Cards -------------------------------------------------- */}
      <Section title="Cards">
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Standard */}
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="text-sm text-muted-foreground">Standard card</p>
          </div>

          {/* Hover shadow */}
          <div className="rounded-xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-md cursor-pointer">
            <p className="text-sm text-muted-foreground">Hover me</p>
          </div>

          {/* Chart card */}
          <div className="rounded-xl border border-border/60 bg-card">
            <div className="flex items-center justify-between p-5 pb-0">
              <h3 className="text-[15px] font-semibold">Chart Title</h3>
              <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                View all
              </button>
            </div>
            <div className="p-5 h-32 flex items-center justify-center text-muted-foreground text-sm">
              Chart placeholder
            </div>
          </div>
        </div>
        <CodeBlock code={cardCode} language="tsx" />
      </Section>

      {/* ---- Shadows ------------------------------------------------ */}
      <Section title="Shadows">
        <div className="grid gap-4 sm:grid-cols-5">
          {shadows.map((s) => (
            <div
              key={s.name}
              className="rounded-xl bg-card p-5"
              style={{ boxShadow: s.value }}
            >
              <p className="text-sm font-semibold">Shadow {s.level}</p>
              <p className="mt-1 text-xs font-mono text-muted-foreground break-all">
                {s.value}
              </p>
            </div>
          ))}
        </div>
        <CodeBlock
          code={shadows
            .map(
              (s) =>
                `/* ${s.name} — ${s.usage} */\nbox-shadow: ${s.value};`
            )
            .join('\n\n')}
          language="css"
        />
      </Section>
    </div>
  )
}
