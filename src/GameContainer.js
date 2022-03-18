import React, { useState } from "react";
import Header from "./components/Header";
import CardDisplay from "./components/Cards/CardDisplay";

const GameContainer = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="gameContainer">
      <Header currentScore={currentScore} highScore={highScore} />
      <CardDisplay
        currentScore={currentScore}
        highScore={highScore}
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
      />
    </div>
  );
};

export default GameContainer;
