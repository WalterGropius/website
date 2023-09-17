import React from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import { TextureLoader, Texture } from 'three';
import { a, useSpring } from '@react-spring/three';
import { Plane } from '@react-three/drei';

// Define prop types
interface CoverFlowProps {
  images: { src: string }[]; // If there are other properties in 'images' items, expand this
  selected: number;
}

const CoverFlow: React.FC<CoverFlowProps> = ({ images, selected }) => {
  const { size } = useThree();
  const textures = useLoader(TextureLoader, images.map(img => img.src)) as Texture[];
  
  const springProps = useSpring({
    positionX: -(selected * size.width * 0.1)
  });

  return (
    <>
      {textures.map((texture, index) => (
        <a.mesh key={index} position-x={springProps.positionX}>
          <Plane attach="geometry" args={[1, 1.5]} />
          <meshBasicMaterial attach="material" map={texture} />
        </a.mesh>
      ))}
    </>
  );
}

export default CoverFlow;
