"use client";

import { Code, CodeBlock, CodeHeader } from "@/components/animate-ui/components/animate/code";
import SplitText from "@/app/components/ui/SplitText";

export default function About() {
  const mehediConfig = `
// hridoy.config.js

const Hridoy = {
  mode: "dark",                // cause light attracts bugs
  status: !true,               // still single, still compiling
  traits: ["curious", "calm", "debuggerByNature"],

  lifeLoop() {
    while (this.alive ?? true) {
      this.eat();
      this.sleep();
      life.throwError()
        ? this.debug()
        : this.keepCoding();
    }
  },

  hobbies: [
    "Crime-thriller ",
    "Badminton battles disguised as 'friendly games'",
    "Professional procrastination (level: max)",
  ],

  bio: \`
    Writes code. Breaks code. fixes code. Pretends it was intentional.
    Dark-mode native. Powered by  compiler warnings.
    Runs on sleepy eyes, curiosity, and the hope that
    today's bug is tomorrow's feature.
  \`,

  philosophy() {
    if (life.throwError()) {
      return "It's not a bug — it's a surprise mechanic.";
    }
    if (everything.onFire()) {
      return "Good code doesn't burn — it compiles with warnings.";
    }
    return "Confidence += 100500;";
  },

  quote:
    "There are only 10 types of people in the world: those who sleep and those who ship at 4 AM."
};

export default Hridoy;
  `;

  return (
    <section className="w-full pt-24">
      <div className="mb-6">
        <SplitText
          text="About Me"
          className="text-[32px] sm:text-[36px] md:text-[42px] font-bold text-slate-900 dark:text-white"
          textAlign="left"
          tag="h2"
        />
      </div>

      <p className="text-slate-700 dark:text-gray-400 max-w-2xl mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg">
       Single source of truth: light mode is a lie. Me, without the config file.
      </p>

      <Code
        code={mehediConfig}
        className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 backdrop-blur-md overflow-x-auto [&_code]:text-[14px] [&_code]:sm:text-[15px] [&_code]:md:text-[16px] [&_code]:leading-relaxed [&_pre]:whitespace-pre-wrap! [&_pre]:wrap-break-word [&_code]:text-slate-900 [&_code]:dark:text-white"
      >
        <CodeHeader copyButton>hridoy.config.js</CodeHeader>
        <CodeBlock lang="js" writing duration={6000} />
      </Code>
    </section>
  );
}
