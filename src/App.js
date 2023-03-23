import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Cylinder3d from "./Cylinder3d";
import Plane3d from "./Plane3d";
import Player from "./Player";
import { Debug, Physics } from "@react-three/cannon";
import Plane3DVelocity from "./model/Plane3DVelocity";
import CubePyical from "./Cube";

/**
 * @see https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#constructor-arguments
 * @see https://threejs.org/docs/index.html?q=cylinderGeometry#api/en/geometries/CylinderGeometry
 * @see https://www.copycat.dev/blog/react-three-fiber/#:~:text=Setting%20up%20our%20react-three-fiber%20project%201%20Step%201,Rendering%20the%203D%20Cylinder%20Component%20...%20%EA%B8%B0%ED%83%80%20%ED%95%AD%EB%AA%A9
 */
// const Lego = ({ boundary, count }) => {
//   const [trees, setTrees] = useState([]);
//   useEffect(() => {}, [boundary, count]);
//   const model = useLoader(GLTFLoader, lego);
//   model.scene.traverse((object) => {
//     if (object.isMesh) {
//       object.castShadow = true;
//     }
//   });
//   console.log(model);
//   return (
//     <group>
//       {" "}
//       <object3D>
//         <primitive
//           object={model.scene.clone()}
//           scale={[0.1, 0.1, 0.1]}
//           rotation={[Math.PI * -0.25, 0, 0]}
//         />
//       </object3D>
//       <object3D>
//         <primitive
//           object={model.scene.clone()}
//           scale={[0.1, 0.1, 0.1]}
//           rotation={[Math.PI * 0.25, 0, 0]}
//         />
//       </object3D>
//     </group>
//   );
// };

function CameraHelper() {
  const camera = useThree((state) => state.camera);
  const cameraRef = useRef();

  useFrame(() => {
    // cameraRef.current.updateMatrixWorld();
  });

  return <cameraHelper args={[camera]} ref={cameraRef} />;
}

function DirectionalHelper() {
  const light = useRef();

  useHelper(light, DirectionalLightHelper, 5, "red");

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight ref={light} position={[0, 10, 0]} castShadow />
    </>
  );
}

function DirectionalHelper2() {
  const light = useRef();

  useHelper(light, DirectionalLightHelper, 5, "red");

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight ref={light} position={[10, 10, 0]} castShadow />
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Canvas camera={{ position: [3, 3, 3], fov: 80 }}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Cylinder3d position={[-1.2, 0, 0]} />
        <Cylinder3d position={[1.2, 0, 0]} />
      </Canvas>

     
      <Canvas>
        <CameraHelper />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.5} />
        <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
        <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
      </Canvas>

 
      <Canvas shadows>
        <OrbitControls />
        <DirectionalHelper />

        <Cylinder3d position={[-1.2, 0, 0]} />
        <Cylinder3d position={[1.2, 0, 0]} />
        <Plane3d />
        <hemisphereLight args={["#fff23b", "#c257ff", 1]} />
      </Canvas> */}

      {/* Canvas 4 */}
      <Canvas style={{ width: "100vw", height: "100vh" }} shadows>
        {/* <DirectionalHelper2 /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <CubePyical />
          <Player />
          <Plane3DVelocity />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
