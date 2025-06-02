import { Container } from "~/components/ui/container";
import { Section, SectionHeader } from "~/components/ui/section";
import { Target, Heart, Users, Shield } from "lucide-react";

interface ValueCardProps {
  imageUrl:  string;
  title: string;
  description: string;
}

function ValueCard({ imageUrl, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-lg transition-colors hover:bg-muted/50">
      <div className="inline-flex h-[100px] w-[100px] items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain group-hover:opacity-90 transition-opacity"
          />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function MissionValues() {
  const values = [
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748879486/All_in_One_y4kfsz.svg",
      title: "All in one marketplace",
      description: "Compare and, in most cases, buy accident, dental, vision, life, hospital, and more — all in minutes.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748879486/No_Pressure_q35t5z.svg",
      title: "No Pressure, Ever",
      description: "Shop with confidence. No sales calls, no pushy tactics — just clear tools and honest options.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748879486/Industry_Expert_a6zgoh.svg",
      title: "Built by Industry Experts",
      description: "Created by insiders with decades of insurance experience — so you get what actually matters.",
    },
    {
     imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748879486/Coverage_that_fits_nt7zdi.svg",
      title: "Coverage That Fits Your Life",
      description: "From solo riders to big families, our plans are tailored to fit every stage of life.",
    },
  ];

  return (
    <Section className="bg-muted/30">
      <Container>
        <SectionHeader 
          title="Get Your Coverage From Anywhere"
          description="Compare, learn, and enroll from where you are"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {values.map((value, index) => (
            <ValueCard 
              key={index} 
              {...value} 
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}