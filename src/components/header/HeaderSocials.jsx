import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/jinpeng-zhang-946843204/' target="_blank"> <AiOutlineLinkedin/> </a>
        <a href='https://github.com/Jimpoz' target="_blank"> <AiFillGithub/> </a>
    </div>
  )
}

export default HeaderSocials