
// "Status: Header/Footer er placeholders. Rutingen er ikke helt ferdig koblet mot Home ennå. Spør Lene Renate om main.jsx er klar."*

import Hero from "../components/Hero";
import Gamecard from "../components/GameCard";

export default function Home() {
  const games = [
    {
      id: 1,
      title: "Mia-sitt-spill",
      description: " ",
      image: "/bilde1.jpg",
    },
    {
      id: 2,
      title: "Therese-sitt-spill",
      description: " ",
      image: "/bilde2.jpg",
    },
  ];

  return (
    <div style={mainContentStyle}>
      <Hero />
      <h2 style={{ textAlign: "center", margin: "40px 0" }}>Våre Spill</h2>

      {/* Grid som viser spill-kortene */}
      <section>
        {games.map((game) => (
          <Gamecard
            key={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
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
