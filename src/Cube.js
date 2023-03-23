import React from "react";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
/**
 * @see https://www.npmjs.com/package/@react-three/cannon
 *
 */

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color="pink" />
    </mesh>
  );
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

function Sphere(props) {
  const [ref] = useSphere(() => ({ mass: 1, ...props }));
  return (
    <mesh ref={ref}>
      <sphereGeometry />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

export default function CubePyical() {
  const array = Array.from({ length: 10 }).map((_, i) => i + 1);

  return (
    <>
      <Cube position={[0, 1, 2]} />
      <Sphere position={[0, 1, 4]} />
      <Cube position={[0, 1, 6]} />
      {array.map((v) => (
        <>
          <Cube position={[Math.random() * 6 - 3, v, Math.random() * 6 - 3]} />
        </>
      ))}
    </>
  );
}

// const world = new CANNON.World({
//   gravity: new CANNON.Vec3(0, -9.82, 0), // m/s²
// });
// const radius = 1; // m
// const sphereBody = new CANNON.Body({
//   mass: 5, // kg
//   shape: new CANNON.Sphere(radius),
// });
// sphereBody.position.set(0, 10, 0); // m
// world.addBody(sphereBody);

// export default function Pychsic() {
//   const ref = useRef();
//   useEffect(() => {
//     function animate() {
//       requestAnimationFrame(animate);
//       world.fixedStep();
//       ref.current.position.copy(sphereBody.position);
//       ref.current.quaternion.copy(sphereBody.quaternion);
//     }
//     animate();
//   }, []);
//   return (
//     <Physics>
//       <mesh ref={ref}>
//         <sphereGeometry args={[15, 32, 16]} />
//         <meshStandardMaterial />
//       </mesh>
//     </Physics>
//   );
// }
