import React from 'react';
import heroVid from '../assets/videos/heroVid.mp4';
import Video from './Video';

const Hero = (): JSX.Element => {
  return (
    <div className="w-full h-full relative flex items-center font-primary text-[#F7F7F7]">
      <Video />
      <div className="flex flex-col items-center justify-center absolute p-4 left-0 top-0 w-full h-full bg-black/70 leading-loose">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase">
          bruno asfora
        </h1>
        <div className="mt-6 text-center text-md sm:text-lg sm:mt-8 font-thin leading-loose">
          <p>Garantia de excelência e um alto padrão de qualidade</p>
          <p>para oferecer as melhores soluções jurídicas</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
