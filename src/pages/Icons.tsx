import {
  Star,
  Heart,
  Bell,
  Settings,
  Home,
  Search,
  User,
  Mail,
  Calendar,
  Clock,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  X,
  Check,
  Eye,
  EyeOff,
  Download,
  Upload,
  Filter,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
  Edit,
  Trash2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const sizeReference: { icon: LucideIcon; size: string; className: string; label: string }[] = [
  { icon: Star, size: '16px', className: 'size-4', label: '16px — Inline' },
  { icon: Heart, size: '18px', className: 'size-[18px]', label: '18px — Nav items' },
  { icon: Bell, size: '20px', className: 'size-5', label: '20px — Inline large' },
  { icon: Settings, size: '24px', className: 'size-6', label: '24px — Default' },
]

const commonIcons: { icon: LucideIcon; name: string }[] = [
  { icon: Home, name: 'Home' },
  { icon: Search, name: 'Search' },
  { icon: Settings, name: 'Settings' },
  { icon: User, name: 'User' },
  { icon: Bell, name: 'Bell' },
  { icon: Mail, name: 'Mail' },
  { icon: Calendar, name: 'Calendar' },
  { icon: Clock, name: 'Clock' },
  { icon: ChevronDown, name: 'ChevronDown' },
  { icon: ChevronRight, name: 'ChevronRight' },
  { icon: Plus, name: 'Plus' },
  { icon: Minus, name: 'Minus' },
  { icon: X, name: 'X' },
  { icon: Check, name: 'Check' },
  { icon: Eye, name: 'Eye' },
  { icon: EyeOff, name: 'EyeOff' },
  { icon: Download, name: 'Download' },
  { icon: Upload, name: 'Upload' },
  { icon: Filter, name: 'Filter' },
  { icon: MoreHorizontal, name: 'MoreHorizontal' },
  { icon: ArrowLeft, name: 'ArrowLeft' },
  { icon: ArrowRight, name: 'ArrowRight' },
  { icon: Edit, name: 'Edit' },
  { icon: Trash2, name: 'Trash2' },
]

const dos = [
  'Use Lucide React consistently across the app',
  'Keep stroke at 2px default',
  'Use currentColor for color inheritance',
  'Match icon size to text context (16px inline, 24px standalone)',
  'Use ChevronDown (size-3.5) for all dropdowns and selects',
]

const donts = [
  'Never use emojis as UI icons',
  'Never mix outline and filled icons in the same context',
  "Don't use icons smaller than 16px",
  "Don't change stroke width within the same view",
  'Don\'t use decorative icons without aria-hidden="true"',
]

export default function Icons() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-[1.75rem] font-extrabold tracking-tight">Icons</h1>
        <p className="mt-1 text-muted-foreground">
          Lucide React is the icon library. All icons use a 2px stroke and
          currentColor.
        </p>
      </div>

      {/* Size Reference */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Size Reference</h2>
        <div className="flex items-end gap-8">
          {sizeReference.map(({ icon: Icon, className, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-muted p-3">
                <Icon className={className} />
              </div>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Usage Guidelines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Do's */}
          <div className="border-l-4 border-success rounded-xl bg-card p-5">
            <h3 className="font-semibold text-sm mb-3 text-success">Do</h3>
            <ul className="space-y-2">
              {dos.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="size-4 text-success mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="border-l-4 border-destructive rounded-xl bg-card p-5">
            <h3 className="font-semibold text-sm mb-3 text-destructive">
              Don't
            </h3>
            <ul className="space-y-2">
              {donts.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="size-4 text-destructive mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Icons Grid */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Common Icons</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {commonIcons.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-muted transition-colors cursor-default"
            >
              <Icon className="size-5" />
              <span className="text-[10px] text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
