import { colorGroups, chartPalette } from '../data/tokens'
import { ColorSwatch } from '../components/ColorSwatch'
import { useTheme } from '../components/ThemeProvider'

export default function Colors() {
  const { theme: currentTheme } = useTheme()

  return (
    <div className="cata-fade-up">
      <h1 className="text-[1.75rem] font-extrabold tracking-tight">Colors</h1>
      <p className="mt-2 text-muted-foreground">
        Cata uses semantic color tokens exclusively. Never hard-code hex values
        in components -- reference design tokens so every surface, text color,
        and border adapts automatically across light and dark themes.
      </p>

      {/* Color groups */}
      {colorGroups.map((group) => (
        <section key={group.category}>
          <h2 className="text-xl font-bold mt-8 mb-4">{group.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {group.tokens.map((token) => (
              <ColorSwatch
                key={token.name}
                name={token.name}
                light={token.light}
                dark={token.dark}
                usage={token.usage}
                currentTheme={currentTheme}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Chart palette */}
      <section>
        <h2 className="text-xl font-bold mt-8 mb-4">Chart Palette</h2>

        {/* Horizontal strip */}
        <div className="flex gap-0">
          {chartPalette.map((color, i) => (
            <div
              key={color.order}
              className={`flex-1 h-16 ${
                i === 0
                  ? 'rounded-l-xl'
                  : i === chartPalette.length - 1
                    ? 'rounded-r-xl'
                    : ''
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>

        {/* Labels beneath the strip */}
        <div className="flex justify-between mt-2">
          {chartPalette.map((color) => (
            <div key={color.order} className="text-xs text-muted-foreground text-center">
              <p className="font-medium text-foreground">{color.label}</p>
              <p className="font-mono">{color.hex}</p>
            </div>
          ))}
        </div>

        {/* Individual chart swatch cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {chartPalette.map((color) => (
            <ColorSwatch
              key={color.order}
              name={`chart-${color.order}`}
              light={color.hex}
              dark={color.hex}
              usage={color.label}
              currentTheme={currentTheme}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
