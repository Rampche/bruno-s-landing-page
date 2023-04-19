import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

const WhatsappLink = (): JSX.Element => {
  const url = 'https://wa.me/5581999320897';

  return (
    <div className="bg-green-600 rounded text-white ">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-1 p-1 text-base justify-center"
      >
        <p>Entre em contato</p>
        <ImWhatsapp size="1.5rem" />
      </a>
    </div>
  );
};

export default WhatsappLink;
