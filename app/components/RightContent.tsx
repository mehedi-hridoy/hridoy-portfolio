import Hero from "./Hero";
import Projects from "./Projects";
import Tools from "./Tools/Tools";
import About from "./About";
import Contact from "./Contact";
import Academics from "./Academics";


export default function RightContent() {
  return (
    <div className="space-y-32">
      {/* HOME SECTION */}
      <section id="home">
        <Hero />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* TOOLS */}
      <section id="tools">
        <Tools />
      </section>

        {/* TOOLS */}
      <section id="academics">
        <Academics />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
