import React from "react";
import './Cards.css';
import Card from "./Card";

function Cards(props) {
  return (
    <div id="cards">
      {props.cards.map(
        (card, i)=>
          {
            const faceUp = props.showAll?
              true:
              props.cardsUp.indexOf(i)>=0;
            const locked = i===props.cardLocked;
            return <Card
              key = {card.startIndex}
              currentIndex = {i}
              properties = {card.value.props}
              faceUp={faceUp}
              cardClicked = {props.cardClicked}
              locked = {locked}
            />
          }
      )}
    </div>
  );
}

export default Cards;
