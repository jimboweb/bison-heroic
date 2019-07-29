import React from "react";
import './Cards.css';
import Card from "./Card";

function Cards(props) {
  return (
    <div>
      {props.cards.map(
        (card)=>
          {
            const faceUp = props.cardsUp.indexOf(card.startIndex)>=0;
            return <Card startIndex = {card.startIndex} properties = {card.value.props} faceUp={faceUp}/>
          }
      )}
    </div>
  );
}

export default Cards;
