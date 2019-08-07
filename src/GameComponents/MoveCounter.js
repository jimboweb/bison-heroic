import React from "react";


function MoveCounter(props) {
  return (
    <div id='moveCounter'>
      Moves: {props.moves}
    </div>
  );
}

export default MoveCounter;
