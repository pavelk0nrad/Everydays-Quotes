import React from "react";


function CardContent(props) {
    return (
        <div className='card-container'>
            <div className="card-top">
            <h2>{props.author}</h2>
            </div>
            <div className='quotes-p'>
            <p>{props.emoji}</p>
            <p>{props.quote}</p>
            </div>
        </div>
    )
}

export default CardContent;