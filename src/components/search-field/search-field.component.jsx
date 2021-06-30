import React from 'react';
import './search-field.styles.css'


export const SearchField = ({placeholder, handlechange}) => {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={ handlechange}/>
    )
}
