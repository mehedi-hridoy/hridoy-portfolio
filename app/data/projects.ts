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
    slug: "ethnicart",
    title: "EthniCart",
    tagline: "An e‑commerce platform bringing rooted products directly from producers",
    blurb:
      "Discover authentic, locally rooted goods while empowering producers with a modern, accessible marketplace.",
    coverImage: "/images/ethnicart.png",
  },
  {
    slug: "warmheart",
    title: "warmheart",
    tagline: "A React‑based donation website",
    blurb:
      "Streamlined donation flows, transparent campaigns, and empathetic UI supporting meaningful causes.",
    coverImage: "/images/warmheart.png",
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
    slug: "bookvibe",
    title: "Bookvibe",
    tagline: "An online bookstore",
    blurb:
      "Find your next read with categorized browsing, wishlists, and a smooth checkout experience.",
    coverImage: "/images/bookvibe.png",
  },
];

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find(p => p.slug === slug);
}
