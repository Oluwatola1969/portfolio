import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'><AiOutlineLinkedin/></a>
        <a href="https://github.com" target='_blank' rel='noopener noreferrer'><BsGithub/></a>
        <a href="https://twitter.com"target='_blank' rel='noopener noreferrer'><AiOutlineTwitter/></a>
    </div>
  )
}
