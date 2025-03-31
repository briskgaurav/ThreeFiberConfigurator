import React, { useEffect, useState } from "react";

import { colors } from "../Colors";
import Splash from "./Components/Splash";
import Experience from "./Components/Experience";
import { div } from "three/tsl";

function App() {
  const [color, setColor] = useState("#F8F8FF");
  const [loading, setLoading] = useState(true);
  return (
    <>
      {/* <Splash /> */}
      <div className="w-full h-full bg-white">
        <nav className="absolute pt-10 px-10 w-full flex items-center justify-end uppercase font-regular text-black left-1/2 -translate-x-1/2 ">
          <div className="flex items-center mx-10 pb-2 justify-between w-full">
            <div className="flex items-center gap-2 justify-self-end">
              <p className="w-6 h-6 rounded-full  border-3 "></p>
              <p className="w-4 h-4 rounded-full border"></p>
              <p className="w-4 h-4 rounded-full border"></p>
            </div>
            <h2 className="tracking-[1vw] ">Chevrolet</h2>
          </div>
        </nav>
        <div className="absolute left-1/2 -translate-x-1/2 top-[10%] px-16 py-5 z-30 flex items-center justify-center border rounded-lg">
          <p className="font-thin text-xl uppercase absolute cursor-pointer ">
            Body
          </p>
        </div>
        <div className="absolute left-1/2  top-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
          <h1
            className="text-[15vw] font-bold text-center tracking-tight 
             bg-gradient-to-b from-zinc-900 to-white bg-clip-text text-transparent"
          >
            CAMARO ZL
          </h1>
        </div>

        <div className="w-[100%] flex-wrap flex items-center justify-center ColorPallate bottom-0 right-0 h-[10%] p-4 gap-2 rounded-xl z-10 absolute">
          {colors.map((item, index) => {
            return (
              <>
                <div key={index}
                  onClick={() => setColor(item.hex)}
                  style={{ background: item.hex }}
                  className="w-[8%] h-[100%] cursor-pointer rounded-tr-2xl rounded-bl-2xl border  flex items-center justify-center"
                ></div>
              </>
            );
          })}
        </div>
        <Experience color={color} />
      </div>
    </>
  );
}

export default App;
