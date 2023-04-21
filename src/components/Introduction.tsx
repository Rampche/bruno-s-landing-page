import React from 'react';
import BrunoImg from '../assets/images/Bruno-min.png';
import Image from './Image';

const Introduction = () => {
  return (
    //Todo: Ajustar demais estilizações dos itens na página.
    <div className="px-6 text-center py-4 font-primary bg-[#f3efec] md:px-14 lg:px-20 leading-loose">
      <section
        className="flex flex-col items-center justify-center md:flex-row md:justify-between
      space-x-2 space-y-2"
      >
        <Image
          src={BrunoImg}
          bgColor="gradient-to-tr from-[#2A95BF] to-[#256877]"
        />
        <article className="text-justify font-light py-5 px-4 md:px-8">
          <h1 className="font-bold text-[#1a6887] text-2xl">Bruno Asfora,</h1>
          <h2 className="text-[#1a6887] font-medium text-xl">
            especialista em direito do trabalho.
          </h2>
          <div className="text-lg mt-2 text-[#686868] font-normal space-y-3 ">
            <p>
              Atuo no mercado jurídico há dez anos e percebi que o direito do
              trabalho deveria ser muito mais do que processos e argumentos.
            </p>
            <p>
              Entendi que por trás de cada processo há pessoas com sonhos,
              desejos e vidas que podem ser gravemente afetada por uma questão
              trabalhista mal resolvida.
            </p>
            <p>
              Adoto uma abordagem humanizada, em que cada caso é analisado
              detalhadamente para entender suas necessidades e objetivos.
            </p>
            <p>
              E como sonhava que a minha mensagem pudesse chegar ao maior número
              de pessoas possível, optei por inovar e usar as redes sociais para
              alcançar os trabalhadores que precisam de ajuda, de forma simples
              e objetiva, e devem ser tratados com o respeito e a dignidade que
              a lei exige.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Introduction;
