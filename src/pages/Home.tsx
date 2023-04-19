import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Introduction />
      //TODO: Inserir publicações; Avaliações no Google;
    </>
  );
};

export default Home;
