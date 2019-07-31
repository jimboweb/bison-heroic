import React, {useState} from "react";
import '../App.css';
import VisibleCards from './VisibleCards'
import './Game.css'
import Cards from "./Cards";
import Controls from "./Controls";



function Game(props) {
  const [cardsUp, setCardsUp]=useState([]);
  const visibleCards = cardsUp.map(
    cardUp=>cardUp?props.deck.cards[cardUp]:null
  )

  const flipCard = (cardNum)=>{
    if(cardsUp.indexOf(cardNum)===-1)
    {// if cardsUp is empty or full set the array to a single value of cardsUp,
    // otherwise keep the first value and add the second value
    setCardsUp(
      cardsUp.length === 1 ?
        [cardsUp[0], cardNum] :
        [cardNum]
    );}
  };

  const swapCards = () =>{
    if(cardsUp.length===2){
      props.swapCards(cardsUp[0],cardsUp[1]);
    }
  };


  return (
      <div id='game'>
          <VisibleCards
            cards = {visibleCards}
          />
          <Controls
            swapCards = {swapCards}
          />
          <Cards
            cards = {props.deck.cards}
            cardsUp= {cardsUp}
            flipCard = {flipCard}
          />
      </div>
  );
}

export default Game;
