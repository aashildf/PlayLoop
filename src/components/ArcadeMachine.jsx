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
            top: "14%",
            left: "50%",
            transform: "translateX(-38.8%)",
            width: "32%",
            height: "31.9%",
            zIndex: 10,
            perspective: "1000px",
          }}
        >
          <div
            style={{
              backgroundColor: "#050505",
              border: "2px solid rgba(255, 255, 255, 0.8)",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",

              transform:
                "perspective(1000px) rotateX(1deg) rotateY(-9deg) rotateZ(-1.2deg) skewX(-11deg) skewY(4deg)",

              borderRadius: "20px",
              overflow: "hidden",
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