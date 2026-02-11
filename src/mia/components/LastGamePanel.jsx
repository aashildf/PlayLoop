function LastGamePanel ({lastGame}) {
    if(!lastGame) {
        return (
            <aside>
                <h4>Last game</h4>
                <p>No completed game yet.</p>
            </aside>
        )
    } 


    return (
        <aside>
            <h4>Last game</h4>
            <p>Nickname: {lastGame.nickname || "-"}</p>
            <p>Score: {lastGame.score}</p>
            <p>Moves: {lastGame.moves}</p>
        </aside>
    )
}

export default LastGamePanel;