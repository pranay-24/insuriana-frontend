
import { cn } from '~/lib/utils';
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-12 md:py-16 lg:py-20", className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-10 md:mb-14",
        {
          "mx-auto text-center": align === "center",
          "ml-auto text-right": align === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}