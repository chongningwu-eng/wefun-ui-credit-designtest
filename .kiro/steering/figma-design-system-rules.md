---
inclusion: manual
---

# Figma Design System Rules — Credit UI

## Project Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v3 with CSS custom properties (HSL)
- shadcn/ui (radix-nova style) with `class-variance-authority`
- Lucide React for icons
- Framer Motion for animations
- Font: Plus Jakarta Sans (body), Source Code Pro (headings/mono)

## Component Organization

- UI primitives: `src/components/ui/` (shadcn components)
- Feature components: `src/components/credit-system/`
- Utility: `src/lib/utils.ts` — always use `cn()` for class merging
- Path aliases: `@/components`, `@/lib`, `@/hooks`

## Figma MCP Integration Flow

1. Run `get_design_context` to fetch structured design data
2. Run `get_screenshot` for visual reference
3. Download assets from localhost URLs directly — never create placeholders
4. Translate output to project conventions (see below)
5. Validate against screenshot for 1:1 visual parity

## Styling Rules

- IMPORTANT: Never hardcode colors — use Tailwind tokens mapped to CSS vars
- IMPORTANT: Use `cn()` from `@/lib/utils` for all className composition
- Colors use HSL format via CSS custom properties: `hsl(var(--gray-700))`
- Tailwind config maps these to semantic names: `bg-gray-700`, `text-primary`
- Dark mode via `.dark` class on root — both light/dark tokens defined
- Border radius tokens: `rounded-xl` (12px), `rounded-lg` (10px), `rounded-md` (8px)

## Component Patterns

- Use `cva` (class-variance-authority) for variant-based components
- Components accept `className` prop and spread remaining props
- shadcn pattern: named exports, `data-slot` attributes, Radix primitives
- Variants use `VariantProps<typeof xVariants>` typing

## Asset Rules

- IMPORTANT: Use localhost URLs from Figma MCP server directly
- IMPORTANT: DO NOT install new icon packages — use Lucide React or Figma assets
- Store static assets in `public/` or `src/assets/`

## Design Tokens (Dark Theme — Primary)

- Background: `--gray-950` / `--gray-925` / `--gray-900`
- Text primary: `--base-white`, secondary: `--gray-400`
- Accent green: `--green-500` / `--green-600`
- Accent indigo: `--indigo-500` / `--indigo-400`
- Borders: `--gray-800` / `--gray-700`
- Success: `--success-*`, Error: `--error-*`

## Implementation Checklist

- [ ] Reuse existing shadcn components before creating new ones
- [ ] Map Figma colors to project CSS variable tokens
- [ ] Use semantic Tailwind classes (bg-primary, text-muted-foreground)
- [ ] Ensure dark mode support via CSS variable system
- [ ] Follow existing component file naming (kebab-case files, PascalCase exports)
