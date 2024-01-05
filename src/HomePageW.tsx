import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment, Float, MeshReflectorMaterial, Plane, PresentationControls, ContactShadows, Text, Text3D, Center } from '@react-three/drei'
import { EffectComposer, SSAO, Bloom, DepthOfField, Vignette, BrightnessContrast, HueSaturation } from '@react-three/postprocessing'
import { Splat } from './splat'
import { MeshBasicMaterial } from 'three'

export default function HomePageW() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 5], fov: 25 }}>
      <fog attach="fog" args={['#f3f3f3', 8, 12]} />
      <color attach="background" args={['#e72020']} />
      <ambientLight color={'white'} intensity={10} />
      {/* <Center rotation={[-0.5, -0.25, 0]}>
      <Text3D
          curveSegments={8}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.1}
          lineHeight={0.5}
          letterSpacing={0}
          size={1}
          font="/zenhand.json">
          {`hello\nworld`}
         <meshBasicMaterial color={"black"}/>
        </Text3D></Center> */}
      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 1, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
        <Float>
          <Splat
            scale={1.2}
            rotation={[0, -0.7 * Math.PI, 0]}
            src="flowers_white.splat"
          />
        </Float>
      </PresentationControls>
     
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshBasicMaterial color={"#ccc"}/>
      </mesh>
    
    </Canvas>
  )
}
