"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = Omit<
  React.ComponentPropsWithoutRef<"a">,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
> & {
  variant?: "primary" | "ghost";
  href: string;
};

export function MagneticButton({ children, className, variant = "primary", href, ...props }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium transition-colors duration-300";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={cn(
        base,
        variant === "primary"
          ? "btn-primary text-white hover:shadow-[0_8px_40px_-6px_rgba(56,189,248,0.7)]"
          : "border border-white/15 bg-white/[0.03] text-foreground hover:border-accent/50 hover:bg-white/[0.06]",
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
