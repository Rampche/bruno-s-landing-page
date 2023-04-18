import React from 'react';
import heroVid from '../assets/videos/heroVid.mp4';

const Video = (): JSX.Element => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="md:max-h-[600px] max-h-80 w-full object-cover"
        playsInline
        typeof="video/mp4"
        src={heroVid}
      />
    </>
  );
};

export default Video;
