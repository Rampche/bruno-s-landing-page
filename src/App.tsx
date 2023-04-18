import { Outlet } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact';
import Info from './pages/Info';
import NavBar from './components/header/NavBar';
import Header from './components/header/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/*    
      - Publicações;
      - Avaliações do Google;
      - Contato
      
      
      */}
    </>
  );
}

export default App;
