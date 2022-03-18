import React from "react";

const Scores = (props) => {
  return (
    <div className="scores">
      <p className="scores__currentScore">
        Current Score: {props.currentScore}
      </p>
      <p className="scores__highScore">High Score: {props.highScore}</p>
    </div>
  );
};

export default Scores;
