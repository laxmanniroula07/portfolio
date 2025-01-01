import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';

function App ()  {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Navbar" element={<Navbar /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App ;