"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with"
          description="Continuously growing — currently deepening system design and DSA alongside shipping full-stack projects."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <TiltCard tilt={false} className="h-full rounded-2xl p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-col gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-foreground/90">{skill.name}</span>
                        <span className="text-xs text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_-2px_var(--accent)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
