import { useState } from "react";
import "./styles/memory.css";
import emojiCards from "./data/emojiCards.js";
import {shuffle} from "./utils/shuffle.js";

function MemoryGame() {
  const [cards, setCards] = useState(() => {
    const doubledCards = [...emojiCards, ...emojiCards];
    return shuffle(doubledCards);
  });


  return (
    <>
      <header className="memory-header">
        <h1>Memory Game</h1>
      </header>
      <section className="game-board">
        {cards.map((card, index) => (
          <div key={index} className="card">
            {card}
          </div>
        ))}
      </section>
    </>
  );
}

export default MemoryGame;
