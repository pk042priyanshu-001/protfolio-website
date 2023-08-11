import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/project1.jpg';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';

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
    image: IMG3,
    title: 'Delivery App',
    github:'https://github.com/pk042priyanshu-001/Delivery-app',
    demo: '404'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Portfolio Website',
    github:'https://github.com/pk042priyanshu-001/protfolio-website',
    demo: 'https://pk042priyanshu-portfolio.netlify.app'
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