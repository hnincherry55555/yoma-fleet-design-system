import { ButtonShowcase } from "@/components/ButtonShowcase";
import type { Section } from "./Sidebar";

/* ───────────────────────────────────────────
   Color section data
   ─────────────────────────────────────────── */

interface ColorToken {
  shade: string;
  twClass: string;
  cssVar: string;
  hex: string;
}

interface ColorFamily {
  name: string;
  colors: ColorToken[];
}

const colorFamilies: ColorFamily[] = [
  {
    name: "Primary",
    colors: [
      { shade: "Dark", twClass: "bg-primary-dark", cssVar: "--color-primary-dark", hex: "#17195d" },
      { shade: "Base", twClass: "bg-primary-base", cssVar: "--color-primary-base", hex: "#2e3282" },
      { shade: "Light", twClass: "bg-primary-light", cssVar: "--color-primary-light", hex: "#858ad9" },
      { shade: "Lighter", twClass: "bg-primary-lighter", cssVar: "--color-primary-lighter", hex: "#b3b7f2" },
      { shade: "Lightest", twClass: "bg-primary-lightest", cssVar: "--color-primary-lightest", hex: "#d8daf8" },
    ],
  },
  {
    name: "Secondary",
    colors: [
      { shade: "Dark", twClass: "bg-secondary-dark", cssVar: "--color-secondary-dark", hex: "#ab4900" },
      { shade: "Base", twClass: "bg-secondary-base", cssVar: "--color-secondary-base", hex: "#ee7d00" },
      { shade: "Light", twClass: "bg-secondary-light", cssVar: "--color-secondary-light", hex: "#f9c163" },
      { shade: "Lighter", twClass: "bg-secondary-lighter", cssVar: "--color-secondary-lighter", hex: "#fddb97" },
      { shade: "Lightest", twClass: "bg-secondary-lightest", cssVar: "--color-secondary-lightest", hex: "#feefcb" },
    ],
  },
  {
    name: "Ink",
    colors: [
      { shade: "Darkest", twClass: "bg-ink-darkest", cssVar: "--color-ink-darkest", hex: "#090a0a" },
      { shade: "Darker", twClass: "bg-ink-darker", cssVar: "--color-ink-darker", hex: "#202325" },
      { shade: "Dark", twClass: "bg-ink-dark", cssVar: "--color-ink-dark", hex: "#303437" },
      { shade: "Base", twClass: "bg-ink-base", cssVar: "--color-ink-base", hex: "#404446" },
      { shade: "Light", twClass: "bg-ink-light", cssVar: "--color-ink-light", hex: "#6c7072" },
      { shade: "Lighter", twClass: "bg-ink-lighter", cssVar: "--color-ink-lighter", hex: "#72777a" },
    ],
  },
  {
    name: "Sky",
    colors: [
      { shade: "Dark", twClass: "bg-sky-dark", cssVar: "--color-sky-dark", hex: "#979c9e" },
      { shade: "Base", twClass: "bg-sky-base", cssVar: "--color-sky-base", hex: "#cdcfd0" },
      { shade: "Light", twClass: "bg-sky-light", cssVar: "--color-sky-light", hex: "#e3e5e6" },
      { shade: "Lighter", twClass: "bg-sky-lighter", cssVar: "--color-sky-lighter", hex: "#f2f4f5" },
      { shade: "Lightest", twClass: "bg-sky-lightest", cssVar: "--color-sky-lightest", hex: "#f7f9fa" },
    ],
  },
  {
    name: "Green",
    colors: [
      { shade: "Darkest", twClass: "bg-green-darkest", cssVar: "--color-green-darkest", hex: "#198155" },
      { shade: "Base", twClass: "bg-green-base", cssVar: "--color-green-base", hex: "#23c16b" },
      { shade: "Light", twClass: "bg-green-light", cssVar: "--color-green-light", hex: "#4cd471" },
      { shade: "Lighter", twClass: "bg-green-lighter", cssVar: "--color-green-lighter", hex: "#7dde86" },
      { shade: "Lightest", twClass: "bg-green-lightest", cssVar: "--color-green-lightest", hex: "#ecfce5" },
    ],
  },
  {
    name: "Red",
    colors: [
      { shade: "Darkest", twClass: "bg-red-darkest", cssVar: "--color-red-darkest", hex: "#d3180c" },
      { shade: "Base", twClass: "bg-red-base", cssVar: "--color-red-base", hex: "#ff5247" },
      { shade: "Light", twClass: "bg-red-light", cssVar: "--color-red-light", hex: "#ff6d6d" },
      { shade: "Lighter", twClass: "bg-red-lighter", cssVar: "--color-red-lighter", hex: "#ff9898" },
      { shade: "Lightest", twClass: "bg-red-lightest", cssVar: "--color-red-lightest", hex: "#ffe5e5" },
    ],
  },
  {
    name: "Blue",
    colors: [
      { shade: "Darkest", twClass: "bg-blue-darkest", cssVar: "--color-blue-darkest", hex: "#0065d0" },
      { shade: "Base", twClass: "bg-blue-base", cssVar: "--color-blue-base", hex: "#48a7f8" },
      { shade: "Light", twClass: "bg-blue-light", cssVar: "--color-blue-light", hex: "#6ec2fb" },
      { shade: "Lighter", twClass: "bg-blue-lighter", cssVar: "--color-blue-lighter", hex: "#9bdcfd" },
      { shade: "Lightest", twClass: "bg-blue-lightest", cssVar: "--color-blue-lightest", hex: "#c9f0ff" },
    ],
  },
  {
    name: "Yellow",
    colors: [
      { shade: "Darkest", twClass: "bg-yellow-darkest", cssVar: "--color-yellow-darkest", hex: "#a05e03" },
      { shade: "Base", twClass: "bg-yellow-base", cssVar: "--color-yellow-base", hex: "#ffb323" },
      { shade: "Light", twClass: "bg-yellow-light", cssVar: "--color-yellow-light", hex: "#ffc462" },
      { shade: "Lighter", twClass: "bg-yellow-lighter", cssVar: "--color-yellow-lighter", hex: "#ffd188" },
      { shade: "Lightest", twClass: "bg-yellow-lightest", cssVar: "--color-yellow-lightest", hex: "#ffefd7" },
    ],
  },
  {
    name: "Sky Blue",
    colors: [
      { shade: "Darkest", twClass: "bg-sky-blue-darkest", cssVar: "--color-sky-blue-darkest", hex: "#027fb7" },
      { shade: "Base", twClass: "bg-sky-blue-base", cssVar: "--color-sky-blue-base", hex: "#04d9ff" },
      { shade: "Light", twClass: "bg-sky-blue-light", cssVar: "--color-sky-blue-light", hex: "#68fffe" },
      { shade: "Lighter", twClass: "bg-sky-blue-lighter", cssVar: "--color-sky-blue-lighter", hex: "#9afff6" },
      { shade: "Lightest", twClass: "bg-sky-blue-lightest", cssVar: "--color-sky-blue-lightest", hex: "#ccfff7" },
    ],
  },
  {
    name: "White",
    colors: [
      { shade: "White", twClass: "bg-sky-white", cssVar: "--color-sky-white", hex: "#ffffff" },
    ],
  },
];

