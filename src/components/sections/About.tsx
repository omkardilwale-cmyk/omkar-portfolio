"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { about } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="section-block border-t border-border">
      <div className="site-container">
        <SectionHeader
          label="About"
          title={about.headline}
          description="Enterprise MERN development with production Gen-AI — from architecture to release."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 lg:grid-cols-5"
        >
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-3">
            <Card interactive={false} className="h-full space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-sm leading-relaxed text-muted sm:text-base">
                  {p}
                </p>
              ))}
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="lg:col-span-2">
            <Card className="h-full">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Core strengths
              </h3>
              <ul className="mt-5 space-y-4">
                {about.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-sm text-muted">
                Languages: English, Hindi, and Marathi — native proficiency.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
