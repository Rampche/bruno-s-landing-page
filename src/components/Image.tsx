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
        className={`max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[500px] bg-${bgColor}`}
      />
    </>
  );
};

export default Image;
