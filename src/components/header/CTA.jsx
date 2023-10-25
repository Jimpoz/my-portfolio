import React from 'react'
import CV from '../../assets/JZResume.pdf'
import { useState } from 'react'

function CTA(props) {
  const { setActive } = props;
  
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary' onClick={() => setActive('contact')} >Contact me</a>
    </div>
  );
}

export default CTA;