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

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const meta = getProjectBySlug(params.slug);
  const Content = contentMap[params.slug];

  if (!meta) {
    return (
      <main className="w-full pt-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-white">Project not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full pt-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <Link href="/projects" className="flex items-center text-gray-300 mb-8 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" /> All Projects
        </Link>

        <h1 className="text-4xl font-extrabold text-white">{meta.title}</h1>
        <p className="text-gray-400 mt-2">{meta.tagline}</p>

        <div className="mt-10">
          {Content ? <Content /> : <p className="text-gray-300">Details coming soon.</p>}
        </div>
      </div>
    </main>
  );
}
