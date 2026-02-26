import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MemoryGame from "../mia/MemoryGame";
import ReactionGame from "../Therese/ReactionGame";
import TestPage from "../LeneRenate/TestPage";
import About from "../pages/About";

// ⭐ Designsystem-sider
import Designsystem from "../pages/design/Designsystem";
import Buttons from "../pages/design/Buttons";
import Cards from "../pages/design/Cards";
import NeonEffects from "../pages/design/NeonEffects";
import Animations from "../pages/design/Animations";
import GridSystem from "../pages/design/GridSystem";
import IconLibrary from "../pages/design/IconLibrary";
import Highscores from "../pages/Higcscores";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "highscores", element: <Highscores /> },
      { path: "memorygame", element: <MemoryGame /> },
      { path: "reactiongame", element: <ReactionGame /> },
      { path: "testpage", element: <TestPage /> },

      // ⭐ Designsystem-ruter
      { path: "design", element: <Designsystem /> },
      { path: "design/animations", element: <Animations /> },
      { path: "design/buttons", element: <Buttons /> },
      { path: "design/cards", element: <Cards /> },
      { path: "design/neon", element: <NeonEffects /> },
      { path: "design/grid", element: <GridSystem /> },
      { path: "design/icons", element: <IconLibrary /> },

      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);
