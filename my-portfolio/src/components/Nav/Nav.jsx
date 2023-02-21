import React from 'react'
import './nav.css'
// import {Navbar} from './Navbar'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdContactMail} from 'react-icons/md'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BsBriefcase} from 'react-icons/bs'
import { useState } from 'react'

// const activePage= window.location
// console.log(activePage)

export const Nav = () => {
  const [activeClass, setActiveClass] = useState('#home')

  return (
      <>
      {/* <Navbar/> */}
    <nav className='nav'>
      <a href="#home"  onClick={()=> setActiveClass('#home')} className={activeClass === '#home' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveClass('#about')} className={activeClass === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=> setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#service" onClick={()=> setActiveClass('#service')} className={activeClass === '#service'? 'active': ''}><MdMiscellaneousServices/></a>
      <a href="#portfolio" onClick={()=> setActiveClass('#portfolio')} className={activeClass === '#portfolio'? 'active': ''}><BsBriefcase/></a>
      <a href="#contact" onClick={()=> setActiveClass('#contact')} className= {activeClass ==='#contact'? 'active': ''}><MdContactMail/></a>
    </nav>
    </>
  )
}
