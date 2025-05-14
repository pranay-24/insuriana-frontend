"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "~/lib/utils";

// Create a clean interface that doesn't extend HTMLAttributes
interface AnimatedContainerProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "scale" | "slideIn";
  className?: string;
  motionProps?: MotionProps;
  // Only include the most commonly used HTML div props manually
  id?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  tabIndex?: number;
  role?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "data-testid"?: string;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
};

export function AnimatedContainer({
  children,
  delay = 0,
  duration = 0.5,
  animation = "fadeIn",
  className,
  motionProps,
  ...htmlProps
}: AnimatedContainerProps) {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      exit={selectedAnimation.exit}
      transition={{ 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={cn(className)}
      {...htmlProps}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStaggerContainer({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className,
  ...props
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
} & Pick<AnimatedContainerProps, 'id' | 'style' | 'onClick' | 'onMouseEnter' | 'onMouseLeave'>) {
  return (
    <div className={cn(className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <AnimatedContainer
            key={index}
            animation="fadeInUp"
            delay={index * staggerDelay}
            duration={duration}
          >
            {child}
          </AnimatedContainer>
        );
      })}
    </div>
  );
}