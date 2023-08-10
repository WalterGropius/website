import * as THREE from 'three'
import  { RefObject, MutableRefObject } from 'react'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, ContactShadows, OrbitControls, Environment } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'

// Explicitly type your props
interface ModelProps {
  open: boolean;
  hinge: any;
  [key: string]: any;
}

function Model({ open, hinge, ...props }: ModelProps) {
  const group: MutableRefObject<THREE.Group | undefined> = useRef()
  
  // Correctly type the GLTF output (or make sure the typings are correctly installed)
  const { nodes, materials }: any = useGLTF('/mac-draco.glb')
  
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  const [video] = useState(() => Object.assign(document.createElement('video'), {
    src: '/reel_sm.mp4',
    crossOrigin: 'Anonymous',
    loop: true,
    muted: true
  }));

  useEffect(() => {
    video.play();
  }, [video]);

  useFrame((state) => {
    if (group && group.current) {
      const t = state.clock.getElapsedTime()
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
    }
  })

  return (
    <group ref={group as RefObject<THREE.Group>} {...props} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} dispose={null}>
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
  )
}

export default function HomePage() {
  const [open, setOpen] = useState(false)
  const props = useSpring({ open: Number(open) })
  
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} onClick={() => setOpen(!open)}>
          <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
        </group>
      </Suspense>
      <Environment />
      <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      <OrbitControls/>
    </Canvas>
  )
}
