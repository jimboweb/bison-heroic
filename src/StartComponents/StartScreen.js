import React from "react";
import formUtil from '../util/FormUtil';

/**
 * This is the start screen for the game.
 * @param props will have user prop at some point
 * @returns a start form where user can pick size of deck and level of challenge
 * @constructor
 */
function StartScreen(props) {

    const submitAction=(event)=>{
        const form = document.getElementById('startForm');
        const formData = formUtil.formInputsToObject(form);
        const jsonData = JSON.stringify(formData);
        props.submitAction(jsonData);
        event.preventDefault();
    };

    return (
        <form id='startForm'>
            <input type = 'number' name='deckSize'/>
            <input type = 'submit' onClick={submitAction}/>
        </form>
    );
}

export default StartScreen;
