import { Link } from 'react-router'
import {
  Palette,
  Type,
  Component,
  LayoutDashboard,
  BarChart3,
  Zap,
  Smile,
  Shield,
} from 'lucide-react'

const cards = [
  {
    title: 'Colors',
    description: 'Semantic color tokens for surfaces, brand, feedback, and charts',
    path: '/colors',
    icon: Palette,
  },
  {
    title: 'Typography',
    description: 'Host Grotesk type scale with roles, sizes, and weights',
    path: '/typography',
    icon: Type,
  },
  {
    title: 'Components',
    description: 'Buttons, badges, inputs, cards, and shadow examples',
    path: '/components',
    icon: Component,
  },
  {
    title: 'Layout',
    description: 'App shell structure, breakpoints, spacing, and z-index',
    path: '/layout',
    icon: LayoutDashboard,
  },
  {
    title: 'Charts',
    description: 'Recharts patterns, tooltip styles, and animation rules',
    path: '/charts',
    icon: BarChart3,
  },
  {
    title: 'Motion',
    description: 'Easing curves, durations, and keyframe animations',
    path: '/motion',
    icon: Zap,
  },
  {
    title: 'Icons',
    description: 'Lucide icon usage guidelines and size reference',
    path: '/icons',
    icon: Smile,
  },
  {
    title: 'Accessibility',
    description: 'Contrast requirements, focus rings, and semantic HTML',
    path: '/accessibility',
    icon: Shield,
  },
] as const

const builtForBadges = ['React', 'shadcn/ui', 'Tailwind CSS', 'TypeScript']

export default function Overview() {
  return (
    <div className="cata-fade-up">
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-[2.25rem] font-extrabold tracking-tight text-foreground">
          Cata Design System
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A comprehensive design system for Cata's retail and restaurant platform
        </p>

        {/* Built-for badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {builtForBadges.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm text-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section>
        <h2 className="text-xl font-bold mb-4">Explore the system</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ title, description, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className="group block rounded-xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-[0_4px_6px_rgba(111,71,11,0.07),0_2px_4px_rgba(111,71,11,0.04)]"
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-semibold">{title}</span>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
