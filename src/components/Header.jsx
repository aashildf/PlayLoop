
import {Link} from "react-router-dom";

export default function Header() {
  const neonPink = "#D83BD2"; // PlayLoop Magenta


  return (
    <nav className="absolute top-0  z-[100] w-full bg-transparent py-8 px-10 md:px-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="no-underline shrink-0">
        <h1
          className="text-4xl tracking-tighter leading-none hover:text-white hover:drop-shadow-[0_0_8px_#fff] transition-all"
          style={{
            fontFamily: "'VT323', monospace",
            color: neonPink,
          }}
        >
          PlayLoop
        </h1>
      </Link>

      {/* NAV-LENKER */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-16 md:gap-24 lg:gap-32">
        <Link
          to="/"
          className="transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#fff] whitespace-nowrap"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "26px",
            color: neonPink,
          }}
        >
          Home
        </Link>

        {/* GAMES: Kan enten gå til en oversikt eller bare være en dekorativ trigger */}
        <Link
          to="/testpage" // Midlertidig link til testpage som en "spillmeny"
          className="transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#fff] whitespace-nowrap"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "26px",
            color: neonPink,
          }}
        >
          Games
        </Link>

        {/* LENKE: Om oss */}
        <Link
          to="/about"
          className="transition-all duration-300hover:text-white hover:drop-shadow-[0_0_8px_#fff] whitespace-nowrap"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "26px",
            color: neonPink,
          }}
        >
          Om oss
        </Link>
      </div>
    </nav>
  );
}
