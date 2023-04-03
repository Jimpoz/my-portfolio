import React, {useState} from 'react'
import Header from './components/header/header'
import Nav from './components/navbar/navbar'
import About from './components/about/about'
import Contact from './components/contact/contact'
import CTA from './components/header/CTA'

function App() {
  const [activeSection, setActiveSection] = useState('header');

  const handleSetActiveSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'contact') {
      setActiveSection('contact');
    }
  };

  return (
    <div>
      <Nav active={activeSection} setActive={handleSetActiveSection} />
      {activeSection === 'header' && <Header setActiveSection={handleSetActiveSection} />}
      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
    </div>
  );
}

export default App;