import React from "react";
import { BriefcaseIcon } from "@heroicons/react/20/solid";
import { experience } from "../data";
import { projects } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-cyan-900 body-font">
      <div className="container py-10 mx-auto text-center lg:px-600">
        <div className="flex flex-col w-full mb-4">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Work Experience
          </h1>
          <p className="lg:w-3/4 mx-auto leading-relaxed text-xl">
            These places made me grow not only as a professional, but as a person too.
          </p>
        </div>
        {experience.map((project) => (
          <div className="flex text-justify">
          <div className="column">
            <h1 className="text-4xl text-green-400">
              Software Engineer
            </h1>
            <h1 className="text-md text-blue-200 mt-2">
              Start : Aug 2023
              End : Dec 2023
            </h1>
          </div>
          <p className="text-xl text-white pt-2 px-10">Led the development of a sophisticated command line application using LLMs (Language Model Models). Managed a diverse project, showcasing adaptability and problem-solving skills. Employed Python and various libraries to architect the entire package, ensuring robust and efficient code. Collaborated in an Agile environment using SCRUM methodologies, actively contributing to sprint planning, daily stand-ups, and sprint reviews. Ensured code quality through rigorous testing and participated in code reviews, fostering a collaborative and knowledge-sharing environment. Proactively engaged in ongoing learning and skill development to stay current with the latest technologies. Additionally, refactored an existing codebase to enhance efficiency, maintainability, and overall code quality.
          </p>
          <img className="h-12 w-22 mt-8" alt="Softtek" src="https://blog.softtek.com/hubfs/Softtek/images/assets/Logos-Website-2020-02.png"> 
          </img>
        </div>
        ))}
      </div>
    </section>
  );
}