"use client";

import { motion } from "framer-motion";
import SplitText from "@/app/components/ui/SplitText";

export default function Academics() {
  return (
    <section id="academics" className="w-full">
      {/* Section Heading */}
      <div className="mb-6">
        <SplitText
          text="Academics"
          className="text-[32px] sm:text-[36px] md:text-[42px] font-bold tracking-tight text-slate-900 dark:text-white"
          textAlign="left"
          tag="h2"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-slate-700 dark:text-gray-400 max-w-2xl leading-relaxed mb-14"
      >
        A snapshot of my academic journey, ongoing thesis, and research work.
      </motion.p>

      <div className="space-y-10">

        {/* University */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Daffodil International University
          </h3>
          <p className="text-slate-700 dark:text-gray-400 mt-1">B.Sc. in Computer Science & Engineering</p>
          <p className="text-sm text-slate-600 dark:text-gray-500 mt-2">Jan 2022 — Dec 2025</p>
        </motion.div>

        {/* College */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Govt. Tolaram College
          </h3>
          <p className="text-slate-700 dark:text-gray-400 mt-1">HSC — Science</p>
          <p className="text-sm text-slate-600 dark:text-gray-500 mt-2">2020</p>
        </motion.div>

        {/* Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Undergraduate Thesis (Ongoing)
          </h3>
          <p className="text-slate-700 dark:text-gray-400 mt-2">
            NLP-Based Multilingual Fake News Detection — developing a deep
            learning system capable of identifying misinformation across
            multiple languages.
          </p>
        </motion.div>

        {/* Research */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Research Project (Ongoing)
          </h3>
          <p className="text-slate-700 dark:text-gray-400 mt-2">
            Deep Learning for Early Detection of Critical Agricultural Pests —
            a computer-vision solution for identifying harmful pests in major
            Bangladeshi vegetable crops using advanced deep learning models.
          </p>
        </motion.div>

      </div>

      {/* Footer spacing */}
      <div className="py-16" />
    </section>
  );
}
