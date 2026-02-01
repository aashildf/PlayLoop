// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useState} from "react";



export default function GameCard({ title, image, path, lottieJson, isPrimary }) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamiske klasser
  const neonBorder = isPrimary
    ? "border-secondary shadow-[0_0_15px_rgba(255,0,255,0.5)]"
    : "border-primary shadow-[0_0_15px_rgba(0,242,255,0.5)]";

  const neonText = isPrimary
      ? "neon-text-pink text-magenta-500"
      : "neon-text-cyan text-cyan-400";

  const glowClass = isPrimary
        ? "arcade-screen-glow-pink"
        : "arcade-screen-glow-cyan";

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // 3d hover-effekt
      whileHover={{
        scale: 1.05,
        rotateY: 0,
        rotateX: 10,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden cursor-pointer bg-black/80 border-4 p-6 rounded-lg grainy flex flex-col items-center min-h-[400px] ${neonBorder} ${glowClass}`}
    >
      {/* Bakgrunnsmønster inni kortet */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/gamecard-bg.svg')",
          backgroundSize: "cover",
        }}
      ></div>
      {/* Overskrift med retro-font */}
      <h3 className={`font-neon text-3xl mb-6 z-10 ${neonText}`}>{title}</h3>

      <div className="flex-grow flex justify-center items-center z-10 h-[180px]">
        {isHovered && lottieJson ? (
          // Lottie animasjon - 3d
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0, rotateX: 0 }}
            classname="w-40"
          >
            <Lottie animationData={lottieJson} loop={true} />
          </motion.div>
        ) : (
          // 2d bildet
          <motion.img
            src={image}
            alt={title}
            className="w-32 drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]"
            initial={{ scale: 1 }}
            animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
          />
        )}
      </div>
          {/* Play-knapp */}
          <Link
          to={path}
          className={`mt-6 font-neon text-xl py-2 px-10 rounded-full text-white transition-all duration-300 z-10
          ${isPrimary 
            ? "bg-magenta-600 hover:bg-magenta-500 shadow-[0_0_15px_rgba(255,0,255,0.6)]" 
            : "bg-cyan-600 hover:bg-cyan-500 shadow-[0_0_15px_rgba(0,242,255,0.6)]"
          }`}
        >
        PLAY
      </Link>
    </motion.div>
  );
}
