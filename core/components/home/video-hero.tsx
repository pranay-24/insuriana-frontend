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
    <div className="relative min-h-screen flex items-center">
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source
          src="/videos/desktop-hero.mp4"
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
          src="/videos/desktop-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative z-10">
        <div
          className={cn(
            "max-w-2xl bg-black/10 backdrop-blur-sm p-8 rounded-lg transition-all duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="text-white/90 font-medium mb-4 block">
            Premium Quality Products
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Discover Our Exclusive Collection
          </h1>
          
          <p className="text-xl text-white/80 mb-8">
            Experience luxury and style with our carefully curated selection of premium products. Each piece is crafted with attention to detail and quality.
          </p>

          <div className="flex items-center space-x-4 mb-8">
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
          </div>

                 <AnimatedContainer 
                      animation="fadeInUp" 
                      delay={0.6} 
                      className="flex flex-col sm:flex-row gap-4"
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
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
        
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/about">
                          About Us
                        </Link>
                      </Button>
                      </motion.div>
                     
        
                    </AnimatedContainer>
        </div>
      </Container>
    </div>
  );
}