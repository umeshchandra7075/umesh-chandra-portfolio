"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const user = profile.githubUsername;

export function GithubSection() {
  return (
    <section id="github" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Live from GitHub"
          description="Auto-generated, always up to date — pulled straight from my GitHub activity."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard tilt={false} className="overflow-hidden rounded-2xl p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&icon_color=2563eb&text_color=f8fafc&bg_color=00000000`}
                alt="GitHub stats"
                loading="lazy"
                className="w-full"
              />
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard tilt={false} className="overflow-hidden rounded-2xl p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=transparent&hide_border=true&background=00000000&ring=38BDF8&fire=2563EB&currStreakLabel=38bdf8&sideLabels=f8fafc&currStreakNum=f8fafc&sideNums=f8fafc&dates=94a3b8`}
                alt="GitHub streak stats"
                loading="lazy"
                className="w-full"
              />
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <TiltCard tilt={false} className="overflow-hidden rounded-2xl p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=f8fafc&bg_color=00000000`}
                alt="Top languages"
                loading="lazy"
                className="w-full"
              />
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TiltCard tilt={false} className="overflow-hidden rounded-2xl p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://ghchart.rshah.org/2563EB/${user}`}
                alt="GitHub contribution calendar"
                loading="lazy"
                className="w-full"
              />
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6"
        >
          <TiltCard tilt={false} className="overflow-hidden rounded-2xl p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://raw.githubusercontent.com/${user}/${user}/output/github-contribution-grid-snake.svg`}
              alt="GitHub contribution snake animation"
              loading="lazy"
              className="w-full"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <p className="mt-2 text-center text-xs text-muted">
              Snake animation renders once the{" "}
              <a
                className="text-accent underline underline-offset-2"
                href="https://github.com/Platane/snk"
                target="_blank"
                rel="noreferrer"
              >
                snk GitHub Action
              </a>{" "}
              is set up on the {user}/{user} repository.
            </p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
