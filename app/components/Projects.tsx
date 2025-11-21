"use client";

import SplitText from "@/app/components/ui/SplitText";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-40 w-full">
      
      {/* Heading */}
      <div className="max-w-[760px] text-left mb-16">
        <SplitText
          text={
            <>
              <span className="block">Crafted Projects</span>
              <span className="block">
                & <span className="text-[#A855F7]">Achievements</span>
              </span>
            </>
          }
          className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.15] text-slate-900 dark:text-white tracking-tight"
          textAlign="left"
        />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
