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
            <CardFace
              properties = {props.properties}
            />


        </div>
    );
}

export default VisibleCard;
