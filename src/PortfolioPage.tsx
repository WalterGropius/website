import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Text, Image, Scroll, ScrollControls, Text3D } from '@react-three/drei';
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
  const { scale } = useSpring({ scale: isHovered ? 1.05 : 1 });

  return (
    <a.mesh
      onPointerOver={() => setHoveredId(item.id)}
      onPointerOut={() => setHoveredId(null)}
      onClick={(e) => {
        e.stopPropagation();
        onClick(item);
      }}
      scale={scale}
      position={position}
      rotation={[0,-0.1,0]}
    >
      <Image url={item.image} scale={7} />
      <Text font='/zenhand.ttf'  position={[-10, 3, -1]}>{item.title}</Text>
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
      <fog attach="fog" args={['#f3f3f3', 0, 100]} />
        <ScrollControls pages={filteredItems.length / 5}>
          
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                onClick={handleClick}
                position={[ index * -3+2, -index * 3,  -index * 5-5]} // Adjust position based on index
              />
            ))}
          
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default PortfolioPage;
