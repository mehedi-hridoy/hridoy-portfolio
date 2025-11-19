import Link from "next/link";
import Image from "next/image";
import type { ProjectMeta } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="rounded-2xl overflow-hidden bg-[#1D1D1D] hover:scale-[1.02] transition block shadow-lg ring-1 ring-black/5"
    >
  <div className="w-full h-60 overflow-hidden bg-linear-to-br from-[#2A2A2A] to-[#171717]">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-2xl text-white/60">
            {project.title}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.tagline}</p>
      </div>
    </Link>
  );
}
