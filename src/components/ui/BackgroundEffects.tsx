"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient page background: moving grid, aurora blobs, a starfield/particle
 * canvas, and a soft glow that follows the cursor. Fixed behind all content.
 */
export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const COUNT = width < 768 ? 45 : 90;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      tw: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.tw += 0.02;
        const alpha = 0.35 + Math.sin(p.tw) * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 197, 253, ${Math.max(0, alpha)})`;
        ctx.fill();

        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    function onResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", onResize);

    function onMove(e: MouseEvent) {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    }
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid" />

      <div
        className="aurora animate-float-slow"
        style={{
          top: "-10%",
          left: "-10%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, var(--primary), transparent 70%)",
        }}
      />
      <div
        className="aurora animate-float-slower"
        style={{
          top: "10%",
          right: "-15%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, var(--accent), transparent 70%)",
        }}
      />
      <div
        className="aurora animate-float-slow"
        style={{
          bottom: "-15%",
          left: "20%",
          width: 550,
          height: 550,
          background: "radial-gradient(circle, var(--secondary), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      <div
        ref={glowRef}
        className="pointer-events-none absolute left-0 top-0 hidden h-[500px] w-[500px] rounded-full opacity-[0.06] blur-3xl md:block"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
