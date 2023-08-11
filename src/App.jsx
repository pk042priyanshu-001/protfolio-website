import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experionce from './components/Experionce/Experionce';
import Portfolio from  './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experionce/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App