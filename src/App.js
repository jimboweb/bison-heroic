import React, {useState} from 'react';
import './App.css';
import fetchUtil from './util/fetchUtil'
import StartScreen from "./StartComponents/StartScreen";
import Game from './GameComponents/Game'

//todo 190723: create basic startScreen, create Deck state and pass to Game, then make it show the cards properly

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


  return (
    <div className="App">
      {
        Deck===null?
          <StartScreen submitAction = {submitAction}/>:
          <Game deck = {Deck} />
      }
    </div>
  );
}

export default App;
