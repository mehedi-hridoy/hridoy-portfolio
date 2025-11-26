import Link from "next/link";
import Image from "next/image";
import type { ProjectMeta } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-[#1D1D1D] hover:scale-[1.02] transition-transform duration-300 block shadow-lg ring-1 ring-slate-200 dark:ring-black/5"
    >
  <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden bg-linear-to-br from-slate-200 to-slate-100 dark:from-[#2A2A2A] dark:to-[#171717]">
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
          <div className="w-full h-full grid place-items-center text-xl sm:text-2xl text-white/60">
            {project.title}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">{project.title}</h3>
        <p className="text-slate-700 dark:text-gray-400 text-xs sm:text-sm md:text-base line-clamp-2">{project.tagline}</p>
      </div>
    </Link>
  );
}
