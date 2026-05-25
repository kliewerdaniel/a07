"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
  distance?: number;
}

function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
  distance = 30,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{
          opacity: 0,
          ...directionOffset[direction],
          filter: "blur(2px)",
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
            : {}
        }
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export { Reveal };
