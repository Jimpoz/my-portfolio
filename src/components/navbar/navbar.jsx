import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BsClockHistory} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'

function Navbar(props) {
  const { active, setActive } = props;

  return (
    <nav>
      <a href="#" onClick={() => setActive('header')} className={active === 'header' ? 'active' : ''}>
        <AiOutlineHome size={25} />
      </a>
      <a href="#about" onClick={() => setActive('about')} className={active === 'about' ? 'active' : ''}>
        <AiOutlineUser size={25} />
      </a>
      <a href="#contact" onClick={() => setActive('contact')} className={active === 'contact' ? 'active' : ''}>
        <MdEmail size={25} />
      </a>
    </nav>
  );
}

export default Navbar;
