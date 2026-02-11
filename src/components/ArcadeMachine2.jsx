import React from "react";
import Scoreboard from "./Scoreboard";

const ArcadeMachine = ({ yellowCoin }) => {
  const T =
    "perspective(1000px) rotateX(1deg) rotateY(-9deg) rotateZ(-1.2deg) skewX(-11deg) skewY(4deg)";

  // 👇 Dette er “kun hjørne-juks” (du kan tweake disse 4)
 const CLIP = "polygon(6% 6%, 95% 2.4%, 98.5% 101%, 3.2% 98%)";




  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="hidden md:block relative">
        <img
          src="arcade_machine.png"
          alt="Arcade Machine"
          className="h-[130vh] w-auto object-contain drop-shadow-[0_0_50px_rgba(216,59,210,0.3)]"
          style={{ maxWidth: "none" }}
        />

        {/* Skjerm-anker: din originale */}
        <div
          className="absolute"
          style={{
            top: "26%",
            left: "50%",
            transform: "translateX(-38.8%)",
            width: "22%",
            height: "21%",
            zIndex: 10,
          }}
        >
          {/* Glow bak – samme transform */}
          <div
            style={{
              position: "absolute",
              inset: "5px",
              borderRadius: "5px",
              transform: T,
              boxShadow: `
                0 0 60px 10px rgba(255, 255, 180, 0.4),
                0 0 70px 50px rgba(216, 59, 210, 0.25),
                0 0 20px 10px rgba(255, 255, 255, 0.5)
              `,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* ÉN skjermflate som alt ligger inni */}
          <div
            style={{
              position: "relative",
              width: "102%",
              height: "100%",
              backgroundColor: "#050505",
              transform: T,
              borderRadius: "20px",
              overflow: "hidden",
              clipPath: CLIP,
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                boxShadow:
                  "inset 0 0 60px rgba(255,255,200,0.15), inset 0 0 100px rgba(216,59,210,0.1)",
              }}
            >
              <Scoreboard yellowCoin={yellowCoin} />
            </div>

            {/* Glass */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: `
                  linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%),
                  radial-gradient(circle at 50% 120%, rgba(255,255,150,0.2) 0%, transparent 60%)
                `,
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobil */}
      <div className="md:hidden flex items-center justify-center w-full p-4">
        <div className="w-full max-w-sm bg-[#050505] border-2 border-white/20 rounded-2xl overflow-hidden">
          <Scoreboard yellowCoin={yellowCoin} />
        </div>
      </div>
    </div>
  );
};

export default ArcadeMachine;
