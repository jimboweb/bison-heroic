import React from "react";
import '../App.css';
import CardFace from './CardFace';
import cardBack from '../img/card_back.jpeg';
import './VisibleCard.css';

function VisibleCard(props) {
    return (
        <div className="visibleCard">
            <div className="visibleCardImgSize">

            </div>
            {props.revealed ? <CardFace
              view={props.view}
            /> : <img src={cardBack} alt = "card back"/>
            }

        </div>
    );
}

export default VisibleCard;
