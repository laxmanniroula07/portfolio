<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 03953244c693fd4263609af8dfb26de300da452f
