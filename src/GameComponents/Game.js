import React, {useState} from "react";
import '../App.css';
import VisibleCards from './VisibleCards'
import './Game.css'
import Cards from "./Cards";



function Game(props) {
  const [cardsUp, setCardsUp]=useState([null,null]);
  const visibleCards = cardsUp.map(
    cardUp=>cardUp?props.deck.cards[cardUp]:null
  )

  return (
      <div id='game'>
          <VisibleCards cards = {visibleCards} />
          <Cards cards = {props.deck.cards} cardsUp ={cardsUp} />
      </div>
  );
}

export default Game;
