import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
// import {RxDoubleArrowUp} from 'react-icons/rx'


export const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_u9f7n5c', 'template_z2kd37c', form.current, 'FadVlwrNc0u5HkAGD')

  e.target.reset()  
};

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__me">
          <article className="contact__option">
            <MdOutlineEmail className='contact__icon'/>
            <h4>Email</h4>
            <a href="mailto:tolamide29@gmail.com" target='_blank' rel='noreferrer noopener' className='contact__btn'>Tolamide29@gmail.com</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whastapp.com/send?phone=+23491364234" target='_blank' rel='noreferrer noopener' className='contact__btn'>+2349136423491</a>
          </article>
        </div>

        <form  ref={form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name='name' placeholder='Enter Full-name' required />
          <input type="email" name='email' placeholder='Enter Email' />
          <textarea name="message" cols="30" rows="4" placeholder='Your Message'></textarea>
          <button className='btn' type='submit'>
            Send Message
          </button>
        </form>
        {/* <a href="#home" className='scroll__up'><RxDoubleArrowUp/></a> */}
      </div>
    </section>
  )
}
