/**
 * Centralized portfolio content for Udayraj Saroj.
 * All bio, projects, skills, education, certifications, and links live here
 * so the page components stay declarative and easy to maintain.
 */

export const personal = {
  name: "Udayraj Saroj",
  firstName: "Udayraj",
  lastName: "Saroj",
  initials: "US",
  roles: [
    "Full-Stack Engineer",
    "Security-Minded Builder",
    "MERN Stack Developer",
    "Flutter & Real-Time Systems",
  ],
  location: "Vasai, Mumbai, India",
  email: "udayrajsaroj55@gmail.com",
  phone: "+91 84329 18925",
  tagline:
    "I build full-stack web and mobile applications with a security-first mindset — from RBAC architectures to real-time systems that actually ship.",
  heroHeadline: ["Building", "secure,", "human-centered", "software."],
  heroSub:
    "Full-Stack Engineer specializing in MERN, real-time systems, and identity-driven architectures. Currently open to SDE, cyber/infra trainee, and remote internship roles.",
  about: {
    lead: "I'm a B.Sc. IT graduate who treats security and product experience as the same problem — not two separate concerns.",
    body: [
      "Over the last three years I've designed, built, and deployed full-stack applications end-to-end — covering role-based access control, payment integration, real-time WebSocket layers, and offline-first mobile clients. My projects aren't coursework; they're production systems with authentication, audit trails, and live users.",
      "What ties my work together is a security mindset. Whether I'm shipping a donation platform that handles money, a gym system that prevents credential sharing, or a church casting app that runs its own embedded HTTP server — I think about who should be allowed to do what, and how that decision is enforced at every layer.",
      "I'm currently looking for my first full-time role as a MERN stack developer, a Graduate Engineer Trainee in a security or infrastructure track, or a remote internship where I can keep shipping real software while I learn TypeScript and Docker in depth.",
    ],
    stats: [
      { label: "Solo projects shipped", value: 3, suffix: "" },
      { label: "Production deploys", value: 6, suffix: "+" },
      { label: "User roles engineered", value: 4, suffix: "" },
      { label: "Real-time systems", value: 2, suffix: "" },
    ],
  },
  availability: {
    status: "Open to opportunities",
    detail:
      "SDE · Cyber/Infra Trainee · Internships · Remote-friendly · Available immediately",
  },
  socials: [
    {
      label: "GitHub",
      handle: "@udayrajsaroj",
      href: "https://github.com/udayrajsaroj",
      icon: "github",
    },
    {
      label: "LinkedIn",
      handle: "in/udayraj-saroj",
      href: "https://www.linkedin.com/in/udayraj-saroj",
      icon: "linkedin",
    },
    {
      label: "Email",
      handle: "udayrajsaroj55@gmail.com",
      href: "mailto:udayrajsaroj55@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      handle: "+91 84329 18925",
      href: "tel:+918432918925",
      icon: "phone",
    },
  ],
};

export const navItems = [
  { id: "hero", label: "Home", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "projects", label: "Work", index: "04" },
  { id: "experience", label: "Experience", index: "05" },
  { id: "education", label: "Education", index: "06" },
  { id: "certifications", label: "Certs", index: "07" },
  { id: "contact", label: "Contact", index: "08" },
];

