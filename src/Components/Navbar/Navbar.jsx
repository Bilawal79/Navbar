import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/cap-b.png'
import logo_dark from '../../assets/cap-w.png'
import search_icon_light from '../../assets/search-b.png'
import search_icon_dark from '../../assets/search-w.png'
import toogle_light from '../../assets/moon.png'
import toogle_dark from '../../assets/sun.png'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');

    }
  return (
    <div className='navbar'>

        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>

        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <img src={theme == 'light' ? search_icon_dark : search_icon_light} alt="" />

        </div>

        <img onClick={()=>{toggle_mode()}
        } src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>
      
    </div>
  )
}

export default Navbar
