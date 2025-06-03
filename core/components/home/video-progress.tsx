"use client";

import { useState, useEffect } from "react";
import { Container } from "~/components/ui/container";
import { Section } from "~/components/ui/section";
import { cn } from "~/lib/utils";

interface ProgressItemProps {
  title: string;
  description: string;
  isActive: boolean;
  progress: number;
}

function ProgressItem({ title, description, isActive, progress }: ProgressItemProps) {
  return (
    <div className={cn(
      "relative pl-8 py-6 transition-all duration-300",
      isActive ? "opacity-100" : "opacity-50"
    )}>
      <div className="absolute left-0 top-0 w-1 h-full bg-muted">
        <div 
          className="absolute left-0 top-0 w-full bg-primary transition-all duration-100"
          style={{ height: `${progress}%` }}
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>

    </div>
  );
}

export function VideoProgress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const items = [
    {
      title: "Step 1",
      description: "We ask for the basics — like your age, life stage, and coverage goals — so we can guide you better. No long forms, no fluff.",
      video: "https://res.cloudinary.com/dkjqfoekt/video/upload/v1748044747/5453379-uhd_3840_2160_25fps_ltx2bq.mp4"
    },
    {
      title: "Step 2",
      description: "We match you with smart options. Our platform filters through top carriers to recommend plans that actually fit your needs — not just the ones with the highest premiums.",
      video: "https://res.cloudinary.com/dkjqfoekt/video/upload/v1748044747/5453379-uhd_3840_2160_25fps_ltx2bq.mp4"
    },
    {
      title: "Step 3",
      description: "Choose What Works for You and Enroll.",
      video: "https://res.cloudinary.com/dkjqfoekt/video/upload/v1748042472/desktop-hero_vmfwtl.mp4"
    }
  ];

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 50; // Update progress every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        setActiveIndex((prev) => (prev + 1) % items.length);
        currentStep = 0;
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {items.map((item, index) => (
              <ProgressItem
                key={index}
                title={item.title}
                description={item.description}
                isActive={index === activeIndex}
                progress={index === activeIndex ? progress : index < activeIndex ? 100 : 0}
              />
            ))}
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
            {items.map((item, index) => (
              <video
                key={index}
                src={item.video}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                  index === activeIndex ? "opacity-100" : "opacity-0"
                )}
                autoPlay
                muted
                playsInline
                loop
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}