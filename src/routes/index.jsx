import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home2";
import MemoryGame from "../mia/MemoryGame";
import ReactionGame from "../Therese/ReactionGame";
import TestPage from "../LeneRenate/TestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "memorygame", element: <MemoryGame /> },
      { path: "reactiongame", element: <ReactionGame /> },
      { path: "testpage", element: <TestPage /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);
