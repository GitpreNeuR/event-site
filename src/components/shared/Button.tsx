import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "group/btn relative inline-flex shrink-0 items-center justify-center gap-3 rounded-full font-sans text-[0.78rem] font-semibold uppercase tracking-[0.16em] whitespace-nowrap transition-[background-color,color,border-color,transform] duration-500 ease-expo focus-visible:outline-2 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-ink text-ivory hover:bg-ochre-deep",
        secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
        light: "bg-ivory text-ink hover:bg-ochre-soft",
        "outline-light": "border border-on-night/35 text-on-night hover:border-on-night hover:bg-on-night hover:text-ink",
        text: "rounded-none px-0 text-ink hover:text-ochre-deep",
      },
      size: {
        md: "h-13 pl-7 pr-2",
        sm: "h-11 pl-5 pr-1.5 text-[0.72rem]",
        lg: "h-15 pl-8 pr-2.5",
      },
    },
    compoundVariants: [{ variant: "text", class: "h-auto pl-0 pr-0" }],
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonVariant = NonNullable<VariantProps<typeof buttonStyles>["variant"]>;
type StyleProps = VariantProps<typeof buttonStyles> & { arrow?: boolean };

function ArrowBadge({ variant }: { variant: ButtonVariant }) {
  if (variant === "text") {
    return <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-expo group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />;
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-9 place-items-center overflow-hidden rounded-full transition-colors duration-500",
        variant === "primary" && "bg-ivory/12",
        variant === "secondary" && "bg-ink/6 group-hover/btn:bg-ivory/12",
        variant === "light" && "bg-ink/8",
        variant === "outline-light" && "bg-on-night/10 group-hover/btn:bg-ink/10"
      )}
    >
      <span className="relative block size-4">
        <ArrowUpRight className="absolute inset-0 size-4 transition-transform duration-500 ease-expo group-hover/btn:-translate-y-5 group-hover/btn:translate-x-5" />
        <ArrowUpRight className="absolute inset-0 size-4 -translate-x-5 translate-y-5 transition-transform duration-500 ease-expo group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
      </span>
    </span>
  );
}

/** Internal navigation button (next/link). */
type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & StyleProps & { className?: string };

export function ButtonLink({ href, children, variant, size, className, arrow = true, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(buttonStyles({ variant, size }), !arrow && "pr-7", className)} {...props}>
      <span>{children}</span>
      {arrow ? <ArrowBadge variant={variant ?? "primary"} /> : null}
    </Link>
  );
}

/** Native button with the same styling — for forms and actions. */
type ButtonProps = ComponentProps<"button"> & StyleProps & { icon?: ReactNode };

export function Button({ children, variant, size, className, arrow = true, type = "button", icon, ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonStyles({ variant, size }), !arrow && !icon && "pr-7", className)} {...props}>
      <span>{children}</span>
      {icon ?? (arrow ? <ArrowBadge variant={variant ?? "primary"} /> : null)}
    </button>
  );
}
