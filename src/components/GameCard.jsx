
/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useTransform, useSpring} from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useState} from "react";



export default function GameCard({ title, image, path, customTitle, lottieJson}) {const [isHovered, setIsHovered] = useState(false);

  // PARALLAX EFFEKT: 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

 
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(
      mouseXSpring,
      [-0.5, 0.5],
      ["-20deg", "20deg"]);
    

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    };



  return (
    <div
      className="py-24 flex justify-center items-center"
      style={{ perspective: "1500px" }}
    >
      {/* SELVE KORTET */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
          setIsHovered(false);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          backgroundColor: "#EAE3D6",
        }}
        className="relative w-[400px] h-[580px] rounded-[40px] flex flex-col items-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-visible cursor-pointer border border-black/5"
      >
        {/* NEON - GLOW UNDER KORTET*/}
        <div
          className="absolute -inset-20  blur-[100px] rounded-full opacity-60 pointer-events-none -z-50"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(236,72,153,0.6) 50%, rgba(0,0,0,0) 100%)",
            transform: "translateZ(-80px) translateY(20px)",
          }}
        />

        {/* PAPIR-TEKSTUR  */}
        <div
          className="absolute inset-0 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-black/5"
          style={{
            // BILDE-BAKGRUNN
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#EAE3D6", // Fallback hvis bildet ikke laster
          }}
        >
          {/* selve papirfibrene */}
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply"
            style={{
              backgroundImage: `url('https://www.transparenttextures.com/patterns/cardboard-flat.png')`,
            }}
          >
            {/*  subtilt lag over bildet for å gi det litt mer "dybde" */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.1)] pointer-events-none" />
          </div>

          {/* vignett/skitten kant */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
        </div>

        {/* BILDET/  */}
        {/* <div
          className="flex-1 flex justify-center items-center  w-full pt-12"
          style={{ transform: "translateZ(100px)" }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              filter: isHovered
                ? "drop-shadow(0 30px 40px rgba(0,0,0,0.4))"
                : "drop-shadow(0 15px 15px rgba(0,0,0,0.2))",
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {isHovered && lottieJson ? (
              <div className="w-72">
                <Lottie animationData={lottieJson} loop={true} />
              </div>
            ) : (
              <img src={image} className="w-64 drop-shadow-2xl" alt={title} />
            )}
          </motion.div>
        </div> */}

        {/* TITTEL-SVEVENDE "Rendrer customTitle fra Home.jsx*/}
        <div
          className="absolute z-20 w-full pointer-events-none"
          style={{
            top: "43%",
            left: "50%",
            transform: "translateX(-50%) translateZ(100px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            style={{
              fontFamily: "'Fredoka', sans-serif",
              textShadow: `
        -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000,
        0px 5px 0px #000, 
        0px 8px 0px #000,
        0px 15px 25px rgba(0,0,0,0.4)
      `,
              color: "#b7a0b8",
            }}
          >
            {/* HER VISES TEKSTEN FRA HOME.JSX */}
            {customTitle}
          </div>
        </div>
      </motion.div>

      {/* KNAPPENE */}

      <div
        className="absolute -bottom-1"
        style={{ transform: "translateZ(50px)" }}
      >
        <Link
          to={path}
          className="group relative flex min-w-[240px] h-16 cursor-pointer items-center justify-center overflow-hidden rounded-full px-8 bg-[#9d00b5] text-white text-xl font-black tracking-widest transition-transform duration-75 active:scale-95 shadow-lg"
          style={{ fontFamily: "'VT323',  monospace" }}
        >
          {/* TEKST */}
          <span className="relative z-10">PRESS START</span>

          {/* GLITCH-STRIPE - Satt til 'duration-200' for å være lynrask */}
          <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-200 ease-in-out" />

          {/* ENKLERE GRADIENT I STEDET FOR TUNGE SKYGGER */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </Link>
      </div>
    </div>
  );
}
