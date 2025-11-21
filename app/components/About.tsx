"use client";

import { Code, CodeBlock, CodeHeader } from "@/components/animate-ui/components/animate/code";

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
      <h2 className="text-[42px] font-extrabold mb-6 text-white">About Me</h2>

      <p className="text-gray-400 max-w-2xl mb-12 leading-relaxed text-lg">
       Single source of truth: light mode is a lie. Me, without the config file.
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
