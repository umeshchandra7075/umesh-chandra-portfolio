// // // "use client";

// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
// // // import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
// // // import { profile } from "@/lib/data";
// // // import { SectionHeading } from "@/components/ui/SectionHeading";
// // // import { TiltCard } from "@/components/ui/TiltCard";

// // // const infoCards = [
// // //   { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
// // //   { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
// // //   { icon: MapPin, label: "Location", value: profile.location, href: undefined },
// // // ];

// // // const socials = [
// // //   { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
// // //   { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
// // //   { icon: FaXTwitter, href: profile.socials.twitter, label: "Twitter / X" },
// // //   { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
// // // ];

// // // type Status = "idle" | "sending" | "sent";

// // // export function Contact() {
// // //   const [status, setStatus] = useState<Status>("idle");
// // //   const [form, setForm] = useState({ name: "", email: "", message: "" });

// // //   function handleSubmit(e: React.FormEvent) {
// // //     e.preventDefault();
// // //     setStatus("sending");
// // //     // NOTE: wire this up to a real endpoint (Formspree, Resend, or a
// // //     // Next.js Route Handler that sends email) before deploying to production.
// // //     window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
// // //       `Portfolio contact from ${form.name || "a visitor"}`
// // //     )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
// // //     setTimeout(() => setStatus("sent"), 900);
// // //   }

// // //   return (
// // //     <section id="contact" className="section">
// // //       <div className="container-px mx-auto max-w-7xl">
// // //         <SectionHeading
// // //           eyebrow="Contact"
// // //           title="Let's build something together"
// // //           description="Have a role, a project, or just want to say hi? My inbox is open."
// // //         />

// // //         <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -24 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true, margin: "-60px" }}
// // //             transition={{ duration: 0.5 }}
// // //             className="flex flex-col gap-4"
// // //           >
// // //             {infoCards.map((c) => (
// // //               <TiltCard key={c.label} tilt={false} className="flex items-center gap-4 rounded-2xl p-5">
// // //                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
// // //                   <c.icon className="h-5 w-5" />
// // //                 </div>
// // //                 <div className="min-w-0">
// // //                   <p className="text-xs text-muted">{c.label}</p>
// // //                   {c.href ? (
// // //                     <a href={c.href} className="truncate text-sm font-medium text-foreground hover:text-accent">
// // //                       {c.value}
// // //                     </a>
// // //                   ) : (
// // //                     <p className="truncate text-sm font-medium text-foreground">{c.value}</p>
// // //                   )}
// // //                 </div>
// // //               </TiltCard>
// // //             ))}

// // //             <TiltCard tilt={false} className="rounded-2xl p-5">
// // //               <p className="mb-3 text-xs text-muted">Find me elsewhere</p>
// // //               <div className="flex gap-3">
// // //                 {socials.map((s) => (
// // //                   <a
// // //                     key={s.label}
// // //                     href={s.href}
// // //                     target="_blank"
// // //                     rel="noreferrer"
// // //                     aria-label={s.label}
// // //                     data-cursor-hover
// // //                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/80 transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
// // //                   >
// // //                     <s.icon className="h-4 w-4" />
// // //                   </a>
// // //                 ))}
// // //               </div>
// // //             </TiltCard>
// // //           </motion.div>

// // //           <motion.form
// // //             initial={{ opacity: 0, x: 24 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true, margin: "-60px" }}
// // //             transition={{ duration: 0.5 }}
// // //             onSubmit={handleSubmit}
// // //             className="glass-card gradient-border rounded-2xl p-7"
// // //           >
// // //             <div className="grid gap-5 sm:grid-cols-2">
// // //               <label className="flex flex-col gap-1.5 text-sm">
// // //                 <span className="text-muted">Your Name</span>
// // //                 <input
// // //                   required
// // //                   value={form.name}
// // //                   onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
// // //                   className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50"
// // //                   placeholder="Jane Doe"
// // //                 />
// // //               </label>
// // //               <label className="flex flex-col gap-1.5 text-sm">
// // //                 <span className="text-muted">Your Email</span>
// // //                 <input
// // //                   required
// // //                   type="email"
// // //                   value={form.email}
// // //                   onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
// // //                   className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50"
// // //                   placeholder="jane@company.com"
// // //                 />
// // //               </label>
// // //             </div>

