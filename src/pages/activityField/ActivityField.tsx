import React from 'react';
import Image from '../../components/Image';
import newLogo from '../../assets/images/newLogo.jpg';
import Areas from './Areas';

const Index = (): JSX.Element => {
  return (
    <div className="px-6 text-center py-10 font-primary bg-[#f3efec] md:px-14 lg:px-20 leading-loose">
      <section
        className="flex flex-col items-center justify-center md:flex-row md:justify-between
      space-x-2 space-y-2"
      >
        <article className="text-justify font-light px-4 md:px-14">
          <h1 className="text-xl font-semibold uppercase text-center text-[#1a6887] py-4 md:py-4">
            Direito do Trabalho
          </h1>

          <div className="text-lg mt-2 text-[#686868] font-normal space-y-3 leading-loose tracking-wide ">
            <p>
              O direito trabalhista é uma importante ferramenta para proteger
              trabalhadores e empregadores de eventuais excessos existentes nas
              relações trabalhistas. E através dele, se torna possível promover
              uma verdadeira justiça social.
            </p>
            <p>
              Após observar essas injustiças, e diante da possibilidade de
              realizar um atendimento diferenciado, mais humano e direcionado às
              necessidades de cada caso, escolhi me dedicar a esse direito tão
              importante na nossa sociedade.
            </p>
            <p>
              Percebi que buscar justiça social era uma forma de benefíciar os
              que mais precisam. Assim, dedico meus esforços a atuar na área
              trabalhista e as que a envolvem:
            </p>
          </div>
        </article>
      </section>
      <Areas />
      <div className="flex justify-center -mt-3 h-60">
        <Image src={newLogo} bgColor="bg-white" />
      </div>
    </div>
  );
};

export default Index;
