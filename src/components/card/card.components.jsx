import React from 'react';
import './card.styles.css'


export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.product.id}?set=set4s`}/>
            <h2> { props.product.name} </h2>
            <p> {props.product.email}</p>
        </div>
    )
}
