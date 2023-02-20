import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/Toquilla_project.png'
import IMG2 from '../../Assets/Emprise_project.png'
import IMG3 from '../../Assets/project3.png'
import IMG4 from '../../Assets/project4.png'

export const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Deploy web apps of all kind, from large scale entrprise APIs to static websites for individual fill out the form to try out platform',
      github: 'https://github.com/Oluwatola1969/toquilla-web-design',
       demo: 'https://dribble.com/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Emprise travel website, designed from a figma design. Designed with HTML, CSS and Material UI',
      github: 'https://github.com/Oluwatola1969/toquilla-web-design',
       demo: 'https://dribble.com/16580766-Orion-UI-kit-charts-templates-infogrphics-in-Figma'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Figma dashboard UI kit for data design web apps',
      github: 'https://github.com',
       demo: 'https://dribble.com/17290917-Eclipse-Figma-dashboarc-UI-kit-for-data-design-web-apps'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Maintaining tasks and tracking progress',
      github: 'https://github.com',
       demo: 'https://dribble.com/1695582-Maintaining-tasks-and-tracking-progress'
    },
    {
      id: 5,
      image: IMG1,
      title: 'Cypto Currency Dashboard and Financial Visualization',
      github: 'https://github.com',
       demo: 'https://dribble.com/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
    },
    {
      id: 6,
      image: IMG3,
      title: 'Figma dashboard UI kit for data design web apps',
      github: 'https://github.com',
       demo: 'https://dribble.com/17290917-Eclipse-Figma-dashboarc-UI-kit-for-data-design-web-apps'
    }
  ]

  return (

    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" >

        {
          data.map(({id, title, image, github, demo}) =>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__img">
                <img src={image} alt="projectImg" />
              </div>
    
              <p>{title}</p>
    
              <div className="portfolio__cta">
                <a href={github} className="btn" target='_blank' >Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>Demo</a>
              </div>
            </article>
            )
          })
        }
        
      
      </div>
    </section>
  )
}
