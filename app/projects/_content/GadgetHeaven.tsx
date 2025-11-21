"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GadgetHeaven() {
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
          src="/images/gadgetHeaven.png"
          alt="Gadget Heaven Project Image"
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
          React + Vite Gadget Discovery Platform
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl text-[17px]">
          Gadget Heaven is a polished and interactive gadget discovery platform
          built with React and Vite. It features dynamic product views,
          filtering, sorting, localStorage-powered cart/wishlist, statistics
          dashboards, and a smooth UI designed with Tailwind CSS and modern
          React Router patterns.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <Link
          href="https://cheery-daifuku-6518ad.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 
                     rounded-xl text-white font-semibold text-sm transition"
        >
          Live Demo
        </Link>

        <Link
          href="https://github.com/mehedi-hridoy/Gadget-Heaven"
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
            Gadget Heaven focuses on interactive user experience, allowing users
            to browse gadgets, filter items, check dynamic details, and manage a
            wishlist & cart powered by persistent localStorage. The UI is built
            with reusable components, well-structured routing, and optimized
            loading strategies.
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
            <li>• Interactive product grid with filters & sorting</li>
            <li>• Dynamic product details with React Router v7</li>
            <li>• Cart & Wishlist powered by localStorage</li>
            <li>• Statistics dashboard with computed insights</li>
            <li>• Clean UI with Tailwind CSS + custom design tokens</li>
            <li>• Seamless navigation with nested routes & loaders</li>
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
            <p>React Router v7 (nested routes, loaders, params)</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">State</p>
            <p>LocalStorage, useState, useEffect, useMemo</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">UI Components</p>
            <p>Hero Banner, Product Grid, Statistics Dashboard</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Styling</p>
            <p>Tailwind CSS, Custom Design Tokens</p>
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
