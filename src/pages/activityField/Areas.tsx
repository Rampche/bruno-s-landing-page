import React from 'react';

const Areas = (): JSX.Element => {
  interface CardProps {
    title: string;
  }

  const cards: CardProps[] = [
    { title: 'Análise e Elaboração de Contratos' },
    { title: 'Acompanhamento de Processos' },
    { title: 'Pareceres' },
    { title: 'Relatórios' },
    { title: 'Audiências' },
    { title: 'Diligências' },
    { title: 'Assessoria' },
    { title: 'Consultoria' },
    { title: 'Acordos Judiciais e Extrajudiciais' },
    { title: 'Levantamentos de Alvarás' },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 space-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:px-14 px-4 py-4 justify-center items-center">
      {cards.map(({ title }, index) => (
        <div
          className="bg-[#F7F7F7] hover:bg-[#1a6887] text-[#1a6887] hover:text-[#F7F7F7] rounded-lg shadow font-primary h-24 hover:transition hover:duration-500 ease-in-out flex justify-center items-center leading-loose tracking-wide"
          key={index}
        >
          <h1 className="text-md font-normal p-2">{title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Areas;
