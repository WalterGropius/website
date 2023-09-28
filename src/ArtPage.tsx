import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CoverFlow from './CoverFlow';
import artData from './art.json';

function ArtPage() {
  const [selected, setSelected] = useState(0);

  const handleNext = () => {
    if (selected < artData.length - 1) setSelected(selected + 1);
  };

  const handlePrev = () => {
    if (selected > 0) setSelected(selected - 1);
  };

  return (
    <div>
      <Canvas>
        <ambientLight />
        <CoverFlow images={artData} selected={selected} />
      </Canvas>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ArtPage;
