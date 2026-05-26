"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="section-block bg-surface/50">
      <div className="site-container">
        <SectionHeader
          label="Skills"
          title="Tools & technologies"
          description="MERN stack depth with Gen-AI integration across frontend, backend, cloud, and compliance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((group, i) => (
            <motion.div key={group.category} variants={fadeUp} custom={i}>
              <Card className="flex h-full flex-col">
                <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-1 flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="tag">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
