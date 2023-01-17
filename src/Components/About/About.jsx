import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styles from './About.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Icon
import { TiArrowForward } from 'react-icons/ti';

// Image
import about from '../../assets/Images/about.svg';

// Particles
import ParticleComponent from '../../subComponents/ParticleComponent';

import AnimatedText from 'react-animated-text-content';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { darkTheme } from '../Themes';

import Resume from '../../assets/Resume.pdf';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
  }
`;

const About = () => {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <SocialLinks />
        <ParticleComponent />
        <div className={`${styles.container} container my-4`}>
          <h1 className={`${styles.title} text-center`}>.about <span style={{ color: "#6d2ae2" }}>Me()</span></h1>
          <h5 className='text-center' style={{ color: "#9a9ea1" }}>ALLOW ME TO INTRODUCE MYSELF</h5>
          <div className="container">
            <div className="container d-flex mt-5">
              <div className={`${styles.row} row mx-auto`}>
                <div className="col-md-5">
                  <h5 className={`${styles.me} fw-bold mb-3`}>That's me <TiArrowForward className={`${styles.icon} fs-4`} /></h5>
                  <LazyLoadImage delayTime={100} threshold={100} src={about} effect="blur" alt="profile" width={300} className={`${styles.img} mb-5 img-fluid`} />
                  <div>
                    <span className={styles.tag}>&lt;p&gt;</span>
                    <p className={styles.content}>
                      I'm obsessed with making things and even more obsessed with making things better.
                    </p>
                    <span className={styles.tag}>&lt;p&gt;</span>
                  </div>
                </div>
                <div className={`${styles.mainContent} col-md-7`}>
                  <div className={styles.tag}>&lt;h5&gt;</div>
                  <h5>
                    I am <span className={`${styles.main} text-danger`}>Bhavya Khurana</span>, and I'm a <span className={`${styles.main} text-warning`}>Frontend Developer</span> from <span className='text-success fw-bold'>Jaypee University of Engineering and Technology, Guna, India</span>. I am in my final year of my bachelors program, majoring in Computer Science. Furthermore, I have been working on web based development project with frontend related tech like <span className={`${styles.main} text-primary-emphasis`}>React.JS</span>. I am constantly working on improving my skills as a software engineer.
                  </h5>
                  <h5>
                    I am an incessant learner and a keen observer. Always ready to learn something new and enjoy bringing new ideas to life. I believe everything is an Art when we put our consciousness.
                  </h5>
                  <div className={styles.tag}>&lt;h5&gt;</div>
                  <p className='fw-bold fs-5 my-2' style={{ color: '#6d2ae2', fontFamily: 'Special Elite' }}>
                    <AnimatedText
                      type="chars"
                      animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                      }}
                      animationType="rifle"
                      interval={0.06}
                      duration={0.8}
                      tag="p"
                      className="animated-paragraph"
                      includeWhiteSpaces
                      threshold={0.1}
                      rootMargin="20%"
                    >
                      Open to Opportunities related to Web Development.
                    </AnimatedText>
                  </p>
                  <div className='mt-4 mb-3'>
                    <a href={Resume} className={styles.downloadBtn} role="button" download>Download Resume <span></span></a>
                  </div>
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