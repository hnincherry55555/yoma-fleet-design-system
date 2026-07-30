@AGENTS.md

# Better Design System

## Project overview

Figma-first design system for Yoma Fleet's Better product. Figma Variables are the single source of truth. The pipeline: Figma Variables → JSON export (Variable Visualizer) → transformer script → CSS custom properties + Tailwind v4 @theme → components.

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (CSS-based config via `@theme`, not `tailwind.config.ts`)
- Design tokens: `src/design/tokens.json` (Figma export)

## Token pipeline

1. `src/design/tokens.json` - raw Figma export (Variable Visualizer)
2. `scripts/generate-tailwind-theme.ts` - transformer
3. `src/design/tokens.css` - CSS custom properties (primitives + Light/Dark theme)
4. `src/design/theme.css` - Tailwind v4 `@theme inline` block
5. `src/app/globals.css` - imports tokens.css and theme.css

Run `npm run sync-tokens` after updating tokens.json.

## Token naming convention

Figma Variable names map directly to CSS/Tailwind:
- `Primary/Dark` → `--color-primary-dark` → `bg-primary-dark`, `text-primary-dark`
- `background/background` → `--theme-background-background` → `bg-background-background`
- `text/primary` → `--theme-text-primary` → `text-text-primary`
- Spacing `md` → `--spacing-md` → `p-md`, `gap-md`
- Radius `border-radius-m` → `--radius-m` → `rounded-m`
- Breakpoint `sm` → `--breakpoint-sm` → `sm:` prefix

## Design system rules (STRICT)

### Token-only styling

- NEVER use hardcoded color values (`#hex`, `rgb()`, `hsl()`)
- NEVER use Tailwind arbitrary values (`bg-[#17195d]`, `p-[16px]`)
- NEVER use Tailwind's default palette (`bg-blue-500`, `text-gray-900`)
- ALWAYS use design token classes: `bg-primary-base`, `text-text-primary`, `p-md`, `rounded-m`
- ALWAYS use semantic (Theme) tokens for colors that should respond to dark mode
- Use primitive tokens only for decorative/brand elements that stay the same in both themes

### Component creation workflow

1. **Extract schema**: Use Figma MCP tools to read the component's structure, props, and variants
2. **Map tokens**: Map every visual property to a design token variable name
3. **Implement**: Build the React component using only Tailwind token classes
4. **Verify**: Grep the component for any raw hex/rgb/px values (must find zero)

### File organization

- Components: `src/components/{ComponentName}.tsx`
- Design tokens: `src/design/`
- Never modify generated files (`tokens.css`, `theme.css`) directly

### Dark mode

- Dark mode uses the `dark` class on `<html>` or `[data-theme="dark"]`
- All semantic/theme tokens (background, text, action, error, warning, info, success) automatically switch
- Primitive tokens (Color collection) are static and don't switch

### Spacing token collision with Tailwind defaults

The Figma spacing tokens (4xl-10xl) override Tailwind's built-in size scale for those names. This means `max-w-4xl`, `w-4xl`, `h-4xl` etc. resolve to the Figma spacing values (48px, 56px, 64px...) instead of Tailwind's defaults.

For layout-level width/height constraints, use:
- Arbitrary values: `max-w-[56rem]`, `w-[1200px]`
- Tailwind's numeric scale: `max-w-96`, `w-64` (these are unaffected)
- Breakpoint tokens: use the Figma breakpoint values for responsive layouts

Figma spacing tokens (xs, sm, md, lg, xl, xxl, xxxl) are safe for component-level spacing (padding, margin, gap).

### Self-check before completing a component

- `grep -rn '#[0-9a-fA-F]' src/components/` should return zero matches
- `grep -rn '\[#' src/components/` should return zero matches (no Tailwind arbitrary colors)
- `grep -rn 'bg-gray\|bg-slate\|bg-zinc\|text-gray\|text-slate\|text-zinc' src/components/` should return zero matches (no Tailwind defaults)
