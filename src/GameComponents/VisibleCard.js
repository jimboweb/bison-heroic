import React from "react";
import '../App.css';
import CardFace from './CardFace';

function VisibleCard(props) {
    return (
        <div className="visibleCard">
            <div className="visibleCardImgSize">

            </div>
            {props.revealed?
                <img src="../img/card_back.jpeg" />:
                <CardFace
                    view = {props.view}
                />
            }

        </div>
    );
}

export default VisibleCard;
