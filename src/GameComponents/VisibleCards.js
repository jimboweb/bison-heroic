import React from 'react'
import VisibleCard from "./VisibleCard";
import './VisibleCards.css'
import FaceDownCard from "./FaceDownCard";

function VisibleCards(props){
    return <section id='visibleCardDisplay'>
        {
            props.cards.map(
                (visibleCard,i)=>visibleCard?<VisibleCard
                    startIndex = {visibleCard.startIndex}
                    value = {visibleCard.value}
                    view = {visibleCard.view}
                />:<FaceDownCard />
            )
        }
    </section>
}

export default VisibleCards;
