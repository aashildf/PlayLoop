import { useState } from "react";
import "./styles/memory.css";
import cardData from "./data/cardData.js";
import {shuffle} from "./utils/shuffle.js";

function MemoryGame() {
  const [cards, setCards] = useState(() => {
    const doubledCards = [...cardData, ...cardData];
    return shuffle(doubledCards);
  });


  return (
    <>
      <section className="memory-container">
        <header className="memory-header">
          <h3>Memory game under produksjon</h3>
        </header>
        <section className="game-board">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[180px] h-[200px] perspective-[1000px]"
            >
              <div className="w-full h-full relative">
                <div className="absolute w-full h-full top-0 left-0">
                  <img src={card.image} alt={card.id} />
                </div>
                <div className="absolute w-full h-full top-0 left-0">
                  <img src="/mia-images/bakside1.jpg" alt="Card back" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export default MemoryGame;
