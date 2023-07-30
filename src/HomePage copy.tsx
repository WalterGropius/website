// HomePage.js

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import styled from 'styled-components';


const StyledCanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;




import { OrbitControls, Stars, MeshDistortMaterial, Environment } from '@react-three/drei';

function Scene() {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // This will rotate the object continuously
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh
      ref={ref}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* Change the geometry based on active state */}
      {active ? <boxGeometry args={[1, 1, 1]} /> : <sphereGeometry args={[1, 100, 100]} />}
      <MeshDistortMaterial speed={2} distort={0.5} color={'hotpink'} />
    </mesh>
  );
}

function HomePage() {
  

  return (
    <StyledCanvasContainer>
      <Canvas>
      <Suspense fallback={null}>
       
        <OrbitControls />
        <Stars scale={0}/>
        <Scene />
      </Suspense>
    </Canvas>
    </StyledCanvasContainer>
    
  );
}

export default HomePage;
