import { Container } from "~/components/ui/container";
import { Section, SectionHeader } from "~/components/ui/section";
import { Target, Heart, Users, Shield } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-lg transition-colors hover:bg-muted/50">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function MissionValues() {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission",
      description: "Our mission is to provide exceptional products that enhance everyday living through thoughtful design and quality craftsmanship.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "We're passionate about creating products that bring joy and functionality to your life, driven by our love for design and innovation.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "We believe in building relationships with our customers and creating a community that shares our values and vision.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "We operate with transparency and honesty in everything we do, from our sourcing practices to our customer relationships.",
    },
  ];

  return (
    <Section className="bg-muted/30">
      <Container>
        <SectionHeader 
          title="Our Mission & Values"
          description="The principles that guide everything we do"
          align="left"
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