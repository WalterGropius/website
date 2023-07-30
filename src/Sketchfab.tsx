import React from 'react';

const Sketchfab: React.FC = () => {
  return (
    <>
    <embed src="https://sketchfab.com/playlists/embed?collection=ff58263bbe42472fb3d657a709d71d81&autostart=0"
        
        width={"100%"}
        height={"100%"}
       
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
    ></embed>
  </>
  );
}

export default Sketchfab;

