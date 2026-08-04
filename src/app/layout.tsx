import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://vangaumeshchandra.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Software Engineer & Full Stack Developer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    "Vanga Umesh Chandra",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Backend Engineer",
    "Portfolio",
    "Hyderabad",
  ],
  authors: [{ name: profile.name, url: profile.socials.linkedin }],
  creator: profile.name,
  category: "technology",
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Software Engineer & Full Stack Developer`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer & Full Stack Developer`,
    description: profile.summary,
    creator: "@umesh7075",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    email: profile.email,
    jobTitle: "Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: Object.values(profile.socials),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
