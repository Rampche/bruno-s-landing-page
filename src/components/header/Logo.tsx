import React from 'react';
import logo from '../../assets/logo/logo.jpg';

const Logo = (): JSX.Element => {
  return (
    <>
      <img src={logo} alt="logo" className="w-18 h-16" />
    </>
  );
};

export default Logo;
