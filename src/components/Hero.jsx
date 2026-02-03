import Scoreboard from "./Scoreboard.jsx";

export default function Hero() {
    return (
      <section className="flex flex-col items-center pt-12 pb-16">
        {/* Neon logo */}
        <header className="text-center mb-12">
          <h1 className="font-neon text-6xl md:text-9xl tracking-tighter animate-flicker leading-none">
            <span className="text-magenta-500 neon-text-pink block">PLAY</span>
            <span className="text-cyan-400 neon-text-cyan block">LOOP</span>
          </h1>
          <p className="mt-6 font-retro text-xl text-yellow-400 tracking-[0.3em] animate-pulse">INSERT COIN TO START</p>
        </header>
        {/* her kommer scoreboard */}
        <Scoreboard/>
      </section>
    );
}