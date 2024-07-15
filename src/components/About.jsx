import React from "react";

export default function About() {
  return (
    <section id="about">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"/>
      <div className="container mx-auto flex py-8">
        <div className="flex flex-grow flex-col items-center text-center">
          <h1 style={ {fontFamily: 'Bebas Neue'} } className="text-9xl mb-4 text-slate text-gray-900">
            Maximiliano
          </h1>
          <div className="max-w-lg pb-8">
            <img className="rounded-full"
            alt="hero"
            src="./grad.png"
            />
          </div>
          <h2 style={ {fontFamily: 'Bebas Neue'} } className="title-font text-9xl mb-4 text-slate text-gray-900">
            Software Engineer
          </h2>
          <div>
            <a
              href="https://github.com/MaxvG115"
              className="inline-flex w-20 h-20 py-2 mx-4 hover:scale-110 transition duration-300 ease-in-out">
              <img alt="github" src="./github-mark.svg"></img>
            </a>
            <a
              href="https://linkedin.com/in/maximiliano-villegas-garcia/"
              className="inline-flex w-20 h-20 py-2 mx-4 hover:scale-110 transition duration-300 ease-in-out">
              <img alt="linkedin" src="./In-Blue-34@2x.png"></img>
            </a>
            <a
              href="https://medium.com/@Max115"
              className="inline-flex w-20 h-20 py-2 mx-4 hover:scale-110 transition duration-300 ease-in-out">
              <img alt="medium" src="./medium.png"></img>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}