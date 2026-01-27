import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MemoryGame from "../mia/MemoryGame";
import Home from "../LeneRenate/TestPage";

export const router = createBrowserRouter([
  {
    path: "/PlayLoop/",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "memorygame", element: <MemoryGame /> },
      // { path: "reactiongame", element: <ReactionGame /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);
