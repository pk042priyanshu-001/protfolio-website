import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/priyanshu-katiyar-69aa9a244/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.facebook.com/priyanshu.katiyar.923/" target='_blank' rel="noreferrer"><BsFacebook/></a>
        <a href="https://github.com/pk042priyanshu-001" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial