"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BookVibe() {
  return (
    <section className="w-full pt-6">
      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl overflow-hidden border border-white/10 shadow-xl"
      >
        <Image
          src="/images/bookvibe.png"
          alt="BookVibe Project Image"
          width={2000}
          height={1100}
          sizes="100vw"
          priority
          className="w-full object-cover"
        />
      </motion.div>

      {/* Intro */}
      <div className="mt-10">
        <p className="text-purple-300 text-base font-medium">
          React + Vite Bookshelf Application
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl text-[17px]">
          Book Vibe is a polished, mobile-first React app built with Vite that
          helps users browse books, explore detailed summaries, and maintain
          personalized reading lists. With a clean UI, subtle animations,
          intuitive navigation, and meaningful visualizations, it brings a smooth
          bookshelf experience to the browser.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <Link
          href="https://shimmering-cannoli-0089c9.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 
                     rounded-xl text-white font-semibold text-sm transition"
        >
          Live Demo
        </Link>

        <Link
          href="https://github.com/mehedi-hridoy/BookVibe"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/10 border border-white/10 
                     hover:bg-white/20 rounded-xl text-white font-semibold 
                     text-sm transition"
        >
          Project Repository
        </Link>
      </div>

      {/* Overview + Features */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">
        
        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white/5 p-8 border border-white/10"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Project Overview
          </h3>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            Book Vibe delivers an elegant reading-focused experience with modern
            React practices. Users can view curated books, dive into detailed
            descriptions, and organize personal lists such as “Read” and
            “Wishlist.” The lightweight architecture powered by Vite ensures a
            fast and responsive UI across devices.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-white/5 p-8 border border-white/10"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Key Features
          </h3>
          <ul className="space-y-3 text-gray-400 text-[15px]">
            <li>• Mobile-first, responsive UI</li>
            <li>• Book browsing with detailed summaries</li>
            <li>• Read list & Wishlist with state persistence</li>
            <li>• Clean routing powered by React Router v7</li>
            <li>• Analytics & insights using chart.js</li>
            <li>• Smooth UX with toast notifications</li>
          </ul>
        </motion.div>

      </div>

      {/* Tech Stack */}
      <div className="mt-16 rounded-2xl p-8 bg-white/5 border border-white/10">
        <h3 className="text-2xl font-semibold text-white mb-6">
          Technology Stack
        </h3>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-[15px]">

          <div>
            <p className="font-semibold text-white mb-2">Frontend</p>
            <p>React 18, Vite</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Routing</p>
            <p>React Router DOM v7</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">UI Styling</p>
            <p>Tailwind CSS, DaisyUI</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Notifications</p>
            <p>react-toastify</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Charts & Data</p>
            <p>chart.js, react-chartjs-2</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Hosting</p>
            <p>Netlify</p>
          </div>

        </div>
      </div>

      {/* Footer space */}
      <div className="pb-20" />
    </section>
  );
}
