import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-10 md:mb-12", className)}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </header>
  );
}
