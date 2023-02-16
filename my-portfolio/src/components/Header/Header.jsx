import React from 'react'
// import me from "../../Assets/Tolamide2.png"
import { HeaderSocials } from './HeaderSocials'
import './header.css'

export const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Grace</h1>
        <h5 className='text-light'>A Frontend Developer</h5>

        <div className="CTA">
          <a href="/" className="btn" download>Download CV</a>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
        <HeaderSocials/>

        <div className="me">
        </div>

        <a href="#contact" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}
