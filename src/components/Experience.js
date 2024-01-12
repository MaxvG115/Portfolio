import React from "react";
import { BriefcaseIcon } from "@heroicons/react/20/solid";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-cyan-900 body-font">
      <div className="container py-8 mx-auto text-center lg:px-4 md:px-8 sm:px-10">
        <div className="flex flex-col w-full mb-4">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Work Experience
          </h1>
          <p className="lg:w-3/4 mx-auto leading-relaxed text-xl">
            These places made me grow not only as a professional but as a person too.
          </p>
        </div>
        {experience.map((exp, index) => (
          <div key={index} className="flex flex-col text-justify mb-8">
            <div className="mb-4">
              <a href="https://www.softtek.com/">
                <img className="h-26 w-36 mb-2 object-cover" alt={exp.subtitle} src={exp.image}/>
              </a>
              <h1 className="text-4xl text-green-400">{exp.title}</h1>
              <p className="text-md text-blue-200 mt-2">
                {`Start: ${exp.startDate} | End: ${exp.endDate}`}
              </p>
            </div>
            <p className="text-xl text-white">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}