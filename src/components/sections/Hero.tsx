// "use client";

// import { motion } from "framer-motion";
// import { ArrowDown, Download, FolderGit2, Mail, Sparkles } from "lucide-react";
// import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
// import { SiLeetcode, SiHackerrank } from "react-icons/si";
// import { profile } from "@/lib/data";
// import { TypingText } from "@/components/ui/TypingText";
// import { MagneticButton } from "@/components/ui/MagneticButton";

// const socialLinks = [
//   { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
//   { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
//   { icon: SiLeetcode, href: profile.socials.leetcode, label: "LeetCode" },
//   { icon: SiHackerrank, href: profile.socials.hackerrank, label: "HackerRank" },
//   { icon: FaXTwitter, href: profile.socials.twitter, label: "Twitter / X" },
//   { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
// ];

// const floatingTech = [
//   { label: "React", top: "12%", left: "6%", delay: 0 },
//   { label: "Node.js", top: "22%", right: "4%", delay: 0.4 },
//   { label: "TypeScript", bottom: "26%", left: "3%", delay: 0.8 },
//   { label: "PostgreSQL", bottom: "14%", right: "8%", delay: 1.2 },
//   { label: "Next.js", top: "48%", right: "-2%", delay: 1.6 },
// ];

// export function Hero() {
//   return (
//     <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
//       <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
//         {/* Text column */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.2em] text-accent">
//             <Sparkles className="h-3.5 w-3.5" />
//             Open to Software Engineering Roles
//           </span>

//           <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
//             Hi, I&apos;m <span className="text-gradient-animated">{profile.name}</span>
//           </h1>

//           <p className="mt-4 font-display text-lg text-foreground/80 sm:text-xl">
//             {profile.role} &amp; Aspiring Software Engineer
//           </p>

//           <div className="mt-5 flex h-8 items-center font-display text-xl font-medium text-accent sm:text-2xl">
//             <TypingText words={profile.roles} />
//           </div>

//           <p className="mt-6 max-w-xl text-balance text-muted">{profile.summary}</p>

//           <p className="mt-3 font-display text-sm italic text-foreground/70">&ldquo;{profile.tagline}&rdquo;</p>

//           <div className="mt-9 flex flex-wrap items-center gap-4">
//             <MagneticButton href={profile.resumeUrl} download>
//               <Download className="h-4 w-4" /> Download Resume
//             </MagneticButton>
//             <MagneticButton href="#projects" variant="ghost">
//               <FolderGit2 className="h-4 w-4" /> View Projects
//             </MagneticButton>
//             <MagneticButton href="#contact" variant="ghost">
//               <Mail className="h-4 w-4" /> Contact Me
//             </MagneticButton>
//           </div>

//           <div className="mt-10 flex items-center gap-3">
//             {socialLinks.map(({ icon: Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label={label}
//                 data-cursor-hover
//                 className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:shadow-[0_8px_25px_-8px_rgba(56,189,248,0.7)]"
//               >
//                 <Icon className="h-4 w-4" />
//               </a>
//             ))}
//           </div>
//         </motion.div>

//         {/* Visual column */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.92 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
//           className="relative mx-auto aspect-square w-full max-w-md"
//         >
//           <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl" />

//           {floatingTech.map((t) => (
//             <motion.span
//               key={t.label}
//               className="glass-card absolute z-20 hidden rounded-full px-3 py-1.5 font-display text-xs text-foreground/90 sm:block"
//               style={{ top: t.top, left: t.left, right: t.right, bottom: t.bottom }}
//               animate={{ y: [0, -14, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: t.delay }}
//             >
//               {t.label}
//             </motion.span>
//           ))}

//           <div className="gradient-border glass-card relative mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem]">
//             <div className="flex h-[85%] w-[85%] items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-surface to-surface-2">
//               <span className="font-display text-7xl font-semibold text-white/10 select-none">VU</span>
//               <span className="sr-only">Profile photo placeholder for {profile.name}</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <motion.a
//         href="#about"
//         aria-label="Scroll to About section"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
//       >
//         <span className="font-display text-[11px] uppercase tracking-[0.25em]">Scroll</span>
//         <ArrowDown className="h-4 w-4" />
//       </motion.a>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { profile } from "@/lib/data";
import { TypingText } from "@/components/ui/TypingText";
import { MagneticButton } from "@/components/ui/MagneticButton";

const socialLinks = [
  { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: SiLeetcode, href: profile.socials.leetcode, label: "LeetCode" },
  { icon: SiHackerrank, href: profile.socials.hackerrank, label: "HackerRank" },
  { icon: FaXTwitter, href: profile.socials.twitter, label: "Twitter / X" },
  { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
];

const floatingTech = [
  { label: "React", top: "12%", left: "6%", delay: 0 },
  { label: "Node.js", top: "22%", right: "4%", delay: 0.4 },
  { label: "TypeScript", bottom: "26%", left: "3%", delay: 0.8 },
  { label: "PostgreSQL", bottom: "14%", right: "8%", delay: 1.2 },
  { label: "Next.js", top: "48%", right: "-2%", delay: 1.6 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Open to Software Engineering Roles
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient-animated">{profile.name}</span>
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            {profile.role} & Aspiring Software Engineer
          </p>

          <div className="mt-5 text-2xl font-semibold text-cyan-400">
            <TypingText words={profile.roles} />
          </div>

          <p className="mt-6 max-w-xl text-gray-400">
            {profile.summary}
          </p>

          <p className="mt-3 italic text-gray-500">
            "{profile.tagline}"
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href={profile.resumeUrl} download>
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>

            <MagneticButton href="#projects" variant="ghost">
              <FolderGit2 className="h-4 w-4" />
              View Projects
            </MagneticButton>

            <MagneticButton href="#contact" variant="ghost">
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </div>

          <div className="mt-10 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass-card flex h-10 w-10 items-center justify-center rounded-full hover:text-cyan-400 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-transparent blur-3xl" />

          {floatingTech.map((tech) => (
            <motion.span
              key={tech.label}
              className="glass-card absolute z-20 hidden rounded-full px-3 py-1.5 text-xs sm:block"
              style={{
                top: tech.top,
                left: tech.left,
                right: tech.right,
                bottom: tech.bottom,
              }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: tech.delay,
              }}
            >
              {tech.label}
            </motion.span>
          ))}

          <div className="gradient-border glass-card relative mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem]">

            <div className="relative h-[85%] w-[85%] overflow-hidden rounded-[1.6rem]">

              <Image
                src="/profile.png"
                alt={profile.name}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

            </div>

          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center sm:flex"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">
          Scroll
        </span>

        <ArrowDown className="mt-2 h-5 w-5 text-cyan-400" />
      </motion.a>
    </section>
  );
}