// // //             <label className="mt-5 flex flex-col gap-1.5 text-sm">
// // //               <span className="text-muted">Message</span>
// // //               <textarea
// // //                 required
// // //                 rows={5}
// // //                 value={form.message}
// // //                 onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
// // //                 className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-foreground outline-none transition-colors focus:border-accent/50"
// // //                 placeholder="Tell me a bit about the opportunity or project…"
// // //               />
// // //             </label>

// // //             <button
// // //               type="submit"
// // //               disabled={status !== "idle"}
// // //               className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-display text-sm font-medium text-white transition-opacity disabled:opacity-70 sm:w-auto sm:px-8"
// // //             >
// // //               {status === "idle" && (
// // //                 <>
// // //                   <Send className="h-4 w-4" /> Send Message
// // //                 </>
// // //               )}
// // //               {status === "sending" && "Opening your mail client…"}
// // //               {status === "sent" && (
// // //                 <>
// // //                   <CheckCircle2 className="h-4 w-4" /> Ready to send
// // //                 </>
// // //               )}
// // //             </button>
// // //             <p className="mt-3 text-xs text-muted">
// // //               This opens your email client with the message pre-filled. To send silently in-page, connect a form
// // //               endpoint (Formspree, Resend, or a Route Handler) in <code>Contact.tsx</code>.
// // //             </p>
// // //           </motion.form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
// // import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
// // import { profile } from "@/lib/data";
// // import { SectionHeading } from "@/components/ui/SectionHeading";
// // import { TiltCard } from "@/components/ui/TiltCard";

// // const infoCards = [
// //   {
// //     icon: Mail,
// //     label: "Email",
// //     value: profile.email,
// //     href: `mailto:${profile.email}`,
// //   },
// //   {
// //     icon: Phone,
// //     label: "Phone",
// //     value: profile.phone,
// //     href: `tel:${profile.phone.replace(/\s/g, "")}`,
// //   },
// //   {
// //     icon: MapPin,
// //     label: "Location",
// //     value: profile.location,
// //     href: undefined,
// //   },
// // ];

// // const socials = [
// //   { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
// //   { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
// //   { icon: FaXTwitter, href: profile.socials.twitter, label: "Twitter / X" },
// //   { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
// // ];

// // type Status = "idle" | "sending" | "sent";

// // export function Contact() {
// //   const [status, setStatus] = useState<Status>("idle");

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   // async function handleSubmit(e: React.FormEvent) {
// //   //   e.preventDefault();

// //   //   setStatus("sending");

// //   //   try {
// //   //     const response = await fetch("http://localhost:5000/api/contact", {
// //   //       method: "POST",
// //   //       headers: {
// //   //         "Content-Type": "application/json",
// //   //       },
// //   //       body: JSON.stringify(form),
// //   //     });

// //   //     const data = await response.json();

// //   //     if (data.success) {
// //   //       setStatus("sent");

// //   //       setForm({
// //   //         name: "",
// //   //         email: "",
// //   //         message: "",
// //   //       });

// //   //       setTimeout(() => {
// //   //         setStatus("idle");
// //   //       }, 3000);
// //   //     } else {
// //   //       alert(data.message);
// //   //       setStatus("idle");
// //   //     }
// //   //   } catch (error) {
// //   //     console.error(error);
// //   //     alert("Unable to connect to server.");
// //   //     setStatus("idle");
// //   //   }
// //   // }

// // async function handleSubmit(e: React.FormEvent) {
// //   e.preventDefault();

// //   setStatus("sending");

// //   try {
// //     const response = await fetch(
// //       `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(form),
// //       }
// //     );

// //     const data = await response.json();

// //     if (data.success) {
// //       setStatus("sent");

// //       setForm({
// //         name: "",
// //         email: "",
// //         message: "",
// //       });

// //       setTimeout(() => {
// //         setStatus("idle");
// //       }, 3000);
// //     } else {
// //       alert(data.message);
// //       setStatus("idle");
// //     }
// //   } catch (error) {
// //     console.error(error);
// //     alert("Unable to connect to server.");
// //     setStatus("idle");
// //   }
// // }

// //   return (
// //     <section id="contact" className="section">
// //       <div className="container-px mx-auto max-w-7xl">
// //         <SectionHeading
// //           eyebrow="Contact"
// //           title="Let's build something together"
// //           description="Have a role, a project, or just want to say hi? My inbox is open."
// //         />

