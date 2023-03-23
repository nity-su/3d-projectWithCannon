import { usePlane } from "@react-three/cannon";
import React from "react";

export default function Plane3DVelocity() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    type: "Static",
  }));
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
}
