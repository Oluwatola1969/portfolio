import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdContactMail, MdOutlineMiscellaneousServices} from 'react-icons/md'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BsBriefcase} from 'react-icons/bs'
import {MdRateReview} from 'react-icons/md'
import { useState } from 'react'

export const Nav = () => {
  const [activeClass, setActiveClass] = useState('#home')

  return (
    <nav className='nav'>
      <a href="#home"  onClick={()=> setActiveClass('#home')} className={activeClass === '#home' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveClass('#about')} className={activeClass === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=> setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#service" onClick={()=> setActiveClass('#service')} className={activeClass === '#service'? 'active': ''}><MdMiscellaneousServices/></a>
      <a href="#portfolio" onClick={()=> setActiveClass('#portfolio')} className={activeClass === '#portfolio'? 'active': ''}><BsBriefcase/></a>
      <a href="#testimonials" onClick={()=> setActiveClass('#testimonials')} className={activeClass === '#testimonials'? 'active': ''}><MdRateReview/></a>
      <a href="#contact" onClick={()=> setActiveClass('#contact')} className= {activeClass ==='#contact'? 'active': ''}><MdContactMail/></a>
    </nav>
  )
}
