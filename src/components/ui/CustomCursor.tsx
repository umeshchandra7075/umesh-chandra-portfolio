// "use client";

// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export function CustomCursor() {
//   const [enabled] = useState(
//     () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
//   );
//   const [hovering, setHovering] = useState(false);
//   const x = useMotionValue(-100);
//   const y = useMotionValue(-100);
//   const springX = useSpring(x, { stiffness: 500, damping: 40 });
//   const springY = useSpring(y, { stiffness: 500, damping: 40 });

//   useEffect(() => {
//     if (!enabled) return;

//     function onMove(e: MouseEvent) {
//       x.set(e.clientX - 16);
//       y.set(e.clientY - 16);
//       const target = e.target as HTMLElement;
//       setHovering(!!target.closest("a, button, [data-cursor-hover]"));
//     }
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, [enabled, x, y]);

//   if (!enabled) return null;

//   return (
//     <motion.div
//       aria-hidden
//       style={{ translateX: springX, translateY: springY }}
//       animate={{ scale: hovering ? 1.6 : 1 }}
//       transition={{ scale: { duration: 0.2 } }}
//       className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-accent/60 mix-blend-difference"
//     />
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);

      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", onMove);

    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        translateX: springX,
        translateY: springY,
      }}
      animate={{
        scale: hovering ? 1.6 : 1,
      }}
      transition={{
        scale: { duration: 0.2 },
      }}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-accent/60 mix-blend-difference"
    />
  );
}