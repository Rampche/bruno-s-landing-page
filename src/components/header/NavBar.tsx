import { FaBars } from 'react-icons/fa';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { EventType } from '../../models/models';
import WhatsappLink from '../WhatsappLink';

const NavBar = (): JSX.Element => {
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
    /* {
      name: 'Contato',
      path: '/contact',
    }, */
  ];

  //* Change state to control the navbar
  const [nav, setNav] = useState<true | false>(false);

  const handleNavBar = (event: EventType) => {
    event.preventDefault();
    setNav(!nav);
  };

  return (
    <nav className="bg-[#F7F7F7] text-[#268FB7]">
      <div className="hidden sm:flex justify-between items-center md:min-h-[65px] font-primary w-full px-14 z-10">
        <div>
          <Logo />
        </div>
        <ul className="flex px-4">
          {navList.map((item) => (
            <li className="text-lg">
              <Link to={item.path} key={item.name}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="sm:hidden" onClick={handleNavBar}>
        <FaBars size={20} className="cursor-pointer mx-0 mt-1" />
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
          {navList.map((item) => (
            <li className="py-8 text-lg">
              <Link to={item.path} key={item.name}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
