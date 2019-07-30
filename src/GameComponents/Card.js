import React from "react";
import './Card.css';
import CardFace from "./CardFace";
import CardBack from '../img/card_back.jpeg';


function Card(props) {

  const clickAction = ()=>{
    props.flipCard(props.currentIndex);
  };
  console.log(`in Card props.properties = ${props.properties}`);

  return (
    <div
      id={`card${props.currentIndex}`}
      className='card'
      onClick={clickAction}
    >
      {props.faceUp?
        <CardFace properties = {props.properties} />:
        <img src={CardBack} alt = 'face down card'/>
      }
    </div>
  );
}

export default Card;
