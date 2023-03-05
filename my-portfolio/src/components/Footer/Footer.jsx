import React from 'react'
import './footer.css'
// import ME from '../../Assets/img-grace.jpg'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

export const Footer = () => {
  return (
  <footer className='footer__container'>

    <h1><a href="#">Oluwatola</a></h1>

    <ul className="footer__links">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#portfoilio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
        <a href="https://linkedin.com" ><AiOutlineLinkedin/></a>
        <a href="https://github.com" ><BsGithub/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
    </div>

    <div className="copyright"> &copy; Senbadejo Oluwatola. All right reserved. </div>


  </footer>
  )
}
