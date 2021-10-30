import React from 'react';
import './App.css';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

import Clients from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
function App() {
  return (
    <div className="App">
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home />
            <About />
            <Services />
            <Skills />
            <Education />
            <Experiences />
            <Clients />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
