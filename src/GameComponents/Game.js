import React, {useState} from "react";
import '../App.css';
import VisibleCards from './VisibleCards'
import './Game.css'
import Cards from "./Cards";



function Game(props) {
  const [cardsUp, setCardsUp]=useState([null,null]);

  return (
      <div id='game'>
          <VisibleCards cards = {props.deck.cards} />
          <Cards cards = {props.deck.cards} cardsUp ={cardsUp} />
      </div>
  );
}

export default Game;
