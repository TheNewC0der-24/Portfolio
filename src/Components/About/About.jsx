import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styles from './About.module.css';

import ParticleComponent from '../../subComponents/ParticleComponent';

import Aos from 'aos';
import "aos/dist/aos.css";

import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import html from "../../assets/Languages/html.png";
import css from "../../assets/Languages/css.png";
import js from "../../assets/Languages/js.png";
import reactJs from "../../assets/Languages/reactJs.png";
import bootstrap from "../../assets/Languages/bootstrap.png";
import mui from "../../assets/Languages/mui.png";
import tailwindCss from "../../assets/Languages/tailwindCss.png";
import antD from "../../assets/Languages/antD.png";
import npm from "../../assets/Languages/npm.png";
import yarn from "../../assets/Languages/yarn.png";
import git from "../../assets/Languages/git.png";
import github from "../../assets/Languages/github.png";
import heroku from "../../assets/Languages/heroku.png";
import netlify from "../../assets/Languages/netlify.png";
import vercel from "../../assets/Languages/vercel.png";
import sql from "../../assets/Languages/sql.png";

import Resume from '../../assets/Resume.pdf';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0e1313;
  }
`;

const images = [html, css, js, reactJs, bootstrap, mui, tailwindCss, antD, npm, yarn, git, github, heroku, netlify, vercel, sql];

const About = () => {

  const [image, setImage] = useState(reactJs);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const intervalId = setInterval(() => {
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000);

    return () => clearInterval(intervalId);

  }, []);


  return (
    <>
      <GlobalStyle />
      <SocialLinks />
      <ParticleComponent />
      <div className="container mt-3">
        <div className={`${styles.row} row mx-4`}>
          <div className='col-md-7 m-auto'>
            <h1 className={styles.cardTitle}>.about()</h1>
            <span className={styles.span}>&lt;/h1&gt;</span>
            <div data-aos="fade-right" className={`${styles.card} card my-4`}>
              <div className="card-body">
                <div className={styles.cardText}>
                  I am <span>Bhavya Khurana</span>, and I'm a <span>Frontend Developer</span> from Jaypee University of Engineering and Technology, Guna, India. I am in my final year of my bachelors program, majoring in Computer Science. Furthermore, I have been working on web based development project with frontend related tech like ReactJS. I am constantly working on improving my skills as a software engineer.
                  <br /> <br />
                  I am an incessant learner and a keen observer. Always ready to learn something new and enjoy bringing new ideas to life. I believe everything is an Art when we put our consciousness.
                  <br /> <br />
                  <code className='fw-bold fs-5' style={{ color: '#6d2ae2' }}>
                    Open to Opportunities related to Web Development.
                  </code>
                  <div className='mt-4 mb-3'>
                    <a href={Resume} className={styles.downloadBtn} role="button" download>Download Resume</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 m-auto'>
            <div className="container d-flex justify-content-center mx-auto">
              <img src={image} alt="Languages" width={300} className={`${styles.img} img-fluid`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;