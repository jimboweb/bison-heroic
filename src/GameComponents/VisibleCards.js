import React from 'react'
import VisibleCard from "./VisibleCard";

function VisibleCards(props){
    return <section id='visibleCardDisplay'>
        {
            props.visibleCards.map(
                (visibleCard,i)=><VisibleCard
                    startIndex = {visibleCard.startIndex}
                    value = {visibleCard.value}
                    revealed = {false}
                />
            )
        }
    </section>
}

export default VisibleCards;
