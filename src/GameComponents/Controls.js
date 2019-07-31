import React from "react";
import './Controls.css';

function Controls(props) {

  const swapButtonAction =(event)=>{
    event.preventDefault();
    props.swapCards();
  };

  return (
    <div id='controls'>
      <button onClick={swapButtonAction}>Swap Cards</button>
    </div>
  );
}

export default Controls;
