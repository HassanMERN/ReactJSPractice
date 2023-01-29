import React from 'react'
import monsterLava from '../images/monsterLava.jpg'
import whitePasta from '../images/whitePasta.jpg'
import Shakes from '../images/shakes.jpg'
import Featureditem from './featured-item'

function Featured() {
    return (
        <div className='featured-container'>

            <div className='section-heading'>
                Featured
            </div>

            <div className='featured-images'>
                
                <Featured name='Monster Lava' image = 'monsterLava'></Featured>

                <Featured name='Whiped Shakes' image = 'Shakes'></Featured>

                <Featured name='White Sauce Pasta' image = 'whitePasta'></Featured>
            </div>
        </div>
    )
}

export default Featured