import React, {useState} from 'react'
import Header from './components/header/header'
import Nav from './components/navbar/navbar'
import About from './components/about/about'

function App() {
  const [activeSection, setActiveSection] = useState('header');

  return (
    <div>
      <Nav active={activeSection} setActive={setActiveSection} />
      {/* Sections */}
      {activeSection === 'header' && <Header />}
      {activeSection === 'about' && <About />}
    </div>
  );
}

export default App;