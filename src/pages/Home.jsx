

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
    <div style={mainContentStyle}>
      <Hero />
      <h2 style={{ textAlign: "center", margin: "40px 0" }}>Våre Spill</h2>

      {/* Grid som viser spill-kortene */}
      <section style={gridStyle}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
            lottieJson={game.lottieJson}
          />
        ))}
      </section>
    </div>
  );
}

const mainContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};
