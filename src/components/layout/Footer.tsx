import Link from "next/link";
import { siteConfig } from "@/data/portfolio";
import { getResumeRequestMailto } from "@/lib/resume";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="site-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-muted transition hover:text-accent"
          >
            Email
          </Link>
          <a
            href={getResumeRequestMailto()}
            className="text-muted transition hover:text-accent"
          >
            Request resume
          </a>
        </div>
      </div>
    </footer>
  );
}
