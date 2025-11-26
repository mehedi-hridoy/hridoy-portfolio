import Image from "next/image";
import Link from "next/link";

export default function FocusClock() {
  return (
    <section className="w-full pt-6">
      {/* Banner Image */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10">
        <Image
          src="/images/FocusClock.png"
          alt="Focus Clock Project"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
        Focus Clock
      </h1>
      <p className="text-xl text-slate-700 dark:text-gray-300 mb-8">
        Your all-in-one LED desk clock replacement app — with timer, stopwatch, alarms & reminders. Built for landscape mode and always-on displays.
      </p>

      {/* Links at Top */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link
          href="https://github.com/mehedi-hridoy/focus-clock"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Project Repository
        </Link>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
        <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg">
          Focus Clock is your LED desk clock replacement — a full-featured Android app designed to sit on your desk or nightstand. 
          No need for expensive LED clocks when you have an old phone or tablet. Built with Flutter for a smooth, native experience, 
          this app transforms any Android device into a powerful desk clock with timer, stopwatch, alarms, and reminders.
        </p>
      </div>

      {/* Why Focus Clock */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Why Focus Clock?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Replaces Physical LED Clocks</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Repurpose an old phone or tablet as a dedicated desk clock instead of buying expensive LED alternatives
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Always-On Display Support</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Optimized for always-on mode with battery-efficient rendering
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Large, Readable Digits</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Landscape-first design with large, crisp digits visible from across the room
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Multiple Watch Faces</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Choose from 5 distinct watch faces with customizable colors to match your style
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Integrated Tools</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Timer, stopwatch, alarms, and reminders — all in one place
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Built to Solve My Need</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">
              Created for personal use because I code to solve problems — now available for everyone
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h2>
        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">5 Watch Faces</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Choose from LED, segment, rounded, large-digit, and flip styles — each designed for maximum readability
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">36+ Preset Colors + RGB Custom Picker</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Extensive color options to match your aesthetic, from classic red LED to custom RGB combinations
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Flexible Timer</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Reversible countdown direction (60→0 or 0→60) for different use cases — from cooking to workouts
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Stopwatch with Lap Support</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Track multiple laps for workouts, study sessions, or any timed activity
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Alarms & Reminders</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Set multiple alarms and reminders with repeat options and custom ringtones — never miss an important moment
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Landscape-First Design</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Optimized for landscape orientation — perfect for desk or nightstand placement
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
            {["Flutter", "Dart", "Android SDK"].map((tech) => (
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
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">State Management</h3>
          <div className="flex flex-wrap gap-2">
            {["Provider Pattern", "ChangeNotifier"].map((tech) => (
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
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Services & Features</h3>
          <div className="flex flex-wrap gap-2">
            {["Local Notifications", "Alarm Service", "Always-On Display", "Persistent Settings"].map((tech) => (
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
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Architecture Overview</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Entry Point</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <code className="px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-sm">lib/main.dart</code> - Application initialization and routing setup
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Screens</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <code className="px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-sm">lib/presentation/screens/</code> - Clock, Timer, Stopwatch, Alarm, Reminder screens
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">State Management</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <code className="px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-sm">lib/state/</code> - Provider-based state management (timer_provider, settings_provider, etc.)
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Services</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <code className="px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-sm">lib/core/services/</code> - Alarm service, notification service, and background tasks
            </p>
          </div>
        </div>
      </div>

      {/* Developer Notes */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Developer Notes</h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Contract</h3>
            <div className="space-y-3 text-slate-700 dark:text-gray-300">
              <div>
                <strong className="text-slate-900 dark:text-white">Inputs:</strong> UI gestures (tap, double-tap, long-press, swipe), settings, scheduled alarm/reminder payloads
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Outputs:</strong> Full-screen rendering, local notifications, alarm audio/vibration, persisted settings
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Errors:</strong> Permission denial, OS battery optimizations, missing audio files — app fails gracefully with logging
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Design Patterns</h3>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li><strong>Provider Pattern</strong> - Clean state management with ChangeNotifier</li>
              <li><strong>Service Locator</strong> - Dependency injection for services</li>
              <li><strong>Repository Pattern</strong> - Data persistence and retrieval</li>
              <li><strong>Observer Pattern</strong> - Real-time UI updates based on state changes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Built to Solve a Problem</h2>
        <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
          This project embodies my philosophy: <strong className="text-slate-900 dark:text-white">I code to solve problems</strong>. 
          I needed a desk clock but didn't want to buy an expensive LED clock when I had an old Android tablet sitting unused. 
          So I built Focus Clock for my personal use.
        </p>
        <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg">
          What started as a weekend project became a fully-featured app with multiple watch faces, customization options, 
          and integrated productivity tools. It's a testament to how coding can transform everyday needs into elegant solutions.
        </p>
      </div>
    </section>
  );
}
