import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 3 + Math.random() * 4;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFD700"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]}>
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFD700"
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
}

function InnerCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -state.clock.elapsedTime * 0.3;
      const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.8, 32, 32]}>
      <meshStandardMaterial
        color="#FFC300"
        emissive="#FFD700"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
}

function OrbitRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3, 0.01, 16, 100]} />
        <meshStandardMaterial color="#FFC300" emissive="#FFC300" emissiveIntensity={0.4} transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[Math.PI / 4, Math.PI / 6, Math.PI / 3]}>
        <torusGeometry args={[3.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} transparent opacity={0.3} />
      </mesh>
    </>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFC300" />
        
        <ParticleField />
        <CoreSphere />
        <InnerCore />
        <OrbitRings />
      </Canvas>
    </div>
  );
}
