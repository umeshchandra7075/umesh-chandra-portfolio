"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certifications" title="Credentials & completions" />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <TiltCard className="flex h-full flex-col items-start gap-3 rounded-2xl p-6">
                <div className="flex w-full items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-[0_0_20px_-4px_rgba(56,189,248,0.7)]">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted">
                    {c.category}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug text-foreground">{c.title}</h3>
                <p className="text-xs text-muted">{c.issuer}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
