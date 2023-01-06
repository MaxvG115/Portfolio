import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-white bg-teal-900 body-font">
      <About />
      <Projects />
    </main>
  );
}
