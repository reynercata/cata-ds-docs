// ---------------------------------------------------------------------------
// Cata Design System -- Token Definitions
// Used by the documentation site to render token pages.
// ---------------------------------------------------------------------------

// ---- Interfaces ----------------------------------------------------------

export interface ColorToken {
  name: string;
  light: string;
  dark: string;
  usage: string;
  cssVar: string;
  tailwind: string;
}

export interface ColorGroup {
  category: string;
  tokens: ColorToken[];
}

export interface ChartColor {
  order: number;
  hex: string;
  label: string;
}

export interface TypographyToken {
  role: string;
  size: string;
  weight: number | string;
  tailwind: string;
}

export interface ShadowToken {
  name: string;
  level: string;
  value: string;
  usage: string;
}

export interface Breakpoint {
  name: string;
  minWidth: string;
  context: string;
}

export interface ZIndexLevel {
  layer: string;
  value: number;
}

export interface SpacingToken {
  px: number;
  tailwind: string;
}

export interface MotionToken {
  speed: string;
  duration: string;
  use: string;
}

export interface ResponsiveRule {
  component: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

// ---- 1. Color Tokens -----------------------------------------------------

export const colorGroups: ColorGroup[] = [
  {
    category: "Surface",
    tokens: [
      {
        name: "--background",
        light: "#FAFAFA",
        dark: "#161616",
        usage: "Page background",
        cssVar: "var(--color-background)",
        tailwind: "bg-background",
      },
      {
        name: "--foreground",
        light: "#212121",
        dark: "#FFFFFF",
        usage: "Default text",
        cssVar: "var(--color-foreground)",
        tailwind: "bg-foreground",
      },
      {
        name: "--card",
        light: "#FFFFFF",
        dark: "#1E1E1E",
        usage: "Card surfaces",
        cssVar: "var(--color-card)",
        tailwind: "bg-card",
      },
      {
        name: "--card-foreground",
        light: "#212121",
        dark: "#FFFFFF",
        usage: "Card text",
        cssVar: "var(--color-card-foreground)",
        tailwind: "bg-card-foreground",
      },
      {
        name: "--popover",
        light: "#FFFFFF",
        dark: "#2A2A2A",
        usage: "Dropdowns, tooltips",
        cssVar: "var(--color-popover)",
        tailwind: "bg-popover",
      },
      {
        name: "--muted",
        light: "#F1F3F5",
        dark: "#333333",
        usage: "Subtle bg, disabled bg",
        cssVar: "var(--color-muted)",
        tailwind: "bg-muted",
      },
      {
        name: "--muted-foreground",
        light: "#666666",
        dark: "#999999",
        usage: "Placeholder, secondary text",
        cssVar: "var(--color-muted-foreground)",
        tailwind: "bg-muted-foreground",
      },
      {
        name: "--accent",
        light: "#E8EEF9",
        dark: "#252525",
        usage: "Hover bg, active rows",
        cssVar: "var(--color-accent)",
        tailwind: "bg-accent",
      },
    ],
  },
  {
    category: "Brand",
    tokens: [
      {
        name: "--primary",
        light: "#6F470B",
        dark: "#9FBDF0",
        usage: "CTAs, logo, key actions",
        cssVar: "var(--color-primary)",
        tailwind: "bg-primary",
      },
      {
        name: "--primary-foreground",
        light: "#FFFFFF",
        dark: "#212121",
        usage: "Text on primary",
        cssVar: "var(--color-primary-foreground)",
        tailwind: "bg-primary-foreground",
      },
      {
        name: "--secondary",
        light: "#9FBDF0",
        dark: "#6F470B",
        usage: "Bumpers, highlights",
        cssVar: "var(--color-secondary)",
        tailwind: "bg-secondary",
      },
      {
        name: "--secondary-foreground",
        light: "#212121",
        dark: "#FFFFFF",
        usage: "Text on secondary",
        cssVar: "var(--color-secondary-foreground)",
        tailwind: "bg-secondary-foreground",
      },
      {
        name: "--ring",
        light: "#6F470B",
        dark: "#9FBDF0",
        usage: "Focus ring",
        cssVar: "var(--color-ring)",
        tailwind: "ring-ring",
      },
    ],
  },
  {
    category: "Feedback",
    tokens: [
      {
        name: "--destructive",
        light: "#FF4E00",
        dark: "#FF4E00",
        usage: "Errors, destructive actions",
        cssVar: "var(--color-destructive)",
        tailwind: "bg-destructive",
      },
      {
        name: "--success",
        light: "#ABD714",
        dark: "#ABD714",
        usage: "Success backgrounds",
        cssVar: "var(--color-success)",
        tailwind: "bg-success",
      },
      {
        name: "--success-text",
        light: "#4D6B00",
        dark: "#B8E035",
        usage: "Success text (WCAG 4.5:1+)",
        cssVar: "var(--color-success-text)",
        tailwind: "text-success-text",
      },
      {
        name: "--warning",
        light: "#FFDB2C",
        dark: "#FFDB2C",
        usage: "Warning backgrounds",
        cssVar: "var(--color-warning)",
        tailwind: "bg-warning",
      },
      {
        name: "--info",
        light: "#9FBDF0",
        dark: "#7689ED",
        usage: "Information",
        cssVar: "var(--color-info)",
        tailwind: "bg-info",
      },
      {
        name: "--info-text",
        light: "#2B579A",
        dark: "#93B4F4",
        usage: "Info text (WCAG 4.5:1+)",
        cssVar: "var(--color-info-text)",
        tailwind: "text-info-text",
      },
      {
        name: "--destructive-text",
        light: "#C43D00",
        dark: "#FF7A40",
        usage: "Destructive text (WCAG 5.2:1+)",
        cssVar: "var(--color-destructive-text)",
        tailwind: "text-destructive-text",
      },
    ],
  },
  {
    category: "Border",
    tokens: [
      {
        name: "--border",
        light: "#E5E5E5",
        dark: "#3A3A3A",
        usage: "Card borders, dividers",
        cssVar: "var(--color-border)",
        tailwind: "border-border",
      },
      {
        name: "--input",
        light: "#E5E5E5",
        dark: "#3A3A3A",
        usage: "Input borders",
        cssVar: "var(--color-input)",
        tailwind: "border-input",
      },
    ],
  },
  {
    category: "Tooltip",
    tokens: [
      {
        name: "--tooltip-bg",
        light: "#212121",
        dark: "#FFFFFF",
        usage: "Tooltip background",
        cssVar: "var(--color-tooltip-bg)",
        tailwind: "bg-tooltip-bg",
      },
      {
        name: "--tooltip-fg",
        light: "#FFFFFF",
        dark: "#212121",
        usage: "Tooltip text",
        cssVar: "var(--color-tooltip-fg)",
        tailwind: "text-tooltip-fg",
      },
    ],
  },
];

export const chartPalette: ChartColor[] = [
  { order: 1, hex: "#6F470B", label: "Gold" },
  { order: 2, hex: "#9FBDF0", label: "Blue" },
  { order: 3, hex: "#7689ED", label: "Blue Vivid" },
  { order: 4, hex: "#A68EEB", label: "Purple" },
  { order: 5, hex: "#ABD714", label: "Lime" },
  { order: 6, hex: "#FFDB2C", label: "Yellow" },
  { order: 7, hex: "#F78D5C", label: "Coral" },
  { order: 8, hex: "#FF4E00", label: "Orange" },
];

// ---- 2. Typography Scale -------------------------------------------------

export const typographyScale: TypographyToken[] = [
  {
    role: "Hero headlines",
    size: "4.5rem",
    weight: 800,
    tailwind: "text-display-2xl",
  },
  {
    role: "Page titles",
    size: "1.75rem (sm+), 1.5rem (mobile)",
    weight: 800,
    tailwind: "text-[1.75rem] font-extrabold tracking-tight",
  },
  {
    role: "Section titles",
    size: "3rem",
    weight: 800,
    tailwind: "text-display-lg",
  },
  {
    role: "Card heroes",
    size: "2.25rem",
    weight: 800,
    tailwind: "text-display-md",
  },
  {
    role: "Card headings",
    size: "15px",
    weight: 600,
    tailwind: "text-[15px] font-semibold",
  },
  {
    role: "List headers",
    size: "1.25rem",
    weight: 700,
    tailwind: "text-heading-lg",
  },
  {
    role: "KPI values",
    size: "1.25rem",
    weight: 700,
    tailwind: "text-xl font-bold tracking-tight",
  },
  {
    role: "Default body",
    size: "1rem",
    weight: 400,
    tailwind: "text-body-md",
  },
  {
    role: "Secondary text",
    size: "0.875rem",
    weight: 400,
    tailwind: "text-body-sm",
  },
  {
    role: "Labels, buttons",
    size: "0.8125rem",
    weight: 600,
    tailwind: "text-label-md",
  },
  {
    role: "Controls, filters",
    size: "13px",
    weight: "400-500",
    tailwind: "text-[13px]",
  },
  {
    role: "Helper text",
    size: "0.75rem",
    weight: 400,
    tailwind: "text-caption",
  },
  {
    role: "Tiny labels",
    size: "10-11px",
    weight: "400-500",
    tailwind: "text-[10px] or text-[11px]",
  },
  {
    role: "Category labels",
    size: "0.6875rem",
    weight: 600,
    tailwind: "text-overline uppercase",
  },
  {
    role: "Chart axis ticks",
    size: "9-11px",
    weight: 400,
    tailwind: "fontSize={9} to fontSize={11}",
  },
];

// ---- 3. Shadows -----------------------------------------------------------

export const shadows: ShadowToken[] = [
  {
    name: "shadow-xs",
    level: "xs",
    value: "0 1px 2px rgba(111,71,11,0.05)",
    usage: "Inputs",
  },
  {
    name: "shadow-sm",
    level: "sm",
    value:
      "0 1px 3px rgba(111,71,11,0.08), 0 1px 2px rgba(111,71,11,0.04)",
    usage: "Cards",
  },
  {
    name: "shadow-md",
    level: "md",
    value:
      "0 4px 6px rgba(111,71,11,0.07), 0 2px 4px rgba(111,71,11,0.04)",
    usage: "Hover, dropdowns",
  },
  {
    name: "shadow-lg",
    level: "lg",
    value:
      "0 10px 15px rgba(111,71,11,0.08), 0 4px 6px rgba(111,71,11,0.04)",
    usage: "Modals",
  },
  {
    name: "shadow-xl",
    level: "xl",
    value:
      "0 20px 25px rgba(111,71,11,0.10), 0 8px 10px rgba(111,71,11,0.04)",
    usage: "Floating panels",
  },
];

// ---- 4. Breakpoints -------------------------------------------------------

export const breakpoints: Breakpoint[] = [
  {
    name: "sm",
    minWidth: "640px",
    context: "Large phones in landscape",
  },
  {
    name: "md",
    minWidth: "768px",
    context: "Tablets in portrait",
  },
  {
    name: "lg",
    minWidth: "1024px",
    context: "Tablets in landscape, small laptops",
  },
  {
    name: "xl",
    minWidth: "1280px",
    context: "Desktops",
  },
  {
    name: "2xl",
    minWidth: "1536px",
    context: "Large desktops and ultra-wide monitors",
  },
];

// ---- 5. Z-Index Scale -----------------------------------------------------

export const zIndexScale: ZIndexLevel[] = [
  { layer: "Sticky filter bar", value: 10 },
  { layer: "Dropdown", value: 10 },
  { layer: "Sidebar", value: 20 },
  { layer: "Mobile nav", value: 30 },
  { layer: "Overlay", value: 30 },
  { layer: "Modal", value: 40 },
  { layer: "Toast", value: 50 },
];

// ---- 6. Spacing Scale (8 px grid) ----------------------------------------

export const spacingScale: SpacingToken[] = [
  { px: 4, tailwind: "p-1" },
  { px: 8, tailwind: "p-2" },
  { px: 10, tailwind: "p-2.5" },
  { px: 12, tailwind: "p-3" },
  { px: 16, tailwind: "p-4" },
  { px: 20, tailwind: "p-5" },
  { px: 24, tailwind: "p-6" },
  { px: 32, tailwind: "p-8" },
  { px: 40, tailwind: "p-10" },
  { px: 48, tailwind: "p-12" },
  { px: 64, tailwind: "p-16" },
];

// ---- 7. Motion ------------------------------------------------------------

export const motionTokens: MotionToken[] = [
  { speed: "Fast", duration: "150ms", use: "Micro-interactions, toggles, icon shifts" },
  { speed: "Default", duration: "200ms", use: "Most transitions, hover states, fade-ins" },
  { speed: "Slow", duration: "250-300ms", use: "Page transitions, complex layout shifts" },
];

export const CATA_EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

// ---- 8. Responsive Adaptation Rules --------------------------------------

export const responsiveRules: ResponsiveRule[] = [
  {
    component: "Sidebar",
    mobile: "Hidden, accessible via hamburger menu overlay",
    tablet: "Collapsible rail (icons only)",
    desktop: "Full 240 px sidebar, always visible",
  },
  {
    component: "Data table",
    mobile: "Card list or horizontally scrollable table",
    tablet: "Truncated columns with horizontal scroll",
    desktop: "Full table with all columns visible",
  },
  {
    component: "KPI row",
    mobile: "Stacked vertically, single column",
    tablet: "2-column grid",
    desktop: "Horizontal row, 4-6 items",
  },
  {
    component: "Charts",
    mobile: "Full width, reduced tick labels",
    tablet: "Full width with legend below",
    desktop: "Side-by-side layout with inline legends",
  },
  {
    component: "Filters",
    mobile: "Collapsed behind a filter button / sheet",
    tablet: "Horizontal scrollable pill row",
    desktop: "Sticky filter bar with inline controls",
  },
  {
    component: "Modals / Dialogs",
    mobile: "Full-screen bottom sheet",
    tablet: "Centered dialog, max-width 480 px",
    desktop: "Centered dialog, max-width 560 px",
  },
];

// ---- 9. Navigation Items for Sidebar -------------------------------------

export const navigation: NavGroup[] = [
  {
    title: "Foundations",
    items: [
      { label: "Colors", path: "/colors", icon: "palette" },
      { label: "Typography", path: "/typography", icon: "type" },
      { label: "Motion", path: "/motion", icon: "zap" },
      { label: "Icons", path: "/icons", icon: "smile" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Components", path: "/components", icon: "box" },
      { label: "Charts", path: "/charts", icon: "bar-chart-2" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { label: "Layout", path: "/layout", icon: "layout" },
      { label: "Accessibility", path: "/accessibility", icon: "eye" },
    ],
  },
];
