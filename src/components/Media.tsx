import React from 'react';
import { NewsType } from '../models/models';
import { HiOutlineExternalLink } from 'react-icons/hi';
import justiceGavel from '../assets/images/justice-gavel.jpg';
import books from '../assets/images/books.jpg';
import deal from '../assets/images/deal.jpg';

const Media = () => {
  const cardList: NewsType[] = [
    {
      title: 'Recurso não apreciado',
      content:
        'TST confirma deserção de recurso ordinário por não comprovação do registro da apólice de seguro garantia perante a Susep',
      image: deal,
      link: 'https://www.migalhas.com.br/depeso/341360/tst-confirma-desercao-de-recurso-ordinario',
    },
    {
      title: 'Recurso não apreciado',
      content:
        'TST confirma deserção de recurso ordinário por não comprovação do registro da apólice de seguro garantia perante a Susep',
      image: justiceGavel,
      link: 'https://www.migalhas.com.br/depeso/341360/tst-confirma-desercao-de-recurso-ordinario',
    },
    {
      title: 'Recurso não apreciado',
      content:
        'TST confirma deserção de recurso ordinário por não comprovação do registro da apólice de seguro garantia perante a Susep',
      image: books,
      link: 'https://www.migalhas.com.br/depeso/341360/tst-confirma-desercao-de-recurso-ordinario',
    },
  ];

  return (
    <>
      <section className="w-full bg-gray-100">
        <h1 className="text-xl font-semibold uppercase text-center text-[#1a6887] pt-4 md:pt-4">
          Mídias e Publicações
        </h1>
        <div className="grid grid-flow-row md:grid-flow-col items-center justify-around font-primary space-y-4  py-4 px-4">
          {cardList.map(({ title, content, image, link }, i) => (
            <div
              key={i}
              className="w-64 md:max-w-xs bg-[#f3efec] text-[#686868] flex flex-col text-justify justify-center items-center space-y-1 px-4 py-2 rounded-lg"
            >
              <img src={image} alt={title} className="w-28 h-20 rounded-sm" />
              <h3 className="text-[#1a6887] font-medium text-lg">{title}</h3>
              <p className="text-sm">{content}</p>

              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row space-x-2"
              >
                <p>Leia</p>
                <HiOutlineExternalLink size={20} className="text-[#1a6887]" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Media;
