import React from 'react'
import './about.css'

function About () {
  return (
    <section id='about'>
      <div className='container about_container'>
      <h1>About Me</h1>
      </div>
        <div className='container about_text_container'>
          <p>
            I am a computer science student at the University of Venice Ca' Foscari and I am currently in my third year.
            Since I have no previous experience in the field, I am looking for an internship that will allow me to learn and grow.
            I am a very ambitious person and I am always looking for new challenges in order to improve myself.
          </p>
        </div>
    </section>
  )
}

export default About
