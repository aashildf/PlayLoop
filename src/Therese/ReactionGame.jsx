import { useState, useRef, useEffect } from "react";
import "./ReactionGame.css";
import { useNavigate } from "react-router-dom";

const getRandomDelay = () => 1500 + Math.random() * 2500; // 1.5–4 sek

function ReactionGame() {
  const [status, setStatus] = useState("idle"); // idle | waiting | ready | tooSoon | result
  const [message, setMessage] = useState("Trykk START for å begynne ✨");
  const [currentTime, setCurrentTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  const [rounds, setRounds] = useState(0);

  const timeoutIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const navigate = useNavigate();

  const startGame = () => {
    // rydd opp forrige runde
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    setCurrentTime(null);
    setStatus("waiting");
    setMessage("Vent til boksen blir GRØNN...");

    const delay = getRandomDelay();

    timeoutIdRef.current = setTimeout(() => {
      setStatus("ready");
      setMessage("KLIKK NÅ! 💥");
      startTimeRef.current = performance.now();
    }, delay);
  };

  const handleBoxClick = () => {
    if (status === "waiting") {
      // klikket for tidlig
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      setStatus("tooSoon");
      setMessage("For tidlig! 😅 Trykk START for å prøve igjen.");
      return;
    }

    if (status === "ready") {
      const end = performance.now();
      const reaction = Math.round(end - startTimeRef.current); // ms

      setCurrentTime(reaction);
      setRounds((prev) => prev + 1);
      setStatus("result");
      setMessage("Bra! Trykk START for å spille igjen.");

      setBestTime((prev) =>
        prev === null || reaction < prev ? reaction : prev,
      );
    }
  };

  useEffect(() => {
    // cleanup når komponenten fjernes
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const getBoxClassName = () => {
    let base = "rg-box";
    if (status === "waiting") return base + " rg-box--waiting";
    if (status === "ready") return base + " rg-box--ready";
    if (status === "tooSoon") return base + " rg-box--toosoon";
    return base;
  };

  return (
    <div className="rg-wrapper">
      <div className="rg-card">
        <h1 className="rg-title">Thereses Reaction Game ⚡</h1>
        <p className="rg-subtitle">
          Klikk så fort du kan når boksen blir grønn.
        </p>

        <div className={getBoxClassName()} onClick={handleBoxClick}>
          <span className="rg-box-text">
            {status === "idle" && "Trykk START for å spille"}
            {status === "waiting" && "VENT... ⏳"}
            {status === "ready" && "KLIKK NÅ! 💥"}
            {status === "tooSoon" && "FOR TIDLIG 😅"}
            {status === "result" && `${currentTime} ms`}
          </span>
        </div>

        <button className="rg-button" onClick={startGame}>
          START
        </button>

        <div className="rg-info">
          <p>{message}</p>
          <div className="rg-stats">
            <div>
              <span className="rg-label">Sist:</span>
              <span className="rg-value">
                {currentTime !== null ? `${currentTime} ms` : "-"}
              </span>
            </div>
            <div>
              <span className="rg-label">Best:</span>
              <span className="rg-value">
                {bestTime !== null ? `${bestTime} ms` : "-"}
              </span>
            </div>
            <div>
              <span className="rg-label">Runder:</span>
              <span className="rg-value">{rounds}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/#mission-select-full")}
        className="fixed bottom-4 left-4 md:bottom-10 md:left-10 z-[100] cursor-pointer group flex flex-col items-center bg-transparent border-none outline-none"
      >
        {" "}
        <div className="w-11 h-11 md:w-14 md:h-14 border-4 border-[#57C9D3] shadow-[0_0_15px_#57C9D3] rounded-full flex items-center justify-center bg-black/80 transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:shadow-[0_0_20px_white]">
          {" "}
          <span className="text-[#57C9D3] text-2xl font-bold group-hover:text-white transition-colors">
            «
          </span>{" "}
        </div>{" "}
        <span
          className="font-retro text-[#57C9D3] text-[10px] mt-2 tracking-[0.2em] uppercase group-hover:text-white"
          style={{ textShadow: "0 0 8px #57C9D3" }}
        >
          {" "}
          Exit{" "}
        </span>{" "}
      </button>
    </div>
  );
}

export default ReactionGame;
