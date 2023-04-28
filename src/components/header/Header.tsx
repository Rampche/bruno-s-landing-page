import { FaBars } from 'react-icons/fa';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { EventType } from '../../models/models';
import WhatsappLink from '../WhatsappLink';

const Header = (): JSX.Element => {
  //* Navigate links
  const navList = [
    {
      name: 'Inicio',
      path: '/',
    },
    {
      name: 'Sobre',
      path: '/about',
    },
    {
      name: 'Área de Atuação',
      path: '/info',
    },
  ];

  //* Change state to control the navbar
  const [nav, setNav] = useState<true | false>(false);

  const handleNavBar = (event: EventType) => {
    event.preventDefault();
    setNav(!nav);
  };

  return (
    <>
      {/* 268FB7 */}
      <div className="hidden sm:flex justify-between items-center md:min-h-[65px] font-primary w-full px-14 z-10 text-[#1a6887] bg-[#f7f7f7]">
        {/* bg-[#f7f7f7] */}
        <div>
          <Logo />
        </div>
        <ul className="flex px-4">
          {navList.map(({ name, path }, index) => (
            <li key={index} className="text-lg">
              <Link to={path}>{name}</Link>
            </li>
          ))}
          <li>
            <WhatsappLink />
          </li>
        </ul>
      </div>

      <button className="sm:hidden" onClick={handleNavBar}>
        <FaBars size="1.5rem" className="cursor-pointer ml-1 mt-1" />
      </button>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className={
          nav
            ? 'sm:hidden overflow-y-hidden ease-in duration-500 absolute z-50 bg-[#F7F7F7] left-0 top-0 w-full h-screen opacity-95 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen w-full left-[-100%] ease-in duration-500 z-50 bg-[#F7F7F7]'
        }
      >
        <ul className="pt-12 text-center h-full w-full">
          {navList.map(({ name, path }, idx) => (
            <li className="py-8 text-lg font-semibold" key={idx}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
          <li>
            <WhatsappLink />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
