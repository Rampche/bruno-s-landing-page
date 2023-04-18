import React from 'react';
import BrunoImg from '../assets/images/Bruno.png';
import Image from './Image';

const Introduction = () => {
  return (
    //Todo: Ajustar demais estilizações dos itens na página.
    <div className="px-6 text-center py-4 font-primary bg-[#f3efec] md:px-14">
      <section className="flex flex-col items-center md:flex-row">
        <div className="">
          //TODO:Ajustar tamanho da imagem.
          <Image
            src={BrunoImg}
            bgColor="gradient-to-tr from-[#2A95BF] to-[#256877]"
          />
        </div>
        <article className="text-justify font-light">
          <h1 className="font-bold text-[#256877]">Bruno Asfora,</h1>
          <h2 className="text-[#256877]">
            advogado especialista em direito do trabalho
          </h2>
          <p>
            Atua no mercado jurídico há dez anos e percebeu que o direito do
            trabalho deveria ser muito mais do que apenas defender as partes em
            processos judicias.
          </p>
          <p>
            Entendeu que o papel do advogado trabalhista vai muito além de
            defender direitos, pois, por trás de cada processo há pessoas, com
            sonhos, anseios, e uma vida que pode ser profundamente afetada por
            uma questão trabalhista mal resolvida.
          </p>
          <p>
            Diante disso, resolveu adotar uma abordagem humanizada, em que cada
            caso é analisado detalhadamente, buscando entender suas
            necessidades, suas preocupações e seus objetivos.
          </p>
          <p>
            Diante disso, resolveu ser inovador e usar as redes sociais para
            impulsionar a sua mensagem a todos os trabalhadores que precisam de
            ajuda e devem ser tratados com o respeito e a dignidade que a lei
            impõe.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Introduction;
