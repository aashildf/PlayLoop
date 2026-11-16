import { Link } from "react-router-dom";

export default function DesignSystemNav() {
  return (
    <nav className="bg-black/40 backdrop-blur-sm py-4 px-6 mb-12 rounded-xl border border-white/10 mt-14 md:mt-0 md:ml-28">
      <ul className="flex flex-wrap gap-4 text-sm font-retro tracking-wide">
        <li>
          <Link to="/design" className="hover:text-[#57C9D3]">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/design/animations" className="hover:text-[#57C9D3]">
            Animations
          </Link>
        </li>
        <li>
          <Link to="/design/buttons" className="hover:text-[#57C9D3]">
            Buttons
          </Link>
        </li>
        <li>
          <Link to="/design/cards" className="hover:text-[#57C9D3]">
            Cards
          </Link>
        </li>
        <li>
          <Link to="/design/neon" className="hover:text-[#57C9D3]">
            Neon Effects
          </Link>
        </li>
        <li>
          <Link to="/design/grid" className="hover:text-[#57C9D3]">
            Grid System
          </Link>
        </li>
        <li>
          <Link to="/design/icons" className="hover:text-[#57C9D3]">
            Icons
          </Link>
        </li>
      </ul>
    </nav>
  );
}
