"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <TiltCard className="h-full rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                  <Trophy className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
