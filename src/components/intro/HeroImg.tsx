import React from 'react';
import heroImg from '../../assets/images/hero-img.jpg';

const HeroImg = (): JSX.Element => {
  return (
    <div className="w-full h-full flex items-center relative">
      <img src={heroImg} className="h-full w-full object-cover" alt=" "></img>
      <h1 className="font-primary text-6xl font-thin text-slate-100 absolute p-4 left-10 top-40">
        BRUNO ASFORA
      </h1>
    </div>
  );
};

export default HeroImg;
