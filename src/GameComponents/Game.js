import React from "react";
import '../App.css';
import VisibleCards from './VisibleCards'


function ComponentName(props) {

    return (
        <div id='game'>
            <VisibleCards cards = {props.deck.cards}/>
        </div>
    );
}

export default ComponentName;
