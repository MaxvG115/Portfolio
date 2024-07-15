import React from "react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

const Designs = ({ embedUrl1, embedUrl2 }) => {
  return (
    
    <div className="container py-8 mx-auto text-center">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"/>
      <div>
        <PaintBrushIcon className="mx-auto w-10 mb-2" />
      </div>
      <h1 style={{fontFamily: 'Bebas Neue'}} className="text-4xl text-dark">
        Designs
      </h1>
      <p style={{fontFamily: 'Montserrat'}} className="font-semibold mx-auto mb-4 leading-relaxed text-2xl text-gray-900">
        Designs I've made for some of my projects
      </p>
      <div className="flex w-full h-[500px]">
        <iframe
          title="Figma Preview 1"
          className="w-1/2 mx-14 h-full"
          src={embedUrl1}
          allowFullScreen
        ></iframe>
        <iframe
          title="Figma Preview 2"
          className="w-1/2 mx-14 h-full"
          src={embedUrl2}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Designs;
