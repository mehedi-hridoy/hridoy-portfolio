"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EthniCart() {
  return (
    <section className="w-full pt-6">

      {/* Main Project Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl overflow-hidden border border-white/10 shadow-xl"
      >
        <Image
          src="/images/ethnicart.png"
          alt="EthniCart Screenshot"
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
          Laravel E-Commerce Platform
        </p>
        <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl text-[17px]">
          EthniCart is a modern, full-featured e-commerce platform built with Laravel that connects local producers
          with consumers. The platform emphasizes authenticity, quality, and direct-from-source products including
          organic foods, traditional crafts, beauty products, and more.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <Link
          href="https://ethnicart.mehedihridoy.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold text-sm transition"
        >
          Live Demo
        </Link>

        <Link
          href="https://github.com/mehedi-hridoy/EthniCart"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/10 border border-white/10 hover:bg-white/20 rounded-xl text-white font-semibold text-sm transition"
        >
          Project Repository
        </Link>
      </div>

      {/* Sections */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">
        
        {/* Goals / Overview */}
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
            Designed to empower local Bangladeshi farmers and artisans, EthniCart
            provides a clean, secure, and seamless shopping experience.  
            A feature-rich admin panel enables product, order, and inventory
            management while ensuring scalability and maintainability.
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
            <li>• User & Admin Dashboard</li>
            <li>• Product & Category Management</li>
            <li>• Secure Checkout with SSLCommerz</li>
            <li>• Google OAuth Authentication</li>
            <li>• Responsive UI with Tailwind + Alpine.js</li>
            <li>• High-performance Laravel backend</li>
          </ul>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16 rounded-2xl p-8 bg-white/5 border border-white/10">
        <h3 className="text-2xl font-semibold text-white mb-6">Technology Stack</h3>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-[15px]">
          <div>
            <p className="font-semibold text-white mb-2">Backend</p>
            <p>Laravel 10.x (PHP 8.1+)</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Frontend</p>
            <p>Blade Templates, Tailwind CSS, Alpine.js</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Database</p>
            <p>MySQL 8.0+ / MariaDB</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Auth</p>
            <p>Laravel Sanctum + Google OAuth (Socialite)</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Payment</p>
            <p>SSLCommerz</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Build Tools</p>
            <p>Vite, Intervention Image</p>
          </div>
        </div>
      </div>

      {/* Footer Space */}
      <div className="pb-20" />
    </section>
  );
}
