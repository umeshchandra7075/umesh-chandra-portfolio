"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.6, bounce: 0 } as never);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = (isDecimal ? latest.toFixed(2) : Math.round(latest).toString()) + suffix;
    });
  }, [spring, suffix, isDecimal]);

  return (
    <motion.span ref={ref} className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
      0{suffix}
    </motion.span>
  );
}
