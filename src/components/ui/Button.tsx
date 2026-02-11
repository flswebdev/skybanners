import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "light";
type ButtonSize = "default" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-red text-white hover:bg-red/90 shadow-sm transition-colors",
  secondary:
    "border border-blue/30 text-blue hover:bg-blue/5 transition-colors",
  outline:
    "border border-card-border text-charcoal hover:bg-background-alt transition-colors",
  light:
    "bg-white text-heading shadow-sm border border-card-border hover:bg-background-alt transition-colors",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-2.5 text-sm",
  large: "px-8 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-none font-semibold cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
