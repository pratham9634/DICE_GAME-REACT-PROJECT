import { useState } from "react"; // Importing useState hook
import StartGame from "./components/StartGame"; // Importing StartGame component
import GamePlay from "./components/GamePlay"; // Importing GamePlay component

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false); // State for game start

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev); // Toggle game state
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</> // Conditional rendering
  );
}

export default App; // Exporting App component