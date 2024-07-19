import React from "react";
import CardContent from './CardContent';


function Card(props) {
    return (
        <div className='card-grid'>
            <CardContent 
                id={props.id}
                quote={props.quote}
                author={props.author}
                emoji={props.emoji}
                />
        </div>
    )
}

export default Card;