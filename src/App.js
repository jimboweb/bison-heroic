import React, {useState} from 'react';
import './App.css';
import fetchUtil from './util/fetchUtil'
import StartScreen from "./StartComponents/StartScreen";
import Game from './GameComponents/Game'


function App() {

  const [Deck,setDeck]=useState(null);

  const submitAction = (data) =>{
    fetchUtil.postData(
      '/game',
      data,
      (responseData)=>{
        setDeck(responseData.deck);
      }
    )
  };

  const swapCards = (firstCard, secondCard)=>{
    if(Deck.length>firstCard || Deck.length>secondCard){
      console.log('error swapping cards: index out of range');
    } else {
      const temp=Deck[firstCard];
      Deck[firstCard]=Deck[secondCard];
      Deck[secondCard]=temp;
    }
  };

  return (
    <div className="App">
      {
        Deck===null?
          <StartScreen submitAction = {submitAction} />:
          <Game deck = {Deck} swapCard = {swapCards} />
      }
    </div>
  );
}

export default App;
