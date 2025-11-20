"use client";

import { Code, CodeBlock, CodeHeader } from "@/components/animate-ui/components/animate/code";

export default function About() {
  const mehediConfig = `
// mehedi.config.js

const Mehedi = {
  mode: "dark",                // light attracts bugs
  status: Boolean("grind"),    // still single, still focused
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
    "Crime-thriller marathons",
    "Badminton battles disguised as 'friendly games'",
    "Procrastination — mastered at a professional level",
  ],

  bio: \`
    Writes code. Breaks code. Fixes code. Pretends it was intentional.
    Dark-mode native. Powered by caffeine and compiler warnings.
    Forever torn between clean architecture and ship-it-now energy.
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
    "There are 10 types of people: those who debug at 4AM and those who lie about it."
};

export default Mehedi;
  `;

  return (
    <section className="w-full pt-24">
      <h2 className="text-[42px] font-extrabold mb-6 text-white">About Me</h2>

      <p className="text-gray-400 max-w-2xl mb-12 leading-relaxed text-lg">
        A developer expressed as a config file.
        Clean code, dark mode, and a little personality.
      </p>

      <Code
        code={mehediConfig}
        className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
      >
        <CodeHeader copyButton>mehedi.config.js</CodeHeader>
        <CodeBlock lang="js" writing duration={6000} />
      </Code>
    </section>
  );
}
