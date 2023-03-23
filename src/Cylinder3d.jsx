import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cylinder3d(props) {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <>
      <mesh
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => {
          click(!clicked);
        }}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        castShadow
      >
        <cylinderGeometry args={[1, 1, 3]} />
        {/* <meshStandardMaterial
          wireframe={props.wireframe}
          color={hovered ? "hotpink" : "orange"}
        /> */}
        <meshStandardMaterial
          wireframe={props.wireframe}
          // color={hovered ? "blue" : "orange"}
        />
      </mesh>
    </>
  );
}
