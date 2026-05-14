import { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useSnakeGame from "./hooks/useSnakeGame";
import SnakeBoard from "./components/SnakeBoard";

const KEY_DIRS = {
  ArrowUp: { x: 0, y: -1 },
  w: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  s: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  a: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  d: { x: 1, y: 0 },
};

export default function SnakeGame() {
  const { snake, food, score, status, highScore, gridSize, start, steer } =
    useSnakeGame();
  const navigate = useNavigate();
  const touchStart = useRef(null);

  const handleKey = useCallback(
    (e) => {
      const dir = KEY_DIRS[e.key];
      if (dir) {
        e.preventDefault();
        steer(dir);
      }
      if (e.key === "Enter" && status !== "playing") start();
    },
    [steer, start, status]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const handleTouchStart = (e) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) < 15 && Math.abs(dy) < 15) return;
    if (Math.abs(dx) > Math.abs(dy)) {
      steer({ x: dx > 0 ? 1 : -1, y: 0 });
    } else {
      steer({ x: 0, y: dy > 0 ? 1 : -1 });
    }
    touchStart.current = null;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Retro grid bakgrunn */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,19,240,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,19,240,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 40px",
          transform: "perspective(600px) rotateX(65deg)",
          transformOrigin: "center top",
          animation: "moveRetroGrid 7s linear infinite",
          opacity: 0.35,
        }}
      />

      {/* Score-rad */}
      <div className="relative z-10 mb-4 flex gap-12">
        <ScoreBox label="SCORE" value={score} color="#57C9D3" />
        <ScoreBox label="BEST" value={highScore} color="#FF13F0" />
      </div>

      {/* Brett + overlays */}
      <div
        className="relative z-10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <SnakeBoard snake={snake} food={food} gridSize={gridSize} />

        {status === "idle" && (
          <Overlay>
            <p
              className="font-retro text-6xl mb-1"
              style={{ color: "#57C9D3", textShadow: "0 0 20px #57C9D3" }}
            >
              SNAKE
            </p>
            <p
              className="font-retro text-xl mb-8"
              style={{ color: "rgba(87,201,211,0.55)" }}
            >
              ARROWS · WASD · SWIPE
            </p>
            <PixelBtn onClick={start}>START</PixelBtn>
            <p
              className="font-retro text-sm mt-3"
              style={{ color: "rgba(87,201,211,0.4)" }}
            >
              ELLER TRYKK ENTER
            </p>
          </Overlay>
        )}

        {status === "gameover" && (
          <Overlay>
            <p
              className="font-retro text-5xl mb-1"
              style={{ color: "#FF13F0", textShadow: "0 0 20px #FF13F0" }}
            >
              GAME OVER
            </p>
            <p
              className="font-retro text-3xl mb-1"
              style={{ color: "#57C9D3", textShadow: "0 0 10px #57C9D3" }}
            >
              {score} PTS
            </p>
            {score >= highScore && score > 0 && (
              <p
                className="font-retro text-xl mb-6 animate-pulse"
                style={{ color: "#FFFF00", textShadow: "0 0 10px #FFFF00" }}
              >
                NY REKORD!
              </p>
            )}
            {!(score >= highScore && score > 0) && <div className="mb-6" />}
            <PixelBtn onClick={start}>PRØV IGJEN</PixelBtn>
          </Overlay>
        )}
      </div>

      {/* Mobil D-pad */}
      <div className="relative z-10 mt-5 grid grid-cols-3 gap-2 w-40">
        <span />
        <DPadBtn onClick={() => steer({ x: 0, y: -1 })}>▲</DPadBtn>
        <span />
        <DPadBtn onClick={() => steer({ x: -1, y: 0 })}>◄</DPadBtn>
        <span />
        <DPadBtn onClick={() => steer({ x: 1, y: 0 })}>►</DPadBtn>
        <span />
        <DPadBtn onClick={() => steer({ x: 0, y: 1 })}>▼</DPadBtn>
        <span />
      </div>

      {/* Exit-knapp */}
      <button
        onClick={() => navigate("/#mission-select-full")}
        className="fixed bottom-10 left-10 z-[100] cursor-pointer group flex flex-col items-center bg-transparent border-none outline-none"
      >
        <div className="w-14 h-14 border-4 border-[#57C9D3] shadow-[0_0_15px_#57C9D3] rounded-full flex items-center justify-center bg-black/80 transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:shadow-[0_0_20px_white]">
          <span className="text-[#57C9D3] text-2xl font-bold group-hover:text-white transition-colors">
            «
          </span>
        </div>
        <span
          className="font-retro text-[#57C9D3] text-[10px] mt-2 tracking-[0.2em] uppercase group-hover:text-white"
          style={{ textShadow: "0 0 8px #57C9D3" }}
        >
          Exit
        </span>
      </button>
    </div>
  );
}

function Overlay({ children }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85">
      {children}
    </div>
  );
}

function ScoreBox({ label, value, color }) {
  return (
    <div className="text-center min-w-[80px]">
      <p
        className="font-retro text-sm tracking-widest uppercase"
        style={{ color, opacity: 0.65 }}
      >
        {label}
      </p>
      <p
        className="font-retro text-4xl"
        style={{ color, textShadow: `0 0 10px ${color}` }}
      >
        {value}
      </p>
    </div>
  );
}

function PixelBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="font-retro text-black text-xl px-10 py-2 transition-all duration-150 hover:scale-105 active:scale-95"
      style={{
        background: "#57C9D3",
        boxShadow: "0 0 15px #57C9D3, 4px 4px 0 #000",
      }}
    >
      {children}
    </button>
  );
}

function DPadBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 border-2 border-[#57C9D3] text-[#57C9D3] font-retro text-xl flex items-center justify-center bg-black/80 hover:bg-[#57C9D3]/20 active:bg-[#57C9D3]/40 active:scale-95 transition-all"
      style={{ boxShadow: "0 0 8px rgba(87,201,211,0.3)" }}
    >
      {children}
    </button>
  );
}
