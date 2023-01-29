import React from 'react'

function Featureditem(props) {
    return (
        <div className='item-container'>
            <img src={props.image}></img>
            <p className='menu-text'>{props.name}</p>
        </div>
    )
}

export default Featureditem;