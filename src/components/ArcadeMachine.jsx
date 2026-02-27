import React from "react";
import { Link } from "react-router-dom";
import Scoreboard from "./Scoreboard";

const ArcadeMachine = ({ yellowCoin }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="hidden md:block relative">
        <img
          src="/PlayLoop/images/arcade_machine.png"
          alt="Arcade Machine"
          className="h-[130vh] w-auto object-contain drop-shadow-[0_0_50px_rgba(216,59,210,0.3)]"
          style={{ maxWidth: "none" }}
        />

        {/* HIGSCORE-SKJERM SOM EN LINK */}
        <Link
          to="/highscores"
          className="absolute block group"
          style={{
            top: "26%",
            left: "50%",
            transform: "translateX(-38.8%)",
            width: "22%",
            height: "21%",
            zIndex: 100,
            perspective: "1000px",
            textDecoration: "none",
          }}
        >
          {/* ROSA GLØD: Standard på (opacity-100), og blir enda sterkere ved hover */}
          <div
            className="transition-all duration-700 opacity-100 group-hover:scale-110"
            style={{
              position: "absolute",
              inset: "-50px",
              borderRadius: "50%",
              background: "rgba(255, 0, 255, 0.3)",
              filter: "blur(60px)",
              /* Alltid på, men boxShadow øker kraftig ved hover */
              boxShadow: "0 0 120px 70px rgba(255, 0, 255, 0.5)",
              zIndex: -1,
            }}
          />

          {/* SELVE SKJERMEN */}
          <div
            className="transition-all duration-500 border-[0.5px] border-white/30 group-hover:border-[#ff00ff] group-hover:shadow-[0_0_50px_#ff00ff]"
            style={{
              backgroundColor: "#050505",
              width: "102%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transform:
                "perspective(1000px) rotateX(1deg) rotateY(-9deg) rotateZ(-0.5deg) skewX(-11deg) skewY(4deg) ",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Scoreboard yellowCoin={yellowCoin} />

              {/* -------------------------------------- */}
              {/* ---------SCOREBOARD OVERLAY------------*/}

              {/* OVERLAY-TEKST VED HOVER */}
              <div className="absolute inset-0 flex flex-col bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 font-mono">
                {/* TOPP-STRIPE: Matcher Highscores + Pokal */}
                {/* <div className="w-full h-10 flex items-center justify-between pt-2 px-5 ">
                  <span className="text-white-500  tracking-wide uppercase">
                    Highscores
                  </span>
                  <span className="text-yellow-500 text-sm">🏆</span>
                </div> */}

                {/* MIDTPUNKT: Fokus-tekst */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <p className="text-yellow-400 font-black text-xl tracking-[0.2em] drop-shadow-[0_0_15px_rgba(255,215,0,0.7)] uppercase">
                    Hall_of_Fame
                  </p>
                  <div className="w-12 h-[1px] bg-white/20 my-2" />
                  <p className="text-white text-[12px]  tracking-widest uppercase animate-pulse">
                    Click to access records
                  </p>
                </div>

                {/* BUNN-STRIPE: Matcher Insert Coin */}
                <div className="w-full h-10 flex items-center justify-center border-t border-white-500/30 bg-[#050505]">
                  <span className="text-white text-[10px] font-lightest tracking-tighter uppercase animate-pulse">
                    ---Insert Coin---
                  </span>
                </div>
              </div>

              {/* Rosa overlay inni skjermen - blir sterkere ved hover */}
              <div className="absolute inset-0 bg-pink-500/5 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* GLASS-EFFEKT */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                borderRadius: "20px",
                zIndex: 20,
                outline: "5px solid rgba(0, 0, 0, 0.8)",
                outlineOffset: "-8px",
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, transparent 50%),
                  radial-gradient(circle at 50% 120%, rgba(255, 255, 150, 0.2) 0%, transparent 60%)
                `,
                boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.8)",
              }}
            />
          </div>
        </Link>
      </div>

      {/* MOBIL-OPPSETT */}
      <div className="md:hidden flex items-center justify-center w-full p-4">
        <div className="w-full max-w-sm bg-[#050505] border-2 border-white/20 rounded-2xl overflow-hidden">
          <Scoreboard yellowCoin={yellowCoin} />
        </div>
      </div>
    </div>
  );
};

export default ArcadeMachine;
