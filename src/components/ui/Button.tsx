import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  download?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  download,
}: ButtonProps) {
  const classes = cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    className,
  );

  const isMailOrTel =
    href.startsWith("mailto:") || href.startsWith("tel:");
  const isExternal =
    external || href.startsWith("http") || isMailOrTel;

  if (!isExternal && (href.startsWith("#") || href.startsWith("/"))) {
    return (
      <Link href={href} className={classes} download={download || undefined}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={href.startsWith("http") || external ? "_blank" : undefined}
      rel={href.startsWith("http") || external ? "noopener noreferrer" : undefined}
      download={download || undefined}
    >
      {children}
    </a>
  );
}
