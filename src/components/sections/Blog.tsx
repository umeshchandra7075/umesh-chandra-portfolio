"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog"
          title="Notes from what I'm building"
          description="Short write-ups on the engineering decisions behind my projects and what I'm learning."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="group flex h-full cursor-pointer flex-col rounded-2xl p-6" tilt={false}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-accent">
                    {post.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-1.5 border-t border-white/10 pt-4 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
