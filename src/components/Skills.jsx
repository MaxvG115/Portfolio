import { CheckBadgeIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-14">
          <BookOpenIcon className="inline-block w-10 mb-4" />
          <h1 style={{fontFamily: 'Bebas Neue'}} className="sm:text-4xl text-3xl font-medium title-font text-dark mb-4">
            Skills &amp; Technologies
          </h1>
          <div style={{fontFamily: "Montserrat"}}>
            <p className="text-xl font-semibold leading-relaxed mx-auto">
                Here are the skills and technologies I'm most comfortable with at the moment.   
            </p> 
            <p className="italic">
                For a broad view of my proficiencies check out my github profile.
            </p>
          </div>
        </div>
        <div style={{fontFamily: "Montserrat"}} className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}