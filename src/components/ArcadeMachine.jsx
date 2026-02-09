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
            {/* LYSET SOM LYSER UT PÅ MASKINEN (Gult/Hvitt) */}
            <div
              style={{
                position: "absolute",
                inset: "5px", // Litt mindre enn selve åpningen
                borderRadius: "20px",
                transform:
                  "perspective(1000px) rotateX(1deg) rotateY(-9deg) rotateZ(-1.2deg) skewX(-11deg) skewY(4deg)",

                /* Her er selve gløden som treffer maskinen utvendig */
                /* Vi bruker flere lag for å bygge opp en massiv glød */
                boxShadow: `
      0 0 60px 10px rgba(255, 255, 180, 0.4),  /* 1. Kraftig gul hovedglød */
      0 0 70px 50px rgba(216, 59, 210, 0.25), /* 2. Lilla skjær som matcher maskinen */
      0 0 20px 10px rgba(255, 255, 255, 0.5)   /* 3. Intens hvit kjerne rett ved kanten */
    `,
                zIndex: -1, // Legger det bak selve skjermen
              }}
            />

            <div
              style={{
                backgroundColor: "#050505",
                width: "102%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transform:
                  "perspective(1000px) rotateX(1deg) rotateY(-9deg) rotateZ(-0.5deg) skewX(-11deg) skewY(4deg) ",
                borderRadius: "20px",
                border: "0.5px solid rgba(255, 255, 255, 0.3)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* 1. LYS-SKINN BAK SCOREBOARDET */}
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  /*  gløden som sprer seg fra senter og utover bak teksten */
                  boxShadow:
                    "inset 0 0 60px rgba(255, 255, 200, 0.15), inset 0 0 100px rgba(216, 59, 210, 0.1)",
                }}
              >
                <Scoreboard yellowCoin={yellowCoin} />
              </div>

              {/* 2. GLASS-EFFEKT: Farge + Dybde + Lys */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  borderRadius: "20px",
                  zIndex: 20,
                  // 1. DEN MØRKE KANTEN YTTERST: En svart ramme
                  outline: "5px solid rgba(0, 0, 0, 0.8)",
                  outlineOffset: "-8px",

                  // 1. hvitt skinnet fra toppen
                  // 2. gul glød som starter fra bunnen (radial-gradient)
                  background: `
      linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, transparent 50%),
      radial-gradient(circle at 50% 120%, rgba(255, 255, 150, 0.2) 0%, transparent 60%)
    `,

                  //en enkel mørk skygge for dybde
                  boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.8)",
                }}
              />
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