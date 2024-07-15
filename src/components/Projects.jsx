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
          <p style={{fontFamily: 'Montserrat'}} className="font-semibold mx-auto leading-relaxed text-2xl">
            Developing these and other projects has taught me a lot. I'm proud of what I've achieved and grateful for the chance to meet tons of wonderful people along my journey.
          </p>
        </div>
        <div style={{fontFamily: 'Montserrat'}} className="font-normal text-lg flex flex-wrap -m-4">
          {projects.map((project) => (
            <button
              key={project.image}
              className="w-1/2 p-7">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}