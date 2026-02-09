import { useState } from "react";

export default function Hero() {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleStart = () => {
    setIsFlashing(true);

    // Sørg for at du har en fil som heter coin-sound.mp3 i public-mappen
    const audio = new Audio("/coin-sound.mp3");
    audio.play().catch(() => console.log("Lyd avspilles etter første klikk"));

    setTimeout(() => {
      setIsFlashing(false);
      const element = document.getElementById("mission-select-full");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <section className="relative flex flex-col items-center pt-32 md:pt-40 pb-16 min-h-screen">
      {/* FLASH EFFEKT */}
      {isFlashing && (
        <div className="fixed inset-0 bg-white/40 z-[300] pointer-events-none transition-opacity duration-300" />
      )}

      {/* --HEADER-- */}
      <header className="text-center mb-10 md:mb-28 z-10 flex flex-col items-center space-y-4 md:space-y-8">
        <h1 className="font-neon tracking-tighter animate-flicker leading-none">
          <span className="text-magenta-500 neon-text-pink block text-[15vw] md:text-[13vw]">
            PLAY
          </span>
          <span className="text-cyan-400 neon-text-cyan block text-[15vw] md:text-[13vw]">
            LOOP
          </span>
        </h1>

        {/* INTERAKTIV 3D MYNT */}
        <button
          onClick={handleStart}
          className="mt-1 md:mt-6 group cursor-pointer bg-transparent border-none outline-none flex flex-col items-center justify-center w-full"
        >
          {/* Her bruker vi klassene fra index.css */}
          <div className="coin-container w-24 h-24 mb-6 group-hover:scale-110 duration-300">
            <div className="coin">
              {/* Forsiden */}
              <div className="coin-front">
                <span className="text-yellow-900 text-3xl font-retro">
                  10 kr
                </span>
              </div>
              {/* bakside */}
              <div className="coin-back">
                <span className="text-5xl transform -translate-y-2 relative">
                  👑
                </span>
              </div>
            </div>
          </div>

          <p className="font-retro text-xl md:text-2xl text-yellow-400 tracking-[0.3em] animate-pulse group-hover:text-white transition-colors duration-300 text-center w-full">
            [ INSERT COIN TO START ]
          </p>
        </button>
      </header>
    </section>
  );
}
