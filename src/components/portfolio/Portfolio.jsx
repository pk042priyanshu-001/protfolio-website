import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/project1.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather app',
    github: 'https://github.com/pk042priyanshu-001/weather',
    demo: 'https://weatherpriyanshu.netlify.app/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Weather app',
    github:'https://github.com/pk042priyanshu-001/weather',
    demo: 'https://weatherpriyanshu.netlify.app/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Weather app',
    github:'https://github.com/pk042priyanshu-001/weather',
    demo: 'https://weatherpriyanshu.netlify.app/'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href= {github} className="btn" target='_blank' rel='noreferrer'>GitHub</a>
          <a href= {demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>  
            )
          })
        }      
      </div>
    </section>
  )
}

export default Portfolio