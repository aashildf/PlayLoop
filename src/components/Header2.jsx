import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const neonPink = "#D83BD2";

  return (
    <>
      <nav className="fixed top-0 left-0 z-[110] p-8 md:p-12">
        {/* HAMBURGER-KNAPP */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex flex-col gap-2 p-2 outline-none bg-transparent border-none cursor-pointer z-[210] transition-transform duration-300 hover:scale-110"
          aria-label="Menu"
        >
          {/* Linje 1 */}
          <div
            className={`h-1.5 shadow-[0_0_10px_#D83BD2] transition-all duration-300 
    bg-[#D83BD2] group-hover:bg-white group-hover:shadow-[0_0_20px_#D83BD2] ${
      isOpen ? "w-12 rotate-45 translate-y-3.5" : "w-10"
    }`}
          />

          {/* Linje 2 */}
          <div
            className={`h-1.5 shadow-[0_0_10px_#D83BD2] transition-all duration-300 
    bg-[#D83BD2] group-hover:bg-white group-hover:shadow-[0_0_20px_#D83BD2] ${
      isOpen ? "opacity-0" : "w-12"
    }`}
          />

          {/* Linje 3 */}
          <div
            className={`h-1.5 shadow-[0_0_10px_#D83BD2] transition-all duration-300 
    bg-[#D83BD2] group-hover:bg-white group-hover:shadow-[0_0_20px_#D83BD2] ${
      isOpen ? "w-12 -rotate-45 -translate-y-3.5" : "w-8"
    }`}
          />
        </button>
      </nav>

      {/* MENY OVERLAY (Vises når man trykker på knappen) */}
      <div
        className={`fixed inset-0 z-[105] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-10 text-center">
          {["Home", "Games", "About"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-6xl md:text-8xl font-['VT323'] tracking-widest uppercase transition-all duration-300 cursor-pointer hover:scale-110 text-[#D83BD2] hover:text-white"
              style={{
                fontFamily: "'VT323', monospace",
                textShadow: `0 0 20px #D83BD2`,
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
