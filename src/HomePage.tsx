// HomePage.js

import React, { Suspense,useState } from 'react';
import { 
  Environment, 
  Sphere, 
  Torus, 
  TorusKnot, 
  RoundedBox,
  Text3D,
  OrbitControls,
  Stars,
  Billboard
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import styled from 'styled-components';





function CanvasContent() {
  const [isHovered, setIsHovered] = useState(false);
  const [shape, setShape] = useState('sphere');
  const [text, setText] = useState('click \n\n\n\here...');

  const handlePointerOver = () => {
    setIsHovered(true);
    setText('hello\n\n\n\world');
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    setText('');
  };

  const handleClick = () => {
    const shapes = ['torus', 'sphere', 'torusknot', 'roundedbox'];
    setShape(shapes[(shapes.indexOf(shape) + 1) % shapes.length]);
  };

  const renderShape = () => {
    const materialProps = {
      samples: 2,
      resolution: 8,
      transmission: 1,
      roughness: 0.02,
      thickness: 1.01,
      ior: 1.42,
      chromaticAberration: 0.03,
      distortion: 0.15,
      temporalDistortion: 0.05,
      clearcoat: 1,
      attenuationDistance: 0.5,
      transmissionSampler: true
    };

    switch(shape) {
      case 'torus':
        return <Torus ><MeshTransmissionMaterial {...materialProps} /></Torus>;
      case 'torusknot':
        return <TorusKnot scale={1.5}><MeshTransmissionMaterial {...materialProps} /></TorusKnot>;
      case 'roundedbox':
        return <RoundedBox><MeshTransmissionMaterial {...materialProps} /></RoundedBox>;
      default:
        return <Sphere><MeshTransmissionMaterial {...materialProps} /></Sphere>;
    }
  }

  return (
    <>
      <Environment files={'/flatway4k.hdr'} background={true} />
      <ambientLight intensity={0.7} />
      <pointLight position={0,0,5} intensity={isHovered ? 2000 : 0.1} />

      <mesh scale={0.7}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}>
        {renderShape()}
      </mesh>

      <Billboard follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}>
        <Text3D
          position={[-3, 1, -1]}
          curveSegments={8}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.05}
          thickness={0}
          lineHeight={0.5}
          letterSpacing={isHovered ? 1 : 0.9}
          size={isHovered ? 1.3 : 0.9}
          font="./zenhand.json">
          {text}
          <meshStandardMaterial color={"white"} metalness={1} roughness={0} smooth={1} flatshading={0} />
        </Text3D>
      </Billboard>
    </>
  );
}


function HomePage() {
  

  return (
    <Suspense fallback={
      <div style={{
        position: 'fixed',
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}>
        Loading
      </div>
    }>
    
    

      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <CanvasContent />
        <OrbitControls autoRotate={true} autoRotateSpeed={0.2} enableZoom={false} maxDistance={10} minDistance={10}/>
        <Stars scale={0}/>
    </Canvas>
    </Suspense > 
    
  );
}

export default HomePage;
