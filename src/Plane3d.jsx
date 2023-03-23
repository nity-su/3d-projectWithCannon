import React from "react";

export default function Plane3d() {
  return (
    <>
      <mesh
        rotation={[Math.PI * -0.5, 0, 0]}
        position={[0, -2, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#c257ff" />
      </mesh>
    </>
  );
}
