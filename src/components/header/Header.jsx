import React from 'react'
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/Pritiyar-logos_transparent.png'
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <>
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Priyanshu Katiyar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="Priyanshu Katiyar" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </>
  )
}

export default Header