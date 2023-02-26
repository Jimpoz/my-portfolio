import React from 'react'
import Header from './components/header/header'
import Nav from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
