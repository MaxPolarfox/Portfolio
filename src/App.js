import React from 'react';
import { BrowserRouter } from "react-router-dom"
import './App.css';

//components
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <Navbar />
        </nav>

        <Header />
        <About className='navBar' />
        <Projects className='navBar' />
        <Skills className='navBar' />
        <Contact className='navBar' />
        <Footer className='navBar' />

      </div >
    </BrowserRouter>
  );
}

export default App;
