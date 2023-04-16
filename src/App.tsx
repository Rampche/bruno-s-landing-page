import { Outlet } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Info from './pages/Info';
import NavBar from './components/header/NavBar';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      {/*    
      - Publicações;
      - Avaliações do Google;
      - Contato
      
      
      */}
    </>
  );
}

export default App;
