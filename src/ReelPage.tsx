// ReelPage.tsx

import React from 'react';

const ReelPage: React.FC = () => {
  return (
    <>
    <video 
      src="https://zenbau.haus/reel.mp4" 
      style={{width: '100%', height: '100vh', objectFit: 'cover', border: 'none'}}
      title="reel" 
      autoPlay 
      loop
      controls 
      muted>
    </video>
    <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    </div>
  </>
  );
}

export default ReelPage;

