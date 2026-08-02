import { ButtonShowcase } from "@/components/ButtonShowcase";
import {
  breakpoints,
  colorFamilies,
  radii,
  spacings,
  themeGroups,
} from "@/design/tokens.generated";
import type { Section } from "./Sidebar";

/* ───────────────────────────────────────────
   All token data comes from src/design/tokens.generated.ts, which the
   transformer writes alongside the CSS. Swatches and previews reference
   the CSS variable directly rather than a Tailwind utility, so the page
   cannot drift from tokens.json and Tailwind never has to scan a
   generated file for class names.
   ─────────────────────────────────────────── */

function ColorSection() {
  return (
    <div className="space-y-xl">
      <p className="text-sm text-text-secondary">
        Primitive color tokens from the Figma Color collection. These are static
        and do not change between light and dark themes.
      </p>

      {colorFamilies.map((family) => (
        <div key={family.name} className="space-y-md">
          <h3 className="text-lg font-semibold text-text-primary">
            {family.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-md">
            {family.colors.map((color) => (
              <div key={color.cssVar} className="space-y-xs">
                <div
                  className="h-5xl rounded-m border border-background-border"
                  style={{ backgroundColor: `var(${color.cssVar})` }}
                />
                <p className="text-sm font-medium text-text-primary">
                  {family.name} / {color.shade}
                </p>
                <code className="block text-xs font-mono text-text-secondary">
                  {color.cssVar}
                </code>
                <code className="block text-xs font-mono text-main-color-main">
                  {color.twClass}
                </code>
                <p className="text-xs font-mono text-text-secondary">
                  {color.hex}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ThemesSection() {
  return (
    <div className="space-y-xl">
      <p className="text-sm text-text-secondary">
        Semantic tokens that automatically switch between light and dark themes.
        The swatch reflects the currently active theme.
      </p>

      {themeGroups.map((group) => (
        <div key={group.groupName} className="space-y-md">
          <h3 className="text-lg font-semibold text-text-primary">
            {group.groupName}
          </h3>

          <div className="overflow-x-auto rounded-m border border-background-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-background-foreground">
                  <th className="text-left px-md py-sm font-medium text-text-secondary">
                    Swatch
                  </th>
                  <th className="text-left px-md py-sm font-medium text-text-secondary">
                    Token
                  </th>
                  <th className="text-left px-md py-sm font-medium text-text-secondary">
                    CSS Variable
                  </th>
                  <th className="text-left px-md py-sm font-medium text-text-secondary">
                    Light
                  </th>
                  <th className="text-left px-md py-sm font-medium text-text-secondary">
                    Dark
                  </th>
                </tr>
              </thead>
              <tbody>
                {group.tokens.map((token) => (
                  <tr
                    key={token.cssVar}
                    className="border-t border-background-border"
                  >
                    <td className="px-md py-sm">
                      <div
                        className="w-xl h-xl rounded-s border border-background-border"
                        style={{ backgroundColor: `var(${token.cssVar})` }}
                      />
                    </td>
                    <td className="px-md py-sm font-medium text-text-primary">
                      {token.name}
                    </td>
                    <td className="px-md py-sm">
                      <code className="font-mono text-xs text-text-secondary">
                        {token.cssVar}
                      </code>
                    </td>
                    <td className="px-md py-sm">
                      <code className="font-mono text-xs text-text-secondary">
                        {token.light}
                      </code>
                    </td>
                    <td className="px-md py-sm">
                      <code className="font-mono text-xs text-text-secondary">
                        {token.dark}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

function BreakpointSection() {
  return (
    <div className="space-y-md">
      <p className="text-sm text-text-secondary">
        Responsive breakpoints defined as Figma variables. Use the Tailwind
        prefix for responsive utility classes.
      </p>

      <div className="overflow-x-auto rounded-m border border-background-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-background-foreground">
              <th className="text-left px-md py-sm font-medium text-text-secondary">
                Name
              </th>
              <th className="text-left px-md py-sm font-medium text-text-secondary">
                Value
              </th>
              <th className="text-left px-md py-sm font-medium text-text-secondary">
                Tailwind Prefix
              </th>
              <th className="text-left px-md py-sm font-medium text-text-secondary">
                CSS Variable
              </th>
            </tr>
          </thead>
          <tbody>
            {breakpoints.map((bp) => (
              <tr key={bp.name} className="border-t border-background-border">
                <td className="px-md py-sm font-medium text-text-primary">
                  {bp.name}
                </td>
                <td className="px-md py-sm font-mono text-xs text-text-secondary">
                  {bp.value}
                </td>
                <td className="px-md py-sm">
                  <code className="font-mono text-xs text-main-color-main">
                    {bp.prefix}
                  </code>
                </td>
                <td className="px-md py-sm">
                  <code className="font-mono text-xs text-text-secondary">
                    {bp.cssVar}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShapeSection() {
  return (
    <div className="space-y-md">
      <p className="text-sm text-text-secondary">
        Border radius tokens from Figma. Each preview box demonstrates the
        radius value applied to a square.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-lg">
        {radii.map((r) => (
          <div key={r.name} className="flex flex-col items-center gap-sm">
            <div
              className="w-5xl h-5xl bg-main-color-lighterest border border-main-color-main"
              style={{ borderRadius: `var(${r.cssVar})` }}
            />
            <p className="text-sm font-medium text-text-primary">{r.name}</p>
            <code className="text-xs font-mono text-text-secondary">
              {r.value}
            </code>
            <code className="text-xs font-mono text-main-color-main">
              {r.twClass}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpacingSection() {
  return (
    <div className="space-y-md">
      <p className="text-sm text-text-secondary">
        Spacing tokens used for padding, margin, and gap. The bar width
        represents the token value.
      </p>

      <div className="space-y-sm">
        {spacings.map((s) => (
          <div key={s.name} className="flex items-center gap-md">
            <span className="w-xxl text-sm font-medium text-text-primary shrink-0 text-right">
              {s.name}
            </span>
            <div
              className="h-sm bg-main-color-main rounded-xs shrink-0"
              style={{ width: `var(${s.cssVar})` }}
            />
            <code className="text-xs font-mono text-text-secondary shrink-0">
              {s.cssVar}
            </code>
            <span className="text-xs font-mono text-text-secondary shrink-0">
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ButtonSection() {
  return (
    <div className="space-y-md">
      <p className="text-sm text-text-secondary">
        A button allows users to perform actions, such as submitting a form,
        opening a dialog, or canceling an action.
      </p>
      <ButtonShowcase />
    </div>
  );
}

/* ───────────────────────────────────────────
   Main export
   ─────────────────────────────────────────── */

interface TokenSectionProps {
  section: Section;
}

const sections: Record<Section, () => React.JSX.Element> = {
  color: ColorSection,
  themes: ThemesSection,
  breakpoint: BreakpointSection,
  shape: ShapeSection,
  spacing: SpacingSection,
  button: ButtonSection,
};

export function TokenSection({ section }: TokenSectionProps) {
  const Component = sections[section];
  return <Component />;
}
