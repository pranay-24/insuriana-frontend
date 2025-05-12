"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "~/components/ui/container";
import { Section } from "~/components/ui/section";
import { cn } from "~/lib/utils";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function Stat({ value, label, suffix = "", delay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const step = 16; // Update interval in ms (roughly 60fps)
      const increments = Math.ceil(duration / step);
      
      const timer = setInterval(() => {
        start++;
        const progress = start / increments;
        const currentCount = Math.floor(progress * value);
        
        if (progress >= 1 || currentCount >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, step);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return (
    <div 
      ref={ref}
      className={cn(
        "text-center p-6 rounded-lg bg-muted/30 transition-all duration-500",
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

export function Stats() {
  const stats = [
    { value: 5, label: "Years in Business", suffix: "+" },
    { value: 10000, label: "Happy Customers", suffix: "+" },
    { value: 500, label: "Products Sold", suffix: "+" },
    { value: 15, label: "Team Members" },
  ];

  return (
    <Section className="bg-muted/10">
      <Container size="small">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Stat 
              key={index} 
              {...stat} 
              delay={index * 200}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}