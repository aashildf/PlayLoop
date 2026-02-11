import { useState, useEffect } from "react";
import cardData from "../../mia/data/cardData.js";
import { shuffle } from "../../mia/utils/shuffle.js";

function useMemoryGame() {
  // Cards
  const [cards, setCards] = useState(() => {
    const doubledCards = [...cardData, ...cardData];
    return shuffle(doubledCards);
  });

  // Game state
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  // Score, moves
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  // Handle card click
  function handleCardClick(index) {
    if (isLocked) return;
    if (flippedIndices.includes(index)) return;
    if (matchedIndices.includes(index)) return;

    if (flippedIndices.length === 0) {
      setFlippedIndices([index]);
    } else if (flippedIndices.length === 1) {
      setIsLocked(true);
      setMoves((prev) => prev + 1);
      setFlippedIndices([...flippedIndices, index]);
    }
  }
  //  Match logic
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (flippedIndices.length !== 2) return;

    const [firstIndex, secondIndex] = flippedIndices;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    if (firstCard.id === secondCard.id) {
      // Match
      setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      setScore((prev) => prev + 10);
      setFlippedIndices([]);
      setIsLocked(false);
    } else {
      // No match
      setTimeout(() => {
        setScore((prev) => Math.max(prev - 2, 0));
        setFlippedIndices([]);
        setIsLocked(false);
      }, 800);
    }
  }, [flippedIndices, cards]);
  /* eslint-enable react-hooks/set-state-in-effect */


  const isGameComplete = matchedIndices.length === cards.length;

  //   Reset game/new round

  function resetGame() {
    const doubledCards = [...cardData, ...cardData];
    setCards(shuffle(doubledCards));
    setFlippedIndices([]);
    setMatchedIndices([]);
    setIsLocked(false);
    setMoves(0);
  }

  return {
    cards,
    flippedIndices,
    matchedIndices,
    score,
    moves,
    isGameComplete,
    handleCardClick,
    resetGame,
  };
}

export default useMemoryGame;
