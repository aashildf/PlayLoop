import React from 'react';
import Scoreboard from './Scoreboard';

const ArcadeMachine = ({ yellowCoin }) => {
    return (
      <div className="relative flex items-center justify-center w-full h-full">
        <img
          src="arcade_machine.png"
          alt="Arcade Machine"
          className="h-[95vh] w-auto object-contain drop-shadow-[0_0_50px_rgba(216,59,210,0.3)] scale-125 md:scale-150"
        />

        {/* HIGSCORE-SKJERM (Plassert oppå bildet) */}
        <div
          className="absolute"
          style={{
            top: "15%",
            left: "50%",
            transform: "translateX(-41%)",
            width: "32%",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            overflow: "visible", // Lar innholdet flyte naturlig
          }}
        >
          <div
            style={{
              backgroundColor: "#050505",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "skewX(-3deg) scale(1.05)",
              // Her styrer vi hjørnene manuelt:
              // 1. punkt (0% 0%): Venstre topp
              // 2. punkt (100% 5%): Høyre topp
              // 3. punkt (100% 95%): Høyre bunn
              // 4. punkt (0% 85%): VENSTRE BUNN
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              padding: "10px",
            }}
          >
            {/* Highscore tekst */}
            <Scoreboard yellowCoin={yellowCoin} />
          </div>
        </div>
      </div>
    );
};  

export default ArcadeMachine;