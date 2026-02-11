import { useState } from "react";
import Lottie from "lottie-react";
import coinData from "../assets/coin.json";

export default function Hero() {
  const [isFlashing, setIsFlashing] = useState(false);
  const [isPoweringOff, setIsPoweringOff] = useState(false);

  const handleStart = () => {
    new Audio("/coin_drop.mp3").play().catch(() => {});
    setIsFlashing(true);

    setTimeout(() => {
      setIsPoweringOff(true);
      new Audio("/screen_buzz.mp3").play().catch(() => {});

      setTimeout(() => {
        document
          .getElementById("mission-select-full")
          ?.scrollIntoView({ behavior: "instant" });

        new Audio("/expand.mp3").play().catch(() => {});

        setTimeout(() => {
          setIsPoweringOff(false);
          setIsFlashing(false);
        }, 500);
      }, 1100);
    }, 800);
  };

  return (
    <>
      {/* OVERLAY SOM ÅPNER SEG - Her er de blå linjene lagt inn */}
      <div
        className={`fixed inset-0 z-[999] pointer-events-none flex flex-col transition-opacity duration-300 ${
          isPoweringOff ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* TOPP-DEL */}
        <div
          className={`flex-1 bg-black transition-transform duration-[1000ms] ease-in-out relative 
          ${isPoweringOff ? "translate-y-0" : "-translate-y-full"}`}
        >
          {/* BLÅ LINJE SOM GÅR OPP */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_20px_#00ffff]" />
        </div>

        {/* BUNN-DEL */}
        <div
          className={`flex-1 bg-black transition-transform duration-[1000ms] ease-in-out relative
          ${isPoweringOff ? "translate-y-0" : "translate-y-full"}`}
        >
          {/* BLÅ LINJE SOM GÅR NED */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_20px_#00ffff]" />
        </div>
      </div>

      {/* LOGO */}
      <section
        className={`relative z-10 flex flex-col items-center pt-30 lg:pt-0 overflow-visible transition-all duration-[1000ms]
        ${isPoweringOff ? "invisible" : "visible"}`}
      >
        <header className="flex flex-col items-center text-center mb-6 space-y-0">
          <h1
            className={`font-neon tracking-tighter leading-[0.85] ${isFlashing ? "animate-ping" : "animate-flicker"}`}
          >
            <span className="text-magenta-500 neon-text-pink block text-[15vw] lg:text-[8.5vw] tracking-[-0.05em]">
              PLAY
            </span>
            <span className="text-cyan-400 neon-text-cyan block text-[15vw] lg:text-[7.5vw] mt-2 lg:mt-6 lg:ml-16 tracking-[-0.02em]">
              LOOP
            </span>
          </h1>

          {/* KNAPP */}
          <button
            onClick={handleStart}
            className="mt-8 group cursor-pointer flex flex-col items-center justify-center bg-transparent border-none"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 group-hover:scale-110 transition-transform duration-300">
              <Lottie animationData={coinData} loop={true} autoplay={true} />
            </div>

            <p className="font-retro text-xl md:text-2xl text-yellow-400 tracking-[0.3em] animate-pulse group-hover:text-white transition-colors duration-300 text-center w-full">
              [ INSERT COIN TO START ]
            </p>
          </button>
        </header>
      </section>
    </>
  );
}
