import React from 'react';
import Scoreboard from './Scoreboard';

const ArcadeMachine = ({ yellowCoin }) => {
    return (
      // 1. Denne div-en styrer størrelsen på ALT.
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* ANKER-DIV: Denne holder alt sammen */}
        <div className="hidden md:block relative">
          <img
            src="arcade_machine.png"
            alt="Arcade Machine"
            className="h-[130vh] w-auto object-contain drop-shadow-[0_0_50px_rgba(216,59,210,0.3)]"
            style={{ maxWidth: "none" }}
          />

          {/* HIGSCORE-SKJERM */}
          <div
            className="absolute"
            style={{
              top: "26%",
              left: "50%",
              transform: "translateX(-38.8%)",
              width: "22%",
              height: "21%",
              zIndex: 10,
              perspective: "1000px",
            }}
          >
            <div
              style={{
                backgroundColor: "#050505",
                border: "none",
                boxShadow: `
        0 0 10px 2px rgba(255, 255, 255, 0.8),   /* Selve "kanten" (hvit og skarpere) */
        0 0 25px 8px rgba(255, 255, 255, 0.4),  /* Den tåkete hvitfargen som skjuler kanten */
        0 0 50px 15px rgba(216, 59, 210, 0.25)  /* Det lilla skinnet som blender inn i maskinen */
      `,

                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transform:
                  "perspective(1000px) rotateX(1deg) rotateY(-9deg) rotateZ(-1.2deg) skewX(-11deg) skewY(4deg)",
                borderRadius: "10px", // Litt mindre radius ser ofte proffere ut
                overflow: "hidden",
              }}
            >
              {/* Highscore tekst */}
              <Scoreboard yellowCoin={yellowCoin} />
            </div>
          </div>
        </div>
        {/* MOBIL-OPPSETT: Bare scoreboardet  */}
        <div className="md:hidden flex items-center justify-center w-full p-4">
          <div className="w-full max-w-sm bg-[#050505] border-2 border-white/20 rounded-2xl overflow-hidden">
            <Scoreboard yellowCoin={yellowCoin} />
          </div>
        </div>
      </div>
    );
};  

export default ArcadeMachine;