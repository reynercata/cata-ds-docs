import { CodeBlock } from '../components/CodeBlock'

export default function Charts() {
  return (
    <div className="space-y-10">
      {/* Page Title */}
      <div>
        <h1 className="text-[1.75rem] font-extrabold tracking-tight">
          Charts
        </h1>
        <p className="mt-1 text-muted-foreground">
          Recharts is the charting library. All charts follow these consistent
          patterns for containers, tooltips, cursors, and animations.
        </p>
      </div>

      {/* ── Chart Container Pattern ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Chart Container Pattern</h2>
        <p className="text-sm text-muted-foreground">
          Every chart lives inside a card wrapper with a title row and an
          optional export button. The <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ResponsiveContainer</code> ensures the
          chart fills its parent width.
        </p>

        <CodeBlock
          language="tsx"
          code={`<div className="rounded-xl border border-border/60 bg-card">
  <div className="flex items-center justify-between px-5 pt-5 pb-2">
    <h3 className="text-[15px] font-semibold text-foreground">{title}</h3>
    <Button variant="ghost" size="icon-sm">
      <Download className="size-4" />
    </Button>
  </div>
  <div className="px-4 pb-4">
    <ResponsiveContainer width="100%" height={280}>
      {/* chart content */}
    </ResponsiveContainer>
  </div>
</div>`}
        />
      </section>

      {/* ── Tooltip Styles ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Tooltip Styles</h2>
        <p className="text-sm text-muted-foreground">
          A shared style object applied to every Recharts{' '}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded">&lt;Tooltip&gt;</code>{' '}
          via <code className="text-xs bg-muted px-1.5 py-0.5 rounded">contentStyle</code>.
          It uses CSS custom properties so it automatically adapts to
          light/dark mode.
        </p>

        <CodeBlock
          language="tsx"
          code={`export const tooltipStyle: React.CSSProperties = {
  backgroundColor: "var(--color-tooltip-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: 8,
  color: "var(--color-tooltip-fg)",
  fontSize: 12,
  fontFamily: "Host Grotesk, sans-serif",
  padding: "8px 12px",
}`}
        />
      </section>

      {/* ── Recharts CSS Overrides ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Recharts CSS Overrides</h2>
        <p className="text-sm text-muted-foreground">
          Add these global CSS rules to smooth out tooltip movement, add
          box-shadow, and enable sector/cursor transitions.
        </p>

        <CodeBlock
          language="css"
          code={`.recharts-tooltip-wrapper {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) !important;
  pointer-events: none;
}
.recharts-default-tooltip {
  box-shadow: 0 4px 6px rgba(111, 71, 11, 0.07), 0 2px 4px rgba(111, 71, 11, 0.04);
}
.recharts-tooltip-cursor {
  transition: fill-opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.recharts-pie-sector {
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}`}
        />
      </section>

      {/* ── Bar Chart Pattern ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Bar Chart Pattern</h2>
        <p className="text-sm text-muted-foreground">
          Bar charts use a custom <code className="text-xs bg-muted px-1.5 py-0.5 rounded">SmoothBarCursor</code>{' '}
          component that renders a translucent highlight behind the hovered
          bar, animating via CSS <code className="text-xs bg-muted px-1.5 py-0.5 rounded">transform</code> for 60fps
          smoothness.
        </p>

        <CodeBlock
          language="tsx"
          code={`// SmoothBarCursor — renders a translucent rectangle behind the active bar
function SmoothBarCursor({ x, y, width, height }: any) {
  const ref = useRef<SVGRectElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = \`translate(\${x}px, \${y}px)\`
    el.style.width = \`\${width}px\`
    el.style.height = \`\${height}px\`
  }, [x, y, width, height])

  return (
    <rect
      ref={ref}
      fill="var(--color-primary)"
      fillOpacity={0.08}
      rx={4}
      style={{
        transition: "transform 250ms cubic-bezier(0.4,0,0.2,1), " +
                    "width 250ms cubic-bezier(0.4,0,0.2,1), " +
                    "height 250ms cubic-bezier(0.4,0,0.2,1)",
      }}
    />
  )
}

// Usage inside a BarChart
<BarChart data={data}>
  <CartesianGrid vertical={false} stroke="var(--color-border)" strokeOpacity={0.5} />
  <XAxis dataKey="name" tickLine={false} axisLine={false} />
  <YAxis tickLine={false} axisLine={false} />
  <Tooltip contentStyle={tooltipStyle} cursor={<SmoothBarCursor />} />
  <Bar dataKey="value" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
</BarChart>`}
        />
      </section>

      {/* ── Line Chart Pattern ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Line Chart Pattern</h2>
        <p className="text-sm text-muted-foreground">
          Line charts combine a <code className="text-xs bg-muted px-1.5 py-0.5 rounded">SmoothLineCursor</code>{' '}
          (vertical reference line) with <code className="text-xs bg-muted px-1.5 py-0.5 rounded">GlidingDots</code>{' '}
          rendered via the Recharts <code className="text-xs bg-muted px-1.5 py-0.5 rounded">Customized</code> component.
        </p>

        <div className="rounded-xl border-2 border-warning bg-warning/10 p-4 mb-3">
          <p className="text-sm font-semibold text-warning-foreground">
            CRITICAL: Always set dot=&#123;false&#125; activeDot=&#123;false&#125; on every &lt;Line&gt;.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Recharts remounts activeDot on every hover, making CSS transitions
            impossible. Use the Customized component with GlidingDots instead.
          </p>
        </div>

        <CodeBlock
          language="tsx"
          code={`// SmoothLineCursor — animated vertical reference line
function SmoothLineCursor({ points, height }: any) {
  const ref = useRef<SVGLineElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !points?.[0]) return
    el.style.transform = \`translateX(\${points[0].x}px)\`
  }, [points])

  return (
    <line
      ref={ref}
      y1={0}
      y2={height}
      stroke="var(--color-border)"
      strokeWidth={1}
      style={{ transition: "transform 250ms cubic-bezier(0.4,0,0.2,1)" }}
    />
  )
}

// GlidingDots — persistent circles that glide to active point
function GlidingDots({ formattedGraphicalItems, activeTooltipIndex }: any) {
  return formattedGraphicalItems?.map((item: any, i: number) => {
    const point = item.props.points[activeTooltipIndex]
    if (!point) return null
    return (
      <circle
        key={i}
        cx={0}
        cy={0}
        r={4}
        fill={item.props.stroke}
        style={{
          transform: \`translate(\${point.x}px, \${point.y}px)\`,
          transition: "transform 250ms cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    )
  })
}

// Usage
<LineChart data={data}>
  <CartesianGrid vertical={false} stroke="var(--color-border)" strokeOpacity={0.5} />
  <XAxis dataKey="date" tickLine={false} axisLine={false} />
  <YAxis tickLine={false} axisLine={false} />
  <Tooltip contentStyle={tooltipStyle} cursor={<SmoothLineCursor />} />
  <Customized component={GlidingDots} />
  <Line
    type="monotone"
    dataKey="revenue"
    stroke="var(--color-primary)"
    strokeWidth={2}
    dot={false}
    activeDot={false}
  />
</LineChart>`}
        />
      </section>

      {/* ── Donut Chart Pattern ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Donut Chart Pattern</h2>
        <p className="text-sm text-muted-foreground">
          Donut charts use an <code className="text-xs bg-muted px-1.5 py-0.5 rounded">AnimatedSlice</code>{' '}
          as the active shape, scaling up the hovered sector with a CSS
          transform. A tooltip fix ensures the tooltip appears at the
          pie center rather than jumping around.
        </p>

        <CodeBlock
          language="tsx"
          code={`// AnimatedSlice — scales the active sector via CSS transform
function AnimatedSlice(props: any) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
  return (
    <g
      style={{
        transform: \`scale(1.04)\`,
        transformOrigin: \`\${cx}px \${cy}px\`,
        transition: "transform 250ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  )
}

// Tooltip position fix — pin tooltip to center of donut
function useDonutTooltipFix(cx: number, cy: number) {
  // Force the tooltip wrapper to the pie center so it doesn't jump
  return {
    position: { x: cx - 60, y: cy - 40 } as const,
    wrapperStyle: { pointerEvents: "none" as const },
  }
}

// Usage
<PieChart>
  <Pie
    data={data}
    cx="50%"
    cy="50%"
    innerRadius={60}
    outerRadius={90}
    dataKey="value"
    activeShape={AnimatedSlice}
    onMouseEnter={(_, index) => setActiveIndex(index)}
  >
    {data.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip contentStyle={tooltipStyle} {...useDonutTooltipFix(cx, cy)} />
</PieChart>`}
        />
      </section>

      {/* ── SVG Animation Rules ── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">SVG Animation Rules</h2>

        <div className="rounded-xl border-2 border-warning bg-warning/10 p-5">
          <h3 className="text-sm font-bold text-warning-foreground mb-3">
            Critical SVG Animation Constraints
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-sm text-foreground">
            <li>
              <span className="font-semibold">SVG geometric attributes cannot be CSS-transitioned.</span>{' '}
              Properties like <code className="text-xs bg-muted px-1.5 py-0.5 rounded">x</code>,{' '}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">y</code>,{' '}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">width</code>,{' '}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">height</code>,{' '}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">cx</code>,{' '}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">cy</code>{' '}
              are not animatable via CSS transitions in most browsers.
            </li>
            <li>
              <span className="font-semibold">
                Always use CSS <code className="text-xs bg-muted px-1.5 py-0.5 rounded">transform: translate()</code>{' '}
                instead.
              </span>{' '}
              Position elements at the origin and move them with transforms,
              which are GPU-composited and transition smoothly.
            </li>
            <li>
              <span className="font-semibold">
                Recharts <code className="text-xs bg-muted px-1.5 py-0.5 rounded">activeDot</code> remounts on
                every hover.
              </span>{' '}
              This destroys transition state. Use the{' '}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">Customized</code> component
              to render persistent dots that survive re-renders.
            </li>
            <li>
              <span className="font-semibold">
                Use <code className="text-xs bg-muted px-1.5 py-0.5 rounded">useRef</code> for animation
                coordinates.
              </span>{' '}
              Store target positions in refs and apply them via{' '}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">el.style.transform</code>{' '}
              inside <code className="text-xs bg-muted px-1.5 py-0.5 rounded">useEffect</code> to avoid
              React re-render overhead during animation frames.
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
