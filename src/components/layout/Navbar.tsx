"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-[background,box-shadow,border] duration-300",
        scrolled && "border-b border-border bg-background/90 shadow-sm backdrop-blur-md",
      )}
    >
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link
          href="#"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <Button
            href={`mailto:${siteConfig.email}`}
            variant="primary"
            className="hidden sm:inline-flex"
          >
            Hire me
          </Button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="site-container flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-border pt-4">
              <ThemeToggle />
              <Button href={`mailto:${siteConfig.email}`} variant="primary" className="flex-1">
                Hire me
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
