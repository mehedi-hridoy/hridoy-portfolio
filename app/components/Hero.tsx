"use client";

import SplitText from "@/app/components/ui/SplitText";
import TextType from "@/app/components/ui/TextType";
import LogoLoop from "@/app/components/ui/LogoLoop";
import { useEffect, useRef, useState } from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  // Refs to measure first line width and apply to second line for equal width effect.
  const firstLineRef = useRef<HTMLSpanElement | null>(null);
  const secondLineRef = useRef<HTMLSpanElement | null>(null);
  const [firstLineWidth, setFirstLineWidth] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (firstLineRef.current) {
        const w = firstLineRef.current.getBoundingClientRect().width;
        setFirstLineWidth(w);
      }
    };
    // Wait for fonts to load to avoid incorrect measurement.
    if (document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(measure);
    } else {
      measure();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  return (
    <section className="w-full pt-20">
      {/* CONTAINER — widened & consistently left-aligned with page padding */}
      <div className="mx-auto max-w-6xl px-4 lg:px-8">

        {/* Heading */}
        <div className="space-y-4">
          <SplitText
            text={
              <>
                <span ref={firstLineRef} className="block">
                  Transforming Your
                </span>
                <span
                  ref={secondLineRef}
                  className="block"
                  style={firstLineWidth ? { width: firstLineWidth } : undefined}
                >
                  Ideas into <span className="text-[#A855F7]">Reality</span>
                </span>
              </>
            }
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-slate-900 dark:text-white tracking-tight"
            textAlign="left"
          />

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed max-w-[680px]">
            Passionate about building intuitive, high-performance experiences
            that turn ideas into beautifully engineered products.
          </p>
        </div>

        {/* Typing Animation — replaces stats section from design */}
        {/* Reserve a fixed block height so buttons don't jump when text wraps */}
        <div className="mt-10 h-24 md:h-28">
          <TextType
            text={[
              "Hey, welcome — glad you're here!",
              "I'm Mehedi, and I build things on the internet.",
              "I love solving problems with clean, thoughtful code.",
              "I'm constantly learning new tech and pushing myself to improve.",
              "And when an idea inspires me… I turn it into something real.",
            ]}
            typingSpeed={55}
            pauseDuration={1800}
            deletingSpeed={35}
            showCursor
            hideCursorWhileTyping={false}
            cursorCharacter="|"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-gray-200"
          />
        </div>

      

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
          <a
            href="/Mehedi_Hasan_Hridoy_CV.pdf"
            download
            className="px-6 sm:px-8 py-3 rounded-xl bg-[#9F3DFF] hover:bg-[#8B2DFF] transition text-white font-semibold shadow-md text-center w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Download CV
          </a>

          <Link
            href="#projects"
            className="flex items-center justify-center gap-2 text-slate-900 dark:text-white hover:underline font-medium"
          >
            My Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Logo Loop */}
       <div className="mt-28">
  <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">Things I Know</p>

  <LogoLoop
    logos={[
      { src: "/logos/javascript.svg", alt: "JavaScript" },
      { src: "/logos/typescript.svg", alt: "TypeScript" },
      { src: "/logos/react.svg", alt: "React" },
      { src: "/logos/nextjs.svg", alt: "Next.js" },
      { src: "/logos/nodejs.svg", alt: "Node.js" },
      { src: "/logos/express.svg", alt: "Express.js" },
      { src: "/logos/mongodb.svg", alt: "MongoDB" },
      { src: "/logos/mysql.svg", alt: "MySQL" },
      { src: "/logos/tailwind.svg", alt: "Tailwind CSS" },
      { src: "/logos/git.svg", alt: "Git" },
      { src: "/logos/docker.svg", alt: "Docker" },
    ]}
    speed={25}
    direction="left"
    className="logo-loop"
  />
</div>



      </div>
    </section>
  );
}
