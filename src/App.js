import React from 'react';
import './App.css';

import Navbar from './components/NavBar.js';
import Header from './components/Header.js';
import Contact from './components/Contact.js';
import Work from './components/Work.js';
import About from './components/About.js'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      <div className="About">
        <About></About>
      </div>
      <div className="work">
        <Work></Work>
      </div>
      <div className="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
