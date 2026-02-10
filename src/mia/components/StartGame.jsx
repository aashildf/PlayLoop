function StartGame({ nickname, onNicknameChange, onStart }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80">
      <section>
        <h3>Enter your nickname</h3>

        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => onNicknameChange(e.target.value)}
          maxLength={12}
        />
        <button onClick={onStart} disabled={!nickname}>
          Start game
        </button>
      </section>
    </div>
  );
}
export default StartGame;
