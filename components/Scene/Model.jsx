// import React, { useRef } from "react";
// import { useGLTF, Text } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { MeshTransmissionMaterial } from "@react-three/drei";
// import { useControls } from "leva";

// export default function Model() {
//   const { nodes } = useGLTF("/torus.glb");
//   const torus = useRef(null);

//   useFrame(() => {
//     if (torus.current) {
//       torus.current.rotation.x += 0.01;
//     }
//   });

//   const materialProps = useControls({
//     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
//     roughness: { value: 0, min: 0, max: 1, step: 0.1 },

//     transmission: { value: 1, min: 0, max: 1, step: 0.1 },

//     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

//     chromaticAberration: { value: 0.02, min: 0, max: 1 },

//     backside: { value: true },
//   });

//   return (
//     <group>
//       <mesh ref={torus} {...nodes.Torus} scale={[2.1, 2.1, 2.1]}>
//         <MeshTransmissionMaterial {...materialProps} />
//       </mesh>
//       <Text
//         position={[0, 0, -1]}
//         fontSize={6}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         {"<DaniMartinez/>"}
//       </Text>
//     </group>
//   );
// }

import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";

export default function Model() {
  const { nodes } = useGLTF("/torus.glb");
  const torus = useRef(null);

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.01;
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

  const { viewport } = useThree();
  const fontSize = viewport.width < 600 ? 2 : 6; // Adjust the font size based on viewport width

  return (
    <group>
      <mesh ref={torus} {...nodes.Torus} scale={[2.1, 2.1, 2.1]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <Text
        position={[0, 0, -1]}
        fontSize={fontSize} // Use responsive font size
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {"<DaniMartinez/>"}
      </Text>
    </group>
  );
}
