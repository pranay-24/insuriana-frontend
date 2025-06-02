import Image from "next/image";
import { Container } from "~/components/ui/container";
import imagehero from './background-1.jpg';
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Section, SectionHeader } from "~/components/ui/section";

export function VideoText() {
  return (
    
      <Section>
      <Container>
        <SectionHeader 
          title="How It Works"
         
        />

        <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      muted           
      loop
      playsInline     
    >
      {/* <source src="/videos/hero.webm" type="video/webm" /> */}
      <source src="https://res.cloudinary.com/dwe4p22ut/video/upload/v1747716610/desktop-hero_n6nmrn.mp4" type="video/mp4" />
      {/* fallback text for very old browsers */}
      Your browser doesn’t support embedded videos.
    </video>
          </div>

          <div>
            {/* <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Story
            </h1> */}
            <p className="text-xl text-muted-foreground mb-6">
             We ask for the basics — like your age, life stage, and coverage goals — so we can guide you better. No long forms, no fluff.
            </p>
            <p className="mb-6">
              We match you with smart options
Our platform filters through top carriers to recommend plans that actually fit your needs — not just the ones with the highest premiums.
            </p>
            <p>
              Choose What Works for You and Enroll
            </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-7" style={{ maxWidth: '350px' }}>
          
             <Button size="lg" className="bg-secondary rounded-[3.4rem]" asChild>
                        <Link href="https://intc-marketplace.vercel.app/">
                          Explore Our Process
                        </Link>
                      </Button>
            </div>

          </div>
          
        
        </div>
         </div>
      </Container>
      </Section>
   
  );
}