import React from "react";

export default function About() {
  return (
    <section id="about">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
      <div className="container mx-auto flex flex-col items-center py-8 text-center">
        <h1 style={{ fontFamily: 'Bebas Neue' }} className="text-5xl sm:text-7xl md:text-9xl mb-4 text-slate text-gray-900">
          Maximiliano
        </h1>
        <div className="max-w-xs sm:max-w-md md:max-w-lg pb-8">
          <img className="rounded-full w-full" alt="hero" src="./grad.png" />
        </div>
        <h2 style={{ fontFamily: 'Bebas Neue' }} className="title-font text-4xl sm:text-6xl md:text-9xl mb-4 text-slate text-gray-900">
          Software Engineer
        </h2>
        <div className="flex flex-wrap justify-center">
          <a
            href="https://github.com/MaxvG115"
            className="inline-flex w-16 h-16 sm:w-20 sm:h-20 p-2 mx-2 sm:mx-4 hover:scale-110 transition duration-300 ease-in-out">
            <img alt="github" src="./github-mark.svg" />
          </a>
          <a
            href="https://linkedin.com/in/maximiliano-villegas-garcia/"
            className="inline-flex w-16 h-16 sm:w-20 sm:h-20 p-2 mx-2 sm:mx-4 hover:scale-110 transition duration-300 ease-in-out">
            <img alt="linkedin" src="./In-Blue-34@2x.png" />
          </a>
          <a
            href="https://medium.com/@Max115"
            className="inline-flex w-16 h-16 sm:w-20 sm:h-20 p-2 mx-2 sm:mx-4 hover:scale-110 transition duration-300 ease-in-out">
            <img alt="medium" src="./medium.png" />
          </a>
        </div>
      </div>
    </section>
  );
}