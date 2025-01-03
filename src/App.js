
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Skills from './Components/Skills.js';
import Portfolio from './Components/Portfolio.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';


function App ()  {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Navbar" element={<Navbar /> } />
          <Route path="/Contact" element={<Contact/> } />
          <Route path="/About" element={<About /> } />
          <Route path="/Portfolio" element={<Portfolio /> } />
          <Route path="/Skills" element={<Skills /> } />

        </Routes>
      </Router>
    </div>
  )
}


export default App ;