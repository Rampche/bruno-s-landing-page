import { Outlet } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Info from './pages/Info';

function App() {
  return (
    <>
      <Outlet />
      {/*    <Info />
      <Contact /> 
      - Publicações;
      - Avaliações do Google;
      - Contato
      
      
      */}
    </>
  );
}

export default App;
