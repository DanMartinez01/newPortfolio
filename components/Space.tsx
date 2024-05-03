'use client'
import * as THREE from 'three';
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
function MeshComponent() {
    const fileUrl = "/animation/space/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const [textureLoaded, setTextureLoaded] = useState(false);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/animation/space/Block_of_Gold_baseColor.png", () => {

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


    gltf.scene.scale.set(.05, .05, .05);

    useFrame(() => {
        mesh.current.rotation.y += 0.008;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export default function Space() {
    return (
        <div className='flex justify-center items-center'>
            <Canvas>
                <OrbitControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <MeshComponent />
            </Canvas>
        </div>
    );
}