// CoverFlow.tsx
/*import React, { useState } from 'react'; 
import { useSpring, a } from '@react-spring/three'; 
import { Text, Image } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

interface Item {
  name: string;
  fimage: string;
}

interface CoverFlowProps {
  items: Item[];
  basePath: string; // For example, 'work'
}

const CoverFlow: React.FC<CoverFlowProps> = ({ items, basePath }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scale, setScale] = useState([1, 1, 1]); */

// Inside your spring
/* const props = useSpring({
  scale: hovered !== null ? [1.2, 1.2, 1.2] : [1, 1, 1],
  onChange: ({ value: { scale } }) => setScale(scale as [number, number, number])
}); 

  const navigate = useNavigate();

  const handleClick = (itemName: string) => {
    navigate(`/${basePath}/${itemName}`);
  };

  return ()
     <a.group>
      {items.map((item, index) => (
        <a.mesh 
        key={index} 
        onPointerOver={() => setHovered(index)} 
        onPointerOut={() => setHovered(null)}
        onClick={() => handleClick(item.name)}
        scale={scale as any}  // set scale directly
      >
        <Image url={item.fimage} />
        <Text>{item.name}</Text>
      </a.mesh>
      ))}
    </a.group>  );};
 


export default CoverFlow*/
