
import  { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from "./Model"

export  function HomePage() {
  
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={0}  environment="dawn">
        false
          <Model />
        false
        </Stage>
      </Suspense>
      
      <OrbitControls  minAzimuthAngle={0} minDistance={1}
      maxDistance={10}/>
    </Canvas>
  )
}
export default HomePage;
