import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = true }: CardProps) {
  return (
    <div
      className={cn(
        "card p-5 sm:p-6",
        interactive && "card-interactive",
        className,
      )}
    >
      {children}
    </div>
  );
}
