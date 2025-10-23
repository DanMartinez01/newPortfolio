"use client";
import { Canvas } from "@react-three/fiber";
import Model from "../SceneBolt/Model";
import { PerspectiveCamera } from "@react-three/drei";

export default function index() {
  return (
    <Canvas
      style={{
        height: "150px",
      }}
    >
      <PerspectiveCamera
        fov={100}
        near={5}
        far={2000}
        position={[100, 100, 100]}
      />
      <Model />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={10} position={[0, 2, 3]} />
      <directionalLight intensity={5} position={[-2, -1, -1]} />
    </Canvas>
  );
}
