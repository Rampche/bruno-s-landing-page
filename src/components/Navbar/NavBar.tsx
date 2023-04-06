import { FaBars } from 'react-icons/fa';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EventType } from '../../models/button';

const NavBar = (): JSX.Element => {
  //* Navigate links
  const navigate = useNavigate();

  const navigateToHome = (event: EventType) => {
    event.preventDefault();
    navigate('/');
  };
  const navigateToAbout = (event: EventType) => {
    event.preventDefault();
    navigate('/about');
  };
  const navigateToInfo = (event: EventType) => {
    event.preventDefault();
    navigate('/info');
  };
  const navigateToContact = (event: EventType) => {
    event.preventDefault();
    navigate('/contact');
  };

  //* Change state to control the navbar
  const [nav, setNav] = useState<true | false>(false);

  const handleNavBar = (event: EventType) => {
    event.preventDefault();
    setNav(!nav);
  };

  return (
    <nav className="bg-[#F7F7F7] text-[#268FB7]">
      <div className="hidden sm:flex justify-between items-center text-secondary md:min-h-[40px] font-primary w-full px-14 z-10 ">
        <div>
          <Logo />
        </div>
        <ul className="flex px-4 text-base">
          <li>
            <button onClick={navigateToHome}>Início</button>
          </li>
          <li>
            <button onClick={navigateToAbout}>Sobre</button>
          </li>
          <li>
            <button onClick={navigateToInfo}>Área de Atuação</button>
          </li>
          <li>
            <button onClick={navigateToContact}>Contato</button>
          </li>
        </ul>
      </div>

      <button className="sm:hidden" onClick={handleNavBar}>
        <FaBars size={20} className="cursor-pointer mx-0" />
      </button>

      <div
        className={
          nav
            ? 'sm:hidden overflow-y-hidden ease-in duration-300 left-0 top-0 w-full h-screen opacity-90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className="pt-12 text-center h-full w-full">
          <li className="py-8">
            <button onClick={navigateToHome}>Início</button>
          </li>
          <li className="py-8">
            <button onClick={navigateToAbout}>Sobre</button>
          </li>
          <li className="py-8">
            <button onClick={navigateToInfo}>Área de Atuação</button>
          </li>
          <li className="py-8">
            <button onClick={navigateToContact}>Contato</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
