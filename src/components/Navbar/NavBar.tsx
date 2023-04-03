import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from './Logo';

const NavBar = (): JSX.Element => {
  return (
    <>
      <nav className="text-secondary bg-gray-700/80 text-slate-300 min-h-[50px] font-primary w-full flex justify-between items-center fixed z-10">
        <div>
          <Logo />
        </div>
        <ul className="flex">
          <li className="cursor-pointer">Início</li>
          <li className="cursor-pointer">Sobre</li>
          <li className="cursor-pointer">Área de Atuação</li>
          <li className="cursor-pointer">Contato</li>
        </ul>
      </nav>
      <div className="sm:hidden">
        <FaBars size={20} className="cursor-pointer mr-4" />
      </div>
    </>
  );
};

export default NavBar;
