"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Education() {
  return (
    <section id="education" className="section-block">
      <div className="site-container">
        <SectionHeader label="Education" title="Academic background" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 md:grid-cols-2"
        >
          {education.map((edu, i) => (
            <motion.div key={edu.institution} variants={fadeUp} custom={i}>
              <Card className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{edu.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
