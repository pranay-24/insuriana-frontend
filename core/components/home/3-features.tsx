"use client";

import { useEffect, useState } from "react";
import { Container } from "~/components/ui/container";
 import { Section, SectionHeader } from "~/components/ui/section";
import { Badge } from "~/components/ui/badge";
import { ShieldCheck, Truck, RotateCcw, Clock } from "lucide-react";
import { cn } from "~/lib/utils";
import { AnimatedContainer, AnimatedStaggerContainer } from "~/components/ui/animated-container";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "group flex flex-col items-center rounded-lg border p-6 text-center transition-all duration-500",
      "hover:border-primary/50 hover:shadow-md",
      loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    )}>
      <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function ThreeFeatures() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Free validation within 6 hours",
      description: "of your tenant, with no obligation on your part",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Reimbursement",
      description: "within 48 hours as soon as you report the first unpaid rent month",
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "No reimbursement cap",
      description: "and Insuriana handles the legal proceedings and their costs",
    },
    
  ];

  return (
    <Section className=" bg-muted/30">
      <Container className="relative">
       
        {/* <Badge className="mb-4 mx-auto">Why Choose Us</Badge> */}
        <SectionHeader 
          title="We Protect What Matters Most"
          description="Whether it’s a sprain on the field or a serious diagnosis, 
Our plans are built to back you up."
        />
        <AnimatedContainer 
                      animation="fadeInUp" 
                      delay={0.6} 
                      className="flex flex-col sm:flex-row gap-4"
                    >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              delay={200 * (index + 1)}
            />
          ))}
        </div>
        </AnimatedContainer>
      </Container>
    </Section>
  );
}