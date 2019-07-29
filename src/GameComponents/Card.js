import React from "react";
import './Card.css';
import CardFace from "./CardFace";
import CardBack from '../img/card_back.jpeg';


function Card(props) {
  return (
    <div id={`card${props.startIndex}`}>
      {props.faceUp?
        <CardFace properties = {props.properties} />:
        <img src={CardBack} alt = 'face down card'/>
      }
    </div>
  );
}

export default Card;
