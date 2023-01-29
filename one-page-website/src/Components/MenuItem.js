import React from 'react'

function MenuItem(props) {
  return (
    <div className='item-container2'>
            <img src={props.image}></img>
            <p className='menu-text'>{props.name}</p>
        </div>
  )
}

export default MenuItem