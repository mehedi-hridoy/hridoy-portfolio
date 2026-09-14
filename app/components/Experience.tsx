"use client";

import { motion } from "framer-motion";
import SplitText from "@/app/components/ui/SplitText";

const experienceItems = [
  {
    role: "Jr. Executive (Software Development)",
    company: "Anwar Technologies",
    period: "Aug 2026 – Present",
    type: "Full-time",
    points: [
      "Working as a Backend Software Developer, building backend logic and contributing to internal systems used across the company.",
      "Collaborating closely with product and frontend teams across the full feature lifecycle, from requirement gathering through implementation, to ship reliable features.",
      "Translating business and stakeholder requirements into functional technical specifications, working closely with the wider engineering team.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "Oct 2025 – July 2026",
    type: "Contract",
    points: [
      "Developed and deployed REST APIs handling authentication, business logic, and structured data workflows, writing clean, well-documented code following modular architecture practices.",
      "Optimized relational database performance, achieving 70% faster load times and 80% fewer redundant queries through indexed PostgreSQL schemas, optimized SQL joins, and server-side caching.",
      "Implemented JWT-based authentication with role-based access control, following security best practices across the full development lifecycle.",
      "Collaborated directly with clients in English and Bengali to gather requirements, propose technical alternatives, and deliver solutions aligned with business needs.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full pt-16 sm:pt-20 md:pt-24">
      <div className="mb-4 sm:mb-6">
        <SplitText
          text="Experience"
          className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[42px] font-bold tracking-tight text-slate-900 dark:text-white"
          textAlign="left"
          tag="h2"
        />
      </div>

      <div className="mb-8 sm:mb-10 flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="rounded-full border border-[#A855F7]/30 bg-[#A855F7]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED] dark:text-[#D8B4FE]">
          Technology
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
          Optimizing Bangladesh
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-3xl text-sm leading-relaxed text-slate-700 dark:text-gray-400 sm:text-base md:text-lg"
      >
        Anwar Technologies is a technology division of Anwar Group of Industries (AGI).
      </motion.p>

      <div className="space-y-6 sm:space-y-8">
        {experienceItems.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-slate-200 bg-slate-100/80 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-7 md:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7C3AED] dark:text-[#D8B4FE]">
                  {item.type}
                </p>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-base text-slate-700 dark:text-gray-300">
                  {item.company}
                </p>
              </div>

              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                {item.period}
              </span>
            </div>

            <ul className="mt-5 space-y-3 sm:mt-6">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-gray-300 sm:text-base">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#A855F7]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
