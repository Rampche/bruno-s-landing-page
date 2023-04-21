import React from 'react';
import heroVid from '../assets/videos/heroVid.mp4';
import video2 from '../assets/videos/heroVid2.mp4'; //! Delete in the end if the other keep working

const Video = (): JSX.Element => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="md:max-h-[600px] max-h-[400px] w-full object-cover"
        playsInline
        typeof="video/mp4"
        src={heroVid}
      />
    </>
  );
};

export default Video;
