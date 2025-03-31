import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

function Experience({ color }) {
  return (
    <Canvas flat shadows camera={{ fov: 12, position: [0, 0, 20] }}>
      <OrbitControls
        enableDamping
        enableZoom={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
      <Environment files={"/hdri.hdr"} />
      <Model color={color} />
    </Canvas>
  );
}

export default Experience;
