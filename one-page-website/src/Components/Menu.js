import React from 'react'
import MenuItem from './MenuItem'
import monsterLava from '../images/monsterLava.jpg'
import fusionBurger from '../images/fusionBurger.jpg'
import grilledBurger from '../images/grilledBurger.jpg'
import beefBurger from '../images/beefBurger.jpg'
import veganBurger from '../images/veganBurger.jpg'
import studentLava from '../images/studentLava.jpg'
import clubSandwich from '../images/clubSandwich.jpg'
import grilledSandwich from '../images/grilledSandwich.jpg'
import speghetti from '../images/speghetti.jpg'
import whitePasta from '../images/whitePasta.jpg'
import monsterWrap from '../images/monsterWrap.jpg'
import shakes from '../images/shakes.jpg'

function Menu() {

  const menu_items = [
    {
      Name:'Monster Lava' , Image:'monsterLava'
    },
    {
      Name:'Fusion Burger' , Image:'fusionBurger'
    },
    {
      Name:'Grilled Burger' , Image:'grilledBurger'
    },
    {
      Name:'Beef Burger' , Image:'beefBurger'
    },
    {
      Name:'Vegan Burger' , Image:'veganBurger'
    },
    {
      Name:'Student Deal' , Image:'studentLava'
    },
    {
      Name:'Club Sandwich' , Image:'clubSandwich'
    },
    {
      Name:'Grilled Sandwich' , Image:'grilledSandwich'
    },
    {
      Name:'Speghetti' , Image:'speghetti'
    },
    {
      Name:'White Sauce Pasta' , Image:'whitePasta'
    },
    {
      Name:'Monster Wrap' , Image:'monsterWrap'
    },
    {
      Name:'Whipped Shakes' , Image:'shakes'
    },
  ]
  
  return (
    <div>
      <div className='menu-container'>

        <div className='section-heading'>
          Menu
        </div>

        <div className='menu-images'>
          {
            menu_items.map(menu_items=>{
              <MenuItem name={menu_items.Name} image={menu_items.Image}></MenuItem>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Menu