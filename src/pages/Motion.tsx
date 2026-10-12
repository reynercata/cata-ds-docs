import { useState } from 'react'
import { CodeBlock } from '../components/CodeBlock'

const durations = [
  { label: 'Fast', ms: 150 },
  { label: 'Default', ms: 200 },
  { label: 'Slow', ms: 300 },
]

// Cata DS v1.1: one curve per purpose. Paths are the cubic-bezier control points in a 200x200 box.
const easingCurves = [
  { token: '--cata-ease-out', utility: 'ease-cata-out', value: 'cubic-bezier(0.23, 1, 0.32, 1)', path: 'M 0 200 C 46 0 64 0 200 0', use: 'Enter / exit, pointer-following, default' },
  { token: '--cata-ease-in-out', utility: 'ease-cata-in-out', value: 'cubic-bezier(0.77, 0, 0.175, 1)', path: 'M 0 200 C 154 200 35 0 200 0', use: "On-screen movement the pointer doesn't drive" },
  { token: 'ease', utility: 'theme default', value: 'cubic-bezier(0.25, 0.1, 0.25, 1)', path: 'M 0 200 C 50 180 50 0 200 0', use: 'Hover, focus, colour, opacity-only' },
  { token: '--cata-ease (deprecated)', utility: 'ease-cata', value: 'cubic-bezier(0.4, 0, 0.2, 1)', path: 'M 0 200 C 80 200 40 0 200 0', use: 'Deprecated in v1.1, removed in v1.2', deprecated: true },
]

const keyframeAnimations = [
  {
    name: 'fade-in',
    animation: 'cata-fade-in 300ms var(--ease-cata-out) both',
    description: 'Opacity 0 to 1',
  },
  {
    name: 'fade-up',
    animation: 'cata-fade-up 300ms var(--ease-cata-out) both',
    description: 'Slide up + fade in',
  },
  {
    name: 'scale-in',
    animation: 'cata-scale-in 200ms var(--ease-cata-out) both',
    description: 'Scale 0.98 to 1',
  },
  {
    name: 'slide-in-right',
    animation: 'cata-slide-in-right 300ms var(--ease-cata-out) both',
    description: 'Slide from right',
  },
]

const implementationRules = [
  'CSS transition on style prop for dynamic values (transforms, positions), with an explicit property list and the curve for its purpose.',
  'Tailwind transition-colors duration-200 for hover/focus colour changes (timing is ease via the theme default).',
  'Inline style={{ transition }} when values are computed or depend on props.',
  'Never transition: all / transition-all. List the properties.',
  'Sidebar collapse: transform-only panel slide, content slides then takes its new width after the slide. Never transition width, max-width or max-height. Keyboard-shortcut toggles are instant.',
  'Charts: animate with CSS transform: translate() — never animate SVG x/y attributes directly. Pointer-following cursors and tooltips use --cata-ease-out.',
  'Web Animations (element.animate) must check prefers-reduced-motion themselves; the CSS media rule does not reach them.',
]

function AnimationCard({
  name,
  animation,
  description,
}: {
  name: string
  animation: string
  description: string
}) {
  const [key, setKey] = useState(0)

  return (
    <div className="rounded-xl border border-border/60 bg-card p-5">
      <div className="font-semibold text-sm mb-2">{name}</div>
      <div className="h-20 flex items-center justify-center overflow-hidden">
        <div
          key={key}
          className="bg-primary/20 rounded-lg h-16 w-full"
          style={{ animation }}
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="text-xs text-muted-foreground">{description}</span>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="text-xs text-primary cursor-pointer hover:underline"
        >
          Replay
        </button>
      </div>
    </div>
  )
}

export default function Motion() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-[1.75rem] font-extrabold tracking-tight">
          Motion
        </h1>
        <p className="mt-1 text-muted-foreground">
          Calm, controlled, precise. Never bouncy, playful, or attention-grabbing.
        </p>
      </div>

      {/* Easing Curve Visualizer */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Easing Curves</h2>
        <p className="text-sm text-muted-foreground">
          Cata DS v1.1: pick the curve by purpose. Never ease-in on UI. Tailwind's built-in ease-out and ease-in-out are not these curves.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {easingCurves.map((c) => (
            <div key={c.token} className={`rounded-xl border border-border/60 bg-card p-4 ${c.deprecated ? 'opacity-60' : ''}`}>
              <svg viewBox="0 0 200 200" className="w-full">
                {[0, 50, 100, 150, 200].map((v) => (
                  <g key={v}>
                    <line x1={v} y1={0} x2={v} y2={200} className="stroke-border" strokeOpacity={0.3} strokeWidth={1} />
                    <line x1={0} y1={v} x2={200} y2={v} className="stroke-border" strokeOpacity={0.3} strokeWidth={1} />
                  </g>
                ))}
                <path d={c.path} className="stroke-primary" strokeWidth={2} fill="none" strokeDasharray={c.deprecated ? '6 4' : undefined} />
              </svg>
              <p className="text-sm font-mono mt-2 text-center">{c.token}</p>
              <p className="text-xs font-mono text-muted-foreground text-center mt-0.5">{c.value}</p>
              <p className="text-xs text-muted-foreground text-center mt-0.5">{c.use} · {c.utility}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Duration Scale */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Duration Scale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {durations.map(({ label, ms }) => (
            <div
              key={label}
              className="rounded-xl border border-border/60 bg-card p-5 cursor-pointer group"
            >
              <p className="text-sm font-medium mb-3">
                {label} — {ms}ms
              </p>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-2 bg-primary rounded-full origin-left transition-transform"
                  style={{
                    transform: 'scaleX(0.3)',
                    transitionDuration: `${ms}ms`,
                  }}
                  /* group-hover via inline won't work, so we use a CSS approach */
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Hover to preview
              </p>
              <style>{`
                .group:hover .h-2.bg-primary {
                  transform: scaleX(1) !important;
                }
              `}</style>
            </div>
          ))}
        </div>
        {/* Use unique class names per duration to avoid conflicts */}
        <style>{`
          .group:hover > div > .h-2.bg-primary,
          .group:hover .h-2.bg-primary {
            transform: scaleX(1) !important;
          }
        `}</style>
      </section>

      {/* Keyframe Animation Demos */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Keyframe Animations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {keyframeAnimations.map((anim) => (
            <AnimationCard key={anim.name} {...anim} />
          ))}
        </div>

        <CodeBlock
          language="css"
          code={`@keyframes cata-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes cata-fade-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes cata-scale-in {
  from { opacity: 0; transform: scale(0.98); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes cata-slide-in-right {
  from { opacity: 0; transform: translateX(12px); }
  to   { opacity: 1; transform: translateX(0); }
}`}
        />
      </section>

      {/* Motion Implementation Rules */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Implementation Rules</h2>
        {implementationRules.map((rule, i) => (
          <div key={i} className="rounded-lg bg-muted p-3 mb-2">
            <span className="font-bold text-primary mr-2">{i + 1}.</span>
            <span className="text-sm">{rule}</span>
          </div>
        ))}
      </section>
    </div>
  )
}
