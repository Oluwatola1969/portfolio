import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/Toquilla_project.png'
import IMG2 from '../../Assets/Emprise_project.png'

export const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Toquilla',
      info: 'Toquilla is built to Deploy web apps of all kind, from large scale entrprise APIs to static websites for individual.',
      github: 'https://github.com/Oluwatola1969/toquilla-web-design',
       demo: 'https://dribble.com/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Emprise Travel',
      info: 'Emprise travel website, designed from a figma design. Designed with HTML, CSS and Material UI',
      github: 'https://github.com/Oluwatola1969/toquilla-web-design',
      demo: 'https://dribble.com/16580766-Orion-UI-kit-charts-templates-infogrphics-in-Figma'
    },
    {
      id: 3,
      image: IMG2,
      title: 'Emprise Travel',
      info: 'Emprise travel website, designed from a figma design. Designed with HTML, CSS and Material UI',
      github: 'https://github.com/Oluwatola1969/toquilla-web-design',
       demo: 'https://dribble.com/16580766-Orion-UI-kit-charts-templates-infogrphics-in-Figma'
    },
    
    {
      id: 5,
      image: IMG1,
      title: 'Toquilla',
      github: 'https://github.com',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque id quo.',
      demo: 'https://dribble.com/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
    },
    
  ]

  return (

    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" >

        {
          data.map(({id, title, info, image, github, demo}) =>{
            return(
              <div className='portfolio__item-container'>
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item_content">
                    <img src={image} className='portfolio__img' alt="projectImg" />
                    <div className="project__info">
                        <h2>{title}</h2>
                        <p>{info}</p>
                        <a href={github} className="btn btn-primary" target='_blank' rel='noopener noreferrer'>Visit Github</a>
                    </div>
                  </div>

                </article>
                <div className="portfolio__desc">
                  <h3>{title}</h3>
                  <div className="portfolio__pLang">
                    <ul className="pLang__container">
                      <li className="pLang">HTML</li>
                      <li className="pLang">CSS</li>
                      <li className="pLang">JavaScript</li>
                    </ul>
                  </div>
                </div>
            </div>
            
            

            
            )
          })
        }
        
        
        
    
      </div>
    </section>
  )
}
