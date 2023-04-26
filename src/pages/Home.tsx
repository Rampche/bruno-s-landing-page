import React from 'react';
import Hero from './home/Hero';
import Introduction from './home/Introduction';
import Media from './home/Media';

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Introduction />
      <Media />
      {/* //TODO: Números da audiência dele; */}
    </>
  );
};

export default Home;
