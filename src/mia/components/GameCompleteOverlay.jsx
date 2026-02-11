function GameCompleteOverlay ({onNewGame}) {

    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
            <section>
                <h3>Round complete</h3>

                <button onClick={onNewGame}>
                    New game
                </button>
            </section>
        </div>
    );
}


export default GameCompleteOverlay;