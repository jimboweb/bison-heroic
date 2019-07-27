import React from 'react'
import VisibleCard from "./VisibleCard";

function VisibleCards(props){
    return <section id='visibleCardDisplay'>
        {
            props.cards.map(
                (visibleCard,i)=><VisibleCard
                    startIndex = {visibleCard.startIndex}
                    value = {visibleCard.value}
                    view = {visibleCard.view}
                    revealed = {false}
                />
            )
        }
    </section>
}

export default VisibleCards;
