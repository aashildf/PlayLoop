/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useState } from "react";

export default function GameCard({
  title,
  image,
  path,
  customTitle,
  lottieJson,
}) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 700, damping: 45, mass: 0.6 });
  const mouseYSpring = useSpring(y, { stiffness: 700, damping: 45, mass: 0.6 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div className="flex flex-col items-center">
      {/* KORTET (hover her, IKKE i Home wrapper) */}
      <div style={{ perspective: "1500px" }}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
            setIsHovered(false);
          }}
          onClick={() => navigate(`/${path}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate(`/${path}`);
          }}
          whileHover={{ scale: 1.03 }} // ✅ hover-scale flyttet hit
          transition={{ duration: 0.18 }} // ✅ rask
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            transform: "translateZ(0)",
            backgroundColor: "#EAE3D6",
          }}
          className="relative w-[340px] h-[500px] rounded-[40px] flex flex-col items-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-visible cursor-pointer border border-black/5"
        >
          {/* Glow under */}
          <div
            className={`absolute -inset-20 blur-[100px] rounded-full pointer-events-none -z-50 transition-opacity duration-200 ${
              isHovered ? "opacity-60" : "opacity-35"
            }`}
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.55) 0%, rgba(236,72,153,0.55) 50%, rgba(0,0,0,0) 100%)",
              transform: "translateZ(-80px) translateY(20px)",
            }}
          />

          {/* Bilde */}
          <div
            className="absolute inset-0 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-black/5"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#EAE3D6",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.3] mix-blend-multiply"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/cardboard-flat.png')`,
              }}
            >
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.1)] pointer-events-none" />
            </div>

            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
          </div>

          {lottieJson ? (
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                bottom: 105,
                left: "50%",
                transform: "translateX(-50%) translateZ(60px)",
                width: 120,
                opacity: isHovered ? 1 : 0.85,
                transition: "opacity 150ms ease",
              }}
            >
              <Lottie animationData={lottieJson} loop />
            </div>
          ) : null}

          {/* ✅ Tekst-overskriften er fjernet (customTitle vises ikke) */}
        </motion.div>
      </div>

      {/* KNAPP UNDER (påvirker ikke kort-hover) */}
      <div className="mt-6">
        <Link
          to={`/${path}`}
          className="group relative flex min-w-[260px] h-14 items-center justify-center rounded-xl pointer-events-auto overflow-hidden border-2 border-[#ff00ff]/50 
               transition-[transform] duration-[50ms] ease-out hover:scale-105 active:scale-95 shadow-xl"
          style={{
            fontFamily: "'VT323', monospace",
            backgroundColor: "#6a007a",
          }}
        >
          <span
            className="relative z-20 text-3xl tracking-widest uppercase italic"
            style={{
              color: "#ffffff",
              textShadow: "0 0 5px #fff, 0 0 15px #ff00ff",
            }}
          >
            Press Start
          </span>

          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-0">
            <div className="absolute top-0 left-0 w-24 h-full bg-white/50 transform -skew-x-12 translate-x-[-300%] group-hover:translate-x-[800%] transition-transform duration-300 ease-linear" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#b532d1] via-[#6a007a] to-[#300038] group-hover:from-[#d63ef2] group-hover:via-[#9d00b5]" />

          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/40 z-30 opacity-70" />

          <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(255,0,255,0.6)] pointer-events-none" />
        </Link>
      </div>
    </div>
  );
}
