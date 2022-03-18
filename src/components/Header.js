import React from "react";
import Scores from "./Scores";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__h1">Memory Card Project</h1>
      <Scores currentScore={props.currentScore} highScore={props.highScore} />
    </header>
  );
};

export default Header;
