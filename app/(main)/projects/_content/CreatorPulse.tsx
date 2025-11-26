import Image from "next/image";
import Link from "next/link";

export default function CreatorPulse() {
  return (
    <section className="w-full pt-6">
      {/* Banner Image */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10">
        <Image
          src="/images/creatorpulse_cover.png"
          alt="CreatorPulse Project"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
        CreatorPulse — AI-Powered Analytics for Content Creators
      </h1>
      <p className="text-xl text-slate-700 dark:text-gray-300 mb-8">
        Transform scattered social media metrics into actionable insights with AI-driven recommendations.
      </p>

      {/* Links at Top */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link
          href="https://creator-pulse.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#A855F7] hover:bg-[#8B2DFF] text-white rounded-xl font-semibold transition"
        >
          Live Demo
        </Link>
        <Link
          href="https://github.com/mehedi-hridoy/creator-pulse"
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
          A modern, full-stack SaaS platform that helps content creators and marketing teams make data-driven decisions across multiple social platforms.
        </p>
      </div>

      {/* What It Does */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">What It Does</h2>
        <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
          CreatorPulse analyzes your content performance across YouTube, Instagram, TikTok, and Facebook to provide:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Smart Analytics</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">Unified dashboard showing performance across all platforms</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Optimal Posting Times</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">AI determines the best days and hours to post for maximum engagement</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Platform Recommendations</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">Data-driven advice on where to invest your time and resources</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Content Ideas</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">AI-generated suggestions based on your top-performing content</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI Chat Assistant</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">Ask questions about your analytics and get instant insights</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Growth Alerts</h3>
            <p className="text-slate-700 dark:text-gray-400 text-sm">Early warnings about declining trends or stagnation</p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">For Creators</h3>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li>• Upload analytics from multiple platforms in JSON format</li>
              <li>• Get personalized recommendations based on YOUR data</li>
              <li>• Understand what content resonates with your audience</li>
              <li>• Discover the best times to post for maximum reach</li>
              <li>• Chat with AI to explore your analytics deeper</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">For Businesses</h3>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li>• <strong>No Python Required</strong> - 100% Node.js, deploys anywhere (including cPanel)</li>
              <li>• <strong>Fast & Scalable</strong> - Pure JavaScript analytics engine</li>
              <li>• <strong>Secure</strong> - JWT authentication, Google OAuth, encrypted passwords</li>
              <li>• <strong>Modern Stack</strong> - React 19, Node.js, MongoDB, OpenAI</li>
              <li>• <strong>Production Ready</strong> - Built-in caching, error handling, optimized builds</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Tech Stack</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {["React 19", "Vite", "Tailwind CSS", "Framer Motion", "React Query", "Recharts"].map((tech) => (
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
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express", "MongoDB", "OpenAI GPT-4", "JWT", "Google OAuth"].map((tech) => (
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
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Analytics Engine</h3>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li><strong>100% JavaScript</strong> - No external dependencies</li>
              <li><strong>Statistical Analysis</strong> - Trend detection, volatility analysis</li>
              <li><strong>Pattern Recognition</strong> - Content theme clustering</li>
              <li><strong>Performance Optimized</strong> - Direct function calls, no subprocess overhead</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analytics Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Analytics Features</h2>
        <div className="grid gap-6">
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Posting Schedule Analysis</h3>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li>Identifies best days and times to post</li>
              <li>Platform-specific recommendations</li>
              <li>Based on engagement rate and views</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Platform Focus</h3>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li>Growth rate calculations</li>
              <li>Engagement rate comparison</li>
              <li>Investment recommendations</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Growth Alerts</h3>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li>Declining trend detection</li>
              <li>High volatility warnings</li>
              <li>Stagnation identification</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Content Themes</h3>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300">
              <li>Clusters content by performance</li>
              <li>Identifies top-performing patterns</li>
              <li>Provides example titles from each cluster</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Performance</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Fast Loading</strong> - Optimized React builds with code splitting</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Efficient Caching</strong> - 6-hour cache for analytics (configurable)</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Quick Analytics</strong> - Direct JavaScript execution (~50-100ms)</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-slate-700 dark:text-gray-300"><strong className="text-slate-900 dark:text-white">Responsive Design</strong> - Works on mobile, tablet, desktop</p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Security Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "JWT token authentication",
            "Bcrypt password hashing",
            "Google OAuth 2.0 integration",
            "CORS protection",
            "Environment variable protection",
            "MongoDB injection prevention",
            "Rate limiting ready"
          ].map((feature) => (
            <div key={feature} className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <p className="text-slate-700 dark:text-gray-300 text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
