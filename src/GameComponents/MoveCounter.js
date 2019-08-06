import React from "react";
import './App.css';


function MoveCounter(props) {
  return (
    <div id='moveCounter'>
      Moves: {props.moves}
    </div>
  );
}

export default MoveCounter;
