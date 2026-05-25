"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
}

function Stagger({
  children,
  className,
  staggerDelay = 0.08,
  delay = 0,
  once = true,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  return (
    <div ref={ref} className={cn(className)}>
      {isInView &&
        Array.isArray(children)
          ? (children as React.ReactNode[]).map((child, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: delay + i * staggerDelay,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {child}
              </motion.div>
            ))
          : children}
    </div>
  );
}

export { Stagger };
