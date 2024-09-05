import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import "../main"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;