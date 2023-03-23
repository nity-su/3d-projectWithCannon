import {
  CameraControls,
  OrbitControls,
  useAnimations,
} from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useInput } from "./hooks/userInput";
import player from "./model/player.glb";
import { Debug, useBox, useSphere } from "@react-three/cannon";
import { Quaternion, Vector3 } from "three";
import CANNON from "cannon-es";

export default function Player({ property }) {
  const model = useLoader(GLTFLoader, player);
  const { actions } = useAnimations(model.animations, model.scene);
  console.log(model.scene);
  const { forward, backward, left, right } = useInput();

  const { camera } = useThree();
  const controlRef = useRef();
  // Set the current World position

  // Set the direction of the character
  // const halfExtents = new CANNON.Vec3(2, 2, 2);

  const [mesh, api] = useBox(() => ({
    args: [1, 1, 1],
    position: [0, 0.7, 0],
    mass: 48,
    type: "Kinematic",
  }));

  const currentAction = useRef("");

  useEffect(() => {
    console.log(forward, backward, left, right);
    let action = "";
    if (forward || backward || left || right) {
      action = "walking";
    } else {
      action = "idle";
    }
    // actions 비교 후 actions

    if (currentAction.current !== action) {
      const nextActionToplay = actions[action];
      const current = actions[currentAction.current];
      console.log(current);

      if (current) {
        current.fadeOut(0.1);
      }
      if (nextActionToplay) {
        nextActionToplay.reset().play();
      }

      currentAction.current = action;
    }

    // actions.walking.play();
  }, [forward, backward, right, left]);

  function directionOffset({ forward, backward, right, left }) {
    var directionOffset = 0; // w

    if (forward) {
      if (left) {
        directionOffset = Math.PI / 4; // w+a
      } else if (right) {
        directionOffset = -Math.PI / 4; // w+d
      }
    } else if (backward) {
      if (left) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
      } else if (right) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
      } else {
        directionOffset = Math.PI; // s
      }
    } else if (left) {
      directionOffset = Math.PI / 2; // a
    } else if (right) {
      directionOffset = -Math.PI / 2; // d
    }

    return directionOffset;
  }

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  const rotateQuaternion = new Quaternion();
  const rotateAngle = new Vector3(0, 1, 0);
  let walkdirection = new Vector3(0, 0, 0);
  let cameraTarget = new Vector3(0, 0, 0);
  let frontVector = new Vector3(0, 0, 0);
  let sideVector = new Vector3(0, 0, 0);
  let direction = new Vector3(0, 0, 0);

  // frontVector.set(0, 0, Number(forward) - Number(backward));
  // sideVector.set(Number(right) - Number(left), 0, 0);
  // direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(1);
  // api.velocity.set(direction.x, 0, direction.z);

  console.log("api", api);

  function cameraTargetUpdate(moveX, moveZ) {
    camera.position.z += moveZ;
    camera.position.x += moveX;

    cameraTarget.x = model.scene.position.x;
    cameraTarget.y = model.scene.position.y + 2;
    cameraTarget.z = model.scene.position.z;

    if (controlRef.current) controlRef.current.target = cameraTarget;
  }

  // frontVector.set(0, 0, moveZ);
  // sideVector.set(moveX, 0, 0);
  // direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(1);
  // api.velocity.set(direction.x, 0, direction.z);

  useFrame((state, delta) => {
    // mesh.current.getWorldPosition(model.scene.position);
    // mesh.current.position.copy(model.scene.position);
    // let vect = new Vector3(0, 0, 0);
    // mesh.current.getWorldDirection();
    // mesh.current.getWorldPosition(orbitRef.current.target);
    // meshRef.current.getWorldPosition(camera.position);

    const cameraOffset = new Vector3(0.0, 3.0, -2.0); // NOTE Constant offset between the camera and the target
    if (
      currentAction.current === "walking" ||
      currentAction.current === "running"
    ) {
      let newDirctionOffset = directionOffset({
        forward,
        backward,
        right,
        left,
      });
      let angleYCameraDircetion = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      );

      rotateQuaternion.setFromAxisAngle(
        rotateAngle,
        newDirctionOffset + angleYCameraDircetion
      );

      model.scene.quaternion.rotateTowards(rotateQuaternion, 0.2);

      //calculate dirction

      camera.getWorldDirection(walkdirection);
      walkdirection.y = 0;
      walkdirection.normalize();
      walkdirection.applyAxisAngle(rotateAngle, newDirctionOffset);

      const velocity = 1;

      const moveX = walkdirection.x * velocity * delta;
      const moveZ = walkdirection.z * velocity * delta;

      model.scene.position.x += moveX;
      model.scene.position.z += moveZ;

      api.position.set(
        model.scene.position.x,
        model.scene.position.y + 1,
        model.scene.position.z
      );
      // model.scene.position.copy(mesh.current.position);
      cameraTargetUpdate(moveX, moveZ);
    }
  });

  // 오비컨트롤 포지션을 같이 옮길 수 있는 방법.
  return (
    <>
      <OrbitControls ref={controlRef} />

      <Cube />
      <mesh ref={mesh}></mesh>
      <primitive object={model.scene} position={[0, 0, 0]} />
    </>
  );
}
function Cube(props) {
  const [ref, api] = useBox(() => ({
    args: [1, 1, 1],
    mass: 1,
    position: [3, 2, 0],
    type: "Dynamic",
    ...props,
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}
