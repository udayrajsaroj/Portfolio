import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://udayrajsaroj.vercel.app";
const description =
  "Udayraj Saroj — Full-Stack Engineer with a security mindset. MERN stack developer specializing in RBAC, real-time systems, and Flutter. Open to SDE, cyber/infra trainee, and remote internship roles.";
const keywords = [
  "Udayraj Saroj",
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "React Developer Mumbai",
  "Node.js Developer India",
  "Identity and Access Management",
  "RBAC Engineer",
  "Flutter Developer",
  "Fresher Software Engineer",
  "Cybersecurity Trainee",
  "Portfolio",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Udayraj Saroj — Full-Stack Engineer & Security-Minded Builder",
    template: "%s · Udayraj Saroj",
  },
  description,
  keywords,
  authors: [{ name: "Udayraj Saroj", url: SITE_URL }],
  creator: "Udayraj Saroj",
  publisher: "Udayraj Saroj",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Udayraj Saroj — Portfolio",
    title: "Udayraj Saroj — Full-Stack Engineer & Security-Minded Builder",
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Udayraj Saroj — Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udayraj Saroj — Full-Stack Engineer",
    description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Udayraj Saroj",
  url: SITE_URL,
  email: "mailto:udayrajsaroj55@gmail.com",
  telephone: "+91 84329 18925",
  jobTitle: "Full-Stack Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vasai, Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Viva College, University of Mumbai",
  },
  knowsAbout: [
    "MERN Stack",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Identity and Access Management",
    "Role-Based Access Control",
    "JWT Authentication",
    "Socket.io",
    "Flutter",
  ],
  sameAs: [
    "https://github.com/udayrajsaroj",
    "https://www.linkedin.com/in/udayraj-saroj",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="bottom-right" />
      </body>
    </html>
  );
}
