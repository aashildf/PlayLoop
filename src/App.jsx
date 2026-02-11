import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";

function App() {
  return (
    <div className="relative min-h-screen bg-[#181111] text-white">
      <div className="crt-overlay " />

      <Header2 />
      <main className="relative z-10 -mt-23 md:-mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
