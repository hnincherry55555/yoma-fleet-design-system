"use client";

import { useState } from "react";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-full h-full">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      <path d="M14.5 9.5l.5-.5M16 12h.5" />
    </svg>
  );
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  function handleToggle() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-xl right-xl z-50 flex items-center bg-background-neutral-10 rounded-full p-xs cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`flex items-center justify-center w-xxxl h-xxxl rounded-full transition-all ${
          !isDark
            ? "bg-background-background text-text-primary"
            : "bg-transparent text-background-neutral-5"
        }`}
      >
        <span className="w-lg h-lg"><SunIcon /></span>
      </span>
      <span className="w-xs" />
      <span
        className={`flex items-center justify-center w-xxxl h-xxxl rounded-full transition-all ${
          isDark
            ? "bg-background-background text-text-primary"
            : "bg-transparent text-background-neutral-5"
        }`}
      >
        <span className="w-lg h-lg"><MoonIcon /></span>
      </span>
    </button>
  );
}