// //         <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
// //           {/* Contact Information */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -24 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 }}
// //             className="flex flex-col gap-4"
// //           >
// //             {infoCards.map((card) => (
// //               <TiltCard
// //                 key={card.label}
// //                 tilt={false}
// //                 className="flex items-center gap-4 rounded-2xl p-5"
// //               >
// //                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
// //                   <card.icon className="h-5 w-5" />
// //                 </div>

// //                 <div>
// //                   <p className="text-xs text-muted">{card.label}</p>

// //                   {card.href ? (
// //                     <a
// //                       href={card.href}
// //                       className="text-sm font-medium hover:text-accent"
// //                     >
// //                       {card.value}
// //                     </a>
// //                   ) : (
// //                     <p className="text-sm font-medium">{card.value}</p>
// //                   )}
// //                 </div>
// //               </TiltCard>
// //             ))}

// //             <TiltCard tilt={false} className="rounded-2xl p-5">
// //               <p className="mb-3 text-xs text-muted">
// //                 Find me elsewhere
// //               </p>

// //               <div className="flex gap-3">
// //                 {socials.map((social) => (
// //                   <a
// //                     key={social.label}
// //                     href={social.href}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-accent hover:text-accent"
// //                   >
// //                     <social.icon className="h-4 w-4" />
// //                   </a>
// //                 ))}
// //               </div>
// //             </TiltCard>
// //           </motion.div>

// //           {/* Contact Form */}
// //           <motion.form
// //             onSubmit={handleSubmit}
// //             initial={{ opacity: 0, x: 24 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 }}
// //             className="glass-card gradient-border rounded-2xl p-7"
// //           >
// //             <div className="grid gap-5 sm:grid-cols-2">
// //               <input
// //                 required
// //                 placeholder="Your Name"
// //                 value={form.name}
// //                 onChange={(e) =>
// //                   setForm({ ...form, name: e.target.value })
// //                 }
// //                 className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
// //               />

// //               <input
// //                 required
// //                 type="email"
// //                 placeholder="Your Email"
// //                 value={form.email}
// //                 onChange={(e) =>
// //                   setForm({ ...form, email: e.target.value })
// //                 }
// //                 className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
// //               />
// //             </div>

// //             <textarea
// //               required
// //               rows={6}
// //               placeholder="Your Message..."
// //               value={form.message}
// //               onChange={(e) =>
// //                 setForm({ ...form, message: e.target.value })
// //               }
// //               className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
// //             />

// //             <button
// //               type="submit"
// //               disabled={status === "sending"}
// //               className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-medium text-white disabled:opacity-60"
// //             >
// //               {status === "idle" && (
// //                 <>
// //                   <Send className="h-4 w-4" />
// //                   Send Message
// //                 </>
// //               )}

// //               {status === "sending" && (
// //                 <>
// //                   <Send className="h-4 w-4 animate-pulse" />
// //                   Sending...
// //                 </>
// //               )}

// //               {status === "sent" && (
// //                 <>
// //                   <CheckCircle2 className="h-4 w-4" />
// //                   Message Sent Successfully
// //                 </>
// //               )}
// //             </button>

// //             <p className="mt-3 text-xs text-muted">
// //               Your message will be delivered directly to my inbox.
// //             </p>
// //           </motion.form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
// import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
// import { profile } from "@/lib/data";
// import { SectionHeading } from "@/components/ui/SectionHeading";
// import { TiltCard } from "@/components/ui/TiltCard";

// const infoCards = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: profile.email,
//     href: `mailto:${profile.email}`,
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: profile.phone,
//     href: `tel:${profile.phone.replace(/\s/g, "")}`,
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: profile.location,
//     href: undefined,
//   },
// ];

// const socials = [
//   { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
//   { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
//   { icon: FaXTwitter, href: profile.socials.twitter, label: "Twitter / X" },
//   { icon: FaInstagram, href: profile.socials.instagram, label: "Instagram" },
// ];

// type Status = "idle" | "sending" | "sent";

// export function Contact() {
//   const [status, setStatus] = useState<Status>("idle");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     setStatus("sending");

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setStatus("sent");

//         setForm({
//           name: "",
//           email: "",
//           message: "",
//         });

