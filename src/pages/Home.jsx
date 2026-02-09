import Hero from "../components/Hero2.jsx";
import GameCard from "../components/GameCard";
import cowboyEmoji from "../assets/Cowboyemoji.json";
import ArcadeMachine from "../components/ArcadeMachine.jsx";


export default function Home() {

// --- SPILLDATA --- //
  const games = [
    {
      id: 1,
      title: "Memory game",
      image: "/gamecard_mia.png",
      lottieJson: cowboyEmoji,
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
              textShadow: `
              2px 2px 0 #AB6FBE, 
              -1px -1px 0 #AB6FBE, 
              3px 3px 0 #000, 
              -1px -1px 0 #000,
              4px 4px 5px rgba(0,0,0,0.8)
            `,
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
    <div className="min-h-screen bg-[#0a0a0a] brick-pattern">
      {/* container for hele siden under header */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/*   Venstre side - Hero + spillene */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <Hero />

          <div className="w-full py-20 flex flex-col items-center">
            <h2 className="font-retro text-4xl neon-text-pink mb-20 uppercase tracking-widest text-[#D83BD2]">
              Select Mission
            </h2>

            {/* Spillene nedover*/}
            <section className="flex flex-col gap-40 pb-20">
              {games.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  lottieJson={game.lottieJson}
                  path={game.path}
                  customTitle={game.customTitle}
                />
              ))}
            </section>
          </div>
        </div>

        {/* HØYRE KOLONNE: Arcademaskinen */}
        <div className="w-full lg:w-1/2 relative bg-black/20 lg:min-h-screen">
          <div className="lg:sticky lg:top-0 h-screen w-full flex items-center justify-center p-4">
            <ArcadeMachine yellowCoin={"#FACC15"} />
          </div>
        </div>
      </div>
    </div>
  );
}


