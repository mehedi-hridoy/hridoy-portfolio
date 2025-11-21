import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ComponentType } from "react";
import { getProjectBySlug, projects } from "@/app/data/projects";
import EthniCart from "@/app/projects/_content/EthniCart";
import Warmheart from "@/app/projects/_content/Warmheart";
import GadgetHeaven from "@/app/projects/_content/GadgetHeaven";
import Bookvibe from "@/app/projects/_content/Bookvibe";

const contentMap: Record<string, ComponentType> = {
  ethnicart: EthniCart,
  warmheart: Warmheart,
  "gadget-heaven": GadgetHeaven,
  bookvibe: Bookvibe,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = (rawSlug ?? "").toString().toLowerCase();
  const meta = getProjectBySlug(slug);
  const Content = contentMap[slug];

  const toTitle = (s?: string) => {
    if (!s) return "Project";
    return s
      .split("-")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");
  };

  const displayTitle = meta?.title ?? toTitle(slug);
  const displayTagline = meta?.tagline ?? "Project details";

  return (
    <main className="w-full pt-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Link href="/projects" className="flex items-center text-gray-300 mb-8 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" /> All Projects
        </Link>

        <h1 className="text-4xl font-extrabold text-white">{displayTitle}</h1>
        <p className="text-gray-400 mt-2">{displayTagline}</p>

        <div className="mt-10">
          {Content ? (
            <Content />
          ) : meta ? (
            <p className="text-gray-300">Details coming soon.</p>
          ) : (
            <p className="text-white">Project not found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
