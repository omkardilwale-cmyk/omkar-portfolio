"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { projects, siteConfig } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section-block">
      <div className="site-container">
        <SectionHeader
          label="Work"
          title="Selected projects"
          description="Enterprise platforms across insurance, compliance, media, and security — shipped end to end."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 md:grid-cols-2"
        >
          {featured.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              large={i === 0}
              index={i}
            />
          ))}
        </motion.div>

        {rest.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-4 grid gap-4 sm:grid-cols-2"
          >
            {rest.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i + featured.length} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  large = false,
  index,
}: {
  project: Project;
  large?: boolean;
  index: number;
}) {
  const mailSubject = encodeURIComponent(`Project inquiry: ${project.title}`);

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className={cn(large && "md:col-span-2")}
    >
      <Card className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs text-accent">{project.company}</p>
            <h3
              className={cn(
                "mt-1 font-display font-semibold text-foreground",
                large ? "text-xl sm:text-2xl" : "text-lg",
              )}
            >
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted" />
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <Button
            href={`mailto:${siteConfig.email}?subject=${mailSubject}`}
            variant="primary"
          >
            <Mail className="h-4 w-4" />
            Discuss this project
          </Button>
        </div>
      </Card>
    </motion.article>
  );
}
