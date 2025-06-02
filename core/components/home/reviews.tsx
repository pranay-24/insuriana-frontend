"use client";

import { useState, useEffect } from "react";
import { Container } from "~/components/ui/container";
import { Section, SectionHeader,TestimonialSectionHeader } from "~/components/ui/section";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ReviewProps {
  title: string;
  rating: number;
  content: string;
  author: string;
  location: string;
  date: string;
}
// const t = useTranslations('Components.Carousel');
const reviews: ReviewProps[] = [
  {
    title: "Exceptional Quality",
    rating: 5,
    content: "The attention to detail and craftsmanship is remarkable. Every product I've purchased has exceeded my expectations in terms of quality and durability.@Insuriana ",
    author: "Michael Brown",
    location: "New York, NY",
    date: "March 15, 2024"
  },
  {
    title: "Outstanding Service",
    rating: 5,
    content: "Not only are the products amazing, but the customer service is unmatched.@Insuriana They went above and beyond to ensure I was completely satisfied with my purchase.",
    author: "Emily Chen",
    location: "San Francisco, CA",
    date: "March 10, 2024"
  },
  {
    title: "Beautiful Design",
    rating: 5,
    content: "The aesthetic appeal of their products is simply stunning.@Insuriana Each piece is thoughtfully designed and adds a touch of elegance to my home.",
    author: "Sophie Martin",
    location: "London, UK",
    date: "March 5, 2024"
  },
  {
    title: "Worth Every Penny",
    rating: 5,
    content: "While the prices might be higher than some competitors, the quality and longevity of their products make them an excellent investment.@Insuriana",
    author: "James Wilson",
    location: "Toronto, CA",
    date: "February 28, 2024"
  },
    {
    title: "Outstanding Service",
    rating: 5,
    content: "Not only are the products amazing, but the customer service is unmatched. They went above and beyond to ensure I was completely satisfied with my purchase.",
    author: "Emily Chen",
    location: "San Francisco, CA",
    date: "March 10, 2024"
  },
  {
    title: "Beautiful Design",
    rating: 5,
    content: "@Insuriana The aesthetic appeal of their products is simply stunning. Each piece is thoughtfully designed and adds a touch of elegance to my home.",
    author: "Sophie Martin",
    location: "London, UK",
    date: "March 5, 2024"
  },
  {
    title: "Worth Every Penny",
    rating: 5,
    content: "@Insuriana While the prices might be higher than some competitors, the quality and longevity of their products make them an excellent investment.",
    author: "James Wilson",
    location: "Toronto, CA",
    date: "February 28, 2024"
  }
];

// Utility function to highlight @Insuriana in text
function HighlightedText({ text }: { text: string }) {
  // Split text by @Insuriana
  const parts = text.split('@Insuriana');
  
  return (
    <>
      {parts.map((part, index) => (
        <>
          {part}
          {index < parts.length - 1 && (
            <span className="text-blue-600 font-semibold">@Insuriana</span>
          )}
        </>
      ))}
    </>
  );
}

function ReviewCard({ title, rating, content, author, location, date }: ReviewProps) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-4"> <HighlightedText text={content} /></p>
      <div className="flex flex-col text-sm">
        <span className="font-medium">{author}</span>
        <span className="text-muted-foreground">{location}</span>
        <span className="text-muted-foreground">{date}</span>
      </div>
    </div>
  );
}

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current + 1) % totalPages);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current === 0 ? totalPages - 1 : current - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <Section>
      <Container>
        <TestimonialSectionHeader
          title="Trusted By People Like You"
          description=""
        />
        
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full flex-shrink-0"
                  style={{ width: "100%" }}
                >
                  {reviews
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((review, index) => (
                      <ReviewCard key={index} {...review} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            {/* <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={animating}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button> */}
              <button
                        aria-label='previousReview'
                        className={cn(
                          'inline-flex h-12 w-12 items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:text-gray-400',
                          
                        )}
                       
                        onClick={prevSlide}
                      >
                        <ArrowLeft />
                        <span className="sr-only">previousReview</span>
                      </button>
            {/* <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={animating}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button> */}

            <button
            aria-label='nextProducts'
            className={cn(
              'inline-flex h-12 w-12 items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:text-gray-400',
              
            )}
          
            onClick={nextSlide}
          >
            <ArrowRight />
            <span className="sr-only">nextReview</span>
          </button>

          </div>
        </div>
      </Container>
    </Section>
  );
}