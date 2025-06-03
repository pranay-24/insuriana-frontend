"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/ui/container";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { AnimatedContainer, AnimatedStaggerContainer } from "~/components/ui/animated-container";
import { motion } from "framer-motion";


export function VideoHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
   <div>
    <div className="relative w-full h-[80vh] flex items-center">
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
      <div className="absolute inset-0 bg-black/5" />

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
          
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
               The Smartest Way to Pick the  
 <span className="text-secondary"> Right Insurance</span> for You
            </h1>
          
          <p className="text-center text-xl text-white/80 mb-8">
           For individuals and families, we tailor coverage 
that fits you — fast, fair, and flexible.

          </p>

          {/* <div className="flex items-center space-x-4 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-white/90">
              Rated 4.9/5 from over 1,000+ reviews
            </span>
          </div> */}

                 <AnimatedContainer 
                      animation="fadeInUp" 
                      delay={0.6} 
                      className="flex flex-col sm:flex-row justify-center  gap-4 "
                    >
        
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                    <Button size="lg" className="bg-secondary rounded-[3.4rem]" asChild>
                        <Link href="https://intc-marketplace.vercel.app/">
                          Get A Quote
                        </Link>
                      </Button>
                      </motion.div>
                      {/* <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
        
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/about">
                          About Us
                        </Link>
                      </Button>
                      </motion.div>
                      */}
        
                    </AnimatedContainer>
        </div>
      </Container>
    </div>
    <div className="flex flex-col md:flex-row justify-center text-center space-x-5 mt-3 mx-auto gap-3 md:gap-5">
     <div className="flex  flex-col md:flex-row items-center  space-x-4  gap-3 ">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-black fill-black"
                    />
                  ))}
                </div>
                <span className="text-black">
                  4.8/5 rated by 1200+ policyholders
                </span>
              </div>
          <p className="text-black ">
           Backed by experts.
          </p>
          <p className="text-black ">
           Trusted by real people.
          </p>
          {/* <p className="text-black ">
           Trustpilot
          </p> */}
    </div>
</div>
  );
}