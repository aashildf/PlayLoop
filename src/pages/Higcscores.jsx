import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Highscores() {
  const mockScores = [
    { nickname: "PIXEL_QUEEN", score: 9999 },
    { nickname: "KODE_HODE", score: 8540 },
    { nickname: "PAC_MAN", score: 7210 },
    { nickname: "RETRO_BOY", score: 5400 },
    { nickname: "ARCADE_GAL", score: 3200 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] brick-pattern flex flex-col items-center justify-center p-6 pt-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-black/90 border-4 border-[#57C9D3] p-8 md:p-12 shadow-[0_0_30px_rgba(87,201,211,0.3)] relative"
      >
        {/* Neon stripe i toppen (Cyan i stedet for lilla for variasjon) */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#57C9D3] shadow-[0_0_10px_#57C9D3]" />
        
        <h1 className="font-retro text-5xl md:text-7xl text-white text-center mb-10 tracking-widest" style={{ textShadow: '0 0 15px #57C9D3' }}>
          HALL_OF_FAME
        </h1>

        {/* Score-tabellen */}
        <div className="font-retro space-y-4">
          <div className="flex justify-between text-[#D83BD2] text-2xl md:text-3xl border-b-2 border-[#D83BD2]/30 pb-2 mb-6">
            <span>RANK / PLAYER</span>
            <span>SCORE</span>
          </div>

          {mockScores.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`flex justify-between items-center text-2xl md:text-4xl ${
                index === 0 ? "text-yellow-400 animate-pulse" : "text-white/90"
              }`}
            >
              <div className="flex gap-4">
                <span className="opacity-40">{index + 1}ST</span>
                <span className="uppercase">{entry.nickname}</span>
              </div>
              <span className="font-bold">{entry.score}</span>
            </motion.div>
          ))}
        </div>

        {/* Statuslinje */}
        <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center font-retro text-lg text-white/40">
          <p>DATABASE: ONLINE</p>
          <p className="animate-pulse">AWAITING_NEW_ENTRY...</p>
        </div>

        {/* Return knapp */}
        <div className="mt-10 text-center">
          <Link 
            to="/" 
            className="inline-block px-10 py-3 border-2 border-[#D83BD2] text-[#D83BD2] hover:bg-[#D83BD2] hover:text-black transition-all font-retro text-2xl uppercase tracking-widest"
          >
            Return to Base
          </Link>
        </div>
      </motion.div>
    </div>
  );
}