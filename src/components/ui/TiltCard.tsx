"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  tilt = true,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${useMotionTemplate`${mx.get() * 100}%`} ${useMotionTemplate`${my.get() * 100}%`}, rgba(56,189,248,0.14), transparent 70%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px);
    my.set(py);
    if (tilt) {
      rotateY.set((px - 0.5) * 10);
      rotateX.set((0.5 - py) * 10);
    }
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", backgroundImage: spotlight }}
      className={cn(
        "glass-card group relative rounded-2xl transition-shadow duration-300 hover:shadow-[0_0_50px_-15px_rgba(37,99,235,0.5)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
