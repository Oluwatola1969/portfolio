import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" ><AiOutlineLinkedin/></a>
        <a href="https://github.com" ><BsGithub/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
    </div>
  )
}
