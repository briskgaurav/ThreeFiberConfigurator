import React, { useEffect, useState } from "react";
import Model from "./Components/Model";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { colors } from "../Colors";

function App() {
  const [color, setColor] = useState('#F8F8FF')
  return (
    <Canvas flat shadows camera={{ fov: 12, position: [0, 5, 20] }}>
      <OrbitControls />
      <Environment files={"/hdri.hdr"} />

      <Model color={color} />
    </Canvas>
  );
}

export default App;
