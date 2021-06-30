import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.components'

export const CardList = (props) => {
    console.log(props);
    return (<div className='card-list'>{
        props.products.map(product =>
            <Card key={product.id} product={product}/>
        )
    }</div>)
}
