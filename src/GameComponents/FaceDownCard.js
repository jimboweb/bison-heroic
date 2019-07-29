import React from "react";
import './FaceDownCard.css';
import cardBack from "../img/card_back.jpeg";

function FaceDownCard(props) {
  return (
    <div className='faceDownCard'>
      <img src={cardBack} alt = "card back"/>
    </div>
  );
}

export default FaceDownCard;
