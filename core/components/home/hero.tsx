"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/ui/container";
import { cn } from "~/lib/utils";
import imagehero from './background-1.jpg';
import { AnimatedContainer, AnimatedStaggerContainer } from "~/components/ui/animated-container";
import { motion } from "framer-motion";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative overflow-hidden pt-16">
      <Container size="large" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 items-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Discover Our <span className="text-primary">Premium</span> Collection
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Elevate your style with our carefully curated products. Quality craftsmanship meets modern design.
            </p>
            
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
          <div className={cn(
            "transition-all duration-1000 delay-300 transform relative min-h-[400px]",
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/5 rounded-2xl"></div>
            {/* <Image
              src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Hero product"
              className="rounded-2xl object-cover object-center shadow-xl"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            /> */}
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
        </div>
      </Container>
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-white"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
}