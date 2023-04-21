import React from 'react';
import Hero from '../../components/Hero';
import Introduction from '../../components/Introduction';
import Media from '../../components/Media';

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Introduction />
      <Media />
      {/* //TODO: Avaliações no Google; */}
    </>
  );
};

export default Home;
