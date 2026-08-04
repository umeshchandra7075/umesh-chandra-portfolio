"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const filters = ["All", "Featured", "Full Stack", "Frontend"] as const;

function matchesFilter(filter: (typeof filters)[number], p: (typeof projects)[number]) {
  if (filter === "All") return true;
  if (filter === "Featured") return !!p.featured;
  if (filter === "Full Stack") return p.tech.some((t) => ["Node.js", "Express.js", "Supabase", "PostgreSQL"].includes(t));
  if (filter === "Frontend") return !p.tech.some((t) => ["Node.js", "Express.js", "Prisma", "PostgreSQL", "Supabase"].includes(t));
  return true;
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => matchesFilter(filter, p));

  return (
    <section id="projects" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A mix of full-stack products and focused fundamentals projects — each one shipped end to end."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-display text-xs font-medium transition-colors ${
                filter === f
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-white/10 bg-white/[0.02] text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <TiltCard className="flex h-full flex-col overflow-hidden rounded-2xl">
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 via-surface to-background">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <span className="relative font-display text-2xl font-semibold text-white/15 select-none">
                      {project.title}
                    </span>
                    {project.featured && (
                      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium text-accent">
                        <CheckCircle2 className="h-3 w-3" /> Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-accent/80">{project.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                    <ul className="mt-4 flex flex-col gap-1.5">
                      {project.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-foreground/70">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-foreground/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-3 border-t border-white/10 pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor-hover
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 py-2 text-xs text-foreground/85 transition-colors hover:border-accent/40 hover:text-accent"
                        >
                          <Github className="h-3.5 w-3.5" /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor-hover
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary py-2 text-xs font-medium text-white"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
