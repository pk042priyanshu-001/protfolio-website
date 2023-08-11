import React from 'react'
import './Experionce.css';
import {TbBrandReact} from 'react-icons/tb';
import {BiLogoHtml5} from 'react-icons/bi';
import {FaCss3} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaBootstrap} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {SiExpress} from 'react-icons/si';
import {IoLogoNodejs} from 'react-icons/io';
import {SiMysql} from 'react-icons/si';


const Experionce = () => {
  return (
    <section id="experionce">
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Devlopment</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BiLogoHtml5 className='experience__icon'/>
            <h4>HTML</h4>
            <div>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>
          <article className='experience__details'>
            <FaCss3 className='experience__icon'/>
            <h4>CSS</h4>
            <div>
            <small className="text-light">
              Intermediate
            </small>
            </div>
          </article>
          <article className='experience__details'>
            <TbBrandJavascript className='experience__icon'/>
            <h4>JavaScript</h4>
            <div><small className="text-light">
              Experienced
            </small></div>
          </article>
          <article className='experience__details'>
            <TbBrandReact className='experience__icon'/>
            <h4>React</h4>
            <div>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>
          <article className='experience__details'>
            <FaBootstrap className='experience__icon'/>
            <h4>Bootstrap</h4>
            <div>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Devlopment</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <IoLogoNodejs className='experience__icon'/>
            <h4>Node Js</h4>
            <div>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>
          <article className='experience__details'>
            <DiMongodb className='experience__icon'/>
            <h4>MongoDB</h4>
            <div>
            <small className="text-light">
              Intermediate
            </small>
            </div>
          </article>
          <article className='experience__details'>
            <SiMysql className='experience__icon'/>
            <h4>MySQL</h4>
            <div>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>
          <article className='experience__details'>
            <SiExpress className='experience__icon'/>
            <h4>Express Js</h4>
            <div>
            <small className="text-light">
              Experienced
            </small>
            </div>
          </article>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Experionce