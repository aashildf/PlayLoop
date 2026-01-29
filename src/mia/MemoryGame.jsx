import { useState } from "react";
import cardData from "./data/cardData.js";
import { shuffle } from "./utils/shuffle.js";

function MemoryGame() {
  const [cards, setCards] = useState(() => {
    const doubledCards = [...cardData, ...cardData];
    return shuffle(doubledCards);
  });

  return (
    // wrapper to center the content
    <div className="flex justify-center">
      {/* memory container */}
      <article className="flex flex-col items-center">
        <header className="mb-6 text-center">
          <h3 className="text-xl font-semibold">
            Memory game under produksjon
          </h3>
        </header>
        {/* Game board */}
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="w-45 h-50 perspective-[1000px]">
              <div className="w-full h-full relative">
                {/* Card front */}
                <div className="absolute w-full h-full top-0 left-0">
                  <img
                    src={card.image}
                    alt={card.id}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Card back */}
                <div className="absolute w-full h-full top-0 left-0">
                  <img
                    src="/mia-images/bakside1.jpg"
                    alt="Card back"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default MemoryGame;
