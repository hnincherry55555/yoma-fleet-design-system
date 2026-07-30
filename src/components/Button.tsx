"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "transparent";
type ButtonSize = "block" | "large" | "small";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right" | "side";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-main-color-main active:bg-main-color-dark text-background-common disabled:bg-background-neutral-3 disabled:text-background-neutral-4",
  secondary:
    "bg-main-color-lighterest active:bg-main-color-lighter text-main-color-main active:text-main-color-dark disabled:bg-background-neutral-3 disabled:text-background-neutral-4",
  outline:
    "border border-main-color-main active:border-main-color-dark text-main-color-main active:text-main-color-dark disabled:border-background-neutral-4 disabled:text-background-neutral-4",
  transparent:
    "text-main-color-main active:text-main-color-dark disabled:text-background-neutral-4",
};

const sizeStyles: Record<ButtonSize, string> = {
  block: "w-full h-4xl px-md",
  large: "h-4xl px-xxl",
  small: "h-xxl px-md",
};

export function Button({
  variant = "primary",
  size = "large",
  icon,
  iconPosition = "side",
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium text-base cursor-pointer disabled:cursor-not-allowed";

  const gapStyle = icon && iconPosition === "side" ? "gap-xs" : "";

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    gapStyle,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconEl = icon ? (
    <span className="inline-flex shrink-0 w-md h-md items-center justify-center">
      {icon}
    </span>
  ) : null;

  if (icon && iconPosition !== "side") {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {iconPosition === "left" && iconEl}
        <span className="flex-1 text-center">{children}</span>
        {iconPosition === "right" && iconEl}
      </button>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {iconEl}
      {children}
    </button>
  );
}
