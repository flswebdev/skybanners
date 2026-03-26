"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number;
  width?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
}: FlippingCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Teaser: partial spin after 1.5s to hint the card is flippable
    const teaserTimer = setTimeout(async () => {
      await controls.start({ rotateY: 28, transition: { duration: 0.35, ease: "easeOut" } });
      await controls.start({ rotateY: 0, transition: { duration: 0.5, ease: "easeInOut" } });
    }, 1500);

    // Hint message appears after 5s
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 5000);

    return () => {
      clearTimeout(teaserTimer);
      clearTimeout(hintTimer);
    };
  }, [controls]);

  const handleClick = () => {
    const next = !flipped;
    setFlipped(next);
    setShowHint(false);
    controls.start({
      rotateY: next ? 180 : 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    });
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="[perspective:1000px] cursor-pointer relative"
        style={
          {
            "--height": `${height}px`,
            "--width": `${width}px`,
          } as React.CSSProperties
        }
        onClick={handleClick}
      >
        <motion.div
          animate={controls}
          initial={{ rotateY: 0 }}
          className={cn(
            "relative rounded-xl border border-neutral-200 bg-white shadow-lg [transform-style:preserve-3d]",
            "h-[var(--height)] w-[var(--width)]",
            className
          )}
        >
          {/* Front Face */}
          <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white text-neutral-950 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)]">
            <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
              {frontContent}
            </div>
          </div>
          {/* Back Face */}
          <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white text-neutral-950 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
              {backContent}
            </div>
          </div>
        </motion.div>

        {/* Mobile hint overlay — appears after 5s, sits on top of card */}
        <AnimatePresence>
          {showHint && !flipped && (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-black/50 backdrop-blur-sm py-3 text-center text-xs font-medium text-white pointer-events-none z-20"
            >
              Click to see what we offer →
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
