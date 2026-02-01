


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
    <div className="w-full max-w-md mx-auto mt-8">
      {/* boksen/rammen med glød */}
      <div className="bg-black/90 border-4 border-secondary p-5 rounded-lg arcade-screen-glow grainy relative overflow-hidden">
        {/* Header inni scoreboardet */}
        <div className="flex justify-between items-center mb-6 border-b border-secondary/30 pb-2">
          <span className="font-retro text-2xl text-secondary tracking-widest">
            HIGHSCORES
          </span>
          {/* stjernen */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse shadow-cyan-500/50"
          >
            {/* Sirkelen i bakgrunnen */}
            <circle cx="12" cy="12" r="10" fill="#00f2ff" />

            {/* Selve stjernen (stanset ut/sort) */}
            <path
              d="M12 7L13.5 10.5H17L14.25 12.5L15.25 16L12 14L8.75 16L9.75 12.5L7 10.5H10.5L12 7Z"
              fill="#0a0a12"
            />
          </svg>
        </div>

        {/* Liste med poeng */}
        <div className="font-retro text-xl space-y-3">
          {mockScores.map((entry, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={index}
                className={`flex justify-between ${isFirst ? "text-yellow-400" : "text-white/80"}`}
              >
                <div className="flex gap-4">
                  <span className="opacity-50">{index + 1}ST</span>
                  <span className="uppercase tracking-wider">
                    {entry.nickname}
                  </span>
                </div>
                <span className="font-bold tracking-widest">{entry.score}</span>
              </div>
            );
          })}
        </div>

        {/* Bunntekst */}
        <div className="mt-6 text-center">
          <p className="font-retro text-xs text-secondary/50 animate-pulse">
            --- SERVER ONLINE ---
          </p>
        </div>
      </div>
    </div>
  );
}