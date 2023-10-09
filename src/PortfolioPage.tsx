import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Image, OrbitControls } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { useNavigate } from 'react-router-dom';

type Item = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string;
};

const PortfolioPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const { scale } = useSpring({
    scale: hovered !== null ? [1.2, 1.2, 1.2] : [1, 1, 1],
    onRest: () => setIsNavigating(false),
  });

  useEffect(() => {
    fetch('/portfolio.json')
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleClick = (item: Item) => {
    if (!isNavigating) {
      setIsNavigating(true);
      navigate(`/work/${item.id}`);
    }
  };
  const [lockHover, setLockHover] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <Canvas>
        {items.map((item, index) => (
          <a.mesh
          key={index}
          position={[0, 0, -index * 2]}
          onPointerOver={() => {
            if (!lockHover) {
              setHovered(index);
              setLockHover(true);
            }
          }}
          onPointerOut={() => {
            setHovered(null);
            setLockHover(false);
          }}
          onClick={() => handleClick(item)}
          scale={scale as any}
        >
            <Image url={item.image} />
            <Text position={[0, -1, 0]}>{item.title}</Text>
          </a.mesh>
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default PortfolioPage;
