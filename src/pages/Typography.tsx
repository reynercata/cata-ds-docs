import { typographyScale } from '../data/tokens'

/** Parse the first numeric font-size from a size string like "4.5rem", "15px", or "10-11px". */
function parseFontSize(size: string): string {
  const match = size.match(/[\d.]+\s*(rem|px)/)
  return match ? match[0] : size
}

/** Parse the first numeric weight from a weight like 800 or "400-500". */
function parseFontWeight(weight: number | string): number {
  if (typeof weight === 'number') return weight
  const match = String(weight).match(/\d+/)
  return match ? Number(match[0]) : 400
}

export default function Typography() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-[1.75rem] font-extrabold tracking-tight">
          Typography
        </h1>
        <p className="mt-1 text-muted-foreground">
          Host Grotesk is the only typeface in the Cata Design System.
        </p>
      </div>

      <div className="space-y-4">
        {typographyScale.map((token) => (
          <div
            key={token.role}
            className="rounded-xl border border-border/60 bg-card p-5 mb-4"
          >
            {/* Live text sample rendered at actual size and weight */}
            <div
              style={{
                fontSize: parseFontSize(token.size),
                fontWeight: parseFontWeight(token.weight),
                lineHeight: 1.2,
              }}
              className="text-foreground truncate"
            >
              {token.role}
            </div>

            {/* Metadata pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">
                {token.role}
              </span>
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">
                {token.size}
              </span>
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">
                {String(token.weight)}
              </span>
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">
                {token.tailwind}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
