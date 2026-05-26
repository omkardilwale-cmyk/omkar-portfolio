"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { getHeroStats } from "@/lib/career";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

export function Hero() {
  const stats = getHeroStats();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="hero-grid-bg pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <p className="section-label">{siteConfig.availability}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
            <span className="text-gradient"> — {siteConfig.title}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            {siteConfig.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${siteConfig.email}`} variant="primary">
              <Mail className="h-4 w-4" />
              Get in touch
            </Button>
            <Button href={siteConfig.resumeUrl} variant="secondary" download>
              <Download className="h-4 w-4" />
              Download resume
            </Button>
            <Button
              href={siteConfig.social.linkedin}
              variant="secondary"
              external
            >
              LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mt-14 grid grid-cols-3 gap-4 border-y border-border py-8 sm:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-xs text-muted uppercase tracking-wide">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
