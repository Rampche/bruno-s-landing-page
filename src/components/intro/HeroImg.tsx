import React from 'react';
import heroImg from '../../assets/images/hero-img.jpg';

const HeroImg = (): JSX.Element => {
  return (
    <div className="w-full h-full relative flex items-center font-primary text-[#F7F7F7]">
      <img
        src={heroImg}
        className="max-h-[600px] w-full object-cover"
        alt="hero-img"
      ></img>
      <div className="flex absolute flex-col p-4 left-3 top-5 sm:left-10 sm:top-20 ">
        <h1 className="font-medium min-[280px]:text-sm text-lg sm:text-2xl md:text-4xl lg:text-6xl">
          BRUNO ASFORA
        </h1>
        <h2 className="font-thin min-[280px]:text-xs text-sm sm:text-lg md:text-xl lg:text-4xl ">
          Advogado Trabalhista
        </h2>
        <p className="mt-2">
          Garantia de excelência e alto padrão de qualidade
        </p>
        <p>para oferecer as melhores soluções jurídicas</p>
      </div>
    </div>
  );
};

export default HeroImg;
