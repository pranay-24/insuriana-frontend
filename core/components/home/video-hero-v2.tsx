"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/ui/container";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { AnimatedContainer, AnimatedStaggerContainer } from "~/components/ui/animated-container";
import { motion } from "framer-motion";
 import { Section, SectionHeader } from "~/components/ui/section";


export function VideoHero2() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
      
    <div className="relative w-full min-h-screen flex items-center">
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source
          src="https://res.cloudinary.com/dwe4p22ut/video/upload/v1747716610/desktop-hero_n6nmrn.mp4"
          type="video/mp4"
        />
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source
          src="https://res.cloudinary.com/dwe4p22ut/video/upload/v1747716610/desktop-hero_n6nmrn.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative z-10">
        <div
          className={cn(
            "mx-auto max-w-2xl bg-black/10 backdrop-blur-sm p-8 rounded-lg transition-all duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {/* <span className="text-white/90 font-medium mb-4 block">
            Premium Quality Products
          </span> */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center">
               The Smartest Way to Pick the 
       Right <span className="text-primary">Insurance</span> for You.
            </h1>
          
          <p className="text-xl text-white/80 mb-8 text-center">
           For individuals and families, we tailor coverage 
       that fits you — fast, fair, and flexible.

          </p>

         

                 <AnimatedContainer 
                      animation="fadeInUp" 
                      delay={0.6} 
                      className="flex flex-col mx-auto items-center  justify-center sm:flex-row gap-4"
                    >
        
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                    <Button size="lg" asChild>
                        <Link href="https://intc-marketplace.vercel.app/">
                          Get A Quote
                        </Link>
                      </Button>
                      </motion.div>
                          
                    </AnimatedContainer>
        </div>
      </Container>
    </div>
   
  );
}