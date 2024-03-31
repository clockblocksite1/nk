import React, { useState } from 'react'; 
import './Header.css'
import {BiMenuAltRight}from 'react-icons/bi'
const Header = () => {
  const[menuopened,setMenuOpened] =useState(flase)

  const getMenuStyles = (menuOpened ) => {
    if (document.documentElement.clientwidth <= 800)
    {
      return {right: !menuOpened && "-100"}
    }
  }
  return (
    <section className="h-wrapper">
    <div className="flexCenter paddings innerWidth h-container">

      <img src="./Joe.png"alt="logo" width={100} />

      <div className="flexCenter h-menu"
      style={getMenuStyles(menuOpened)}
      
      >
        <a href="">
          Residencies
        </a>
        <a href="">Our Value</a>
        <a href="">Contact Us </a>
        <a href="">Get Started</a>

        <button className='button'>
        <a href="">Contact</a>
        </button>
      </div>

       <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
         <BiMenuAltRight size=(30px)/>
       </div>
    
       </div>

   
    
    </section>
  )
}

export default Header