/* ───────────────────────────────────────────
   Themes section data
   ─────────────────────────────────────────── */

interface ThemeToken {
  name: string;
  twClass: string;
  cssVar: string;
  light: string;
  dark: string;
}

interface ThemeGroup {
  groupName: string;
  tokens: ThemeToken[];
}

const themeGroups: ThemeGroup[] = [
  {
    groupName: "Background",
    tokens: [
      { name: "background", twClass: "bg-background-background", cssVar: "--theme-background-background", light: "#ffffff", dark: "#1f2126" },
      { name: "foreground", twClass: "bg-background-foreground", cssVar: "--theme-background-foreground", light: "#f7f9fa", dark: "#303437" },
      { name: "common", twClass: "bg-background-common", cssVar: "--theme-background-common", light: "#ffffff", dark: "#000000" },
      { name: "neutral-1", twClass: "bg-background-neutral-1", cssVar: "--theme-background-neutral-1", light: "#f7f9fa", dark: "#202325" },
      { name: "neutral-2", twClass: "bg-background-neutral-2", cssVar: "--theme-background-neutral-2", light: "#f2f4f5", dark: "#303437" },
      { name: "neutral-3", twClass: "bg-background-neutral-3", cssVar: "--theme-background-neutral-3", light: "#e3e5e6", dark: "#404446" },
      { name: "neutral-4", twClass: "bg-background-neutral-4", cssVar: "--theme-background-neutral-4", light: "#cdcfd0", dark: "#6c7072" },
      { name: "neutral-5", twClass: "bg-background-neutral-5", cssVar: "--theme-background-neutral-5", light: "#979c9e", dark: "#72777a" },
      { name: "neutral-6", twClass: "bg-background-neutral-6", cssVar: "--theme-background-neutral-6", light: "#72777a", dark: "#979c9e" },
      { name: "neutral-7", twClass: "bg-background-neutral-7", cssVar: "--theme-background-neutral-7", light: "#6c7072", dark: "#cdcfd0" },
      { name: "neutral-8", twClass: "bg-background-neutral-8", cssVar: "--theme-background-neutral-8", light: "#404446", dark: "#e3e5e6" },
      { name: "neutral-9", twClass: "bg-background-neutral-9", cssVar: "--theme-background-neutral-9", light: "#303437", dark: "#f2f4f5" },
      { name: "neutral-10", twClass: "bg-background-neutral-10", cssVar: "--theme-background-neutral-10", light: "#202325", dark: "#f7f9fa" },
      { name: "border", twClass: "bg-background-border", cssVar: "--theme-background-border", light: "#cdcfd0", dark: "#6c7072" },
      { name: "status-bar", twClass: "bg-background-status-bar", cssVar: "--theme-background-status-bar", light: "#000000", dark: "#ffffff" },
    ],
  },
  {
    groupName: "Main Color",
    tokens: [
      { name: "dark", twClass: "bg-main-color-dark", cssVar: "--theme-main-color-dark", light: "#17195d", dark: "#ab4900" },
      { name: "main", twClass: "bg-main-color-main", cssVar: "--theme-main-color-main", light: "#2e3282", dark: "#ee7d00" },
      { name: "light", twClass: "bg-main-color-light", cssVar: "--theme-main-color-light", light: "#858ad9", dark: "#f9c163" },
      { name: "lighter", twClass: "bg-main-color-lighter", cssVar: "--theme-main-color-lighter", light: "#b3b7f2", dark: "#fddb97" },
      { name: "lighterest", twClass: "bg-main-color-lighterest", cssVar: "--theme-main-color-lighterest", light: "#d8daf8", dark: "#feefcb" },
    ],
  },
  {
    groupName: "Text",
    tokens: [
      { name: "primary", twClass: "bg-text-primary", cssVar: "--theme-text-primary", light: "#090a0a", dark: "#f7f9fa" },
      { name: "secondary", twClass: "bg-text-secondary", cssVar: "--theme-text-secondary", light: "#404446", dark: "#cdcfd0" },
      { name: "disabled", twClass: "bg-text-disabled", cssVar: "--theme-text-disabled", light: "#cdcfd0", dark: "#404446" },
    ],
  },
  {
    groupName: "Action",
    tokens: [
      { name: "active", twClass: "bg-action-active", cssVar: "--theme-action-active", light: "#0000008f", dark: "#ffffff8f" },
      { name: "hover", twClass: "bg-action-hover", cssVar: "--theme-action-hover", light: "#0000000a", dark: "#ffffff14" },
      { name: "selected", twClass: "bg-action-selected", cssVar: "--theme-action-selected", light: "#00000014", dark: "#ffffff29" },
      { name: "focus", twClass: "bg-action-focus", cssVar: "--theme-action-focus", light: "#0000001f", dark: "#ffffff1f" },
      { name: "disabled", twClass: "bg-action-disabled", cssVar: "--theme-action-disabled", light: "#00000061", dark: "#ffffff61" },
      { name: "disabledbackground", twClass: "bg-action-disabledbackground", cssVar: "--theme-action-disabledbackground", light: "#0000001f", dark: "#ffffff1f" },
    ],
  },
  {
    groupName: "Button",
    tokens: [
      { name: "action-disable", twClass: "bg-button-action-disable", cssVar: "--theme-button-action-disable", light: "#00000061", dark: "#00000061" },
    ],
  },
  {
    groupName: "Divider",
    tokens: [
      { name: "color", twClass: "bg-divider-color", cssVar: "--theme-divider-color", light: "#0000001f", dark: "#ffffff1f" },
    ],
  },
  {
    groupName: "Error",
    tokens: [
      { name: "contrast", twClass: "bg-error-contrast", cssVar: "--theme-error-contrast", light: "#ffffff", dark: "#ffffff" },
      { name: "states-hover", twClass: "bg-error-states-hover", cssVar: "--theme-error-states-hover", light: "#d32f2f0a", dark: "#f4433614" },
      { name: "states-selected", twClass: "bg-error-states-selected", cssVar: "--theme-error-states-selected", light: "#d32f2f14", dark: "#f4433629" },
      { name: "states-focusvisible", twClass: "bg-error-states-focusvisible", cssVar: "--theme-error-states-focusvisible", light: "#d32f2f4d", dark: "#f443364d" },
      { name: "states-outlinedborder", twClass: "bg-error-states-outlinedborder", cssVar: "--theme-error-states-outlinedborder", light: "#d32f2f80", dark: "#f4433680" },
    ],
  },
  {
    groupName: "Warning",
    tokens: [
      { name: "contrast", twClass: "bg-warning-contrast", cssVar: "--theme-warning-contrast", light: "#ffffff", dark: "#000000de" },
      { name: "states-hover", twClass: "bg-warning-states-hover", cssVar: "--theme-warning-states-hover", light: "#ef6c000a", dark: "#ffa72614" },
      { name: "states-selected", twClass: "bg-warning-states-selected", cssVar: "--theme-warning-states-selected", light: "#ef6c0014", dark: "#ffa72629" },
      { name: "states-focusvisible", twClass: "bg-warning-states-focusvisible", cssVar: "--theme-warning-states-focusvisible", light: "#ef6c004d", dark: "#ffa7264d" },
      { name: "states-outlinedborder", twClass: "bg-warning-states-outlinedborder", cssVar: "--theme-warning-states-outlinedborder", light: "#ef6c0080", dark: "#ffa72680" },
    ],
  },
  {
    groupName: "Info",
    tokens: [
      { name: "contrast", twClass: "bg-info-contrast", cssVar: "--theme-info-contrast", light: "#ffffff", dark: "#000000de" },
      { name: "states-hover", twClass: "bg-info-states-hover", cssVar: "--theme-info-states-hover", light: "#0288d10a", dark: "#29b6f614" },
      { name: "states-selected", twClass: "bg-info-states-selected", cssVar: "--theme-info-states-selected", light: "#0288d114", dark: "#29b6f629" },
      { name: "states-focusvisible", twClass: "bg-info-states-focusvisible", cssVar: "--theme-info-states-focusvisible", light: "#0288d14d", dark: "#29b6f64d" },
      { name: "states-outlinedborder", twClass: "bg-info-states-outlinedborder", cssVar: "--theme-info-states-outlinedborder", light: "#0288d180", dark: "#29b6f680" },
    ],
  },
  {
    groupName: "Success",
    tokens: [
      { name: "contrast", twClass: "bg-success-contrast", cssVar: "--theme-success-contrast", light: "#ffffff", dark: "#000000de" },
      { name: "states-hover", twClass: "bg-success-states-hover", cssVar: "--theme-success-states-hover", light: "#2e7d320a", dark: "#66bb6a14" },
      { name: "states-selected", twClass: "bg-success-states-selected", cssVar: "--theme-success-states-selected", light: "#2e7d3214", dark: "#66bb6a29" },
      { name: "states-focusvisible", twClass: "bg-success-states-focusvisible", cssVar: "--theme-success-states-focusvisible", light: "#2e7d324d", dark: "#66bb6a4d" },
      { name: "states-outlinedborder", twClass: "bg-success-states-outlinedborder", cssVar: "--theme-success-states-outlinedborder", light: "#2e7d3280", dark: "#66bb6a80" },
    ],
  },
];

