import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary: "bg-brand-deep text-white shadow-lift hover:-translate-y-0.5 hover:bg-brand-ink",
  secondary: "border border-brand-blue/35 bg-white/82 text-brand-deep hover:-translate-y-0.5 hover:border-brand-blue hover:bg-white",
  ghost: "text-brand-deep hover:bg-brand-sky/20",
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className,
  external,
  ariaLabel,
}: ButtonLinkProps) {
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
      <span>{children}</span>
    </>
  );
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
