"use client";

import { motion } from "framer-motion";
import { Mail, Phone, FileText, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { getResumeRequestMailto } from "@/lib/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { fadeUp } from "@/lib/motion";

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.social.linkedin,
    icon: ArrowUpRight,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-block border-t border-border">
      <div className="site-container">
        <SectionHeader
          label="Contact"
          title="Let's build your next platform"
          description={siteConfig.availability}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
        >
          <Card interactive={false} className="overflow-hidden p-0">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border p-6 sm:p-8 md:border-r md:border-b-0">
                <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-base">
                  Open to freelance engagements and full-time opportunities. Reach out for
                  MERN architecture, Gen-AI integration, or enterprise delivery.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`mailto:${siteConfig.email}`} variant="primary">
                    <Mail className="h-4 w-4" />
                    Send email
                  </Button>
                  <Button href={getResumeRequestMailto()} variant="secondary">
                    <FileText className="h-4 w-4" />
                    Request resume
                  </Button>
                </div>
              </div>

              <ul className="divide-y divide-border">
                {channels.map((ch) => (
                  <li key={ch.label}>
                    <a
                      href={ch.href}
                      target={ch.external ? "_blank" : undefined}
                      rel={ch.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-6 transition hover:bg-accent-soft/50 sm:p-8"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <ch.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-mono text-xs uppercase tracking-wide text-muted">
                          {ch.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-foreground sm:text-base">
                          {ch.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
