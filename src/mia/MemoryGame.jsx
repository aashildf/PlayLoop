
import { useState, useEffect } from "react";

import GameBoard from "../Mia/components/GameBoard.jsx";
import useMemoryGame from "../Mia/hooks/useMemoryGame.js";
import GameHeader from "../Mia/components/GameHeader.jsx";
import LastGamePanel from "../Mia/components/LastGamePanel.jsx";
import StartGame from "../Mia/components/StartGame.jsx";
import GameCompleteOverlay from "../Mia/components/GameCompleteOverlay.jsx";

function MemoryGame() {
  const [nickname, setNickname] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [lastGame, setLastGame] = useState(null);

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
    </div>
  );
}

export default MemoryGame;
