import { Star } from "lucide-react";
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

export function TestimonialSectionHeader({
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
      <div className="flex flex-col md:flex-row items-center  space-x-4  ">
         <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-secondary fill-secondary"
                    />
                  ))}
                </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
        {title}
      </h2>
      
       <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-secondary fill-secondary"
                    />
                  ))}
                </div>

      </div>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
