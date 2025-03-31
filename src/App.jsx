import React, { useEffect, useState } from "react";
import Model from "./Components/Model";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { colors } from "../Colors";
import { HiBars2 } from "react-icons/hi2";

function App() {
  const [color, setColor] = useState("#F8F8FF");
  return (
    <div className="w-full h-full bg-white">
      <nav className="absolute pt-10 px-10 w-full flex items-center justify-end uppercase font-regular text-black left-1/2 -translate-x-1/2 ">
        <div className="flex items-center mx-10 pb-2 justify-between w-full">
          <div className="flex items-center gap-2 justify-self-end">
            <p className="w-5 h-5 rounded-full bg-zinc-100"></p>
            <p className="w-5 h-5 rounded-full  border-3 bg-zinc-100"></p>
            <p className="w-5 h-5 rounded-full bg-zinc-100"></p>
          </div>
          <h2 className="tracking-[1vw] ">Chevrolet</h2>
        </div>
      </nav>
      <div className="absolute left-1/2  top-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
        <h1 className="text-[15vw] text-zinc-700 font-bold text-center tracking-tight">CAMARO ZL</h1>
      </div>
      <Canvas flat shadows camera={{ fov: 12, position: [0, 0, 20] }}>
        <OrbitControls
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 2}
        />
        <Environment files={"/hdri.hdr"} />
        <Model color={color} />
      </Canvas>
    </div>
  );
}

export default App;
