import React from 'react';

const Social = (): JSX.Element => {
  const socialNumbers = [
    { title: 'Instagram', followers: '+150mil' },
    { title: 'Tik Tok', followers: '+66mil' },
    { title: 'Avaliação Google', followers: '5 Estrelas' },
  ];

  return (
    <div className="px-6 text-center py-4 font-primary bg-[#f3efec] md:px-14 lg:px-20 leading-loose">
      <div className="flex-col md:flex-row flex items-center justify-center md:px-14 px-4 font-primary text-[#686868] ">
        <h2 className="w-1/2 text-3xl font-light">
          Auxílio diário a milhares de trabalhadores que me seguem e buscam os
          seus direitos
        </h2>
        <div className="w-1/2 p-6">
          <div className="flex flex-col space-y-4">
            {socialNumbers.map(({ title, followers }) => (
              <div
                key={title}
                className="flex flex-col justify-center items-center md:flex-row md:space-y-20 text-xl"
              >
                <p className="font-bold text-4xl">{followers}</p>
                <h3 className="font-normal text-[#1a6887]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
