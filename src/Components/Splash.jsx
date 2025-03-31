import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Splash() {
  const loading = useRef();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useGSAP(() => {
    const tl = gsap.timeline({
      onUpdate: () => {
        setProgress(Math.round(tl.progress() * 100));
      },
      onComplete: () => {
        gsap.to(".splash", {
          y: -1000,
          duration: 1,
          ease: 'power4.out',
        });
        gsap.to(".splash2", {
          y: -1000,
          duration: 1,
          delay: 0.2,
          ease: 'power4.out',
          onComplete: () => setIsVisible(false),
        });
      },
    });
    tl.fromTo(
      loading.current,
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 4,
        ease: "power2.inOut",
      }
    );
  }, []);
  if (!isVisible) return null;
  return (
    <>
    <div className="w-screen splash2 h-screen rounded-b-4xl bg-blue-200 absolute z-10 left-0 top-0"></div>
      <div className="w-screen splash h-screen z-[999] flex items-center justify-center absolute bg-white">
        <div className="w-full h-full flex-col gap-2 flex justify-center items-center">
          <div>
            <h1 className="text-right text-3xl tracking-widest text-blue-200 font-thin">
              {progress}%
            </h1>
          </div>
          <div className="h-[2px] bg-zinc-300 w-[90%] rounded-full">
            <div
              ref={loading}
              className="h-[2px] loading bg-blue-200 rounded-full"
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
