import React, { useState } from 'react';
import styles from './About.module.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { motion } from "framer-motion";

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { darkTheme } from '../Themes';

// Icon
import { TiArrowForward } from 'react-icons/ti';

// Image
import about from '../../assets/Images/portrait.svg';

import Resume from '../../assets/Resume.pdf';
import ParticleBackgroundAnimate from '../../subComponents/ParticleBackgroundAnimate/ParticleBackgroundAnimate';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }

  .pulse {
    animation: pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .loadable {
    width: 250px;
    height: 250px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 5px solid #6d2ae2;
    transition: all 0.3s ease-in-out;
  }
  
  img {
    display: block;
    z-index: 999;
    filter: grayscale(100%);
    transition: all 0.3s ease-in-out;
  }
  img:hover{
    filter: grayscale(0%);
    transform: scale(1.1);
  }

  @keyframes pulse {
    0%,
      100% {
        opacity: 1;
      }
    50% {
      opacity: 0.3;
    }
  }
  
  @media (max-width: 991.5px) and (min-width: 767.5px) {
    .loadable {
        width: 225px;
        height: 225px;
    }
  }

  @media (max-width: 449.5px) {
    .loadable {
        width: 200px;
        height: 200px;
    }
  }

  @media (max-width: 280.5px) {
    .loadable {
        width: 150px;
        height: 150px;
    }
  }`;

const About = () => {

  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  const handleDownload = () => {
    const path = Resume;
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const title = "Bhavya Khurana | About Me";
  document.title = title;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <SocialLinks />
        <ParticleBackgroundAnimate />
        <div className={`${styles.container} container`}>
          <h1 className={`${styles.title} text-center`}>.about <span style={{ color: "#6d2ae2" }}>Me()</span></h1>
          <h6 className='text-center fw-bold' style={{ color: "#dee2e6" }}>ALLOW ME TO INTRODUCE MYSELF</h6>
          <div className="container">
            <div className="container d-flex mt-5">
              <div className={`${styles.row} row g-5 mx-auto`}>
                <div className="col-lg-5">
                  <h5 className={`${styles.me} text-center fw-bold mb-3`}>
                    That's me <TiArrowForward className={`${styles.icon} fs-4`} />
                  </h5>

                  <div className={`${pulsing ? "pulse" : ""} d-flex justify-content-center loadable `} style={{ background: "#0e1313", display: 'block' }}>
                    <motion.img
                      initial={{ height: "auto", opacity: 0 }}
                      // style={{ height: imageLoading ? "5rem" : "auto" }}
                      animate={{
                        height: imageLoading ? "auto" : "auto",
                        opacity: imageLoading ? 0 : 1
                      }}
                      transition={
                        ({ height: { delay: 0, duration: 0.4 } },
                          { opacity: { delay: 0.5, duration: 0.4 } })
                      }
                      onLoad={imageLoaded}
                      width="100%"
                      src={about}
                      alt="profile"
                      className={`${styles.img} img-fluid`}
                      data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom"
                    />
                  </div>

                  <div className='mt-5 text-center'>
                    <span className={styles.tag}>&lt;p&gt;</span>
                    <p className={styles.content} style={{ color: "#6d2ae2" }}>
                      I'm obsessed with making things and even more obsessed with making things better.
                    </p>
                    <span className={styles.tag}>&lt;p&gt;</span>
                    <div className='mt-4 mb-3'>
                      <button onClick={handleDownload} className={styles.downloadBtn}>Download Resume<span></span></button>
                    </div>
                  </div>

                </div>
                <div className={`${styles.mainContent} col-lg-7`}>
                  <div className={styles.tag}>&lt;h5&gt;</div>
                  <p>
                    I am <span className={`${styles.main} text-danger fs-5`}>Bhavya Khurana</span>, and I'm a <span className={`${styles.main} text-warning fs-5`}>Frontend Developer</span>. I have completed my bachelors program from <span className={`${styles.main} text-success fs-5`}>Jaypee University of Engineering and Technology, Guna, India</span> majoring in Computer Science. Furthermore, I have been working on web based development project with frontend related tech like <span className={`${styles.main} text-primary-emphasis fs-5`}>React.JS</span> and <span className={`${styles.main} text-primary-emphasis fs-5`}>Angular</span>. I am constantly working on improving my skills as a software engineer.
                  </p>
                  <p>
                    I am an incessant learner and a keen observer. Always ready to learn something new and enjoy bringing new ideas to life. I believe everything is an Art when we put our consciousness.
                  </p>
                  <p>
                    I am a creative and skilled Frontend Developer with a passion for building elegant and intuitive user interfaces. With over 1 year of experience, I have worked on various web projects for clients in industries. I have expertise in experience with responsive design, accessibility, and website optimization. I have completed several online certification courses. I am a problem-solver with excellent communication skills and the ability to work well under pressure. I am committed to delivering high-quality solutions that meet user needs and exceed client expectations.
                  </p>
                  <div className={styles.tag}>&lt;h5&gt;</div>
                  <p className='fw-bold my-2 p-2' style={{ backgroundColor: '#dee2e6', color: '#6d2ae2', fontFamily: 'Special Elite' }}>
                    Open to Opportunities related to Web Development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default About;