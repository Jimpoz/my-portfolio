import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BsClockHistory} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'

function Navbar() {

  const [active, setActive] = useState('#')

  return (
    <nav>
        <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''} > <AiOutlineHome size={25} onFocus= {() => setActive('#')} /> </a>
        <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}> <AiOutlineUser size={25} onFocus={() => setActive('#about')} /> </a>
        <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}> <BsClockHistory size={25} onFocus={() => setActive('#experience')} /> </a>
        <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}> <MdEmail size={25} onFocus={() => setActive('#contact')} /> </a>
    </nav>
  )
}

export default Navbar
