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
    "bg-red text-white hover:bg-red/90 shadow-sm hover:shadow-md active:scale-[0.98] transition-all",
  secondary:
    "border border-blue/40 text-blue hover:bg-blue/5 hover:border-blue/60 transition-all",
  outline:
    "border border-card-border text-charcoal hover:bg-background-alt hover:border-muted/40 transition-all",
  light:
    "bg-white text-heading shadow-sm border border-card-border hover:shadow-md hover:border-muted/40 transition-all",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-2.5 text-sm",
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
    "inline-flex items-center justify-center rounded-lg font-semibold cursor-pointer",
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
