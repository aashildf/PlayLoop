
import GameBoard from "../Mia/components/GameBoard.jsx"
import useMemoryGame from "../Mia/hooks/useMemoryGame.js"

function MemoryGame() {
  const {
    cards,
    flippedIndices,
    matchedIndices,
    score,
    moves,
    handleCardClick,
    resetGame,
  } = useMemoryGame();

  return (
    // Wrapper
    <div className="flex justify-center">
      {/* Container */}
      <article className="flex flex-col items-center">
        <header className="mb-6 text-center">
          <h3 className="text-xl font-semibold">
            Memory game under produksjon
          </h3>
            <p>
              Score: {score} · Moves: {moves}
            </p>
            <button onClick={resetGame}>
              New round
            </button>
        </header>
        <GameBoard
        cards={cards}
        flippedIndices={flippedIndices}
        matchedIndices={matchedIndices}
        onCardClick={handleCardClick}
        />
      </article>
    </div>
  );
}

export default MemoryGame;
