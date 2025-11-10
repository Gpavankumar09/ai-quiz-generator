import React from 'react'
import './Navbar.css'
import logo_light from '../assets/night.png'
import logo_dark from '../assets/day.png'


const Navbar = ({theme,setTheme}) => {
    
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    } 
    
        
  return (
    <div className="navbar">

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? logo_light : logo_dark} alt="light" className='logo'/>
        <h1 className='heading'>Quiz Generator</h1>
        
        <ul>
            <li>Home</li>            
            <li>About</li>
            <li>Features</li>
        </ul>
        
    </div>
  )
}

export default Navbar