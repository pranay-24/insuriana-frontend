"use client";

import { useState } from "react";
import { Container } from "~/components/ui/container";
import { Section } from "~/components/ui/section";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Check } from "lucide-react";
import imagehero from './bg-cta-people.png';

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would typically connect to an API
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <Section className=" text-primary-foreground" style={{
    backgroundImage: `url(${typeof imagehero === 'string' ? imagehero : imagehero.src})`,
    backgroundRepeat:  'no-repeat',
    backgroundSize:    'cover',
    backgroundPosition:'center',   // optional, but usually helpful
  }}>
      <Container >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.
          </p>
          
          {isSubmitted ? (
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Check className="h-6 w-6" />
              <p>Thanks for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground text-primary placeholder:text-muted-foreground flex-1"
                  style={{width:'350px'}}
                />
                
                <Button 
                  type="submit" 
                  variant="secondary"
                  
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs mt-3 text-primary-foreground/70">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}