import React from 'react';
import icone from '../../assets/images/icone.png';

const About = () => {
  return (
    <div>
      <img
        src={icone}
        alt="icone"
        className="absolute max-w-lg max-h-lg left-2/4 top-6"
      />
    </div>
  );
};

export default About;
