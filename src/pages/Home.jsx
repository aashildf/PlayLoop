import Hero from "../components/Hero";
import GameCard from "../components/GameCard";
import cowboyEmoji from "../assets/Cowboyemoji.json";


export default function Home() {
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 brick-pattern min-h-screen">
      <Hero />
      <h2 className="text-center my-10 font-display text-3xl text-primary uppercase italic tracking-widest">
        Våre Spill
      </h2>

      {/* Grid som viser spill-kortene */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
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
  );
}