//         setTimeout(() => {
//           setStatus("idle");
//         }, 3000);
//       } else {
//         alert(data.message || "Failed to send message.");
//         setStatus("idle");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Unable to connect to server.");
//       setStatus("idle");
//     }
//   }

//   return (
//     <section id="contact" className="section">
//       <div className="container-px mx-auto max-w-7xl">
//         <SectionHeading
//           eyebrow="Contact"
//           title="Let's build something together"
//           description="Have a role, a project, or just want to say hi? My inbox is open."
//         />

//         <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col gap-4"
//           >
//             {infoCards.map((card) => (
//               <TiltCard
//                 key={card.label}
//                 tilt={false}
//                 className="flex items-center gap-4 rounded-2xl p-5"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
//                   <card.icon className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <p className="text-xs text-muted">{card.label}</p>

//                   {card.href ? (
//                     <a
//                       href={card.href}
//                       className="text-sm font-medium hover:text-accent"
//                     >
//                       {card.value}
//                     </a>
//                   ) : (
//                     <p className="text-sm font-medium">{card.value}</p>
//                   )}
//                 </div>
//               </TiltCard>
//             ))}

//             <TiltCard tilt={false} className="rounded-2xl p-5">
//               <p className="mb-3 text-xs text-muted">
//                 Find me elsewhere
//               </p>

//               <div className="flex gap-3">
//                 {socials.map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-accent hover:text-accent"
//                   >
//                     <social.icon className="h-4 w-4" />
//                   </a>
//                 ))}
//               </div>
//             </TiltCard>
//           </motion.div>

//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="glass-card gradient-border rounded-2xl p-7"
//           >
//             <div className="grid gap-5 sm:grid-cols-2">
//               <input
//                 required
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//                 className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
//               />

//               <input
//                 required
//                 type="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={(e) =>
//                   setForm({ ...form, email: e.target.value })
//                 }
//                 className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
//               />
//             </div>

//             <textarea
//               required
//               rows={6}
//               placeholder="Your Message..."
//               value={form.message}
//               onChange={(e) =>
//                 setForm({ ...form, message: e.target.value })
//               }
//               className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
//             />

//             <button
//               type="submit"
//               disabled={status === "sending"}
//               className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-medium text-white disabled:opacity-60"
//             >
//               {status === "idle" && (
//                 <>
//                   <Send className="h-4 w-4" />
//                   Send Message
//                 </>
//               )}

//               {status === "sending" && (
//                 <>
//                   <Send className="h-4 w-4 animate-pulse" />
//                   Sending...
//                 </>
//               )}

//               {status === "sent" && (
//                 <>
//                   <CheckCircle2 className="h-4 w-4" />
//                   Message Sent Successfully
//                 </>
//               )}
//             </button>

//             <p className="mt-3 text-xs text-muted">
//               Your message will be delivered directly to my inbox.
//             </p>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const infoCards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

const socials = [
  {
    icon: FaGithub,
    href: profile.socials.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: profile.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: profile.socials.twitter,
    label: "Twitter / X",
  },
  {
    icon: FaInstagram,
    href: profile.socials.instagram,
    label: "Instagram",
  },
];

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("sent");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        alert(data.message || "Failed to send message.");
        setStatus("idle");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to send message.");
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, a project, or just want to say hi? My inbox is open."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {infoCards.map((card) => (
              <TiltCard
                key={card.label}
                tilt={false}
                className="flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                  <card.icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-muted">
                    {card.label}
                  </p>

                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-sm font-medium hover:text-accent"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">
                      {card.value}
                    </p>
                  )}
                </div>
              </TiltCard>
            ))}

            <TiltCard
              tilt={false}
              className="rounded-2xl p-5"
            >
              <p className="mb-3 text-xs text-muted">
                Find me elsewhere
              </p>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 hover:border-accent hover:text-accent"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card gradient-border rounded-2xl p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
              />
            </div>

            <textarea
              required
              rows={6}
              placeholder="Your Message..."
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-medium text-white disabled:opacity-60"
            >
              {status === "idle" && (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}

              {status === "sending" && (
                <>
                  <Send className="h-4 w-4 animate-pulse" />
                  Sending...
                </>
              )}

              {status === "sent" && (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Message Sent Successfully
                </>
              )}
            </button>

            <p className="mt-3 text-xs text-muted">
              Your message will be delivered directly to my inbox.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}