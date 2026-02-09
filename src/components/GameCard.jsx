
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
          transform: "translateZ(0)",
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

      {/* PLAY NOW - KNAPP CONTAINER */}
      <div
        className="absolute -bottom-1 left-0 w-full flex justify-center"
        style={{
          transform: "translateZ(120px)", // Litt ekstra løft for 3D-dybde
          transformStyle: "preserve-3d",
          pointerEvents: "none",
        }}
      >
        <Link
          to={path}
          className="group relative flex min-w-[260px] h-14 items-center justify-center rounded-xl transition-all duration-75 hover:scale-105 active:scale-90 pointer-events-auto overflow-hidden shadow-[0_0_25px_rgba(255,0,255,0.4)] border border-[#ff00ff]/40"
          style={{
            fontFamily: "'VT323', monospace",
            backgroundColor: "#6a007a",
          }}
        >
          {/* TEKST - Neon rosa/hvit */}
          <span
            className="relative z-20 text-3xl tracking-widest  italic"
            style={{
              color: "#ffffff",
              textShadow: "0 0 5px #fff, 0 0 15px #ff00ff",
            }}
          >
            Press Start
          </span>

          {/* LYSGLIMT - Lynraskt fra venstre til høyre */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-75">
            <div className="absolute top-0 left-0 w-16 h-full bg-white/60 transform -skew-x-12 translate-x-[-250%] group-hover:translate-x-[700%] transition-transform duration-400 ease-in-out" />
          </div>

          {/* BAKGRUNN - Burgunder "Light-up" */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#b532d1] via-[#6a007a] to-[#300038] group-hover:brightness-125 transition-all duration-75" />

          {/* Lys-stripe på toppkanten */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30 z-30" />

          {/* INDRE GLØD */}
          <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(255,0,255,0.5)] pointer-events-none" />
        </Link>
      </div>
    </div>
  );
}
