'use client'
import * as THREE from 'three';
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/animation/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const [textureLoaded, setTextureLoaded] = useState(false);


  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("/animation/default_baseColorMetal.jpg", () => {

    setTextureLoaded(true);
  });


  if (textureLoaded) {
    gltf.scene.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }

  gltf.scene.scale.set(40, 40, 40);

  useFrame(() => {
    mesh.current.rotation.y += 0.006;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default function Monkey() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
