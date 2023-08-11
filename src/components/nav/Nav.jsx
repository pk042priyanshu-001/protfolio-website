import React from 'react';
import {GoHome} from 'react-icons/go';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BiBookBookmark} from 'react-icons/bi';
import {AiOutlineContacts} from 'react-icons/ai';
import './Nav.css';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <div className='nav'>
      <a href="#home" className={activeNav=== '#home'?'active':''}><GoHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about' ? 'active': ''}><AiOutlineUserAdd/></a>
      <a href="#experionce" onClick={()=> setActiveNav('#experionce')} className={activeNav=== '#experionce' ? 'active': ''}><BiBookBookmark/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active': ''}><AiOutlineContacts/></a>
    </div>
  )
}

export default Nav