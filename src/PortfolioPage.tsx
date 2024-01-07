import React, { useState, useEffect,useRef } from 'react';
import { Canvas, useThree,useFrame  } from '@react-three/fiber';
import { Text, Image, useTexture, Box } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { useNavigate } from 'react-router-dom';

type Item = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
};

type ItemProps = {
  item: Item;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
  onClick: (item: Item) => void;
  position: [number, number, number];
};

const PortfolioItem = ({ item, hoveredId, setHoveredId, onClick, position }: ItemProps) => {
  const isHovered = hoveredId === item.id;
  const { camera } = useThree();
  const cameraRef = useRef(camera);
  useEffect(() => {
    cameraRef.current = camera;
  });


 
  const [spring, set] = useSpring(() => ({
    scale: 1,
    position: position,
    config: { mass: 1, tension: 1000, friction: 100 }
  }));
  
  
  useFrame(() => {
    // Type 'currentCameraPos' explicitly as a tuple [number, number, number]
    const currentCameraPos: [number, number, number] = [
      cameraRef.current.position.x, 
      cameraRef.current.position.y, 
      cameraRef.current.position.z - 10,
    ];
    set.start({
      position: isHovered ? currentCameraPos : position,
      scale: isHovered ? 1.5 : 1,
    });
  });
  const texture = useTexture(item.image);
  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1;

  // Define the size of the cube based on the aspect ratio to avoid deformation
  // Assuming you want to keep the height constant, say 1 unit
  const cubeHeight = 5;
  const cubeWidth = aspectRatio * cubeHeight;
  const cubeDepth = 0.1; // Or any other depth you prefer



  return (
    <a.mesh
      onPointerOver={() => setHoveredId(item.id)}
     
      onClick={(e) => {
        e.stopPropagation();
        onClick(item);
      }}
      scale={spring.scale}
      position={spring.position}
      rotation={[0, -0.1, 0]}
    >
      {/* <Image url={item.image} scale={7} /> */}
      <Box scale={[cubeWidth, cubeHeight, cubeDepth]}><meshBasicMaterial attach="material" map={texture} /></Box>
      <Text outlineColor={"black"} outlineWidth={0.1} scale={0.5} color="white" font='/zenhand.ttf' position={[0,0,1]}>{item.title}</Text>
    </a.mesh>
  );
};

const PortfolioPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/portfolio.json')
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleClick = (item: Item) => {
    navigate(`/work/${item.id}`);
  };

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 
      <Canvas>
      <fog attach="fog" args={['#000000', 0, 100]} />
        {/* <ScrollControls  horizontal pages={filteredItems.length / 5}>
          <Scroll> */}
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                onClick={handleClick}
                position={[ index * 0-30, -index *3+20,  -index * 2-30]} // Adjust position based on index
              />
            ))}
          {/* </Scroll>
        </ScrollControls> */}
      </Canvas>
    </div>
  );
};

export default PortfolioPage;
