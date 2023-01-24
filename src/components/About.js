import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex py-8">
        <div className="flex flex-grow flex-col items-center text-center">
          <div className="w-44 pb-8">
            <img
            className="rounded-full"
            alt="hero"
            src="./port1.jpg"
            />
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate">
            Hi, I'm Max : )
          </h1>
          <h2 className="title-font sm:text-2xl mb-4 font-medium text-slate">
            Current Software Engineering student
          </h2>
          <div>
            <a
              href="https://github.com/MaxvG115"
              className="inline-flex w-10 py-2 mx-4 max-w-xs hover:scale-110 transition duration-300 ease-in-out">
              <img alt="github" src="./github-mark.svg"></img>
            </a>
            <a
              href="https://linkedin.com/in/maximiliano-villegas-garcía/"
              className="inline-flex w-10 py-2 mx-4 max-w-xs hover:scale-110 transition duration-300 ease-in-out">
              <img alt="linkedin" src="./In-Blue-34@2x.png"></img>
            </a>
            <a
              href="https://medium.com/@Max115"
              className="inline-flex w-10 py-2 mx-4 h-12 max-w-xs hover:scale-110 transition duration-300 ease-in-out">
              <img alt="medium" src="./Medium_Symbol_NoPadding.svg"></img>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}