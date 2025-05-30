import React, { useEffect, useRef, useState } from "react";
import { colors, glassColors } from "../Colors";
import Splash from "./Components/Splash";
import Experience from "./Components/Experience";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [color, setColor] = useState("#2C3539");
  const [color2, setColor2] = useState("#E0F7FA");
  const [Visible, setVisible] = useState(false);
  const [Interior, setInterior] = useState(false);
  const [Wheels, setWheels] = useState(false);
  const nav = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(nav.current, {
      y: "0%",
      duration: 0.5,
      delay: 4.8,
      ease: Expo.easeInOut,
    });
    tl.from(".heading", {
      x: "100%",
      duration: 1,
      ease: Expo.easeInOut,
    });
    tl.from(".model", {
     opacity: 0,
      duration: .2,
      ease: Expo.easeInOut,
    });
    tl.from(".buttons", {
      opacity: 0,
      duration: 0.5,
      ease: Expo.easeIn,
    });
  }, []);
  const toggleColorPallete = () => {
    if (Visible) {
      gsap.to(".ColorPallate", {
        y: 100,
        duration: 1.5,
        ease: Expo.easeIn,
      });
      gsap.to(".heading", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: Expo.easeIn,
      });
      setVisible(false);
    } else {
      gsap.to(".ColorPallate", {
        y: 0,
        duration: 1.5,
        ease: Expo.easeOut,
      });
      gsap.to(".heading", {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeOut,
      });
      setVisible(true);
    }
  };
  const toggleExtras = () => {
    if (!Visible) {
      if (Wheels) {
        gsap.to(".wheels", {
          y: "-100%",
          duration: 1.5,
          ease: Expo.easeIn,
        });
        gsap.to(".heading", {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: Expo.easeIn,
        });
        setWheels(false);
      } else {
        gsap.to(".wheels", {
          y: "0%",
          duration: 1.5,
          ease: Expo.easeOut,
        });
        gsap.to(".heading", {
          y: -100,
          opacity: 0,
          duration: 1.5,
          ease: Expo.easeOut,
        });
        setWheels(true);
      }
    }
  };
  return (
    <>
      <Splash nav={nav} />
      <div className="w-full h-full">
        <nav
          ref={nav}
          className="absolute navbar pt-10 md:px-10 w-full flex items-center justify-end uppercase font-regular -translate-y-[100%] text-black left-1/2 -translate-x-1/2 "
        >
          <div className="flex items-center mx-10 pb-2 justify-between w-full">
            <div className="md:flex hidden items-center gap-2 justify-self-end opacity-50 ">
              <p className="w-6 h-6 rounded-full cursor-pointer border-3 "></p>
              <p className="w-4 h-4 rounded-full cursor-pointer border"></p>
              <p className="w-4 h-4 rounded-full cursor-pointer border"></p>
            </div>
            <h2 className="md:tracking-[1vw] opacity-70">Chevrolet</h2>
          </div>
        </nav>

        <div
          onClick={() => toggleColorPallete()}
          className={`absolute buttons md:left-[5%] left-1/2 -translate-x-[110%] md:-translate-x-0 top-[75%] md:top-[15%] ${
            Visible ? "opacity-80" : "opacity-40"
          } px-12 py-5 z-30 flex items-center justify-center border rounded-lg`}
        >
          <p
            className={`font-thin text-sm uppercase ${
              Visible ? "bg-white" : "bg-transparent"
            } absolute cursor-pointer `}
          >
            {Visible ? "<-" : "Chassis"}
          </p>
        </div>
        <div
          onClick={() => {
            if (!Visible) {
              toggleExtras();
            }
          }}
          className={`absolute buttons left-1/2 md:-translate-x-0 translate-x-[20%] md:left-[5%] md:top-[22%] top-[75%] ${
            Wheels ? "opacity-80" : "opacity-40"
          } ${
            Visible && "bg-zinc-600 text-white" 
          } px-12 py-5 z-30 flex items-center justify-center  border rounded-lg`}
        >
          <p
            className={`font-thin text-sm uppercase ${
              Wheels ? "bg-white" : "bg-transparent"
            } absolute cursor-pointer `}
          >
            {Wheels ? "<-" : Visible ? "Disabled" : "Extras"}
          </p>
        </div>

        <div className="absolute left-1/2 opacity-80 top-[25%] md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-full overflow-hidden">
          <h1
            className="md:text-[15vw] text-6xl heading font-bold text-center tracking-tight 
             bg-gradient-to-b from-zinc-900 to-white bg-clip-text text-transparent leading-none "
          >
            CAMARO ZL
          </h1>
        </div>

        <div className="w-[90%] flex-wrap flex items-center justify-center ColorPallate bottom-[0%] translate-y-[100px] right-0 h-[12%] p-4 gap-2 border z-10  backdrop-blur-xl left-1/2 rounded-t-xl -translate-x-1/2 bg-black-500/10 border-black/50 shadow-lg absolute">
          {colors.map((item, index) => {
            return (
              <div
                key={item.name}
                onClick={() => setColor(item.hex)}
                style={{ background: item.hex }}
                className="md:w-[8%] w-12 h-8 md:h-[100%] cursor-pointer opacity-60 rounded-tr-2xl rounded-bl-2xl border  flex items-center justify-center"
              ></div>
            );
          })}
        </div>
        <div className=" flex-wrap wheels flex items-center justify-center top-[-1%] left-[80%] md:left-1/2 md:-translate-x-1/2 p-4 gap-2 border z-10 rounded-xl  bg-black-500/10 border-black/50 absolute -translate-y-[100%]">
          {glassColors.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setColor2(item.hex)}
                style={{ background: item.hex }}
                className="md:w-12 w-12 h-8  md:h-12 cursor-pointer opacity-60 rounded-tr-2xl rounded-bl-2xl border  flex items-center justify-center"
              ></div>
            );
          })}
        </div>
        <Experience
          Visible={Visible}
          Wheels={Wheels}
          color2={color2}
          color={color}
        />
      </div>
    </>
  );
}

export default App;
