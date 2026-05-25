"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

function TextReveal({ text, className, delay = 0, once = true }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const words = text.split(" ");

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div className="flex flex-wrap">
        {words.map((word, i) => (
          <span key={i} className="relative inline-block mr-[0.3em]">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : {}
              }
              transition={{
                duration: 0.4,
                delay: delay + i * 0.04,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  );
}

export { TextReveal };