export type SkillCategory = {
  title: string;
  blurb: string;
  skills: { name: string; level: "core" | "working" | "learning" }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel responsive, accessible, and intentional.",
    skills: [
      { name: "React.js", level: "core" },
      { name: "JavaScript (ES6+)", level: "core" },
      { name: "HTML5", level: "core" },
      { name: "CSS3", level: "core" },
      { name: "Tailwind CSS", level: "working" },
      { name: "TypeScript", level: "learning" },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs and services that handle auth, payments, and real-time load.",
    skills: [
      { name: "Node.js", level: "core" },
      { name: "Express.js", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "Socket.io", level: "core" },
      { name: "JWT Auth", level: "core" },
      { name: "Bcrypt", level: "core" },
    ],
  },
  {
    title: "Database & Infra",
    blurb: "Modeling, deployment, and the bits in between that keep things running.",
    skills: [
      { name: "MongoDB", level: "core" },
      { name: "Mongoose", level: "core" },
      { name: "MySQL", level: "working" },
      { name: "Vercel", level: "core" },
      { name: "Render", level: "core" },
      { name: "Docker", level: "learning" },
    ],
  },
  {
    title: "Security & Mobile",
    blurb: "Identity, access control, and cross-platform delivery.",
    skills: [
      { name: "IAM / RBAC", level: "core" },
      { name: "API Security", level: "core" },
      { name: "WebSockets", level: "core" },
      { name: "Flutter", level: "working" },
      { name: "Dart", level: "working" },
      { name: "Linux Basics", level: "working" },
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  github: string;
  demo?: string;
  accent: "amber" | "cream" | "dark";
};

export const projects: Project[] = [
  {
    id: "treasure-to-charity",
    index: "01",
    name: "Treasure to Charity",
    tagline: "Donation platform with multi-role RBAC and transparent allocation.",
    year: "2025 — 2026",
    role: "Solo Full-Stack Engineer",
    stack: ["MERN", "Razorpay", "JWT", "Bcrypt", "Brevo API"],
    description:
      "A full-stack donation platform that connects donors, admins, buyers, and orphanages directly — eliminating intermediaries. Built a strict four-role RBAC layer, a transparent 30-30-40 resource allocation model, and a production-grade payment + OTP pipeline.",
    highlights: [
      "Architected role-based access control isolating Donor, Admin, Buyer, and Orphanage profiles.",
      "Designed a 30-30-40 allocation algorithm for auditable distribution of goods and funds.",
      "Integrated Razorpay payments and migrated OTP email from SMTP to Brevo HTTP API for reliable delivery.",
    ],
    metrics: [
      { label: "User roles", value: "4" },
      { label: "Allocation model", value: "30-30-40" },
      { label: "Payment gateway", value: "Razorpay" },
    ],
    github: "https://github.com/udayrajsaroj",
    accent: "amber",
  },
  {
    id: "ironpulse",
    index: "02",
    name: "IronPulse",
    tagline: "Gym management with rotating QR tokens and real-time attendance.",
    year: "2026",
    role: "Solo Full-Stack Engineer",
    stack: ["MERN", "Socket.io", "JWT", "QR Tokens"],
    description:
      "A gym management system covering member registration, membership tracking, payment recording, and live attendance. The standout feature is a rotating, time-sensitive QR-code token system that eliminates credential sharing at check-in — paired with a Socket.io live dashboard for concurrent admin sessions.",
    highlights: [
      "Engineered a rotating QR token algorithm with time-sensitive codes to prevent credential sharing.",
      "Built Socket.io real-time attendance updates across concurrent admin sessions.",
      "Secured all REST APIs with JWT-based authentication protecting financial and attendance records.",
    ],
    metrics: [
      { label: "Real-time layer", value: "Socket.io" },
      { label: "Anti-share system", value: "Rotating QR" },
      { label: "Concurrent admins", value: "Live" },
    ],
    github: "https://github.com/udayrajsaroj",
    accent: "cream",
  },
  {
    id: "biblepresenter",
    index: "03",
    name: "BiblePresenter",
    tagline: "Cross-platform mobile app that casts to a TV over local Wi-Fi.",
    year: "2026",
    role: "Solo Mobile Developer",
    stack: ["Flutter", "Dart", "Shelf", "WebSocket", "PDF.js"],
    description:
      "A cross-platform Android application that casts Bible verses, song lyrics, PDFs, and presentations to a TV browser over local Wi-Fi. The app embeds its own Shelf HTTP and WebSocket server for low-latency cast events, with client-side Bible book data to remove server dependency for scripture lookup.",
    highlights: [
      "Embedded a Shelf HTTP + WebSocket server inside the app for low-latency cast events.",
      "Shipped client-side Bible book data to eliminate verse-retrieval latency and server dependency.",
      "Built a cross-platform UI casting to any TV browser on the same local network.",
    ],
    metrics: [
      { label: "Platform", value: "Flutter" },
      { label: "Embedded server", value: "Shelf + WS" },
      { label: "Network", value: "Local Wi-Fi" },
    ],
    github: "https://github.com/udayrajsaroj",
    accent: "dark",
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  type: "project" | "education" | "certification";
  description: string;
};

export const experience: TimelineItem[] = [
  {
    year: "2026",
    title: "BiblePresenter — Network Casting App",
    org: "Solo Project · Flutter, Dart, Shelf, WebSocket",
    type: "project",
    description:
      "Built and shipped a cross-platform casting application with an embedded HTTP/WebSocket server, delivering low-latency real-time events over local Wi-Fi.",
  },
  {
    year: "2026",
    title: "IronPulse — Gym Management System",
    org: "Solo Project · MERN, Socket.io, JWT",
    type: "project",
    description:
      "Engineered a security-first gym platform featuring a rotating QR token attendance system and real-time admin dashboard powered by Socket.io.",
  },
  {
    year: "2025 — 2026",
    title: "Treasure to Charity — Donation Platform",
    org: "Solo Project · MERN, Razorpay, RBAC",
    type: "project",
    description:
      "Designed and deployed a multi-role donation platform with strict RBAC, transparent resource allocation, and production payment + OTP pipelines.",
  },
];

export const education = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "Viva College, University of Mumbai",
    year: "2026",
    detail:
      "Foundations in software engineering, networking, databases, and secure application development.",
  },
  {
    degree: "HSC — Science",
    institution: "Vidya Varidhi Vidyalaya & Jr. College",
    year: "2023",
    detail: "Higher secondary in Science stream.",
  },
  {
    degree: "SSC",
    institution: "Sant Leela Shah High School",
    year: "2021",
    detail: "Secondary school certificate.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  href?: string;
};

export const certifications: Certification[] = [
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "TCS Forage",
    date: "June 2026",
    description:
      "Completed practical tasks focusing on Identity and Access Management (IAM) fundamentals — conducting IAM strategy assessments and crafting custom IAM solutions for enterprise scenarios.",
    skills: ["IAM", "RBAC", "IAM Strategy", "Secure Integration"],
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte Forage",
    date: "June 2026",
    description:
      "Completed practical tasks in coding and development — covering real-world engineering problem-solving within a consulting context.",
    skills: ["Coding", "Development", "Problem Solving"],
  },
];

export const beyondCode = [
  {
    label: "Acoustic Guitar",
    detail: "Long-form practice sessions — patience and pattern recognition.",
  },
  {
    label: "Chess Puzzles",
    detail: "Daily tactical problems — pattern recall under time pressure.",
  },
  {
    label: "Competitive Gaming",
    detail: "Strategy games — reading opponents and adapting on the fly.",
  },
];
