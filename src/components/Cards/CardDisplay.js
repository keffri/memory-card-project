import React, { useState, useEffect } from "react";
import waterLogo from "../../images/water.png";
import earthLogo from "../../images/earth.png";
import fireLogo from "../../images/fire.png";
import windLogo from "../../images/wind.png";
import Card from "./Card";

const CardDisplay = (props) => {
  const cardData = [
    { name: "Water", img: waterLogo, id: "water" },
    { name: "Earth", img: earthLogo, id: "earth" },
    { name: "Fire", img: fireLogo, id: "fire" },
    { name: "Wind", img: windLogo, id: "wind" },
  ];

  const [currentCards, setCurrentCards] = useState([]);

  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const randomArray = randomNumberArray();
    setCurrentCards([
      cardData[randomArray[0]],
      cardData[randomArray[1]],
      cardData[randomArray[2]],
      cardData[randomArray[3]],
    ]);
    // eslint-disable-next-line
  }, []);

  const randomNumberArray = () => {
    const numbers = [];
    for (var a = [0, 1, 2, 3], i = a.length; i--; ) {
      var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
      numbers.push(random);
    }
    return numbers;
  };

  useEffect(() => {
    if (props.currentScore === 4) {
      alert("You win!");
      resetGame();
    }
    // eslint-disable-next-line
  }, [props.currentScore]);

  const selectCard = (id) => {
    setSelectedCards([...selectedCards, id]);
    if (selectedCards.includes(id)) {
      console.log("Card already chosen.");
      resetGame();
      return;
    } else {
      props.setCurrentScore(props.currentScore + 1);
    }
    const randomArray = randomNumberArray();
    setCurrentCards([
      cardData[randomArray[0]],
      cardData[randomArray[1]],
      cardData[randomArray[2]],
      cardData[randomArray[3]],
    ]);
  };

  const resetGame = () => {
    const randomArray = randomNumberArray();
    if (props.currentScore < props.highScore) {
      props.setCurrentScore(0);
      setSelectedCards([]);
    } else {
      props.setHighScore(props.currentScore);
      props.setCurrentScore(0);
      setSelectedCards([]);
    }
    setCurrentCards([
      cardData[randomArray[0]],
      cardData[randomArray[1]],
      cardData[randomArray[2]],
      cardData[randomArray[3]],
    ]);
  };

  return (
    <div className="cardDisplay">
      {currentCards.map((card) => {
        return <Card data={card} key={card.id} selectCard={selectCard} />;
      })}
    </div>
  );
};

export default CardDisplay;
