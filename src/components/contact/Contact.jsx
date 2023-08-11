import React from 'react'
import './Contact.css';
import {MdMarkEmailUnread} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_priot76', 'template_mp63ae8', form.current, 'cIsFO9guhBqvtu2Uw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>pk042priyanshu@gmail.com</h5>
            <a href="mailto:pk042priyanshu@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Massenger</h4>
            <h5>Priyanshu Katiyar</h5>
            <a href="https://m.me/priyanshu.katiyar.923">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+91 80901 62670</h5>
            <a href="https://api.whatsapp.com/send?phone+918090612670">Send a message</a>
          </article>
        </div>
        {/* {End of the contact options} */}
        <div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='your email' required />
          <textarea name="message"  cols="30" rows="10" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact