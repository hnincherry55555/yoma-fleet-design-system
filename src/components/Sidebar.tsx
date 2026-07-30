"use client";

import { useState } from "react";

export type Section =
  | "color"
  | "themes"
  | "breakpoint"
  | "shape"
  | "spacing"
  | "button";

interface SidebarProps {
  activeSection: Section;
  onSelect: (section: Section) => void;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-md h-md transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const topLevelItems: { id: Section; label: string }[] = [
  { id: "color", label: "Color" },
  { id: "themes", label: "Themes" },
  { id: "breakpoint", label: "Breakpoint" },
  { id: "shape", label: "Shape / Radius" },
  { id: "spacing", label: "Spacing" },
];

export function Sidebar({ activeSection, onSelect }: SidebarProps) {
  const [componentsOpen, setComponentsOpen] = useState(
    activeSection === "button"
  );

  return (
    <aside className="w-[280px] shrink-0 h-screen overflow-y-auto bg-background-background border-r border-background-border">
      <div className="p-lg pb-md">
        <h1 className="text-xl font-bold text-main-color-main">
          Better Design System
        </h1>
        <p className="mt-2xs text-xs text-text-secondary">
          Figma tokens to Tailwind CSS
        </p>
      </div>

      <nav className="px-sm pb-lg space-y-2xs">
        {topLevelItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`w-full text-left px-md py-sm rounded-m text-sm font-semibold cursor-pointer transition-colors ${
              activeSection === id
                ? "bg-main-color-lighterest text-main-color-main"
                : "text-text-secondary hover:bg-background-foreground"
            }`}
          >
            {label}
          </button>
        ))}

        <div>
          <button
            onClick={() => setComponentsOpen(!componentsOpen)}
            className="w-full flex items-center justify-between px-md py-sm rounded-m text-sm font-semibold text-text-secondary hover:bg-background-foreground cursor-pointer transition-colors"
          >
            <span>Components</span>
            <ChevronIcon open={componentsOpen} />
          </button>

          {componentsOpen && (
            <button
              onClick={() => onSelect("button")}
              className={`w-full text-left pl-xxl pr-md py-xs rounded-m text-sm font-medium cursor-pointer transition-colors mt-2xs ${
                activeSection === "button"
                  ? "bg-main-color-lighterest text-main-color-main"
                  : "text-text-secondary hover:bg-background-foreground"
              }`}
            >
              Button
            </button>
          )}
        </div>
      </nav>
    </aside>
  );
}
