
import { useState, useEffect } from "react";

import GameBoard from "../Mia/components/GameBoard.jsx";
import useMemoryGame from "../Mia/hooks/useMemoryGame.js";
import GameHeader from "../Mia/components/GameHeader.jsx";
import LastGamePanel from "../Mia/components/LastGamePanel.jsx";
import StartGame from "../Mia/components/StartGame.jsx";
import GameCompleteOverlay from "../Mia/components/GameCompleteOverlay.jsx";
import { useNavigate } from "react-router-dom";

function MemoryGame() {
  const [nickname, setNickname] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [lastGame, setLastGame] = useState(null);
  // Tilbake til home-knapp
  const navigate = useNavigate();

  const {
    cards,
    flippedIndices,
    matchedIndices,
    score,
    moves,
    isGameComplete,
    handleCardClick,
    resetGame,
  } = useMemoryGame();

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (!isGameComplete) return;

    setLastGame({
      nickname,
      score,
      moves,
      finishedAt: new Date().toISOString(),
    });
  }, [isGameComplete, nickname, score, moves]);

  return (
    // Wrapper
    <div className="flex justify-center">
      {/* Container */}
      <article className="flex flex-col items-center gap-6">
        <GameHeader score={score} moves={moves} />
        <div className="relative inline-block">
          <GameBoard
            cards={cards}
            flippedIndices={flippedIndices}
            matchedIndices={matchedIndices}
            onCardClick={
              hasStarted && !isGameComplete ? handleCardClick : () => {}
            }
          />
          {!hasStarted && (
            <StartGame
              nickname={nickname}
              onNicknameChange={setNickname}
              onStart={() => setHasStarted(true)}
            />
          )}

          {isGameComplete && (
            <GameCompleteOverlay
              onNewGame={() => {
                resetGame();
                setHasStarted(true);
              }}
            />
          )}
        </div>

        <LastGamePanel lastGame={lastGame} />
      </article>

      <button
        onClick={() => navigate("/")}
        className="fixed bottom-10 left-10 z-[100] cursor-pointer group flex flex-col items-center bg-transparent border-none outline-none"
      >
        {" "}
        <div className="w-14 h-14 border-4 border-[#57C9D3] shadow-[0_0_15px_#57C9D3] rounded-full flex items-center justify-center bg-black/80 transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:shadow-[0_0_20px_white]">
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

export default MemoryGame;
