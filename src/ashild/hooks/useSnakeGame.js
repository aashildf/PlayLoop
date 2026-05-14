import { useState, useEffect, useRef, useCallback } from "react";

const GRID = 40;

function randomFood(snake) {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * GRID),
      y: Math.floor(Math.random() * GRID),
    };
  } while (snake.some((s) => s.x === pos.x && s.y === pos.y));
  return pos;
}

function makeInitial() {
  const snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];
  return { snake, food: randomFood(snake), dir: { x: 1, y: 0 }, score: 0, status: "idle" };
}

export default function useSnakeGame() {
  const [game, setGame] = useState(makeInitial);
  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem("snake_highscore") || "0", 10)
  );
  const nextDirRef = useRef({ x: 1, y: 0 });

  const tick = useCallback(() => {
    setGame((prev) => {
      if (prev.status !== "playing") return prev;

      const nd = nextDirRef.current;
      const isReverse = nd.x === -prev.dir.x && nd.y === -prev.dir.y;
      const dir = isReverse ? prev.dir : nd;

      const head = prev.snake[0];
      const next = { x: head.x + dir.x, y: head.y + dir.y };

      if (next.x < 0 || next.x >= GRID || next.y < 0 || next.y >= GRID) {
        return { ...prev, status: "gameover" };
      }
      if (prev.snake.some((s) => s.x === next.x && s.y === next.y)) {
        return { ...prev, status: "gameover" };
      }

      const ate = next.x === prev.food.x && next.y === prev.food.y;
      const snake = [next, ...prev.snake];
      if (!ate) snake.pop();

      return {
        ...prev,
        snake,
        food: ate ? randomFood(snake) : prev.food,
        score: ate ? prev.score + 10 : prev.score,
        dir,
      };
    });
  }, []);

  const speedTier = Math.floor(game.score / 50);

  useEffect(() => {
    if (game.status !== "playing") return;
    const speed = Math.max(70, 130 - speedTier * 15);
    const id = setInterval(tick, speed);
    return () => clearInterval(id);
  }, [game.status, speedTier, tick]);

  useEffect(() => {
    if (game.status === "gameover") {
      setHighScore((prev) => {
        const next = Math.max(prev, game.score);
        localStorage.setItem("snake_highscore", String(next));
        return next;
      });
    }
  }, [game.status, game.score]);

  const start = useCallback(() => {
    nextDirRef.current = { x: 1, y: 0 };
    setGame({ ...makeInitial(), status: "playing" });
  }, []);

  const steer = useCallback((dir) => {
    nextDirRef.current = dir;
  }, []);

  return {
    snake: game.snake,
    food: game.food,
    score: game.score,
    status: game.status,
    highScore,
    gridSize: GRID,
    start,
    steer,
  };
}
