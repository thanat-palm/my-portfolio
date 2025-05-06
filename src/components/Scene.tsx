import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";

function FloatingShape() {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2.5,2.5,2.5]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "royalblue"} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="relative w-full h-screen bg-base-300 text-white">
      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to 3D World</h1>
        <p className="text-lg mb-6 max-w-xl">
          This is a stunning landing page powered by React Three Fiber + Tailwind CSS. 
          Interactive and beautiful!
        </p>
        <button className="px-6 py-3 bg-primary hover:bg-primary-focus rounded-full transition">
          Get Started
        </button>
      </div>
    
    </div>
  );
}
