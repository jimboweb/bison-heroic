import React from 'react'
import VisibleCard from "./VisibleCard";
import './VisibleCards.css'
import FaceDownCard from "./FaceDownCard";
import Card from "./Cards";

function VisibleCards(props){
    return <section id='visibleCardDisplay'>
        {
            props.cards.map(
                (visibleCard,i)=>visibleCard?<VisibleCard
                  key = {visibleCard.startIndex}
                  properties = {visibleCard.value.props}
                />:<FaceDownCard />
            )
        }
    </section>
}

export default VisibleCards;
