import Hero from "../components/Hero.jsx";
import GameCard from "../components/GameCard.jsx";
import ArcadeMachine from "../components/ArcadeMachine.jsx";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home3() {
  const { hash } = useLocation();

  const [showTopButton, setShowTopButton] = useState(false);

  // Kun én state: har tittelen blitt trigget?
  const [titleBoomed, setTitleBoomed] = useState(false);

  // 🔥 trigges fra Hero
  const [boomKey, setBoomKey] = useState(0);

  const triggerMissionBoom = () => {
    setBoomKey((k) => k + 1); // tvinger nytt element
    setTitleBoomed(true);
  };

  // scroll-knapp
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
              style={{
                textShadow: `
  -2px -2px 0 rgba(0,0,0,0.45),
   2px -2px 0 rgba(0,0,0,0.45),
  -2px  2px 0 rgba(0,0,0,0.45),
   2px  2px 0 rgba(0,0,0,0.45),
  -1px -1px 0 rgba(0,0,0,0.25),
   1px -1px 0 rgba(0,0,0,0.25),
  -1px  1px 0 rgba(0,0,0,0.25),
   1px  1px 0 rgba(0,0,0,0.25)
`,
              }}
            >
              Memory
            </span>
            <span
              className="text-[65px] mt-[-20px] italic font-bold flex items-center"
              style={{
                textShadow: `
  -2px -2px 0 rgba(0,0,0,0.45),
   2px -2px 0 rgba(0,0,0,0.45),
  -2px  2px 0 rgba(0,0,0,0.45),
   2px  2px 0 rgba(0,0,0,0.45),
  -1px -1px 0 rgba(0,0,0,0.25),
   1px -1px 0 rgba(0,0,0,0.25),
  -1px  1px 0 rgba(0,0,0,0.25),
   1px  1px 0 rgba(0,0,0,0.25)
`,
              }}
            >
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
        image: "images/gamecard_therese.png",
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
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] brick-pattern overflow-x-hidden pt-20 lg:-mt-24 lg:pt-0">
      {/* SEKSJON 1 */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 pt-0 lg:-mt-10 gap-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Hero onMissionBoom={triggerMissionBoom} />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center py-0">
          <ArcadeMachine yellowCoin={"#FACC15"} />
        </div>
      </div>

      {/* SEKSJON 2 */}
      <section
        id="mission-select-full"
        className="relative z-0 w-full py-10 bg-transparent border-none"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          {/* TITLE WRAP */}
          <div className="relative flex justify-center mt-6 mb-0 overflow-visible">
            <div className="min-h-[60px]" aria-hidden="true" />

            {titleBoomed && (
              <h2
                key={boomKey}
                className={`
                  mission-title
                  title-boom
                  font-retro
                  text-5xl md:text-7xl
                  text-[#57C9D3]
                  uppercase tracking-widest
                `}
              >
                Select Mission
              </h2>
            )}

            {titleBoomed && (
              <div className="pointer-events-none absolute inset-0">
                {Array.from({ length: 18 }).map((_, i) => {
                  const angle = Math.random() * Math.PI * 2;
                  const dist = 160 + Math.random() * 220;
                  const x = Math.cos(angle) * dist;
                  const y = Math.sin(angle) * dist;

                  return (
                    <span
                      key={i}
                      className="title-shard"
                      style={{
                        "--x": `${x}px`,
                        "--y": `${y}px`,
                        "--d": `${120 + Math.random() * 240}ms`,
                        "--s": `${0.7 + Math.random() * 0.6}`,
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* KORT */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-14 lg:gap-16">
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

      {/* SCROLL TOP BUTTON */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] cursor-pointer group outline-none bg-transparent border-none"
        >
          <div className="w-16 h-16 border-[6px] border-[#ff00ff] shadow-[0_0_20px_#ff00ff] rounded-full flex items-center justify-center bg-black/80 group-hover:scale-110 transition-all duration-300 group-hover:border-white">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff00ff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300 group-hover:animate-bounce group-hover:stroke-white"
            >
              <path d="M12 18V6M6 12l6-6 6 6" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
