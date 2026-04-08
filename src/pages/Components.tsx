import { useState } from 'react'
import { CodeBlock } from '../components/CodeBlock'
import { shadows } from '../data/tokens'
import { Plus, Smartphone, Users, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowUpDown } from 'lucide-react'

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

const badgeCode = `{/* Success solid */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-success text-on-bright">Success</span>
{/* Success soft */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-success/12 text-success-text">Success</span>
{/* Warning solid */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-warning text-on-bright">Warning</span>
{/* Warning soft */}  <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-warning/12 text-primary">Warning</span>
{/* Info solid */}     <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-secondary text-foreground">Info</span>
{/* Info soft */}      <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-secondary/12 text-info-text">Info</span>
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

const cardSelectCode = `{/* Default */}
<div className="flex items-center gap-3.5 p-4 rounded-xl border border-border/60 bg-card cursor-pointer transition-shadow hover:shadow-[var(--shadow-cata-sm)]">
  <div className="size-12 rounded-full bg-muted flex items-center justify-center shrink-0">
    <Icon className="size-5" />
  </div>
  <div>
    <p className="text-sm font-bold">Title</p>
    <p className="text-[13px] text-muted-foreground leading-snug mt-0.5">Description text.</p>
  </div>
</div>

{/* Selected */}
<div className="flex items-center gap-3.5 p-[15px] rounded-xl border-2 border-primary bg-accent cursor-pointer">
  <div className="size-12 rounded-full bg-muted flex items-center justify-center shrink-0">
    <Icon className="size-5" />
  </div>
  <div>
    <p className="text-sm font-bold">Title</p>
    <p className="text-[13px] text-muted-foreground leading-snug mt-0.5">Description text.</p>
  </div>
</div>`

const dataTableCode = `{/* Table container */}
<div className="rounded-xl border border-border/60 overflow-hidden bg-card">
  <table className="w-full">
    <thead>
      <tr className="bg-muted">
        <th className="px-4 py-3 text-left w-10">
          <input type="checkbox" className="size-4 rounded border-[1.5px] border-input" />
        </th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="inline-flex items-center gap-1 cursor-pointer">Column <ArrowUpDown className="size-3" /></span>
        </th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Column</th>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-border/40">
        <td className="px-4 py-3"><input type="checkbox" className="size-4 rounded border-[1.5px] border-input" /></td>
        <td className="px-4 py-3 text-sm font-semibold">Data</td>
        <td className="px-4 py-3 text-sm">Data</td>
        <td className="px-4 py-3">
          <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-semibold bg-success/12 text-success-text">
            <span className="size-1.5 rounded-full bg-success" /> Completed
          </span>
        </td>
      </tr>
      <tr className="border-b border-border/40 bg-muted/30">...</tr>
    </tbody>
  </table>

  {/* Pagination */}
  <div className="flex items-center justify-between px-4 py-3 border-t border-border/40">
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      Show <select className="border border-input rounded-md px-2.5 py-1 text-sm bg-card">...</select>
    </div>
    <span className="text-sm text-muted-foreground">Page 1 of 5</span>
    <div className="flex gap-1">
      <button className="size-8 rounded-md border border-border inline-flex items-center justify-center">
        <ChevronLeft className="size-4" />
      </button>
      ...
    </div>
  </div>
