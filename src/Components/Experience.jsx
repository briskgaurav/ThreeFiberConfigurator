import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

function Experience({ color, Visible, Wheels, color2 }) {
  return (
    <Canvas className="model" flat shadows camera={{ fov: 5, position: [0, 0, 30] }}>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={500} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <group position={[0, -1, 0]}>
        <ContactShadows scale={10} opacity={0.2} blur={1} />
      </group>
      <Environment files={"/hdri.hdr"} />


      <Model Wheels={Wheels} color2={color2} Visible={Visible} color={color} />
      <OrbitControls
        enableDamping
        enableZoom={true}
        minDistance={5}
        maxDistance={50}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
    </Canvas>
  );
}

export default Experience;
