"use client";

import { motion } from "framer-motion";

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

export default function BeyondCode() {
  return (
    <section className="w-full pt-28 relative">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-[42px] font-extrabold tracking-tight text-white">
          Beyond Code
        </h2>

        <p className="text-gray-400 max-w-2xl mt-3 leading-relaxed">
          Writing code is only part of the work. I care just as much about how
          teams communicate, make decisions, and move projects from idea to
          impact.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {softSkillBlocks.map((block, index) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.15 }}

            // Hover magic
            whileHover={{
              scale: 1.02,
              y: -6,
              boxShadow: "0 0 35px rgba(168, 85, 247, 0.35)",
            }}
            className="relative rounded-2xl p-8 transition-all duration-300 
                       bg-white/5 border border-white/10 backdrop-blur-xl
                       shadow-[0_0_20px_rgba(0,0,0,0.25)]"
          >
            {/* Gradient Glow Behind Card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                            from-[#A855F7]/10 to-transparent opacity-0 
                            group-hover:opacity-20 transition-all duration-300 pointer-events-none" />

            <h3 className="text-xl font-semibold text-white mb-5 tracking-tight">
              {block.title}
            </h3>

            <ul className="space-y-3">
              {block.items.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-3 text-gray-300 text-[15px]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#A855F7] shadow-[0_0_10px_#A855F7]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
