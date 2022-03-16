import React, { useState } from "react";

const Scores = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="scores">
      <p className="scores__currentScore">{currentScore}</p>
      <p className="scores__highScore">{highScore}</p>
    </div>
  );
};

export default Scores;
