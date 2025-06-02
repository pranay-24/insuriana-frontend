import { Container } from "~/components/ui/container";
import { Section, SectionHeader } from "~/components/ui/section";
import { Target, Heart, Users, Shield } from "lucide-react";


interface ImageCardProps {
  imageUrl: string;
  title: string;
  linkUrl: string;
}


function ImageCard({ imageUrl, title, linkUrl }: ImageCardProps) {
  return (
    <a 
      href={linkUrl}
      className="group block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
    >
      <div className="bg-white rounded-lg  transition-shadow p-4">
        <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain group-hover:opacity-90 transition-opacity"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
    </a>
  );
}

export function ImageGridCards() {
  // Replace these with your actual image URLs and link URLs
  const cards = [
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880495/young_and_active_q8foli.svg",
      title: "Young & Active",
      linkUrl: "#product-one",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880495/families_ufghtx.svg",
      title: "Families", 
      linkUrl: "#product-two",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880495/older_adults_zbdu3o.svg",
      title: "Older Adults",
      linkUrl: "#product-three",
    },
    {
      imageUrl: "https://res.cloudinary.com/dkjqfoekt/image/upload/v1748880495/Married_couples_u4a2zu.svg",
      title: "Married Couples",
      linkUrl: "#product-four",
    },
  ];

  return (
    <Section className="">
      <Container>
        <SectionHeader 
          title="Plans for Every Life Stage"
          
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <ImageCard 
              key={index} 
              {...card} 
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}