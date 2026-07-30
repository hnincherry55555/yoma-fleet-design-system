"use client";

import { useState, type ReactNode } from "react";
import { Button } from "./Button";

function CircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

type ButtonSize = "small" | "large" | "block";

const sizes: { value: ButtonSize; label: string }[] = [
  { value: "small", label: "Small" },
  { value: "large", label: "Large" },
  { value: "block", label: "Block" },
];

const variants = ["primary", "secondary", "outline", "transparent"] as const;

function VariantSection({
  variant,
  size,
  wrapper,
}: {
  variant: (typeof variants)[number];
  size: ButtonSize;
  wrapper?: (children: ReactNode) => ReactNode;
}) {
  const label = variant.charAt(0).toUpperCase() + variant.slice(1);
  const wrap = wrapper ?? ((c: ReactNode) => c);

  return (
    <div className="space-y-sm">
      <h3 className="text-sm font-medium text-text-secondary">{label}</h3>

      <div className="space-y-xs">
        <p className="text-xs text-text-disabled">Default</p>
        <div className="flex flex-wrap items-center gap-sm">
          {wrap(<Button variant={variant} size={size}>Button</Button>)}
          {wrap(
            <Button variant={variant} size={size} icon={<CircleIcon />} iconPosition="side">
              Button
            </Button>
          )}
          {wrap(
            <Button variant={variant} size={size} icon={<CircleIcon />} iconPosition="left">
              Button
            </Button>
          )}
          {wrap(
            <Button variant={variant} size={size} icon={<CircleIcon />} iconPosition="right">
              Button
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-xs">
        <p className="text-xs text-text-disabled">Disabled</p>
        <div className="flex flex-wrap items-center gap-sm">
          {wrap(<Button variant={variant} size={size} disabled>Button</Button>)}
          {wrap(
            <Button variant={variant} size={size} disabled icon={<CircleIcon />} iconPosition="side">
              Button
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ButtonShowcase() {
  const [selectedSize, setSelectedSize] = useState<ButtonSize>("large");

  const blockWrapper =
    selectedSize === "block"
      ? (c: ReactNode) => <div className="max-w-[327px] w-full">{c}</div>
      : undefined;

  return (
    <div className="space-y-xl">
      <div className="flex items-center gap-sm">
        <span className="text-sm font-medium text-text-secondary">Size</span>
        <div className="inline-flex rounded-xl overflow-hidden border border-background-border">
          {sizes.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setSelectedSize(value)}
              className={`px-md py-xs text-sm font-medium cursor-pointer transition-colors ${
                selectedSize === value
                  ? "bg-main-color-main text-background-common"
                  : "bg-background-background text-text-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <section className="space-y-lg rounded-l bg-background-foreground p-lg">
        {variants.map((v) => (
          <VariantSection
            key={v}
            variant={v}
            size={selectedSize}
            wrapper={blockWrapper}
          />
        ))}
      </section>
    </div>
  );
}
