import React from 'react';
import BrunoImg from '../assets/images/Bruno.png';

const About = (): JSX.Element => {
  return (
    <section className="px-4 text-center lg:px-14 py-4 bg-[#f3efec]">
      <h2 className="font-medium text-sm md:text-xl lg:text-4xl">
        Bruno Faran Asfora de Moura
      </h2>
      <p>OAB/PE 54.197</p>

      <div className="flex flex-col md:flex-row items-center justify-center space-x-2 space-y-2 mt-2">
        <div className="relative bg-[#268FB7]"></div>
        <img
          src={BrunoImg}
          alt="bruno's picture"
          className="min-[280px]:max-h-40 sm:max-h-80 md:max-h-96 lg:max-h-[550px] border-2  border-[#268FB7]"
        />
        <div className="bg-[#268FB7]">
          <h3>teste</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            tempora placeat autem voluptatem saepe error officiis harum
            corporis, laboriosam cupiditate architecto impedit ipsum voluptatum
            dolore quae numquam illum fugiat. Consectetur numquam aut ad
            doloribus cum porro, error voluptates, autem reiciendis repellendus,
            debitis cumque magnam vel consequatur ea excepturi? Laudantium,
            expedita?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
