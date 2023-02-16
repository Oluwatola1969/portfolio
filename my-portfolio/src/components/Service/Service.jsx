import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

export const Service = () => {
  return (
    <section id='service'>
        <h5>what I Offer</h5>
        <h2>Services</h2>
      <div className="container service__container" >
          <div className="service__content service__content-1">
            <div className="service__head">UI/UX Design</div>
              <ul className='service__list'>
                <li>
                  <BiCheck/>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck/>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck/>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck/>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li>
                  <BiCheck/>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
              </ul>
          </div>
            {/* end of UI */}
          <div className="service__content service__content-2">
           <div className="service__head">Web Development</div>
            <ul className='service__list'>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>
            {/* end of UI */}
          <div className="service__content service__content-3">
           <div className="service__head">Content Creator</div>
            <ul className='service__list'>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
                <BiCheck/>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>
            {/* end of UI */}

      </div>
    </section>
  )
}
