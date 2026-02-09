import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#181111] text-white">
   
      <div className="crt-overlay crt-flicker" />
    
      <Header />
      <main className="relative z-10 ">
        <Outlet />
      </main >
      <Footer />
    </div>
  );
}

export default App;
