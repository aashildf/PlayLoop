
/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useTransform, useSpring} from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useState} from "react";



export default function GameCard({ title, image, path, lottieJson}) {const [isHovered, setIsHovered] = useState(false);

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
            // PAPIR-BILDE-BAKGRUNN
            backgroundImage: `url('gamecard_mia.png')`,
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

        {/* TITTEL -posisjonert over bakgrunnsbildet*/}
        <div
          className="absolute z-20"
          style={{
            top: "42%",
            left: "50%",
            width: "100%",
            transform: "translateX(-50%) translateZ(90px)",
          }}
        >
          <h2
            className="text-center italic tracking-tighter"
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontWeight: "900",
              fontSize: "75px",
              lineHeight: "0.8",
              color: "#B7A0B8",
              textShadow: `
      -1.5px -1.5px 0 #06070C, 1.5px -1.5px 0 #06070C, -1.5px 1.5px 0 #06070C, 1.5px 1.5px 0 #06070C,
      /* 2. Den 'doble' streken (en skygge som ligger rett under) */
      0px 4px 0px #06070C, 
      /* 3. Selve bunnen av klistremerket */
      0px 7px 0px #06070C,
      /* 4. Myk skygge som kastes på bakgrunnen */
      0px 12px 20px rgba(0,0,0,0.5)
    `,
            }}
          >
            <span className="block" style={{ marginBottom: "-5px" }}>
              Memory
            </span>
            <span
              className="block ml-6"
              style={{
                fontSize: "68px",
                textTransform: "lowercase",
              }}
            >
              game
            </span>
          </h2>
        </div>

        {/* PLAY NOW- knapp */}
        <div
          className="absolute bottom-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <Link
            to={path}
            className="py-4 px-12 text-white font-black bg-[#E0748F] rounded-full border-b-[6px] border-pink-900 shadow-[0_10px_30px_rgba(224,116,143,0.4)] hover:brightness-110 active:border-b-0 `active:translate-y-1.5` transition-all tracking-widest"
          >
            PLAY NOW
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
