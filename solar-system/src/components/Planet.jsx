import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Planet({ radius, distance, speed, color }) {
  const ref = useRef();
  let angle = 0;

  useFrame((state, delta) => {
    angle += delta * speed;
    ref.current.position.x = distance * Math.cos(angle);
    ref.current.position.z = distance * Math.sin(angle);
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
