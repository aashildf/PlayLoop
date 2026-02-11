import Card from "./Card";

function GameBoard({
    cards,
    flippedIndices,
    matchedIndices,
    onCardClick,
}) {
    return (
        <div className="grid grid-cols-4 gap-4">
       {cards.map((card, index) => (
        <Card 
        key={index}
        card={card}
        isFlipped={flippedIndices.includes(index)}
        isMatched={matchedIndices.includes(index)}
        onClick={()=> onCardClick(index)}
        />
       ))}
        </div>
    )
}

export default GameBoard;