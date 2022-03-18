import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.selectCard(props.data.id)}>
      <img src={props.data.img} alt="img" className="card__img" />
      <p className="card__p">{props.data.name}</p>
    </div>
  );
};

export default Card;
