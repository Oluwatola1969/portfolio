import React from 'react'
import { HeaderSocials } from './HeaderSocials'
import './header.css'
import {RxDoubleArrowDown} from 'react-icons/rx'

export const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <div className="header__container-right">
          <h5>Hello I'm</h5>
          <h1>Grace</h1>
          <h5 className='text-light'>A Frontend Developer</h5>
          <div className="CTA">
            <a href="#portfolio" className="btn">My works</a>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
          </div>
        <HeaderSocials/>
        </div>

        <div className="me header__container-left">
        </div>

        <a href="#contact" className='scroll__down'><RxDoubleArrowDown/></a>
        <div className="blob"></div>
      </div>
    </header>
  )
}
