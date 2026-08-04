"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Trophy, Award } from "lucide-react";
import { timeline, type TimelineItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<TimelineItem["type"], typeof GraduationCap> = {
  education: GraduationCap,
  internship: Briefcase,
  project: Code2,
  hackathon: Trophy,
  certification: Award,
};

export function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Timeline" title="How the journey has unfolded" />

        <div className="relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const Icon = icons[item.type];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative"
                >
                  <span className="glass-card absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full text-accent">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="glass-card rounded-2xl p-5">
                    <span className="font-display text-xs font-medium uppercase tracking-[0.15em] text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
