import React, { useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';

import ParticleComponent from '../../subComponents/ParticleComponent';

import Aos from 'aos';
import "aos/dist/aos.css";

import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import { darkTheme } from '../Themes';

import astronaut from '../../assets/Image/astronaut.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0e1313;
  }

  .card {
    background: none !important;
    border-radius : 0px !important;
    border: 2px solid #dee2e6;
  }
`;

const float = keyframes`
0% {
  transform: translateY(-10px);
}
50% {
  transform: translateY(15px) translateX(15px);
}
100% {
  transform: translateY(-10px);
}
`;

const Spaceman = styled.div`
position: absolute;
top: 12%;
right: 5%;
width: 30vw;
animation: ${float} 4s ease infinite;

img {
  width: 100%;
  height: auto;
}
`;

const Title = styled.h1`
position: absolute;
top: 10%;
left: 5%;
color: #9a9ea1;
font-size: calc(2.5rem + 5vw);

@media (max-width: 768px) {
 top: 16%; 
}
`;

const Main = styled.div`
color: #dee2e6;
width: auto;
margin-top: 6rem;
max-width: 40rem;
z-index: 3;
backdrop-filter: blur(4px);

span{
  font-family: 'Caveat', cursive;
  font-size: 1.2rem;
  font-weight: bold;
}

.card {
  background-color: none !important;
}

@media (max-width: 630px) { 
  .card-body{
    padding: 0 !important;
  }
}
`;

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <SocialLinks />
        <ParticleComponent />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <div className="container mt-5">
          <Title data-aos="fade-down">.about()</Title>
          <div className="container">
            <Main>
              <div className="container mt-5">
                <div data-aos="fade-left" className="card p-4">
                  <div className="card-body">
                    I am <span>Bhavya Khurana</span>, and I'm a <span>MERN Stack Developer</span>.
                    I am in my final year of my bachelors program, majoring in Computer Science  from Jaypee University of Engineering and Technology, Guna, India (JUET). Furthermore, I have been working on web based development project with frontend and backend related tech like ReactJS, mongoDB, expressJS & nodeJS. I am constantly working on improving my skill as a software engineer.
                    <br /> <br />
                    I am an incessant learner and a keen observer. Always ready to learn something new and enjoy bringing new ideas to life. I believe everything is an Art when we put our consciousness.
                    <br /> <br />
                    <code className='fw-bold' style={{ color: '#6d2ae2' }}>
                      Open to Opportunities related to Web Development.
                    </code>
                  </div>
                </div>
              </div>
            </Main>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default About;