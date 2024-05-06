import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/bolt.glb");
  const bolt = useRef(null);
  console.log("nodes", nodes);

  let useControls;
  if (process.env.NODE_ENV === "development") {
    useControls = require("leva").useControls;
  } else {
    useControls = () => ({}); // Mocking useControls function in production mode
  }

  useFrame(() => {
    if (bolt.current) {
      bolt.current.rotation.y += 0.01;
    }
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },

    transmission: { value: 1, min: 0, max: 1, step: 0.1 },

    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    chromaticAberration: { value: 0.02, min: 0, max: 1 },

    backside: { value: true },
  });

  return (
    <mesh ref={bolt} {...nodes.Bolt} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <MeshTransmissionMaterial {...materialProps} />
    </mesh>
  );
}
