import { projects, type ProjectMeta } from "../data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="mt-32">
      <h1 className="text-[48px] font-extrabold text-white mb-12">
        Selected <span className="text-[#A855F7]">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p: ProjectMeta) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
