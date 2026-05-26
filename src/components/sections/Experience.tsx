"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="section-block border-t border-border bg-surface/50">
      <div className="site-container">
        <SectionHeader
          label="Experience"
          title="Career timeline"
          description="From startup security SaaS to UK insurance enterprise — growing scope and ownership."
        />

        <div className="relative">
          <div
            className="absolute top-3 bottom-3 left-[7px] hidden w-px bg-border md:block"
            aria-hidden
          />

          <ol className="space-y-8 md:space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.period}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
                className="relative md:pl-10"
              >
                <span
                  className="absolute top-1.5 left-0 hidden h-3.5 w-3.5 rounded-full border-2 border-background bg-accent md:block"
                  aria-hidden
                />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 font-medium text-accent">{job.company}</p>
                    {job.companyNote && (
                      <p className="text-sm text-muted">{job.companyNote}</p>
                    )}
                  </div>
                  <span className="badge shrink-0">{job.period}</span>
                </div>

                <p className="mt-2 text-sm text-muted">
                  {job.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {job.description}
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2 text-sm text-muted before:shrink-0 before:font-bold before:text-accent before:content-['→']"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
