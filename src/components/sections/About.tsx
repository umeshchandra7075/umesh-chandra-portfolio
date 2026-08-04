"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, Target, Heart } from "lucide-react";
import { education, profile, stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { TiltCard } from "@/components/ui/TiltCard";

const pillars = [
  {
    icon: GraduationCap,
    title: "Education",
    body: `${education.degree} at ${education.college}, CGPA ${education.cgpa} (${education.period}).`,
  },
  {
    icon: Rocket,
    title: "Passion",
    body: "Turning ideas into working software — from a rough sketch to a deployed, real-time product.",
  },
  {
    icon: Target,
    title: "Career Objective",
    body: "Become a world-class Software Engineer building scalable products that solve real-world problems.",
  },
  {
    icon: Heart,
    title: "Beyond Code",
    body: "Competitive problem-solving on LeetCode & HackerRank, and writing that makes technical ideas easy to follow.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Grounded in fundamentals, driven by real products"
          description="A quick look at who I am, what I'm studying, and the kind of engineer I'm becoming."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card gradient-border flex flex-col justify-center rounded-2xl p-8"
          >
            <p className="text-balance text-lg leading-relaxed text-foreground/85">{profile.summary}</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TiltCard className="h-full rounded-2xl p-6">
                  <p.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
