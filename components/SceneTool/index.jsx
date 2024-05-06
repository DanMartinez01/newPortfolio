"use client";
import { Canvas } from "@react-three/fiber";
import Model from "../SceneTool/Model";
import { Environment, PerspectiveCamera } from "@react-three/drei";

export default function index() {
  return (
    <Canvas
      style={{
        height: "300px",
      }}
    >
      <PerspectiveCamera
        fov={100}
        near={5}
        far={2000}
        position={[100, 100, 100]}
      />
      <Model />
      <directionalLight intensity={10} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
