import Image from "next/image";
import { Container } from "~/components/ui/container";
import imagehero from './background-1.jpg';
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Section, SectionHeader } from "~/components/ui/section";

export function AboutHero() {
  return (
    
      <Section>
      <Container>
        <div className="pt-20 pb-12 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
                                            alt="Hero product"
                                            blurDataURL='data:image/jpeg;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAAoAAAADoAQAAQAAAAcAAAAAAAAA/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgABwAKAwERAAIRAQMRAf/EABUAAQEAAAAAAAAAAAAAAAAAAAMJ/8QAIBAAAQQBBAMAAAAAAAAAAAAAAQIDBAURABIhMQYjgf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABkRAAIDAQAAAAAAAAAAAAAAAAARAQIhQf/aAAwDAQACEQMRAD8AoZ5EzayKWW3Syo0GyKPTJlsF9ts9klsKTu46GQOfms2awJfAKywmt1sRNgqK7PS0gSHI4WltTmBuKQckJJzgE9aYa0tP/9k='
                                            className="rounded-2xl object-cover object-center shadow-xl"
                                            fill
                                            placeholder="blur"
                                            priority
                                          sizes="(max-width: 768px) 100vw, 50vw"
                                            src={imagehero}
                                          />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Founded in 2020, we set out to create a brand that combines premium quality with modern aesthetics.
            </p>
            <p className="mb-6">
              Our journey began with a simple idea: create products that stand the test of time, both in durability and style. We believe that great design should be accessible to everyone.
            </p>
            <p>
              Today, we continue to grow and evolve, but our core values remain the same: quality, innovation, and customer satisfaction.
            </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-7" style={{ maxWidth: '350px' }}>
          
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  Learn More
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