import React from "react";
import '../App.css';

import sanitizeHtml from 'sanitize-html';


function CardFace(props) {
    const dangerousHtml = props.view;
    const sanitizedHtml = sanitizeHtml(dangerousHtml,{allowedTags: ['div'], allowedAttributes: {'div':['class','data-property']}});
    return (
        <div dangerouslySetInnerHTML={{__html:sanitizedHtml}} />

    );
}

export default CardFace;
