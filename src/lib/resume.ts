import { siteConfig } from "@/data/portfolio";

/** Opens the user's mail client with a pre-filled resume request (resume is not public). */
export function getResumeRequestMailto(): string {
  const subject = encodeURIComponent("Resume request — Omkar Dilwale");
  const body = encodeURIComponent(
    `Hi Omkar,

I came across your portfolio and would like to request a copy of your resume (PDF).

My name:
Organization (optional):
Role / purpose:

Thank you,`,
  );

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}
