import React from 'react';
import { BsTwitter, BsWhatsapp, BsInstagram, BsTiktok } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SocialIcons } from '../models/models';

const Footer = (): JSX.Element => {
  const socialIcons: SocialIcons[] = [
    {
      Icon: BsInstagram,
      size: '1.2rem',
      url: 'https://www.instagram.com/brunoasfora_adv/',
    },
    {
      Icon: BsTiktok,
      size: '1.2rem',
      url: 'https://www.tiktok.com/@brunoasfora.adv',
    },
    {
      Icon: BsWhatsapp,
      size: '1.2rem',
      url: 'https://wa.me/5581999320897',
    },
    {
      Icon: BsTwitter,
      size: '1.2rem',
      url: 'https://twitter.com/BrunoKippao',
    },
  ];

  return (
    <div className="bg-[#F7F7F7] text-md md:text-lg text-center flex flex-col items-center justify-evenly md:flex-row md:justify-around px-14 text-sm py-4 md:py-14 font-primary">
      <section>
        <h2 className="text-[#1a6887] uppercase font-semibold">
          Redes Sociais
        </h2>
        <ul className="flex">
          {socialIcons.map(({ Icon, size, url }) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon
                  size={size}
                  className="text-[#686868] hover:text-[#1a6887] transition ease-in-out delay-150 cursor-pointer"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="font-semibold text-[#686868] px-4">
        <h2 className="text-[#1a6887] uppercase">Recife/PE</h2>
        <div className="font-light hover:text-[#1a6887] hover:duration-500 transition ease-in">
          <p>Rua Capitão Temudo, nº 310.</p>
          <p>Cabanga. CEP 50090-290</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
