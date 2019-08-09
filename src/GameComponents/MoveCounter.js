import React from "react";


function MoveCounter(props) {
  return (
    <div id='moveCounter'>
      Moves: {props.moves} Amount sorted: {props.amountSorted}
    </div>
  );
}

export default MoveCounter;
