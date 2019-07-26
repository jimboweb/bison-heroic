import React from "react";
import '../App.css';
import CardFace from './CardFace';


function VisibleCard(props) {
    return (
        <div className="visibleCard">
            <div className="visibleCardImgSize">

            </div>
            {props.revealed?
                <img src="card_back.jpg" />:
                <CardFace
                    value={props.value}
                />
            }

        </div>
    );
}

export default VisibleCard;
