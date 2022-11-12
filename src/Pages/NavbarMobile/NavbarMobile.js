import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './NavbarMobile.css'
import { FaAlignJustify } from "react-icons/fa";


const NavbarMobile = ({sx}) => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <div className='navbarMobile'>
        <FaAlignJustify className='iconToggle' onClick={()=> {setToggle(!toggle)}} />
        {toggle? <Navbar sx={sx} /> : null}
    </div>
  )
}

export default NavbarMobile