</div>`

/* ------------------------------------------------------------------ */
/*  Badge helper                                                       */
/* ------------------------------------------------------------------ */
const badge = 'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold'

/* ------------------------------------------------------------------ */
/*  Card Select demo                                                   */
/* ------------------------------------------------------------------ */
const cardSelectItems = [
  { id: 'kds', icon: Smartphone, title: 'KDS Management', desc: 'Register and activate devices for the Kitchen Display System.' },
  { id: 'employees', icon: Users, title: 'Employees', desc: 'Configure employee access and permissions for the back office.' },
]

function CardSelectDemo() {
  const [selected, setSelected] = useState('kds')
  return (
    <Section title="Card Select">
      <div className="grid gap-3 sm:grid-cols-2">
        {cardSelectItems.map((item) => {
          const isSelected = selected === item.id
          return (
            <div
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`flex items-center gap-3.5 rounded-xl cursor-pointer transition-shadow ${
                isSelected
                  ? 'p-[15px] border-2 border-primary bg-accent'
                  : 'p-4 border border-border/60 bg-card hover:shadow-[var(--shadow-cata-sm)]'
              }`}
            >
              <div className="size-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <item.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-[13px] text-muted-foreground leading-snug mt-0.5">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
      <CodeBlock code={cardSelectCode} language="tsx" />
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  Data Table demo                                                    */
/* ------------------------------------------------------------------ */
const tableRows = [
  { id: '510290', outlet: 'Northpoint City (REVEL)', amount: '$6.05', status: 'Completed', statusType: 'success' as const },
  { id: '260260', outlet: 'Tanjong Pagar Centre', amount: '$8.50', status: 'Paid', statusType: 'warning' as const },
  { id: '279850', outlet: 'Guzman Y Gomez — Funan', amount: '$2.50', status: 'Refunded', statusType: 'destructive' as const },
  { id: '184051', outlet: 'Northpoint City (REVEL)', amount: '$5.00', status: 'Completed', statusType: 'success' as const },
]

const statusStyles = {
  success: { badge: 'bg-success/12 text-success-text', dot: 'bg-success' },
  warning: { badge: 'bg-warning/12 text-primary', dot: 'bg-warning' },
  destructive: { badge: 'bg-destructive/8 text-destructive-text', dot: 'bg-destructive' },
}

function DataTableDemo() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const allSelected = selectedRows.size === tableRows.length

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleAll = () => {
    if (allSelected) setSelectedRows(new Set())
    else setSelectedRows(new Set(tableRows.map((r) => r.id)))
  }

  return (
    <Section title="Data Table">
      <div className="rounded-xl border border-border/60 overflow-hidden bg-card">
        <table className="w-full">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left w-10">
                <button onClick={toggleAll} className={`size-4 rounded border-[1.5px] flex items-center justify-center shrink-0 transition-colors ${allSelected ? 'bg-primary border-primary' : 'border-input bg-card'}`}>
                  {allSelected && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><polyline points="20 6 9 17 4 12" /></svg>
                  )}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="inline-flex items-center gap-1 cursor-pointer">Order No. <ArrowUpDown className="size-3" /></span>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Outlet</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="inline-flex items-center gap-1 cursor-pointer justify-end">Amount <ArrowUpDown className="size-3" /></span>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => {
              const isChecked = selectedRows.has(row.id)
              const style = statusStyles[row.statusType]
              return (
                <tr key={row.id} className={`border-b border-border/40 ${i % 2 === 1 ? 'bg-muted/30' : ''}`}>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleRow(row.id)} className={`size-4 rounded border-[1.5px] flex items-center justify-center shrink-0 transition-colors ${isChecked ? 'bg-primary border-primary' : 'border-input bg-card'}`}>
                      {isChecked && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><polyline points="20 6 9 17 4 12" /></svg>
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold">#{row.id}</td>
                  <td className="px-4 py-3 text-sm">{row.outlet}</td>
                  <td className="px-4 py-3 text-sm text-right">{row.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-semibold ${style.badge}`}>
                      <span className={`size-1.5 rounded-full ${style.dot}`} />
                      {row.status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border/40">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Show
            <select className="border border-input rounded-md px-2.5 py-1 text-sm bg-card text-foreground">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <span className="text-sm text-muted-foreground">Page 1 of 5</span>
          <div className="flex gap-1">
            <button disabled className="size-8 rounded-md border border-border inline-flex items-center justify-center text-muted-foreground/40">
              <ChevronsLeft className="size-4" />
            </button>
            <button disabled className="size-8 rounded-md border border-border inline-flex items-center justify-center text-muted-foreground/40">
              <ChevronLeft className="size-4" />
            </button>
            <button className="size-8 rounded-md border border-border inline-flex items-center justify-center text-foreground cursor-pointer">
              <ChevronRight className="size-4" />
            </button>
            <button className="size-8 rounded-md border border-border inline-flex items-center justify-center text-foreground cursor-pointer">
              <ChevronsRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
      <CodeBlock code={dataTableCode} language="tsx" />
    </Section>
  )
}

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
          <span className={`${badge} bg-success text-on-bright`}>Success</span>
          <span className={`${badge} bg-success/12 text-success-text`}>Success</span>
          <span className={`${badge} bg-warning text-on-bright`}>Warning</span>
          <span className={`${badge} bg-warning/12 text-primary`}>Warning</span>
          <span className={`${badge} bg-secondary text-foreground`}>Info</span>
          <span className={`${badge} bg-secondary/12 text-info-text`}>Info</span>
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

      {/* ---- Card Select ---------------------------------------------- */}
      <CardSelectDemo />

      {/* ---- Data Table ----------------------------------------------- */}
      <DataTableDemo />

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
