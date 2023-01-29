import React from 'react'
import MenuItem from './MenuItem'

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
          Featured
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