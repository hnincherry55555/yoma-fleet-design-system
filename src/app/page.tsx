"use client";

import { useState } from "react";
import { Sidebar, type Section } from "@/components/Sidebar";
import { TokenSection } from "@/components/TokenSection";
import { ThemeToggle } from "@/components/ThemeToggle";

const sectionTitles: Record<Section, string> = {
  color: "Color",
  themes: "Themes",
  breakpoint: "Breakpoint",
  shape: "Shape / Radius",
  spacing: "Spacing",
  button: "Button",
};

const sectionDescriptions: Record<Section, string> = {
  color: "Primitive color palette from Figma Variables",
  themes: "Semantic tokens with light and dark theme values",
  breakpoint: "Responsive breakpoint definitions",
  shape: "Border radius token scale",
  spacing: "Spacing token scale for padding, margin, and gap",
  button: "Button component with all variants and states",
};

export default function Home() {
  const [section, setSection] = useState<Section>("color");

  return (
    <div className="flex h-screen overflow-hidden bg-background-background">
      <Sidebar activeSection={section} onSelect={setSection} />

      <main className="flex-1 overflow-y-auto p-xl">
        <div className="max-w-[960px]">
          <header className="mb-xl">
            <h2 className="text-2xl font-bold text-text-primary">
              {sectionTitles[section]}
            </h2>
            <p className="mt-xs text-sm text-text-secondary">
              {sectionDescriptions[section]}
            </p>
          </header>

          <TokenSection section={section} />
        </div>
      </main>

      <ThemeToggle />
    </div>
  );
}
