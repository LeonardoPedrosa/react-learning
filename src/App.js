import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/pokemon-styles.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Pokemon from './components/Pokemon';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



