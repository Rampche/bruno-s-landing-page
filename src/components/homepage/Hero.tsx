import React from 'react';
import HeroImg from './HeroImg';
import NavBar from '../navbar/NavBar';

const Intro = () => {
  return (
    <section className="relative">
      <div className="z-10">
        <NavBar />
      </div>
      <HeroImg />
    </section>
  );
};

export default Intro;
