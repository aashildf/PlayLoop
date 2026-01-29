import { useState, useRef, useEffect } from "react";
import "./ReactionGame.css";

const getRandomDelay = () => 1500 + Math.random() * 2500; // 1.5–4 sek

function ReactionGame() {
  const [status, setStatus] = useState("idle"); // idle | waiting | ready | tooSoon | result
  const [message, setMessage] = useState("Trykk START for å begynne ✨");
  const [currentTime, setCurrentTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  const [rounds, setRounds] = useState(0);

  const timeoutIdRef = useRef(null);
  const startTimeRef = useRef(null);

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
    </div>
  );
}

export default ReactionGame;
