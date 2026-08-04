"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <nav
          className={`glass flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-shadow duration-300 ${
            scrolled ? "shadow-[0_8px_40px_-15px_rgba(2,6,23,0.9)]" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm text-white shadow-[0_0_20px_-4px_rgba(56,189,248,0.8)]">
              VU
            </span>
            <span className="hidden text-foreground sm:inline">{profile.name.split(" ")[0]} Chandra</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === link.href ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <Command className="h-3 w-3" /> K
            </button>
            <MagneticButton href="#contact" className="!px-5 !py-2 text-xs">
              Hire Me
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="container-px mx-auto mt-2 max-w-7xl lg:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-foreground/90 transition-colors hover:bg-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-1 rounded-xl px-4 py-3 text-center text-sm font-medium text-white"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
