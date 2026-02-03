import Hero from "../components/Hero";
import GameCard from "../components/GameCard";
import cowboyEmoji from "../assets/Cowboyemoji.json";
import ArcadeMachine from "../components/ArcadeMachine.jsx";


export default function Home() {

// --- SPILLDATA --- //
  const games = [
    {
      id: 1,
      title: "MEMORYGAME",
      image: "/2d-cowboy-emoji.png",
      lottieJson: cowboyEmoji,
      description: " ",
      path: "memorygame",
    },
    {
      id: 2,
      title: "REACTIONGAME",
      image: "/bilde2.jpg",
      description: " ",
      path: "reactiongame",
    },
    {
      id: 3,
      title: "SECRETGAME",
      image: "/bilde3.jpg",
      description: " ",
      path: "secretgame",
    },
  ];



  return (
    <div className="min-h-screen bg-[#0a0a0a] brick-pattern">
      {/* container for hele siden under header */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/*   Venstre side - Hero + spillene */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <Hero />

          <div className="px-10 py-20">
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


