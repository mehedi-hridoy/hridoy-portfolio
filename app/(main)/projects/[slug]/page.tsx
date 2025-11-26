import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ComponentType } from "react";
import { getProjectBySlug, projects } from "@/app/data/projects";
import CreatorPulse from "@/app/(main)/projects/_content/CreatorPulse";
import Portfolio from "@/app/(main)/projects/_content/Portfolio";
import EthniCart from "@/app/(main)/projects/_content/EthniCart";
import GadgetHeaven from "@/app/(main)/projects/_content/GadgetHeaven";
import FocusClock from "@/app/(main)/projects/_content/FocusClock";
import Warmheart from "@/app/(main)/projects/_content/Warmheart";

const contentMap: Record<string, ComponentType> = {
  creatorpulse: CreatorPulse,
  portfolio: Portfolio,
  ethnicart: EthniCart,
  "gadget-heaven": GadgetHeaven,
  "focus-clock": FocusClock,
  warmheart: Warmheart,
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
    <main className="w-full pt-16 sm:pt-20 md:pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="flex items-center text-slate-600 dark:text-gray-300 mb-6 sm:mb-8 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" /> All Projects
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">{displayTitle}</h1>
        <p className="text-slate-600 dark:text-gray-400 mt-2 text-sm sm:text-base">{displayTagline}</p>

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
