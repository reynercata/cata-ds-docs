interface ColorSwatchProps {
  name: string
  light: string
  dark: string
  usage: string
  currentTheme: 'light' | 'dark'
}

export function ColorSwatch({ name, light, dark, usage, currentTheme }: ColorSwatchProps) {
  const activeColor = currentTheme === 'dark' ? dark : light

  return (
    <div className="rounded-xl border border-border/60 bg-card overflow-hidden transition-shadow hover:shadow-md">
      <div
        className="h-20 w-full"
        style={{ backgroundColor: activeColor }}
      />
      <div className="p-3 space-y-1">
        <p className="text-sm font-mono font-semibold">{name}</p>
        <div className="flex gap-3 text-xs text-muted-foreground">
          <span>Light: {light}</span>
          <span>Dark: {dark}</span>
        </div>
        <p className="text-xs text-muted-foreground italic">{usage}</p>
      </div>
    </div>
  )
}
