export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-between max-w-6xl mx-auto px-6">
      {/* Left card */}
      <div className="w-[45%] rounded-3xl shadow-lg bg-white/90 dark:bg-black/40 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold mb-2">Mehedi Hasan Hridoy</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Software Engineer • Web Systems • Clean Architecture
        </p>
      </div>

      {/* Right side text */}
      <div className="w-[50%]">
        <h1 className="text-5xl font-bold leading-tight">
          Building fast, scalable and thoughtful digital products.
        </h1>

        <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
          I design and engineer modern applications with a focus on clarity,
          performance and long-term maintainability.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-teal-700 text-white hover:bg-teal-600">
            See My Work
          </button>

          <button className="px-6 py-3 rounded-xl border hover:bg-black/10 dark:hover:bg-white/10">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
