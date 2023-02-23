import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I can do</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
          <div className="exp__grid">
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>HTML</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>CSS</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>Javascript</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>Bootstrap</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>React JS</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>Next JS</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
          </div>
          </div>
        </div>
        {/* <div className="experience__backend">
            <h3>Backend Development</h3>
          <div className="exp__grid">
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>NodeJs</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>MongoDB</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>PHP</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>MySQL</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>Python</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
            </div>
            <div className="experience__skill">
              <div className="exp__icons"><BsPatchCheckFill/></div>
              <div className="skills">
                <h5>Next JS</h5>
                <h6 className="text-light">Experienced</h6>
              </div>
          </div>
          </div>
        </div> */}
        
      </div>
    </section>
  )
}
