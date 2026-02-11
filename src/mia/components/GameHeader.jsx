function GameHeader({ score, moves, onReset }) {
  return (
    <header className="mb-6 text-center">
      <h3 className="text-xl font-semibold">Memory game under produksjon</h3>
      <p>
        Score: {score} · Moves: {moves}
      </p>
      <button onClick={onReset}>New round</button>
    </header>
  );
}
export default GameHeader