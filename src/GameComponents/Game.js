import React, {useState} from "react";
import '../App.css';
import VisibleCards from './VisibleCards'
import './Game.css'
import Cards from "./Cards";
import Controls from "./Controls";
import MoveCounter from "./MoveCounter";
import kendallTau from '../util/sortUtil';



function Game(props) {
  const [cardsUp, setCardsUp]=useState([]);
  const [showAll, setShowAll]=useState(false);
  const [moves, setMoves]= useState(0);
  const [amountSorted, setAmountSorted] = useState(0);
  const [cardLocked, setCardLocked] = useState(null)
  const visibleCards = cardsUp.map(
    cardUp=>cardUp?props.deck.cards[cardUp]:null
  );

  const addMove=()=>setMoves(moves+1);

  const cardClicked = (num) => {
    if(cardsUp.indexOf(num)>=0){
      if(cardLocked===num){
        unlockCard(num);
      }else {
        lockCard(num);
      }
    } else {
      flipCard(num);
    }
  };


  const lockCard = (num) => {
    setCardLocked(num);
    addMove();
  };

  const unlockCard = (num) => {
    setCardLocked(null);
    addMove();
  }

  const flipCard = (cardNum)=>{
    addMove();
    if(cardNum===cardLocked || cardsUp.indexOf(cardNum)>=0){
      console.log("flipCard shouldn't be run on card that's up");
    } else if(cardLocked!==null){
      setCardsUp([cardLocked,cardNum]);
    } else {
      // if cardsUp is empty or full set the array to a single value of cardsUp,
      // otherwise keep the first value and add the second value
      setCardsUp(
      cardsUp.length === 1 ?
        [cardsUp[0], cardNum] :
        [cardNum]
      );
    }
  };

  const swapCards = () =>{
    if(cardsUp.length===2){
      addMove();
      props.swapCards(cardsUp[0],cardsUp[1]);
      checkAmountSorted();
    }
  };

  const showAllCards=()=>{
    setShowAll(true);
  };

  const checkAmountSorted = () => {
    setAmountSorted(kendallTau(
      props.deck.cards.map(
        card=>card.startIndex
      ),
      props.objective));
  };


  return (
      <div id='game'>
          <VisibleCards
            cards = {visibleCards}
          />
          <Controls
            swapCards = {swapCards}
            gameOver = {!showAll}
            showAllCards = {showAllCards}
          />
          <MoveCounter moves = {moves} amountSorted = {amountSorted} />
          <Cards
            cards = {props.deck.cards}
            cardsUp= {cardsUp}
            cardClicked = {cardClicked}
            showAll = {showAll}
            cardLocked = {cardLocked}
          />
      </div>
  );
}

export default Game;