/* ───────────────────────────────────────────
   Breakpoint data
   ─────────────────────────────────────────── */

const breakpoints = [
  { name: "xs", value: "444px", prefix: "xs:" },
  { name: "sm", value: "600px", prefix: "sm:" },
  { name: "md", value: "900px", prefix: "md:" },
  { name: "lg", value: "1200px", prefix: "lg:" },
  { name: "xl", value: "1536px", prefix: "xl:" },
];

/* ───────────────────────────────────────────
   Shape / Radius data
   ─────────────────────────────────────────── */

const radii = [
  { name: "none", value: "0px", twClass: "rounded-none" },
  { name: "xs", value: "2px", twClass: "rounded-xs" },
  { name: "s", value: "4px", twClass: "rounded-s" },
  { name: "m", value: "8px", twClass: "rounded-m" },
  { name: "l", value: "12px", twClass: "rounded-l" },
  { name: "xl", value: "16px", twClass: "rounded-xl" },
  { name: "xxl", value: "20px", twClass: "rounded-xxl" },
  { name: "xxxl", value: "24px", twClass: "rounded-xxxl" },
  { name: "full", value: "9999px", twClass: "rounded-full" },
];

/* ───────────────────────────────────────────
   Spacing data
   ─────────────────────────────────────────── */

