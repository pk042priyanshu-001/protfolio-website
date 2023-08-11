import React from 'react'
import './Footer.css';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Pritiar</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li> 
        <li><a href="#about">About</a></li> 
        <li><a href="#experionce">Experience</a></li> 
        <li><a href="#portfolio">Protfolio</a></li> 
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/priyanshu.katiyar.923" target='_blank' rel="noreferrer"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/priyanshu-katiyar-69aa9a244/" target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/pk786priyanshu/" target='_balnk' rel="noreferrer"><AiFillInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Priyanshu Katiyar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer