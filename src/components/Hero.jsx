



export default function Hero() {
    return (
      <section className="flex flex-col items-center pt-48 pb-16 ">
        {/* Neon logo */}
        <header className="text-center mb-12 md:ml-32 lg:ml-48 transition-all">
          <h1 className="font-neon text-6xl md:text-9xl tracking-tighter animate-flicker leading-none">
            <span className="text-magenta-500 neon-text-pink block text-[18vw] md:text-[13vw]">
              PLAY
            </span>
            <span className="text-cyan-400 neon-text-cyan block text-[18vw] md:text-[13vw]">
              LOOP
            </span>
          </h1>
          <p className="mt-6 font-retro text-xl text-yellow-400 tracking-[0.3em] animate-pulse">
            INSERT COIN TO START
          </p>
        </header>
      </section>
    );
}