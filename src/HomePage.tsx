import * as THREE from 'three';
import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { a as three } from '@react-spring/three';

interface ModelProps {
  open: boolean;
  hinge: any;
  [key: string]: any;
}

/* function Audio() {
  
  const { camera } = useThree();
  useEffect(() => {
    camera.add(listener.current);
    return () => camera.remove(listener.current);}, [camera]);
  const listener = useRef(new THREE.AudioListener());
  const soundAmbi = useRef(new THREE.Audio(listener.current));
  const soundWow = useRef(new THREE.Audio(listener.current));

  const [audioAmbiBuffer, audioWowBuffer] = useLoader(THREE.AudioLoader, [
    '/ambi.wav',
    '/wow.wav',
  ]); 

  useEffect(() => {
    soundAmbi.current.setBuffer(audioAmbiBuffer);
    soundAmbi.current.setLoop(true);
    soundAmbi.current.setVolume(0.5);
    soundAmbi.current.play();

    return () => {
      soundAmbi.current.stop();
    };
  }, [audioAmbiBuffer]);

  useEffect(() => {
    soundWow.current.setBuffer(audioWowBuffer);
    soundWow.current.setLoop(false);
    soundWow.current.setVolume(1);
  }, [audioWowBuffer]);

  return null;
}*/


// Moved this component to enhance code clarity
function LightingControl({ open }: { open: boolean }) {
  const springIntensity = useSpring({
      intensity: open ? 10 : 0,
      config: { tension: 150, friction: 20 }
  });
  const [lightIntensity, setLightIntensity] = useState(0);

  useFrame(() => {
      const currentIntensity = springIntensity.intensity.get();
      setLightIntensity(currentIntensity);
  });

  return (
      <pointLight
          position={[-3, 5, 0]}
          intensity={lightIntensity}
          distance={50}
          decay={25}
      />
  );
}

function Model({ open, hinge, ...props }: ModelProps) {
  const groupie = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF('/mac-draco.glb') as any;
  const [hovered, setHovered] = useState(false);

  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered]);

  

  const video = useMemo(() => {
    const vid = document.createElement('video');
    vid.src = '/reel_sm.mp4';
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  }, []);

  useFrame((state) => {
    if (groupie.current) {
      const t = state.clock.getElapsedTime();
      const { current } = groupie;
      current.rotation.x = THREE.MathUtils.lerp(current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1);
      current.rotation.y = THREE.MathUtils.lerp(current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1);
      current.rotation.z = THREE.MathUtils.lerp(current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1);
      current.position.y = THREE.MathUtils.lerp(current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1);
    }
  });

  // Simplified and separated the JSX for clarity
  return (
    <group ref={groupie} {...props} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} dispose={null}>
       <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh
            geometry={nodes['Cube008_2'].geometry}
            scale={[1, 1, -1]} position={[0, -0.01, -0.18]}>
            <meshBasicMaterial attach="material">
              <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
          </mesh>
        </group>
      </three.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
      </group>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });

  useEffect(() => {
    const timer = setTimeout(() => {
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.dispatchEvent(event);
    }, 800);  // This gives a delay of 500ms, you can adjust this as needed.

    return () => {
      clearTimeout(timer);  // Cleanup the timer to avoid memory leaks.
    };
  }, []);


  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 95 }}>
        <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} onClick={() => setOpen(!open)}>
                <LightingControl open={open} />
                <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
            </group>
        </Suspense>
        <Environment files={"/flatway2k.hdr"} background blur={0.04}/>
     {/* <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />*/}
     <OrbitControls minDistance={10} maxDistance={20} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

      {/* Bloom effect integration */}
      <EffectComposer>
      
        <Bloom
          intensity={10}
          luminanceThreshold={0.5}
          luminanceSmoothing={20}
          height={300}
        />
      </EffectComposer>
      {/* <Audio /> */}
       </Canvas>
  );
}
