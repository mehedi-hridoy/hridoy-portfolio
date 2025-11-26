"use client";

import SplitText from "@/app/components/ui/SplitText";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-24 sm:mt-32 md:mt-40 w-full">
      
      {/* Heading */}
      <div className="max-w-[760px] text-left mb-10 sm:mb-12 md:mb-16">
        <SplitText
          text={
            <>
              <span className="block">Crafted Projects</span>
              <span className="block">
                & <span className="text-[#A855F7]">Achievements</span>
              </span>
            </>
          }
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] text-slate-900 dark:text-white tracking-tight"
          textAlign="left"
        />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
