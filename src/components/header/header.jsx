import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <header>
        <div className=".container header_container">
            <h5>Hi, I am</h5>
            <h1>Jinpeng Zhang</h1>
            <h5 className='text-light'>Computer Science student at the university of Venice Ca' Foscari</h5>
            <CTA/>
            <HeaderSocials/>

            <div className="me">
                {/*<img src AND THEN IMPORT IT*/}
            </div>

            <a href="#contact" className='scroll_down'>Scroll down</a>
        </div>
    </header>
  )
}

export default header
