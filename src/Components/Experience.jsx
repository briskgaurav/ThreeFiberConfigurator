import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

function Experience({ color, Visible, Wheels,color2 }) {
    
  return (
    <Canvas flat shadows camera={{ fov: 5, position: [0, 0, 30] }}>
      <OrbitControls
        enableDamping
        enableZoom={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
      <Environment files={"/hdri.hdr"} />
      
      <Model Wheels={Wheels} color2={color2} Visible={Visible} color={color} />
    </Canvas>
  );
}

export default Experience;
