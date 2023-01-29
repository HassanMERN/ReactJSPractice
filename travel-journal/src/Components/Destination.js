import React from 'react'

function Destination(props) {
    return (
        <div className="destinationContainer">

            <img src={`../Images/${props.Image}`}></img>

            <div className='detailsContainer'>

                <p className='locationContainer'>

                    <p className='location'>{props.location}</p>
                    <a target="_blank" href={props.locationString} className='maps'>view on Google Maps</a>

                </p>

                <h3 className='name'>{props.name}</h3>

                <p className='destinationIntro'>{props.intro}</p>

            </div>
        </div>
    )
}

export default Destination