export type ProjectMeta = {
  slug: string;
  title: string;
  tagline: string;
  blurb?: string;
  /** Absolute path under /public. Use /images/<slug>.png */
  coverImage?: string;
};

export const projects: ProjectMeta[] = [
  {
    slug: "creatorpulse",
    title: "CreatorPulse — AI Analytics Copilot",
    tagline: "Full-stack SaaS transforming creator analytics into actionable insights with AI",
    blurb:
      "Unifies multi-platform data, derives insights via Python AI brain, and generates content ideas with world-class UX.",
    coverImage: "/images/creatorpulse_cover.png",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    tagline: "A modern, responsive portfolio built with Next.js 15 and cutting-edge web technologies",
    blurb:
      "Showcasing projects, skills, and experience with a premium design system, dark mode, and seamless navigation.",
    coverImage: "/images/portfolio.png",
  },
  {
    slug: "ethnicart",
    title: "EthniCart",
    tagline: "An e‑commerce platform bringing rooted products directly from producers",
    blurb:
      "Discover authentic, locally rooted goods while empowering producers with a modern, accessible marketplace.",
    coverImage: "/images/ethnicart.png",
  },
  {
    slug: "gadget-heaven",
    title: "Gadget Heaven",
    tagline: "An accessory and gadget platform",
    blurb:
      "Browse curated gadgets and accessories with helpful comparisons and buyer‑friendly features.",
    // NOTE: File currently named gadgetHeaven.png (camelCase). Consider renaming the file to gadget-heaven.png to match slug.
    coverImage: "/images/gadgetHeaven.png",
  },
  {
    slug: "focus-clock",
    title: "Focus Clock",
    tagline: "Your all-in-one LED desk clock replacement app with timer, stopwatch, alarms & reminders",
    blurb:
      "Built for landscape mode and always-on displays — a full-featured Flutter app designed to replace physical LED desk clocks.",
    coverImage: "/images/FocusClock.png",
  },
  {
    slug: "warmheart",
    title: "warmheart",
    tagline: "A React‑based donation website",
    blurb:
      "Streamlined donation flows, transparent campaigns, and empathetic UI supporting meaningful causes.",
    coverImage: "/images/warmheart.png",
  },
];

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find(p => p.slug === slug);
}
