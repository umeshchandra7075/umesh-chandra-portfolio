"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const externalLinks = [
    { label: "GitHub Profile", href: profile.socials.github },
    { label: "LinkedIn Profile", href: profile.socials.linkedin },
    { label: "Download Resume", href: profile.resumeUrl },
  ];

  const items = [...navLinks, ...externalLinks].filter((l) =>
    l.label.toLowerCase().includes(query.toLowerCase())
  );

  function go(href: string) {
    setOpen(false);
    setQuery("");
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 p-4 pt-[15vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-lg overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or link…"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              />
              <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-muted">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {items.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-muted">No matches found.</p>
              )}
              {items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.href)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-foreground/90 transition-colors hover:bg-white/[0.06]"
                >
                  {item.label}
                  <ArrowRight className="h-3.5 w-3.5 text-muted" />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
