


export default function Scoreboard() {
  // Dette er midlertididge "mock-data", inntil vi får ordentlig data fra SQLite-databasen, når det er koblet sammen.
  const mockScores = [
    { nickname: "PIXEL_QUEEN", score: 9999 },
    { nickname: "KODE_HODE", score: 8540 },
    { nickname: "PAC_MAN", score: 7210 },
    { nickname: "RETRO_BOY", score: 5400 },
    { nickname: "ARCADE_GAL", score: 3200 },
  ];

  return (
    <div className="relative w-full h-full  flex flex-col justify-between p-5 py-3 bg-transparent overflow-hidden">
      {/* INDRE CRT-RAMME */}
      <div className="absolute inset-2 border border-white/5 rounded-lg pointer-events-none z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]" />
      
      {/* Header inni scoreboardet */}
      <div className="flex justify-between items-center mb-4 border-b border-secondary/30 pb-2">
        <span className="font-retro text-lg text-secondary tracking-widest">
          HIGHSCORES
        </span>

        {/* pokalen */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          {/* Koppen (hoveddelen) */}
          <rect x="4" y="2" width="8" height="6" fill="#FACC15" />
          <rect x="5" y="8" width="6" height="1" fill="#FACC15" />
          <rect x="6" y="9" width="4" height="1" fill="#FACC15" />

          {/* Håndtakene på sidene */}
          <rect x="2" y="3" width="2" height="1" fill="#FACC15" />
          <rect x="2" y="4" width="1" height="3" fill="#FACC15" />
          <rect x="2" y="7" width="2" height="1" fill="#FACC15" />

          <rect x="12" y="3" width="2" height="1" fill="#FACC15" />
          <rect x="13" y="4" width="1" height="3" fill="#FACC15" />
          <rect x="12" y="7" width="2" height="1" fill="#FACC15" />

          {/* Stilk og fot */}
          <rect x="7" y="10" width="2" height="3" fill="#FACC15" />
          <rect x="5" y="13" width="6" height="1" fill="#FACC15" />
        </svg>
      </div>

      {/* Liste med poeng */}
      <div
        className="font-retro flex flex-col justify-start gap-3
flex-grow px-1 pt-2"
      >
        {mockScores.map((entry, index) => (
          <div
            key={index}
            className={`flex justify-between items-center leading-none ${index === 0 ? "text-yellow-400 animate-pulse tracking-[0.2em]" : "text-white"} `}
          >
            <div className="flex gap-2">
              <span className="opacity-50">{index + 1}ST</span>
              <span className="uppercase tracking-wider truncate max-w-[80px]">
                {entry.nickname}
              </span>
            </div>
            <span className="font-bold">{entry.score}</span>
          </div>
        ))}
      </div>

      <div className="mt-1 text-center">
        <p className="font-retro text-[12px] text-secondary/40 animate-pulse">
          --- INSERT COIN ---
        </p>
      </div>
    </div>
  );
}
