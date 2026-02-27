import { useState, useRef } from "react";
import Lottie from "lottie-react";
import coinData from "../assets/coin.json";

export default function Hero({ onMissionBoom }) {
  const [isFlashing, setIsFlashing] = useState(false);
  const [isPoweringOff, setIsPoweringOff] = useState(false);
  const [isCoinAnimating, setIsCoinAnimating] = useState(false);

  const audioRefs = useRef({});

  const playSound = (soundName) => {
    if (!audioRefs.current[soundName]) {
      audioRefs.current[soundName] = new Audio(`/PlayLoop/audio/${soundName}`);
    }
    const audio = audioRefs.current[soundName];
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const handleStart = () => {
    playSound("coin_flip.wav");
    setIsCoinAnimating(true);

    setTimeout(() => {
      playSound("coin_drop.mp3");
    }, 400);

    setTimeout(() => {
      setIsFlashing(true);
    }, 1000);

    setTimeout(() => {
      setIsPoweringOff(true);
      playSound("screen_buzz.mp3");
    }, 1400);

    setTimeout(() => {
      const html = document.documentElement;
      const oldScroll = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";

      document
        .getElementById("mission-select-full")
        ?.scrollIntoView({ behavior: "auto" });

      html.style.scrollBehavior = oldScroll;

      playSound("expand.mp3");

      if (onMissionBoom) onMissionBoom();

      setTimeout(() => {
        setIsPoweringOff(false);
        setIsFlashing(false);
        setIsCoinAnimating(false);
      }, 800);
    }, 2600);
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-[999] pointer-events-none flex flex-col transition-opacity duration-300 ${
          isPoweringOff ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex-1 bg-black transition-transform duration-[1200ms] ease-in-out relative ${
            isPoweringOff ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_20px_#00ffff]" />
        </div>

        <div
          className={`flex-1 bg-black transition-transform duration-[1200ms] ease-in-out relative ${
            isPoweringOff ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_20px_#00ffff]" />
        </div>
      </div>

      {/* LOGO */}
      <section
        className={`relative z-10 flex flex-col items-center pt-30 lg:pt-0 lg:-mt-50 overflow-visible transition-all duration-[1000ms] ${
          isPoweringOff ? "invisible" : "visible"
        }`}
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

          <p className="mt-16 text-center text-cyan-300 font-retro tracking-widest text-lg md:text-2xl opacity-80">
            Welcome to the arcade <br></br>Insert coin & Choose your mission
          </p>

          {/* MYNT - sprett */}
          <button
            onClick={handleStart}
            className="mt-8 group cursor-pointer flex flex-col items-center justify-center bg-transparent border-none"
          >
            <div
              className={`w-24 h-24 md:w-32 md:h-32 mb-2 ${
                isCoinAnimating
                  ? "animate-[coinArcDrop_1.2s_cubic-bezier(.25,.46,.45,.94)_forwards]"
                  : ""
              }`}
            >
              <Lottie animationData={coinData} loop={true} autoplay={true} />
            </div>

            <p className="font-retro text-xl md:text-2xl text-yellow-400 tracking-[0.3em] animate-pulse group-hover:text-white transition-colors duration-300 text-center w-full">
              [ INSERT COIN ]
            </p>
          </button>
        </header>
      </section>
    </>
  );
}
