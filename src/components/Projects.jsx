import React from "react";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-14">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 style={{fontFamily: 'Bebas Neue'}} className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Some of my more recent projects
          </h1>
          <p style={{fontFamily: 'Montserrat'}} className="lg:w-3/4 mx-auto leading-relaxed text-xl">
            Developing these and other projects has taught me a lot. I'm proud of what I've achieved and grateful for the chance to meet tons of wonderful people along my journey.
          </p>
        </div>
        <div style={{fontFamily: 'Montserrat'}} className="flex flex-wrap">
        {projects.map((project) => (
          <div className="flex relative mx-auto">
            <img
              alt="gallery"
              className="w-full h-96 object-cover object-center"
              src={project.image}
            />
            <div className=" absolute inset-0 px-8 py-10 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h1 className="text-2xl font-extrabold text-green-400 mb-2">
                {project.title}
              </h1>
              <h2 className="title-font text-lg font-medium text-white mb-3">
                {project.subtitle}
              </h2>
              <p className="leading-relaxed">
                {project.description}
              </p>
              <a
              href="https://mood-wine-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 border-2 border-green-400 text-green-400 font-medium text-xs leading-tight uppercase rounded hover:bg-green-400 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Visit Project
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}