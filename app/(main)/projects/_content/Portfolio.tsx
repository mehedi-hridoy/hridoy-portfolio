import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="w-full pt-6">
      {/* Banner Image */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10">
        <Image
          src="/images/portfolio.png"
          alt="Personal Portfolio Project"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
        Personal Portfolio
      </h1>
      <p className="text-xl text-slate-700 dark:text-gray-300 mb-8">
        A modern, responsive portfolio built with Next.js 15 and cutting-edge web technologies.
      </p>

      {/* Links at Top */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link
          href="https://mehedihridoy.online"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#A855F7] hover:bg-[#8B2DFF] text-white rounded-xl font-semibold transition"
        >
          Live Demo
        </Link>
        <Link
          href="https://github.com/mehedi-hridoy/hridoy-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Project Repository
        </Link>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg">
          This portfolio represents a carefully crafted digital presence showcasing my journey as a full-stack developer. 
          Built with a focus on user experience, performance, and modern design principles, it serves as both a showcase 
          of my work and a testament to my technical capabilities.
        </p>
      </div>

      {/* Design Philosophy */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Design Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Premium Aesthetic</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Clean, sophisticated design inspired by industry leaders like Vercel and Linear. Every element is 
              purposefully placed to create a professional, memorable experience.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Responsive First</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Meticulously crafted for all devices - from mobile to desktop. Adaptive layouts ensure optimal 
              viewing and interaction regardless of screen size.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Dark Mode Native</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Default dark theme with seamless light mode support. Carefully chosen color palettes ensure 
              readability and visual appeal in both modes.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Performance Optimized</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Built on Next.js App Router with server-side rendering, static generation, and optimized assets 
              for lightning-fast load times.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h2>
        <div className="grid gap-4">
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Dynamic Navigation System</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Proper Next.js routing with route groups, individual pages for each section, and a scrollable homepage 
              showcasing all content at once.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Interactive Project Showcase</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Dynamic project pages with detailed case studies, tech stacks, and live demos. Each project tells 
              a story of problem-solving and technical execution.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Smooth Animations</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Framer Motion powered animations, custom splash cursor effects, and split text animations create 
              an engaging, delightful user experience.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">CV Download</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Direct PDF download functionality allowing visitors to easily access and review my complete 
              professional credentials offline.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Technology Carousel</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Animated logo loop showcasing the diverse tech stack I work with, from frontend frameworks to 
              backend technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Tech Stack</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Framework & Core</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js 15", "React 19", "TypeScript", "App Router", "Server Components"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-[#A855F7]/10 text-[#A855F7] font-medium text-sm border border-[#A855F7]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Styling & UI</h3>
          <div className="flex flex-wrap gap-2">
            {["Tailwind CSS", "shadcn/ui", "Framer Motion", "next-themes", "React Icons"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-[#A855F7]/10 text-[#A855F7] font-medium text-sm border border-[#A855F7]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Fonts & Assets</h3>
          <div className="flex flex-wrap gap-2">
            {["Google Fonts (Poppins)", "Next Image Optimization", "SVG Icons"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-[#A855F7]/10 text-[#A855F7] font-medium text-sm border border-[#A855F7]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Development Tools</h3>
          <div className="flex flex-wrap gap-2">
            {["ESLint", "PostCSS", "Git", "GitHub"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-[#A855F7]/10 text-[#A855F7] font-medium text-sm border border-[#A855F7]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Architecture Highlights</h2>
        <div className="grid gap-6">
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Route Group Structure</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Organized with a <code className="px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-sm">(main)</code> route 
              group for shared layouts, enabling individual routes while maintaining a unified homepage experience.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Component Architecture</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Modular component system with clear separation of concerns. Each section (Hero, Projects, Tools, etc.) 
              is self-contained and reusable.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Static Generation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Project pages use <code className="px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-sm">generateStaticParams</code> for 
              optimal performance. Content is pre-rendered at build time for instant page loads.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Theme System</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Custom theme provider with dark mode as default. System-wide color tokens ensure consistency across 
              all components in both light and dark modes.
            </p>
          </div>
        </div>
      </div>

      {/* Development Journey */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Development Journey</h2>
        <div className="space-y-4 text-slate-700 dark:text-gray-300 text-lg">
          <p>
            This portfolio evolved from a simple showcase into a sophisticated web application. Key milestones included:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-[#A855F7] font-bold mt-1">→</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Navigation Redesign:</strong> Transitioned from hash 
                anchors to proper Next.js routing while maintaining the single-page scrolling experience on the homepage.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A855F7] font-bold mt-1">→</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Responsive Refinement:</strong> Implemented mobile-first 
                design with careful attention to tablet breakpoints, ensuring perfect layouts across all device sizes.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A855F7] font-bold mt-1">→</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Theme Implementation:</strong> Added comprehensive 
                light/dark mode support with carefully chosen color palettes for optimal readability and visual appeal.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A855F7] font-bold mt-1">→</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Performance Optimization:</strong> Leveraged Next.js 15 
                features like Server Components, Image Optimization, and Static Generation for exceptional performance.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Performance</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Fast Initial Load</strong> - Server-side rendering with optimized assets</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Instant Navigation</strong> - Client-side routing with prefetching</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Image Optimization</strong> - Next.js automatic image optimization</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Responsive Design</strong> - Optimized for mobile, tablet, desktop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
