import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';

const planetData = [
  { name: 'Mercury', radius: 0.5, distance: 5, color: 'gray' },
  { name: 'Venus', radius: 0.7, distance: 8, color: 'orange' },
  { name: 'Earth', radius: 0.8, distance: 11, color: 'blue' },
  { name: 'Mars', radius: 0.6, distance: 14, color: 'red' },
  { name: 'Jupiter', radius: 1.5, distance: 18, color: 'beige' },
  { name: 'Saturn', radius: 1.2, distance: 22, color: 'khaki' },
  { name: 'Uranus', radius: 1, distance: 26, color: 'lightblue' },
  { name: 'Neptune', radius: 1, distance: 30, color: 'purple' },
];

export default function SolarSystem({ speeds }) {
  return (
    <Canvas camera={{ position: [0, 20, 40], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial emissive="yellow" />
      </mesh>
      {planetData.map((planet, index) => (
        <Planet key={planet.name} {...planet} speed={speeds[index]} />
      ))}
      <OrbitControls />
      <Stars />
    </Canvas>
  );
}
