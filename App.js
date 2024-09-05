import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer/>
    </BrowserRouter>
    
  );
  
}

export default App;