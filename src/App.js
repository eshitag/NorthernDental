//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Title from './components/Title';
import Contact from './components/Contact';
import About from './components/About';
//import Contact from './components/Contact';
//import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <Title />
      <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                </Routes>
        </Router>
  );
}

export default App;
