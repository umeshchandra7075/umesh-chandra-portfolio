"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { profile, navLinks } from "@/lib/data";

const socials = [
  { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: SiLeetcode, href: profile.socials.leetcode, label: "LeetCode" },
  { icon: SiHackerrank, href: profile.socials.hackerrank, label: "HackerRank" },
  { icon: FaXTwitter, href: profile.socials.twitter, label: "Twitter / X" },
  { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative mt-10">
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        className="w-full text-white/[0.03]"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
        />
      </svg>

      <div className="glass border-t border-white/5">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center gap-8 py-12">
          <a href="#home" className="font-display text-lg font-semibold text-gradient">
            {profile.name}
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                data-cursor-hover
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted sm:flex-row">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <p>Designed &amp; Developed by {profile.name}</p>
          </div>
        </div>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        data-cursor-hover
        className="glass-card fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-accent transition-transform hover:-translate-y-1"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </footer>
  );
}
