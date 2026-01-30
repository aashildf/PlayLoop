import "./styles/flip.css";
import { useState, useEffect } from "react";
import cardData from "./data/cardData.js";
import { shuffle } from "./utils/shuffle.js";

function MemoryGame() {
  // doubled and shuffled cards
  const [cards] = useState(() => {
    const doubledCards = [...cardData, ...cardData];
    return shuffle(doubledCards);
  });

  // game state
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  // card clicks
  function handleCardClick(index) {
    if (isLocked) return;
    if (flippedIndices.includes(index)) return;
    if (matchedIndices.includes(index)) return;

    if (flippedIndices.length === 0) {
      setFlippedIndices([index]);
    } else if (flippedIndices.length === 1) {
      setIsLocked(true);
      setFlippedIndices([...flippedIndices, index]);
    }
  }
 
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (flippedIndices.length !== 2) return;

    const [firstIndex, secondIndex] = flippedIndices;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    if (firstCard.id === secondCard.id) {
      setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      setFlippedIndices([]);
      setIsLocked(false);
    } else {
      setTimeout(() => {
        setFlippedIndices([]);
        setIsLocked(false);
      }, 800);
    }
  }, [flippedIndices, cards]);
  /* eslint-enable react-hooks/set-state-in-effect */

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
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="w-45 aspect-9/10 perspective-[1000px] cursor-pointer"
            >
              <div
                className={`w-full h-full relative transition-transform duration-500 preserve-3d ${
                  flippedIndices.includes(index) ||
                  matchedIndices.includes(index)
                    ? ""
                    : "rotate-y-180"
                }`}
              >
                {/* card front */}
                <div className="absolute w-full h-full top-0 left-0 backface-hidden">
                  <img
                    src={card.image}
                    alt={card.id}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* card back */}
                <div className="absolute w-full h-full top-0 left-0 backface-hidden rotate-y-180">
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
