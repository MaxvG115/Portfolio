import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Designs from "./components/Designs";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function App() {
  const embedUrl1 = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FRJAHb8dLIh2kMdwQCZAjcl%2FFinal%3Fnode-id%3D0-1%26t%3DpPn6Dfqr5uqjzpp2-1';
  const embedUrl2 = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FhSfxqonx6VTssJrVhp6FhU%2FIJALTI-Mockup%3Fnode-id%3D6-482%26t%3DWhcKoxRX39cIcjML-1';


  return (
    <main className="text-dark bg-amber-50 body-font">
      <About />
      <Projects />
      <Designs embedUrl1={embedUrl1} embedUrl2={embedUrl2} />
      <Experience />
      <Skills />
    </main>
  );
}


