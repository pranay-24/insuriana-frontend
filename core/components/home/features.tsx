"use client";

import { useEffect, useState } from "react";
import { Container } from "~/components/ui/container";
 import { Section, SectionHeader } from "~/components/ui/section";
import { Badge } from "~/components/ui/badge";
import { ShieldCheck, Truck, RotateCcw, Clock } from "lucide-react";
import { cn } from "~/lib/utils";
import { AnimatedContainer, AnimatedStaggerContainer } from "~/components/ui/animated-container";
import { Star } from "lucide-react";

interface FeatureCardProps {
  imageUrl:  string;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ imageUrl, title, description, delay }: FeatureCardProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "group flex flex-col items-center  p-6 text-center transition-all duration-500",
      "hover:border-primary/50 hover:shadow-md",
      loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    )}>
       <div className="aspect-square w-[100px] h-[100px] mb-4 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain group-hover:opacity-90 transition-opacity"
          />
        </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880833/heart_attack-icon_cxikin.svg",
      title: "Life Insurance",
      description: "Fast payouts for unexpected injuries.",
      
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880832/emergency_room-icon_r9my9v.svg",
      title: "Disability",
      description: "Lump-sum benefits when it matters most.",
    },
     {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880832/accident-icon_htvjbx.svg",
      title: "Accident",
      description: "Lump-sum benefits when it matters most.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880832/Cancer_Insurance-icon_ghm15n.svg",
      title: "Cancer",
      description: "Lump-sum benefits when it matters most.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880832/Critical_Illness-icon_ep1wff.svg",
      title: "Critical Illness",
      description: "Coverage for heart attacks, strokes, and more.",
    },
    {
     imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880833/hospital_Income-icon_kcoyot.svg",
      title: "Hospital Indemnity",
      description: "Daily cash benefits for hospital stays and surgeries.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880832/dental-icon_xstqc1.svg",
      title: "Dental",
      description: "Income protection when sickness or injury strikes.",
    },
     {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880834/vision-icon_bbj7fe.svg",
      title: "Vision",
      description: "Income protection when sickness or injury strikes.",
    },
  ];

  return (
    <Section className=" bg-muted/30">
      <Container className="relative">
       
       
         

        {/* <Badge className="mb-4 mx-auto">Why Choose Us</Badge> */}
        <SectionHeader 
          title="We Protect What Matters Most"
          description="Whether it’s a sprain on the field or a serious diagnosis, Our plans are built to back you up."
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