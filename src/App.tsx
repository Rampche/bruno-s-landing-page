import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Media from './components/Media';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Media />
      <Footer />
    </>
  );
}

export default App;
