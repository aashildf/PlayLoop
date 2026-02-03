
import {Link} from "react-router-dom";

export default function Header() {
  const neonPink = "#D83BD2"; // PlayLoop Magenta
  const yellowCoin = "#FACC15"; // PlayLoop Yellow (fra Hero)

  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center">

      {/* VENSTRE SIDE: LOGO og LENKER */}
      <div className="flex items-center gap-16">
      {/* LOGO */}
      <Link to="/" className="no-underline">
        <h1 
        className="text-4xl tracking-tighter leading-none neon-text-pink"
            style={{ 
              fontFamily: "'VT323', monospace", 
              color: neonPink 
            }}>
            PlayLoop
        </h1>
      </Link>

      {/* NAV-LENKER */}
      <nav className="flex gap-12">
        {["Home", "Settings", "Games"].map((item) => (
          <Link
            key={item}
            to={`/${item.replace(" ", "")}`}
            className="transition-all duration-300 hover:text-white"
          style={{ 
                fontFamily: "'VT323', monospace",
                fontSize: "24px",
                color: neonPink,
                textDecoration: "none",
                letterSpacing: "1px"
              }}
              >
            {item}
          </Link>
        ))}
        </nav>
      </div>
      

      {/* HØYRE SIDE - LOG-IN*/ }
      <div className="flex items-center">
        <Link
          to="/login"
         className="transition-all duration-300 hover:brightness-125"
          style={{ 
            fontFamily: "'VT323', monospace",
            fontSize: "26px",
            color: yellowCoin, // Bruker gult for å skille den ut litt
            textDecoration: "none",      
            border: `1px dotted ${yellowCoin}`,
            padding: "0px 12px",
            borderRadius: "2px",
            boxShadow: `0 0 10px ${yellowCoin}40` // Subtil gul glød
          }}
          >
            Log in:
          </Link>
      </div>
    </nav>
  );
}
