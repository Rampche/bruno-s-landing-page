import React from 'react';
import heroImg from '../../assets/images/hero-img.jpg';

const HeroImg = (): JSX.Element => {
  return (
    <div className="w-full h-full relative flex items-center font-primary text-[#F7F7F7]">
      <img
        src={heroImg}
        className="max-h-[550px] w-full object-cover"
        alt="hero-img"
      ></img>
      <div className="flex absolute flex-col p-4 left-10 top-20">
        <h1 className="text-6xl font-medium">BRUNO ASFORA</h1>
        <h2 className="font-thin text-2xl">Advogado Trabalhista</h2>
      </div>
    </div>
  );
};

export default HeroImg;
