import Hero from "../components/Hero2.jsx";
import GameCard from "../components/GameCard";
import ArcadeMachine from "../components/ArcadeMachine.jsx";

export default function Home2() {
  // --- SPILLDATA --- //
  const games = [
    {
      id: 1,
      title: "Memory game",
      image: "/gamecard_mia.png",
 
      description: " ",
      path: "memorygame",
      customTitle: (
        <div
          className="flex flex-col items-center"
          style={{ color: "#B7A0B8" }}
        >
          <span className="text-[70px] leading-[0.9] italic font-bold">
            Memory
          </span>
          <span className="text-[65px] mt-[-20px] italic font-bold flex items-center">
            <span
              style={{
                fontFamily: "'Schibsted Grotesk', sans-serif",
                fontWeight: "900",
                fontStyle: "normal",
                display: "inline-block",
                transform: "scale(1.2) translateY(3px)",
                marginRight: "-4px",
              }}
            >
              g
            </span>
            ame
          </span>
        </div>
      ),
    },
    {
      id: 2,
      title: "Reaction Game",
      image: "/gamecard_therese.png",
      description: " ",
      path: "reactiongame",
      customTitle: (
        <div
          className="flex flex-col items-center "
          style={{ color: "#EBB99A" }}
        >
          <span
            className="text-[75px] leading-none italic font-bold"
            style={{
              textShadow:
                "3px 9px 0 #C34627, -3px -3px 0 #C34627, 3px -3px 0 #C34627, -3px 3px 0 #C34627",
            }}
          >
            Reaction
          </span>
          <span
            className="text-[70px] mt-[-26px] italic font-bold"
            style={{
              textShadow:
                "3px 9px 0 #C34627, -3px -3px 0 #C34627, 3px -3px 0 #C34627, -3px 3px 0 #C34627",
            }}
          >
            Game
          </span>
        </div>
      ),
    },
    {
      id: 3,
      title: "Super Secret Game ?",
      image: "/secret_game.png",
      description: " ",
      path: "secretgame",
      customTitle: (
        <div
          className="flex flex-col items-center mt-[-40px]"
          style={{ color: "#6BCFC2" }}
        >
          {["Super", "Secret", "Game"].map((word, i) => (
            <span
              key={i}
              className="text-[54px] leading-[0.9] italic font-bold"
              style={{
                textShadow: "3px 3px 0px #AB6FBE, 6px 6px 0px rgba(0,0,0,1)",
              }}
            >
              {word}
            </span>
          ))}
          <span
            className="text-[75px] leading-[0.7] italic font-bold mt-1"
            style={{
              textShadow:
                "2px 2px 0 #AB6FBE, -1px -1px 0 #AB6FBE, 3px 3px 0 #000, -1px -1px 0 #000, 4px 4px 5px rgba(0,0,0,0.8)",
              WebkitTextStroke: "1px black",
            }}
          >
            ?
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] brick-pattern overflow-x-hidden">
      {/* SEKSJON 1: Hero og Arcademaskin side om side */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 pt-0 lg:-mt-10 gap-12">
        {/* Venstre: Hero */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Hero />
        </div>

        {/* Høyre: ArcadeMaskin */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-starth-auto py-0">
          <ArcadeMachine yellowCoin={"#FACC15"} />
        </div>
      </div>

      {/* SEKSJON 2: Spillene (Select Mission) - */}
      <section
        id="mission-select-full"
        className="relative z-0 w-full py-32 bg-transparent border-none"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-retro text-5xl md:text-7xl text-[#57C9D3] mb-0 uppercase tracking-widest text-center">
            Select Mission
          </h2>

          {/* 
          Mapper spillene horisontalt */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-10">
            {games.map((game) => (
              <div
                key={game.id}
                className="w-full max-w-[400px] transform hover:scale-105 transition-all duration-300"
              >
                <GameCard
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  lottieJson={game.lottieJson}
                  path={game.path}
                  customTitle={game.customTitle}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
