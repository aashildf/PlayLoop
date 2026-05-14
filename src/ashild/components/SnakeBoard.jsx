export default function SnakeBoard({ snake, food, gridSize }) {
  const pct = (n) => `${(n / gridSize) * 100}%`;
  const sz = `calc(${100 / gridSize}% - 2px)`;

  return (
    <div
      className="relative bg-black border-2 border-[#57C9D3]"
      style={{
        width: "min(400px, 92vw)",
        aspectRatio: "1 / 1",
        boxShadow: "0 0 30px rgba(87,201,211,0.4), 0 0 60px rgba(87,201,211,0.15)",
        backgroundImage: `
          linear-gradient(rgba(87,201,211,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(87,201,211,0.05) 1px, transparent 1px)
        `,
        backgroundSize: `${100 / gridSize}% ${100 / gridSize}%`,
      }}
    >
      {/* Food */}
      <div
        className="absolute rounded-full"
        style={{
          left: `calc(${pct(food.x)} + 1px)`,
          top: `calc(${pct(food.y)} + 1px)`,
          width: sz,
          height: sz,
          background: "radial-gradient(circle, #ff69b4, #FF13F0)",
          boxShadow: "0 0 12px #FF13F0, 0 0 24px rgba(255,19,240,0.5)",
        }}
      />

      {/* Snake */}
      {snake.map((seg, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `calc(${pct(seg.x)} + 1px)`,
            top: `calc(${pct(seg.y)} + 1px)`,
            width: sz,
            height: sz,
            background:
              i === 0
                ? "linear-gradient(135deg, #7EDDEB, #57C9D3)"
                : `rgba(87, 201, 211, ${Math.max(0.35, 0.85 - i * 0.015)})`,
            boxShadow: i === 0 ? "0 0 10px #57C9D3" : undefined,
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
}
