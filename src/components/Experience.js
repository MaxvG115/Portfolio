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
          <div key={index} className="flex flex-col text-center mb-8">
            <div className="mb-4">
                <img className="h-26 w-36 mx-auto my-2" alt={exp.subtitle} src={exp.image}>
                </img>
              <h1 className="text-4xl text-green-400">{exp.title}</h1>
              <p className="text-md text-blue-200 mt-2">
                {`Start: ${exp.startDate} | End: ${exp.endDate}`}
              </p>
            </div>
            {/* Wrap the description text in a div with margin classes */}
            <div className="lg:w-3/4 mx-auto lg:pl-4 lg:pr-4 sm:pl-2 sm:pr-2">
              <p className="text-xl text-white">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}