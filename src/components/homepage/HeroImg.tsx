import React from 'react';
import heroImg from '../../assets/images/hero-img.jpg';
import heroVid from '../../assets/videos/heroVid.mp4';

const HeroImg = (): JSX.Element => {
  return (
    <div className="w-full h-full relative flex items-center font-primary text-[#F7F7F7]">
      <video
        src={heroVid}
        className="md:max-h-[700px] max-h-80 w-full object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="flex flex-col items-center justify-center absolute p-4 left-0 top-0 w-full h-full bg-black/70">
        <h1 className="font-medium text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase">
          bruno asfora
        </h1>
        {/*  <h2 className="font-thin text-sm sm:text-lg md:text-xl lg:text-4xl ">
          Advogado Trabalhista
        </h2> */}
        <div className="mt-6 text-center text-xs sm:text-lg sm:mt-8 font-thin">
          <p>Garantia de segurança, excelência e um alto padrão de qualidade</p>
          <p>para oferecer as melhores soluções jurídicas</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
