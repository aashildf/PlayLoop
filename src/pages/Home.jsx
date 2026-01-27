import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gamecard from "../components/GameCard";

export default function Home(){
    const games = [ 
        {
        id: 1,
      title: "Mia-sitt-spill",
      description: " ",
      image: "/bilde1.jpg" 
    },
    {
      id: 2,
      title: "Therese-sitt-spill",
      description: " ",
      image: "/bilde2.jpg"
    }
  ];
    

  return (
    <div
      style={{ backgroundColor: "#0b0b0d", color: "white", minHeight: "100vh" }}
    >
      <Header />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Hero />
        <h2> Overskrift til spillseksjonen</h2>
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
      </main>
      <Footer />
    </div>
  );
}

// Enkel grid-styling så kortene ikke ligger oppå hverandre
// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//   gap: "20px"
// };