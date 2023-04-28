import React from 'react';
import Hero from './Hero';
import Introduction from './Introduction';
import Media from '../../components/Media';
import Social from './Social';

const Index = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Introduction />
      <Social />
    </>
  );
};

export default Index;
