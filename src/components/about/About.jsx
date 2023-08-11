import React from "react";
import "./About.css";
import ME from "../../assets/About-me-image.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me...</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Priyanshu Katiyar" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              
              <small>2+ Years of working Experience </small>
            </article>
            <article className="about__card">
            <FaUsers className="about__icon" />
              <h5>Clients</h5>
              
              <small>
                I have tons of experience working with differnt clients.
              </small>
            </article>
            <article className="about__card">
            <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              
              <small>5+ completed projects</small>
            </article>
          </div>
          <p>
          I'm Priyanshu Katiyar, a fervent full-stack web developer with 1+ year experience. I'm driven by enthusiasm to excel in both front-end and back-end coding. Embracing challenges, I constantly adopt new tech to craft immersive user experiences. I thrive in collaborative teamwork, valuing diverse insights. My journey showcases successful projects, but I'm committed to constant growth in the dynamic world of web development.
          </p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
