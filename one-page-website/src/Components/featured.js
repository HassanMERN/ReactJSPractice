import React from 'react'
import monsterLava from '../images/monsterLava.jpg'
import whitePasta from '../images/whitePasta.jpg'
import Shakes from '../images/shakes.jpg'
import Featureditem from './featuredItem'

function Featured() {
    return (
        <div className='featured-container'>

            <div className='section-heading'>
                Featured Items
            </div>

            <div className='featured-images'>
                
                <Featureditem name='Monster Lava' image = {monsterLava}></Featureditem>

                <Featureditem name='Whiped Shakes' image = {Shakes}></Featureditem>

                <Featureditem name='White Sauce Pasta' image = {whitePasta}></Featureditem>
            </div>
        </div>
    )
}

export default Featured