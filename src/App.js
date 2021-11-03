import React from 'react';
import { useTranslation } from 'react-i18next';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

import './App.css';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
function App() {
  let activeCurrencyKey = 'euro';
  let activeCountryKey = 'fr';
  const { t, i18n } = useTranslation('common');

  return (
    <div className="App">
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Home t={t} />
            <About t={t} />
            <Services t={t} />
            <Skills t={t} />
            <Education />
            <Experiences t={t} />
            <Contact t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
