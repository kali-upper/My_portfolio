import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  
  // Use useMemo to create and validate positions only once
  const positions = useMemo(() => {
    try {
      const count = 1500; // Reduced number of points
      const positions = new Float32Array(count * 3);
      const temp = random.inSphere(new Float32Array(count * 3), { radius: 1.2 });
      
      // Ensure all values are valid numbers
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = isNaN(temp[i]) ? 0 : temp[i];
        positions[i + 1] = isNaN(temp[i + 1]) ? 0 : temp[i + 1];
        positions[i + 2] = isNaN(temp[i + 2]) ? 0 : temp[i + 2];
      }
      
      return positions;
    } catch (error) {
      console.error("Error generating star positions:", error);
      return new Float32Array(1500 * 3); // Return empty array as fallback
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false }}
        performance={{ min: 0.1 }} // Add performance optimization
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
