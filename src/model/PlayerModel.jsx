/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function PlayerModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./player.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <primitive object={nodes.Ctrl_Master} />
          <skinnedMesh
            name="baju"
            geometry={nodes.baju.geometry}
            material={materials.body}
            skeleton={nodes.baju.skeleton}
          />
          <skinnedMesh
            name="belenggu"
            geometry={nodes.belenggu.geometry}
            material={materials.body}
            skeleton={nodes.belenggu.skeleton}
          />
          <skinnedMesh
            name="celana"
            geometry={nodes.celana.geometry}
            material={materials.body}
            skeleton={nodes.celana.skeleton}
          />
          <skinnedMesh
            name="ekor"
            geometry={nodes.ekor.geometry}
            material={materials.body}
            skeleton={nodes.ekor.skeleton}
          />
          <skinnedMesh
            name="kepala"
            geometry={nodes.kepala.geometry}
            material={materials.body}
            skeleton={nodes.kepala.skeleton}
          />
          <group name="mata">
            <skinnedMesh
              name="Mesh008"
              geometry={nodes.Mesh008.geometry}
              material={materials.body}
              skeleton={nodes.Mesh008.skeleton}
            />
            <skinnedMesh
              name="Mesh008_1"
              geometry={nodes.Mesh008_1.geometry}
              material={materials.mata}
              skeleton={nodes.Mesh008_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="rambut"
            geometry={nodes.rambut.geometry}
            material={materials.body}
            skeleton={nodes.rambut.skeleton}
          />
          <skinnedMesh
            name="sepatu"
            geometry={nodes.sepatu.geometry}
            material={materials.body}
            skeleton={nodes.sepatu.skeleton}
          />
          <skinnedMesh
            name="tangan"
            geometry={nodes.tangan.geometry}
            material={materials.body}
            skeleton={nodes.tangan.skeleton}
          />
        </group>
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            name="mixamorigHips_1"
            position={[-0.09, -0.74, -80.08]}
            rotation={[-1.52, -0.01, 0.05]}
          >
            <group
              name="mixamorigSpine_1"
              position={[0, 6.35, -0.29]}
              rotation={[0.06, 0.03, 0.01]}
            >
              <group
                name="mixamorigSpine1_1"
                position={[0, 7.41, 0]}
                rotation={[0.08, 0.02, -0.01]}
              >
                <group
                  name="mixamorigSpine2_1"
                  position={[0, 8.47, 0]}
                  rotation={[0.08, 0.02, -0.01]}
                >
                  <group
                    name="mixamorigNeck_1"
                    position={[0, 9.53, 0]}
                    rotation={[-0.03, 0, -0.04]}
                  >
                    <group
                      name="mixamorigHead_1"
                      position={[0, 4.89, 0.23]}
                      rotation={[-0.17, -0.03, -0.08]}
                    >
                      <group
                        name="mixamorigHeadTop_End"
                        position={[0, 24.72, 1.16]}
                      />
                    </group>
                  </group>
                  <group
                    name="mixamorigLeftShoulder_1"
                    position={[5.91, 7.95, -0.06]}
                    rotation={[1.61, -0.41, -1.58]}
                  >
                    <group
                      name="mixamorigLeftArm_1"
                      position={[0, 12.22, 0]}
                      rotation={[1.01, -0.21, 0.21]}
                    >
                      <group
                        name="mixamorigLeftForeArm_1"
                        position={[0, 13.06, 0]}
                        rotation={[0.02, 0, 0.3]}
                      >
                        <group
                          name="mixamorigLeftHand_1"
                          position={[0, 14.67, 0]}
                          rotation={[0.18, 0.45, -0.17]}
                        >
                          <group
                            name="mixamorigLeftHandThumb1_1"
                            position={[-1.6, 2.96, 0.42]}
                            rotation={[0.36, 0.25, 0.46]}
                          >
                            <group
                              name="mixamorigLeftHandThumb2_1"
                              position={[-0.03, 2.71, 0]}
                              rotation={[-0.01, -0.04, -0.44]}
                            >
                              <group
                                name="mixamorigLeftHandThumb3_1"
                                position={[-0.12, 2.3, 0]}
                                rotation={[-0.29, -0.02, -0.22]}
                              >
                                <group
                                  name="mixamorigLeftHandThumb4"
                                  position={[0.15, 1.93, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandIndex1_1"
                            position={[-2.36, 11.86, -0.05]}
                            rotation={[0.42, 0, 0.08]}
                          >
                            <group
                              name="mixamorigLeftHandIndex2_1"
                              position={[0.01, 1.05, 0]}
                              rotation={[0.37, -0.01, -0.05]}
                            >
                              <group
                                name="mixamorigLeftHandIndex3_1"
                                position={[0, 1.16, 0]}
                                rotation={[0.49, -0.01, -0.07]}
                              >
                                <group
                                  name="mixamorigLeftHandIndex4"
                                  position={[-0.01, 0.71, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandMiddle1_1"
                            position={[-0.98, 11.53, -0.11]}
                            rotation={[0.56, -0.01, -0.01]}
                          >
                            <group
                              name="mixamorigLeftHandMiddle2_1"
                              position={[0.01, 1.5, 0]}
                              rotation={[0.37, -0.01, -0.05]}
                            >
                              <group
                                name="mixamorigLeftHandMiddle3_1"
                                position={[0, 1.5, 0]}
                                rotation={[0.49, -0.01, -0.06]}
                              >
                                <group
                                  name="mixamorigLeftHandMiddle4"
                                  position={[-0.01, 1.12, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandRing1_1"
                            position={[0.91, 10.66, -0.26]}
                            rotation={[0.66, 0.01, -0.09]}
                          >
                            <group
                              name="mixamorigLeftHandRing2_1"
                              position={[-0.01, 1.62, 0]}
                              rotation={[0.37, 0, -0.03]}
                            >
                              <group
                                name="mixamorigLeftHandRing3_1"
                                position={[0, 1.45, 0]}
                                rotation={[0.49, -0.01, -0.03]}
                              >
                                <group
                                  name="mixamorigLeftHandRing4"
                                  position={[0.02, 1.2, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandPinky1_1"
                            position={[2.44, 8.76, 0.04]}
                            rotation={[0.7, 0, -0.1]}
                          >
                            <group
                              name="mixamorigLeftHandPinky2_1"
                              position={[0.04, 1.98, 0]}
                              rotation={[0.37, -0.01, -0.07]}
                            >
                              <group
                                name="mixamorigLeftHandPinky3_1"
                                position={[-0.01, 1.54, 0]}
                                rotation={[0.49, -0.01, -0.06]}
                              >
                                <group
                                  name="mixamorigLeftHandPinky4"
                                  position={[-0.03, 1.31, 0]}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="mixamorigRightShoulder_1"
                    position={[-5.91, 7.95, -0.09]}
                    rotation={[1.64, 0.37, 1.47]}
                  >
                    <group
                      name="mixamorigRightArm_1"
                      position={[0, 12.22, 0]}
                      rotation={[0.66, -0.26, -0.12]}
                    >
                      <group
                        name="mixamorigRightForeArm_1"
                        position={[0, 13.06, 0]}
                        rotation={[0.03, -0.01, -0.57]}
                      >
                        <group
                          name="mixamorigRightHand_1"
                          position={[0, 14.66, 0]}
                          rotation={[-0.11, 0.02, -0.27]}
                        >
                          <group
                            name="mixamorigRightHandThumb1_1"
                            position={[0.78, 0.17, 2.65]}
                            rotation={[0.36, -0.26, -0.34]}
                          >
                            <group
                              name="mixamorigRightHandThumb2_1"
                              position={[0.4, 2.17, 0]}
                              rotation={[0, 0.02, 0.14]}
                            >
                              <group
                                name="mixamorigRightHandThumb3_1"
                                position={[-0.09, 0.78, 0]}
                                rotation={[-0.27, -0.02, 0.16]}
                              >
                                <group
                                  name="mixamorigRightHandThumb4"
                                  position={[-0.31, 0.69, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandIndex1_1"
                            position={[2.55, 9, -0.47]}
                            rotation={[0.42, -0.02, -0.08]}
                          >
                            <group
                              name="mixamorigRightHandIndex2_1"
                              position={[0.01, 1.59, 0]}
                              rotation={[0.38, 0, 0.02]}
                            >
                              <group
                                name="mixamorigRightHandIndex3_1"
                                position={[-0.01, 1.54, 0]}
                                rotation={[0.49, 0.01, 0.03]}
                              >
                                <group
                                  name="mixamorigRightHandIndex4"
                                  position={[0, 1.26, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandMiddle1_1"
                            position={[0.94, 10.81, 0.08]}
                            rotation={[0.57, -0.04, 0.01]}
                          >
                            <group
                              name="mixamorigRightHandMiddle2_1"
                              position={[0.02, 1.26, 0]}
                              rotation={[0.38, 0, -0.01]}
                            >
                              <group
                                name="mixamorigRightHandMiddle3_1"
                                position={[-0.01, 1.58, 0]}
                                rotation={[0.49, 0.01, 0.02]}
                              >
                                <group
                                  name="mixamorigRightHandMiddle4"
                                  position={[-0.01, 1.1, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandRing1_1"
                            position={[-0.48, 11.51, 0.14]}
                            rotation={[0.67, -0.02, 0.07]}
                          >
                            <group
                              name="mixamorigRightHandRing2_1"
                              position={[0.02, 1.6, 0]}
                              rotation={[0.38, 0, 0]}
                            >
                              <group
                                name="mixamorigRightHandRing3_1"
                                position={[-0.01, 1.44, 0]}
                                rotation={[0.49, 0.01, 0.02]}
                              >
                                <group
                                  name="mixamorigRightHandRing4"
                                  position={[-0.02, 1.13, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandPinky1_1"
                            position={[-3.01, 4.94, -0.28]}
                            rotation={[0.72, -0.06, 0.09]}
                          >
                            <group
                              name="mixamorigRightHandPinky2_1"
                              position={[-0.01, 1.88, 0]}
                              rotation={[0.38, 0, 0.03]}
                            >
                              <group
                                name="mixamorigRightHandPinky3_1"
                                position={[0.03, 1.69, 0]}
                                rotation={[0.49, 0, -0.02]}
                              >
                                <group
                                  name="mixamorigRightHandPinky4"
                                  position={[-0.02, 1.14, 0]}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="mixamorigLeftUpLeg_1"
              position={[7.41, -3.54, 0.22]}
              rotation={[-0.54, 0.08, -3]}
            >
              <group
                name="mixamorigLeftLeg_1"
                position={[0, 31.78, 0]}
                rotation={[-0.86, -0.09, -0.07]}
              >
                <group
                  name="mixamorigLeftFoot_1"
                  position={[0, 35.89, 0]}
                  rotation={[1.07, -0.14, -0.02]}
                >
                  <group
                    name="mixamorigLeftToeBase_1"
                    position={[0, 14.53, 0]}
                    rotation={[0.81, 0.03, -0.04]}
                  >
                    <group
                      name="mixamorigLeftToe_End"
                      position={[0, 5.34, 0]}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group
              name="mixamorigRightUpLeg_1"
              position={[-7.41, -3.54, 1.33]}
              rotation={[-0.33, -0.13, 3.06]}
            >
              <group
                name="mixamorigRightLeg_1"
                position={[0, 31.79, 0]}
                rotation={[-0.52, 0.07, 0.01]}
              >
                <group
                  name="mixamorigRightFoot_1"
                  position={[0, 35.93, 0]}
                  rotation={[1.16, 0.07, -0.03]}
                >
                  <group
                    name="mixamorigRightToeBase_1"
                    position={[0, 14.46, 0]}
                    rotation={[0.73, -0.04, 0.03]}
                  >
                    <group
                      name="mixamorigRightToe_End"
                      position={[0, 5.4, 0]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Armature002" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            name="mixamorigHips_2"
            position={[0.27, 0.61, -75.2]}
            rotation={[-1.44, -0.11, -0.05]}
          >
            <group
              name="mixamorigSpine_2"
              position={[0, 6.35, -0.29]}
              rotation={[0.19, 0.25, 0.02]}
            >
              <group
                name="mixamorigSpine1_2"
                position={[0, 7.41, 0]}
                rotation={[-0.06, 0.03, 0.02]}
              >
                <group
                  name="mixamorigSpine2_2"
                  position={[0, 8.47, 0]}
                  rotation={[-0.06, 0.03, 0.02]}
                >
                  <group
                    name="mixamorigNeck_2"
                    position={[0, 9.53, 0]}
                    rotation={[0.12, -0.04, -0.05]}
                  >
                    <group
                      name="mixamorigHead_2"
                      position={[0, 4.89, 0.23]}
                      rotation={[-0.35, -0.12, 0]}
                    >
                      <group
                        name="mixamorigHeadTop_End_1"
                        position={[0, 24.72, 1.16]}
                      />
                    </group>
                  </group>
                  <group
                    name="mixamorigLeftShoulder_2"
                    position={[5.91, 7.95, -0.06]}
                    rotation={[1.66, -0.33, -1.43]}
                  >
                    <group
                      name="mixamorigLeftArm_2"
                      position={[0, 12.22, 0]}
                      rotation={[1.01, 0.36, -1.07]}
                    >
                      <group
                        name="mixamorigLeftForeArm_2"
                        position={[0, 13.06, 0]}
                        rotation={[0.05, 0.04, 1.26]}
                      >
                        <group
                          name="mixamorigLeftHand_2"
                          position={[0, 14.67, 0]}
                          rotation={[0.04, -0.11, -0.15]}
                        >
                          <group
                            name="mixamorigLeftHandThumb1_2"
                            position={[-1.6, 2.96, 0.42]}
                            rotation={[0.31, 0.17, 0.49]}
                          >
                            <group
                              name="mixamorigLeftHandThumb2_2"
                              position={[-0.03, 2.71, 0]}
                              rotation={[0.01, -0.01, -0.2]}
                            >
                              <group
                                name="mixamorigLeftHandThumb3_2"
                                position={[-0.12, 2.3, 0]}
                                rotation={[-0.04, -0.01, 0.1]}
                              >
                                <group
                                  name="mixamorigLeftHandThumb4_1"
                                  position={[0.15, 1.93, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandIndex1_2"
                            position={[-2.36, 11.86, -0.05]}
                            rotation={[0.09, 0, 0.08]}
                          >
                            <group
                              name="mixamorigLeftHandIndex2_2"
                              position={[0.01, 1.05, 0]}
                              rotation={[0.21, 0, -0.04]}
                            >
                              <group
                                name="mixamorigLeftHandIndex3_2"
                                position={[0, 1.16, 0]}
                                rotation={[0.05, 0, -0.02]}
                              >
                                <group
                                  name="mixamorigLeftHandIndex4_1"
                                  position={[-0.01, 0.71, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandMiddle1_2"
                            position={[-0.98, 11.53, -0.11]}
                            rotation={[0.09, -0.01, 0.08]}
                          >
                            <group
                              name="mixamorigLeftHandMiddle2_2"
                              position={[0.01, 1.5, 0]}
                              rotation={[0.21, 0, -0.03]}
                            >
                              <group
                                name="mixamorigLeftHandMiddle3_2"
                                position={[0, 1.5, 0]}
                                rotation={[0.05, 0, -0.02]}
                              >
                                <group
                                  name="mixamorigLeftHandMiddle4_1"
                                  position={[-0.01, 1.12, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandRing1_2"
                            position={[0.91, 10.66, -0.26]}
                            rotation={[0.09, 0.01, 0.06]}
                          >
                            <group
                              name="mixamorigLeftHandRing2_2"
                              position={[-0.01, 1.62, 0]}
                              rotation={[0.21, 0, -0.02]}
                            >
                              <group
                                name="mixamorigLeftHandRing3_2"
                                position={[0, 1.45, 0]}
                                rotation={[0.16, 0, 0]}
                              >
                                <group
                                  name="mixamorigLeftHandRing4_1"
                                  position={[0.02, 1.2, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandPinky1_2"
                            position={[2.44, 8.76, 0.04]}
                            rotation={[0.08, 0.01, 0.02]}
                          >
                            <group
                              name="mixamorigLeftHandPinky2_2"
                              position={[0.04, 1.98, 0]}
                              rotation={[0.22, 0.01, 0.01]}
                            >
                              <group
                                name="mixamorigLeftHandPinky3_2"
                                position={[-0.01, 1.54, 0]}
                                rotation={[0.16, 0, -0.03]}
                              >
                                <group
                                  name="mixamorigLeftHandPinky4_1"
                                  position={[-0.03, 1.31, 0]}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="mixamorigRightShoulder_2"
                    position={[-5.91, 7.95, -0.09]}
                    rotation={[1.62, 0.33, 1.5]}
                  >
                    <group
                      name="mixamorigRightArm_2"
                      position={[0, 12.22, 0]}
                      rotation={[0.65, 0.03, -0.25]}
                    >
                      <group
                        name="mixamorigRightForeArm_2"
                        position={[0, 13.06, 0]}
                        rotation={[0.05, -0.06, -1.61]}
                      >
                        <group
                          name="mixamorigRightHand_2"
                          position={[0, 14.66, 0]}
                          rotation={[-0.37, 0.19, 0.06]}
                        >
                          <group
                            name="mixamorigRightHandThumb1_2"
                            position={[0.78, 0.17, 2.65]}
                            rotation={[0.19, -0.18, -0.2]}
                          >
                            <group
                              name="mixamorigRightHandThumb2_2"
                              position={[0.4, 2.17, 0]}
                              rotation={[-0.05, -0.05, -0.12]}
                            >
                              <group
                                name="mixamorigRightHandThumb3_2"
                                position={[-0.09, 0.78, 0]}
                                rotation={[-0.08, 0.01, -0.31]}
                              >
                                <group
                                  name="mixamorigRightHandThumb4_1"
                                  position={[-0.31, 0.69, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandIndex1_2"
                            position={[2.55, 9, -0.47]}
                            rotation={[0.06, -0.01, -0.08]}
                          >
                            <group
                              name="mixamorigRightHandIndex2_2"
                              position={[0.01, 1.59, 0]}
                              rotation={[0.29, 0, 0.02]}
                            >
                              <group
                                name="mixamorigRightHandIndex3_2"
                                position={[-0.01, 1.54, 0]}
                                rotation={[0.03, 0, 0.01]}
                              >
                                <group
                                  name="mixamorigRightHandIndex4_1"
                                  position={[0, 1.26, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandMiddle1_2"
                            position={[0.94, 10.81, 0.08]}
                            rotation={[0.06, -0.03, -0.07]}
                          >
                            <group
                              name="mixamorigRightHandMiddle2_2"
                              position={[0.02, 1.26, 0]}
                              rotation={[0.29, 0, 0]}
                            >
                              <group
                                name="mixamorigRightHandMiddle3_2"
                                position={[-0.01, 1.58, 0]}
                                rotation={[0.03, 0, 0]}
                              >
                                <group
                                  name="mixamorigRightHandMiddle4_1"
                                  position={[-0.01, 1.1, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandRing1_2"
                            position={[-0.48, 11.51, 0.14]}
                            rotation={[0.06, -0.01, -0.07]}
                          >
                            <group
                              name="mixamorigRightHandRing2_2"
                              position={[0.02, 1.6, 0]}
                              rotation={[0.29, 0, 0.01]}
                            >
                              <group
                                name="mixamorigRightHandRing3_2"
                                position={[-0.01, 1.44, 0]}
                                rotation={[0.03, 0, -0.01]}
                              >
                                <group
                                  name="mixamorigRightHandRing4_1"
                                  position={[-0.02, 1.13, 0]}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandPinky1_2"
                            position={[-3.01, 4.94, -0.28]}
                            rotation={[0.06, -0.05, -0.09]}
                          >
                            <group
                              name="mixamorigRightHandPinky2_2"
                              position={[-0.01, 1.88, 0]}
                              rotation={[0.29, 0.01, 0.04]}
                            >
                              <group
                                name="mixamorigRightHandPinky3_2"
                                position={[0.03, 1.69, 0]}
                                rotation={[0.03, 0, -0.03]}
                              >
                                <group
                                  name="mixamorigRightHandPinky4_1"
                                  position={[-0.02, 1.14, 0]}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="mixamorigLeftUpLeg_2"
              position={[7.41, -3.54, 0.22]}
              rotation={[-1.01, -0.01, -2.92]}
            >
              <group
                name="mixamorigLeftLeg_2"
                position={[0, 31.78, 0]}
                rotation={[-2.2, -0.11, -0.05]}
              >
                <group
                  name="mixamorigLeftFoot_2"
                  position={[0, 35.89, 0]}
                  rotation={[0.71, 0.04, 0.18]}
                >
                  <group
                    name="mixamorigLeftToeBase_2"
                    position={[0, 14.53, 0]}
                    rotation={[0.7, 0.04, -0.03]}
                  >
                    <group
                      name="mixamorigLeftToe_End_1"
                      position={[0, 5.34, 0]}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group
              name="mixamorigRightUpLeg_2"
              position={[-7.41, -3.54, 1.33]}
              rotation={[0, -0.08, -3.09]}
            >
              <group
                name="mixamorigRightLeg_2"
                position={[0, 31.79, 0]}
                rotation={[-0.63, -0.18, 0.02]}
              >
                <group
                  name="mixamorigRightFoot_2"
                  position={[0, 35.93, 0]}
                  rotation={[1.24, -0.16, -0.02]}
                >
                  <group
                    name="mixamorigRightToeBase_2"
                    position={[0, 14.46, 0]}
                    rotation={[1.25, 0, 0.04]}
                  >
                    <group
                      name="mixamorigRightToe_End_1"
                      position={[0, 5.4, 0]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./player.glb");