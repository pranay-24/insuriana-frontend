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

export function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Every product is carefully inspected to ensure premium quality.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Shipping",
      description: "Free shipping on all orders over $50. Quick delivery worldwide.",
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Our customer service team is always ready to assist you.",
    },
  ];

  return (
    <Section className="border-y bg-muted/30">
      <Container className="relative">
       
        {/* <Badge className="mb-4 mx-auto">Why Choose Us</Badge> */}
        <SectionHeader 
          title="Shop with Confidence"
          description="We're committed to providing the best shopping experience"
        />
        <AnimatedContainer 
                      animation="fadeInUp" 
                      delay={0.6} 
                      className="flex flex-col sm:flex-row gap-4"
                    >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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