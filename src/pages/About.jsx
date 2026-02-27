import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SingleLetterParticle = ({ letter }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particles = useRef([]);
  const [hovering, setHovering] = useState(false);
  let animationFrame;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const initParticles = () => {
      //  ekstra plass rundt hver bokstav for eksplosjonen
      const size = 100;
      canvas.width = size;
      canvas.height = size;

      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = "#57C9D3";
      ctx.font = "bold 24px VT323"; // Juster størrelse her
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(letter.toUpperCase(), size / 2, size / 2);

      const imageData = ctx.getImageData(0, 0, size, size).data;
      particles.current = [];

      for (let y = 0; y < size; y += 2) {
        for (let x = 0; x < size; x += 2) {
          const index = (y * size + x) * 4 + 3;
          if (imageData[index] > 128) {
            particles.current.push({
              originX: x,
              originY: y,
              curX: x,
              curY: y,
              vx: (Math.random() - 0.5) * 10,
              vy: (Math.random() - 0.5) * 10,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        if (hovering) {
          p.curX += p.vx;
          p.curY += p.vy;
          p.vx *= 0.97;
          p.vy *= 0.97;
        } else {
          p.curX += (p.originX - p.curX) * 0.15;
          p.curY += (p.originY - p.curY) * 0.15;
        }
        ctx.fillStyle = "#57C9D3";
        ctx.fillRect(p.curX, p.curY, 1.5, 1.5);
      });
      animationFrame = requestAnimationFrame(animate);
    };

    initParticles();
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [hovering, letter]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative inline-block w-[18px] h-[30px] cursor-pointer"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: "100px", height: "100px" }}
      />
    </span>
  );
};

export default function About() {
  const developers = [
    { name: "ÅSHILD", role: "Interface & Portal Architecture" },
    { name: "MIA", role: "Memory Game Module" },
    { name: "THERESE", role: "Reaction Game Module" },
    { name: "LENE RENATE", role: "Backend & Integration" },
  ];

  const buttonText = "RETURN TO BASE";

  return (
    <div className="min-h-screen bg-[#0a0a0a] brick-pattern flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-black/90 border-4 border-[#D83BD2] p-6 md:p-8 shadow-[0_0_20px_#D83BD2] relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-[#D83BD2] animate-pulse" />

        <h1 className="font-['VT323'] text-4xl md:text-6xl text-white text-center mb-6 tracking-tight">
          ABOUT_PLAYLOOP
        </h1>

        <div className="font-['VT323'] text-lg md:text-xl text-[#57C9D3] space-y-5 text-left">
          <p className="leading-tight">
            A MULTI-GAME ARCADE PLATFORM BUILT FOR THE NEXT GENERATION OF RETRO
            GAMERS.
          </p>

          <section className="border-t border-white/10 pt-4">
            <p className="text-white uppercase tracking-widest mb-3 text-sm opacity-70">
              [ SYSTEM_DEVELOPERS ]
            </p>
            <div className="grid grid-cols-1 gap-2 leading-none">
              {developers.map((dev, i) => (
                <p key={i}>
                  {" "}
                  {dev.name}:{" "}
                  <span className="text-white/70 italic">{dev.role}</span>
                </p>
              ))}
            </div>
          </section>

          <p className="text-white/40 text-lg border-t border-white/10 pt-4 italic">
            PlayLoop: Bridging retro vibes and modern performance.
          </p>
        </div>

        {/* KNAPPEN MED EN-OG-EN BOKSTAV EKSPLOSJON */}
        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#57C9D3] hover:bg-[#57C9D3]/5 transition-colors font-['VT323']"
          >
            {buttonText.split("").map((char, index) => {
              if (char === " ") {
                return (
                  <span key={index} className="mx-1">
                    &nbsp;
                  </span>
                );
              }
              // Bokstavene returneres her
              return <SingleLetterParticle key={index} letter={char} />;
            })}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// for justering av  bokstav-eksplosjon:

// Antall partikler per bokstav: Endre fragments i SingleLetterParticle.

// Størrelse på partiklene: Juster ctx.fillRect(p.curX, p.curY, 1.5, 1.5)

// Fart/fading: Juster vx, vy og friction i animate-funksjonen.

// Fargen på partiklene: Endre ctx.fillStyle = "#57C9D3"
