import React from "react";
import './Controls.css';

function Controls(props) {

  const swapButtonAction =(event)=>{
    event.preventDefault();
    props.swapCards();
  };

  const showButtonAction = (event) => {
    event.preventDefault();
    props.showAllCards();
  };

  return (
    <div id='controls'>
      <button
        onClick={swapButtonAction}>
        Swap Cards
      </button>
      <button onClick={showButtonAction}>
        Show cards
      </button>
    </div>
  );
}

export default Controls;
