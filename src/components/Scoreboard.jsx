


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
    <div className="w-full h-full  flex flex-col justify-center  p-4">
     
        {/* Header inni scoreboardet */}
        <div className="flex justify-between items-center mb-4 border-b border-secondary/30 pb-2">
          <span className="font-retro text-lg text-secondary tracking-widest">
            HIGHSCORES
          </span>
          {/* stjernen */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="animate-pulse">
            <circle cx="12" cy="12" r="10" fill="#00f2ff" />
            {/* Selve stjernen (stanset ut/sort) */}
            <path
              d="M12 7L13.5 10.5H17L14.25 12.5L15.25 16L12 14L8.75 16L9.75 12.5L7 10.5H10.5L12 7Z"
              fill="#0a0a12"
            />
          </svg>
        </div>

        {/* Liste med poeng */}
        <div className="font-retro text-sm space-y-2">
          {mockScores.map((entry, index) => (
         <div
                key={index}
                className={`flex justify-between ${index === 0 ? "text-yellow-400" : "text-white/80"}`}
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


        <div className="mt-4 text-center">
          <p className="font-retro text-[10px] text-secondary/50 animate-pulse">
            --- ONLINE ---
          </p>
        </div>
    </div>
  );
}
