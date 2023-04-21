import React from 'react';

export type Props = {
  src: string;
  bgColor: string;
};

const Image: React.FC<Props> = ({ src, bgColor }) => {
  return (
    <>
      <img
        src={src}
        alt="bruno's picture"
        className={`max-h-60 md:max-h-80 lg:max-h-[400px] bg-${bgColor} rounded-xl`}
      />
    </>
  );
};

export default Image;
