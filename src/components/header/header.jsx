import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/circlepfp.png'

function Header(props) {
  const { setActiveSection } = props;
  
  return (
    <section id='#'>
      <div className=".container header_container">
        <h6>Hi, I am</h6>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <h1>Jinpeng Zhang</h1>
        <h5 className='text-light'>Computer Science student at the university of Venice Ca' Foscari</h5>
        <CTA setActive={setActiveSection} />
        <HeaderSocials/>
      </div>
    </section>
  );
}

export default Header;
