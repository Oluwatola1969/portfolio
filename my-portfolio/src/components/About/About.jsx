import React from 'react'
import AboutMe from '../../Assets/img-timnik.jpg'
import './about.css'
import cv from '../../Assets/Oluwatola_Senbadejo_CV.pdf'
import {FaAward}from 'react-icons/fa'
import {FiUsers}from 'react-icons/fi'
import {VscFolderLibrary}from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about' className='about__section'>
      <h5>Who I am</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__img">
          <img src={AboutMe} alt="about-me" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <h6 className='text-light'>3+ Years of Experience</h6>
            </div>
            <div className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <h6 className='text-light'>300+ clients worldwide</h6>
            </div>
            <div className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <h6 className='text-light'>25+ Projects</h6>
            </div>
          </div>
              <p className="about__text">
                Hi, My name is Oluwatola Senbadejo from Lagos, Nigeria. I am a frontend web developer
              </p>
              <a href={cv} className="btn about__btn" download>Download CV</a>
        </div>
      </div>
    </section>
  )
}
