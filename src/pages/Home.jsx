import Hero from "../components/Herotest.jsx";
import GameCard from "../components/GameCard.jsx";
import ArcadeMachine from "../components/ArcadeMachine.jsx";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home3() {
  const { hash } = useLocation();
  const [showTopButton, setShowTopButton] = useState(false);

  // ---ANIMASJON VED TRYKK PÅ MYNT---
  const [titleBoomed, setTitleBoomed] = useState(false);
  const [shards, setShards] = useState(() => []);
  const [boomKey, setBoomKey] = useState(0);

  const triggerMissionBoom = () => {
    setTitleBoomed(false);

    // Starter prosessen 600ms etter mynt-kast
    setTimeout(() => {
      setBoomKey((k) => k + 1);
      setTitleBoomed(true);

      // Funksjon for å generere partikler
      const generateShards = (xOffset) =>
        Array.from({ length: 40 }).map(() => ({
          x: (Math.random() - 0.5) * 500,
          y: (Math.random() - 0.5) * 300,
          offsetX: xOffset + (Math.random() - 0.5) * 200,
          color: Math.random() > 0.5 ? "#57C9D3" : "#ffffff",
        }));

      // Eksplosjon 1: SELECT
      setTimeout(() => {
        setShards(generateShards(-150));
      }, 3200);

      // Eksplosjon 2: MISSION
      setTimeout(() => {
        setShards((prev) => [...prev, ...generateShards(150)]);
      }, 5000);
    }, 600);
  };

  // ---SCROLL-KNAPP---
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // hash-scroll
  useEffect(() => {
    if (hash === "#mission-select-full") {
      const el = document.getElementById("mission-select-full");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  // --- SPILLDATA ---
  const games = useMemo(
    () => [
      {
        id: 1,
        title: "Memory game",
        image: "images/gamecard_mia.png",
        description: " ",
        path: "memorygame",
        customTitle: (
          <div
            className="flex flex-col items-center"
            style={{ color: "#B7A0B8" }}
          >
            <span
              className="text-[70px] leading-[0.9] italic font-bold"
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.45)" }}
            >
              Memory
            </span>
            <span className="text-[65px] mt-[-20px] italic font-bold flex items-center">
              game
            </span>
          </div>
        ),
      },
      {
        id: 2,
        title: "Reaction Game",
        image: "images/gamecard_therese.png",
        description: " ",
        path: "reactiongame",
        customTitle: (
          <div
            className="flex flex-col items-center"
            style={{ color: "#EBB99A" }}
          >
            <span
              className="text-[75px] leading-none italic font-bold"
              style={{ textShadow: "3px 9px 0 #C34627" }}
            >
              Reaction
            </span>
            <span className="text-[70px] mt-[-26px] italic font-bold">
              Game
            </span>
          </div>
        ),
      },
      {
        id: 3,
        title: "Super Secret Game ?",
        image: "images/secret_game.png",
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
                style={{ textShadow: "3px 3px 0px #AB6FBE" }}
              >
                {word}
              </span>
            ))}
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* GRID GULV */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 19, 240, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 19, 240, 0.5) 1px, transparent 1px)",
          backgroundSize: "50px 40px",
          transform: "perspective(600px) rotateX(65deg)",
          transformOrigin: "center top",
          animation: "moveRetroGrid 7s linear infinite",
          opacity: "0.6",
        }}
      ></div>

      {/* SEKSJON 1: HERO & ARCADE */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 pt-0 lg:-mt-10 gap-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Hero onMissionBoom={triggerMissionBoom} />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center py-0">
          <ArcadeMachine yellowCoin={"#FACC15"} />
        </div>
      </div>

      {/* SEKSJON 2: MISSION SELECT */}
      <section
        id="mission-select-full"
        className="relative z-0 w-full py-10 bg-transparent"
      >
        <div className="max-w-[1400px] mx-auto px-6">

          
          {/* TITLE WRAP */}
          <div className="relative flex flex-col items-center justify-center mt-4 mb-10 min-h-[140px]">
            {titleBoomed && (
              <>
                <div
                  key={boomKey}
                  className="flex flex-col items-center w-full z-10"
                >
                  <h2 className="font-retro text-[10vw] md:text-[6vw] uppercase flex flex-row items-center leading-none m-0">
                    <span
                      style={{
                        animation: "textBoom 1.5s ease-out 3.2s forwards",
                        opacity: 0,
                        textShadow: "0 0 20px #57C9D3",
                        color: "#57C9D3",
                      }}
                    >
                      SELECT
                    </span>
                    <span
                      style={{
                        animation: "textBoom 1.5s ease-out 5.0s forwards",
                        opacity: 0,
                        textShadow: "0 0 20px #57C9D3",
                        color: "#57C9D3",
                      }}
                      className="ml-6"
                    >
                      MISSION
                    </span>
                  </h2>

                  <div
                    className="mission-underline"
                    style={{
                      /* Laseren bruker nå 3.5 sekunder på å scanne ferdig */
                      animation:
                        "laserScan 3.5s ease-in-out 0s forwards, finalPop 0.4s ease-out 4.0s forwards",
                    }}
                  />
                </div>

                {/* SHARDS SYSTEM */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  {shards.map((shard, i) => (
                    <span
                      key={i}
                      style={{
                        position: "absolute",
                        left: `calc(50% + ${shard.offsetX}px)`,
                        width: "6px",
                        height: "2px",
                        background: shard.color,
                        "--x": `${shard.x}px`,
                        "--y": `${shard.y}px`,
                        /* Partiklene trigges enten på 4s eller 6s basert på når de ble lagt til */
                        animation: `shardFly 0.8s ease-out forwards`,
                        boxShadow: `0 0 8px ${shard.color}`,
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* GAME CARDS */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-14 lg:gap-16 mt-12">
            {games.map((game) => (
              <div key={game.id} className="w-full max-w-[400px]">
                <GameCard
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  path={game.path}
                  customTitle={game.customTitle}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] bg-transparent border-none outline-none group"
        >
          <div className="w-16 h-16 border-[6px] border-[#ff00ff] shadow-[0_0_20px_#ff00ff] rounded-full flex items-center justify-center bg-black/80 group-hover:scale-110 transition-all">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff00ff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 18V6M6 12l6-6 6 6" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
