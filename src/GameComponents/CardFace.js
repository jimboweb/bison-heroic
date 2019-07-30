import React from "react";
import '../App.css';
import './CardFace.css';
import defaultImg from '../img/dragon_head.png';


function CardFace(props) {
    console.log(`props.properties = ${props.properties}`);
    return (
        <div  className='cardFace'>
            <div className='cardImage'>
                {/*TODO 190729: get image as blob or base64 and create image url connected to bezoar-indue/ObjectClasses/FaceValue line 28 or so */}
                <img src={defaultImg} alt = 'default' />
            </div>
            <div className='cardProperties'>
                {
                    Object.keys(props.properties).map(
                      key=> <div className='cardProp' data-property={key} key = {key}>
                          {key}: {props.properties[key]}
                      </div>
                    )
                }
            </div>
        </div>
    );
}

export default CardFace;
