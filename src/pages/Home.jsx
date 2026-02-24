import Hero from "../components/Hero.jsx";
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
      setShowTopButton(window.scrollY > 800);
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
              className="text-[65px] leading-[0.9] italic font-bold"
              style={{
                textShadow: `
            2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            0px 6px 0px rgba(0,0,0,0.4)
          `,
              }}
            >
              Memory
            </span>
            <span
              className="text-[65px] mt-[-20px] italic font-bold flex items-center"
              style={{
                textShadow: `
            2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            0px 6px 0px rgba(0,0,0,0.4)
          `,
              }}
            >
              <span
                style={{
                  fontFamily: "'Schibsted Grotesk', sans-serif",
                  fontWeight: "800",
                  fontStyle: "normal",
                  display: "inline-block",
                  transform: "scale(1.2) translateY(3px)",
                  marginRight: "-5px",
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
        image: "images/gamecard_therese.png",
        description: " ",
        path: "reactiongame",
        customTitle: (
          <div
            className="flex flex-col items-center"
            style={{ color: "#EBB99A" }}
          >
            <span
              className="text-[68px] leading-none italic font-bold"
              style={{
                textShadow: `
      1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 
      3px 8px 0 #A53010, -3px -3px 0 #A53010, 3px -3px 0 #A53010, -3px 3px 0 #A53010
    `,
              }}
            >
              Reaction
            </span>
            <span
              className="text-[64px] mt-[-22px] italic font-bold"
              style={{
                textShadow: `
      1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 
      3px 8px 0 #A53010, -3px -3px 0 #A53010, 3px -3px 0 #A53010, -3px 3px 0 #A53010
    `,
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
        image: "images/secret_game.png",
        description: " ",
        path: "secretgame",
        customTitle: (
          <div
            className="flex flex-col items-center mt-[-40px]"
            style={{ color: "#6BCFC2" }}
          >
            {["Super", "Secret", "Game", "?"].map((word, i) => (
              <span
                key={i}
                className="text-[54px] leading-[0.8] italic font-bold"
                style={{
                  color: "#6BCFC2",
                  textShadow: `
        1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        3px 3px 0px #AB6FBE, 
        5px 5px 0px rgba(0,0,0,0.8)
      `,
                }}
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
            "linear-gradient(to right, rgba(255, 19, 240, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 19, 240, 0.3) 1px, transparent 1px)",
          backgroundSize: "50px 40px",
          transform: "perspective(600px) rotateX(65deg)",
          transformOrigin: "center top",
          animation: "moveRetroGrid 7s linear infinite",
          opacity: "0.6",
        }}
      ></div>

      {/* SEKSJON 1: HERO & ARCADE */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-center px-4 lg:px-20  lg:pt-32 pt-10 md:pt-12 xl:pt-0 gap-8">
        {/* hero text */}
        <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between px-4 lg:px-20 pt-20 md:pt-32 lg:pt-52 xl:pt-0 gap-8 min-h-[85vh] xl:min-h-screen pb-10">
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
            <Hero onMissionBoom={triggerMissionBoom} />
          </div>

          {/* ARCADE-MASKIN: Skjult på iPad Pro (1024px) og alt under */}
          <div className="hidden xl:flex w-full xl:w-1/2 justify-center py-0 relative z-30 opacity-100">
            <ArcadeMachine yellowCoin={"#FACC15"} />
          </div>
        </div>
      </div>

      {/* -SEKSJON 2: SPILLVALG*/}
      <section
        id="mission-select-full"
        className="relative z-0 w-full pt-4 md:pt-8 xl:pt-10 pb-40 bg-transparent overflow-hidden"
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
                  <h2 className="font-retro text-[12vw] md:text-[6vw] uppercase flex flex-col md:flex-row items-center leading-[0.8] md:leading-none m-0">
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
                      className="md:ml-6 mt-2 md:mt-0"
                    >
                      MISSION
                    </span>
                  </h2>

                  <div
                    className="mission-underline"
                    style={{
                      /* Vi endrer bredden basert på skjermstørrelse */
                      width: window.innerWidth < 768 ? "280px" : "600px",
                      margin: "0 auto", // Sentrerer streken
                      animation:
                        "laserScan 3.5s ease-in-out 0s forwards, finalPop 0.4s ease-out 4.0s forwards",
                    }}
                  />
                </div>

                {/* ---------------SHARDS SYSTEM----------- */}
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

          {/* -----------SWIPE TO EXPLORE--------------- */}
          {/* Vi fjerner mb-[-80px] og bruker mt-10 for å legge den i tomrommet */}
          <div className="flex flex-col items-center mb-4 mt-10 lg:hidden">
            <p className="font-retro text-[#57C9D3] text-xs animate-pulse mb-2 uppercase tracking-widest">
              « Swipe to explore »
            </p>
            <div className="flex gap-2">
              {games.map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#57C9D3] shadow-[0_0_8px_#57C9D3]"
                />
              ))}
            </div>
          </div>

          {/*-------------- GAME CARDS SECTION ---------------*/}
          <div
            className="
  relative z-20
  -mt-35 md:mt-15
  
  flex 
  overflow-x-auto 
  snap-x snap-mandatory 
  scroll-smooth
  hide-scrollbar
  justify-start
  px-4 md:px-10
  gap-0
  pb-20
  /* Desktop-reset: */
  lg:flex-row lg:justify-center lg:overflow-visible lg:snap-none lg:px-0
"
          >
            {games.map((game) => (
              <div
                key={game.id}
                className="
    snap-center shrink-0 
    /* Vi krymper mer på SE (scale-0.7) og litt mindre på større mobiler (0.8) */
    scale-[0.7] sm:scale-[0.8] md:scale-100 
    /* Juster marginene så de ikke overlapper for mye når vi krymper */
    -mx-12 sm:-mx-8 md:mx-4
  "
              >
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