const spacings = [
  { name: "none", value: "0px", cssVar: "--spacing-none", barClass: "w-none" },
  { name: "2xs", value: "4px", cssVar: "--spacing-2xs", barClass: "w-2xs" },
  { name: "xs", value: "8px", cssVar: "--spacing-xs", barClass: "w-xs" },
  { name: "sm", value: "12px", cssVar: "--spacing-sm", barClass: "w-sm" },
  { name: "md", value: "16px", cssVar: "--spacing-md", barClass: "w-md" },
  { name: "lg", value: "20px", cssVar: "--spacing-lg", barClass: "w-lg" },
  { name: "xl", value: "24px", cssVar: "--spacing-xl", barClass: "w-xl" },
  { name: "xxl", value: "32px", cssVar: "--spacing-xxl", barClass: "w-xxl" },
  { name: "xxxl", value: "40px", cssVar: "--spacing-xxxl", barClass: "w-xxxl" },
  { name: "4xl", value: "48px", cssVar: "--spacing-4xl", barClass: "w-4xl" },
  { name: "5xl", value: "56px", cssVar: "--spacing-5xl", barClass: "w-5xl" },
  { name: "6xl", value: "64px", cssVar: "--spacing-6xl", barClass: "w-6xl" },
  { name: "7xl", value: "72px", cssVar: "--spacing-7xl", barClass: "w-7xl" },
  { name: "8xl", value: "84px", cssVar: "--spacing-8xl", barClass: "w-8xl" },
  { name: "9xl", value: "96px", cssVar: "--spacing-9xl", barClass: "w-9xl" },
  { name: "10xl", value: "120px", cssVar: "--spacing-10xl", barClass: "w-10xl" },
];

/* ───────────────────────────────────────────
   Sub-sections
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
              <div
                key={color.cssVar}
                className="space-y-xs"
              >
                <div
                  className={`${color.twClass} h-5xl rounded-m border border-background-border`}
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
                        className={`${token.twClass} w-xl h-xl rounded-s border border-background-border`}
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
              <tr
                key={bp.name}
                className="border-t border-background-border"
              >
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
                    --breakpoint-{bp.name}
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
              className={`w-5xl h-5xl bg-main-color-lighterest border border-main-color-main ${r.twClass}`}
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
          <div
            key={s.name}
            className="flex items-center gap-md"
          >
            <span className="w-xxl text-sm font-medium text-text-primary shrink-0 text-right">
              {s.name}
            </span>
            <div
              className={`${s.barClass} h-sm bg-main-color-main rounded-xs shrink-0`}
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
