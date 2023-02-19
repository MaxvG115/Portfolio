import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-dark bg-yellow-50 body-font">
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
