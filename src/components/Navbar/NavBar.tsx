import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from './Logo';

const NavBar = (): JSX.Element => {
  return (
    <>
      <nav className="hidden md:flex justify-between items-center text-secondary :bg-[#F7F7F7] text-[#268FB7] md:min-h-[40px] font-primary w-full px-14 z-10 ">
        <div>
          <Logo />
        </div>
        <ul className="flex">
          <li className="cursor-pointer text-base  ">Início</li>
          <li className="cursor-pointer text-base  ">Sobre</li>
          <li className="cursor-pointer text-base  ">Área de Atuação</li>
          <li className="cursor-pointer text-base  ">Contato</li>
        </ul>
      </nav>
      <div className="sm:hidden">
        <FaBars size={20} className="cursor-pointer mx-0" />
        <ul className="bg-[#F7F7F7]  text-[#268FB7] min-h-[40px] font-primary w-full flex flex-col justify-between items-center px-14 ">
          <li className="cursor-pointer text-base  ">Início</li>
          <li className="cursor-pointer text-base  ">Sobre</li>
          <li className="cursor-pointer text-base  ">Área de Atuação</li>
          <li className="cursor-pointer text-base  ">Contato</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
