import React from "react";
import Scores from "./Scores";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Header</h1>
      <Scores />
    </header>
  );
};

export default Header;
