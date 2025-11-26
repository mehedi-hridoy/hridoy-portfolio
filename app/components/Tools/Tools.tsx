"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "@/app/components/ui/SplitText";

type ToolItem = {
  id: string;
  label: string;
};

const LOGO_IDS = new Set([
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "tailwind",
  "nodejs",
  "express",
  "mongodb",
  "mysql",
  "docker",
  "git",
  "python",
  "netlify",
  "vercel",
  "githubactions",
  "github",
  "gitlab",
  "shadcn",
  "vscode",
  "antigravity",
  "cursor",
  "cpp",
]);

const categories: { title: string; items: ToolItem[] }[] = [
  {
    title: "Programming Languages",
    items: [
      { id: "javascript", label: "JavaScript" },
      { id: "typescript", label: "TypeScript" },
      { id: "python", label: "Python" },
      { id: "cplusplus", label: "C++" },
    ],
  },
  {
    title: "Frontend Ecosystem",
    items: [
      { id: "react", label: "React" },
      { id: "nextjs", label: "Next.js" },
      { id: "tailwind", label: "Tailwind CSS" },
      { id: "shadcn", label: "shadcn" },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { id: "nodejs", label: "Node.js" },
      { id: "express", label: "Express" },
      { id: "mongodb", label: "MongoDB" },
      { id: "mysql", label: "MySQL" },
    ],
  },
  {
    title: "Developer Tools / IDEs",
    items: [
      { id: "vscode", label: "VS Code" },
      { id: "cursor", label: "Cursor" },
      { id: "antigravity", label: "Antigravity" },
    ],
  },
  {
    title: "Version Control & Collaboration",
    items: [
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub" },
      { id: "gitlab", label: "GitLab" },
    ],
  },
  {
    title: "DevOps & Deployment",
    items: [
     
      { id: "githubactions", label: "GitHub Actions" },
      { id: "docker", label: "Docker" },
      { id: "vercel", label: "Vercel" },
      { id: "netlify", label: "Netlify" },
    ],
  },
];

const softSkillBlocks = [
  {
    title: "Soft Skills",
    items: ["Leadership", "Team Collaboration", "Communication"],
  },
  {
    title: "Critical Problem-Solving",
    items: ["Debugging", "Systems Thinking", "Project Ownership"],
  },
];

export default function Tools() {
  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-28">
      {/* Main Heading */}
      <div className="mb-3 sm:mb-4">
        <SplitText
          text="My Developer Toolbox"
          className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[42px] font-bold tracking-tight text-slate-900 dark:text-white"
          textAlign="left"
          tag="h2"
        />
      </div>

      <p className="text-slate-600 dark:text-gray-400 max-w-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 leading-relaxed text-xs sm:text-sm md:text-base">
        Tools, technologies, and platforms I rely on to design, build, deploy,
        and refine meaningful digital experiences.
      </p>

      {/* Tech Categories */}
      <div className="space-y-6 sm:space-y-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-xl sm:rounded-2xl bg-zinc-100/70 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-4 sm:p-6 md:p-8"
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-4 sm:mb-5">
              {cat.title}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {cat.items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm/50 dark:shadow-none"
                >
                  {/* Logo or fallback badge */}
                  {LOGO_IDS.has(item.id) ? (
                    <Image
                      src={`/logos/${item.id}.svg`}
                      alt={item.label}
                      width={22}
                      height={22}
                      className="dark:invert dark:brightness-200 sm:w-[26px] sm:h-[26px]"
                    />
                  ) : (
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-zinc-900 text-[10px] sm:text-xs font-semibold text-white dark:bg-white dark:text-zinc-900">
                      {item.label
                        .replace(/[^A-Za-z0-9 ]/g, "")
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </div>
                  )}

                  <span className="text-xs sm:text-sm md:text-[15px] font-medium text-slate-900 dark:text-white">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Beyond Code */}
      <section className="mt-12 sm:mt-16 md:mt-20">
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-tight text-slate-900 dark:text-white mb-2 sm:mb-3">
          Beyond Code
        </h3>
        <p className="text-slate-600 dark:text-gray-400 max-w-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed text-xs sm:text-sm md:text-base">
          Writing code is only part of the work. I care just as much about how
          teams communicate, make decisions, and move projects from idea to
          impact.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {softSkillBlocks.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-xl sm:rounded-2xl bg-zinc-100/80 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-5 sm:p-6 md:p-7"
            >
              <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                {block.title}
              </p>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-gray-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
