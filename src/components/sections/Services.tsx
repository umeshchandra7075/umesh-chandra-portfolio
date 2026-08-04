"use client";

import { motion } from "framer-motion";
import { Layers, MonitorSmartphone, Server, Plug, Smartphone } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const icons = [Layers, MonitorSmartphone, Server, Plug, Smartphone];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can help you build"
          description="Available for internships, freelance builds, and collaborative student projects."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <TiltCard className="h-full rounded-2xl p-7">
                  <Icon className="h-7 w-7 text-accent" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
