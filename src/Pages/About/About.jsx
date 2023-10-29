import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme } from '../../Themes';
import { Button } from '@mui/material';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import bmac from '../../assets/Images/bmac.svg';
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import ParticleBackgroundAnimate from '../../SubComponents/ParticleBackgroundAnimate/ParticleBackgroundAnimate';
import Aos from 'aos';
import ReadMore from '../../Components/ReadMore';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
  }

  .title, .sub-title {
    color: #dee2e6;
  }

  .sub-title span {
    background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
    background-clip: text !important;
    -moz-background-clip: text !important;
    -webkit-background-clip: text !important;
    -moz-text-fill-color: transparent !important;
    -webkit-text-fill-color: transparent !important;
    }

  .about-card {
    background: none !important;
    backdrop-filter: blur(4px) !important;
  }

  .note {
    background: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3);
    border-radius: 0px !important;
  }

  .tag {
    font-family: 'Caveat', cursive;
    color: #6d2ae2;
  }

  .bmac {
    color: #ffdd00;
    border-bottom: 1px solid #ffdd00;
  }

  @media (max-width: 767.5px) {
    .text {
        text-align: center !important;
    }

    .tag{
      display: none !important;
    }

    // .view-resume-btn {
    //   display: grid !important;
    //   margin: auto !important;
    // }

    .bmac-div {
      justify-content: center !important;
    }
}
`;

const About = () => {

  const navigate = useNavigate();
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const title = "Bhavya Khurana | About Me";
  document.title = title;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <SocialLinks />
        <ParticleBackgroundAnimate />
        <div className="container mt-4">
          <h1 className="title text-center">.about Me()</h1>
          <h6 className='sub-title text-center fw-bold' style={{ color: "#dee2e6" }}>BEYOND <span style={{ color: "#6d2ae2" }}>THE SURFACE</span></h6>

          <div className="container text my-5">
            <div className="card about-card">
              <div className="card-body">
                <h5 className="card-title tag fw-bold">//about</h5>
                <div className='mb-4' style={{ color: "#dee2e6" }}>
                  <p className='card-text'>
                    👋 Hey there! I'm <span className='badge' style={{ backgroundColor: '#DFD8FD', color: '#6d2ae2' }}>Bhavya Khurana</span>, a
                    passionate <span className='fw-bold' style={{ color: '#6d2ae2' }}>frontend developer</span> and <span className='fw-bold' style={{ color: '#6d2ae2' }}>content writer</span> with
                    a soft spot for dogs 🐶. I spend my days crafting user-friendly interfaces and bringing creative designs to life. When I'm not
                    coding, you'll often find me typing away, weaving engaging content for various platforms. I believe in the power of words to inspire
                    and connect people.
                  </p>

                  <p className='card-text'>
                    In the tech world, I'm well-versed in HTML, CSS, JavaScript and, TypeScript, constantly exploring new frameworks and tools to enhance user
                    experiences. I enjoy the challenge of optimizing websites for performance and responsiveness across different devices.
                  </p>

                  <div className='card border-0 note my-4'>
                    <div className="card-body">
                      <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                        <h4 style={{ color: "#dee2e6" }}>
                          I'm obsessed with making things and even more obsessed with making things better.
                        </h4>
                        <div>
                          <Button
                            sx={{
                              textTransform: "capitalize",
                              color: "#6d2ae6", backgroundColor: "#dee2e6", '&:hover': {
                                backgroundColor: "#dee2e6",
                              }
                            }}
                            onClick={() => navigate('/resume')}
                          >
                            View Resume
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className='card-text'>
                    But that's not all—I'm also a dedicated dog enthusiast. Whether it's going on long walks, playing fetch at the park, or cuddling up with
                    my furry friends, I find immense joy and relaxation in the company of canines.
                  </p>
                </div>

                <div className='card card-body border-0' data-aos="zoom-in" style={{ backgroundColor: '#DFD8FD', color: '#6d2ae2', borderRadius: "0px" }}>
                  <p className='fw-bold'>
                    Feel free to explore my work and writing samples to get a taste of my work. If you have any frontend development or content
                    writing projects in mind, or simply want to chat about dogs, I'd love to connect with you! Let's collaborate and create something pawsome
                    together 🐾
                  </p>

                  <div>
                    <Button
                      onClick={() => setShowReadMore((prev) => !prev)}
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor: "#6d2ae2",
                        color: "#dee2e6",
                        '&:hover': {
                          backgroundColor: "#6d2ae2",
                        }
                      }}
                      endIcon={showReadMore ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    >
                      {showReadMore ? "Read Less" : "Read More"}
                    </Button>

                    {
                      showReadMore && (
                        <ReadMore isVisible={showReadMore} />
                      )
                    }
                  </div>
                </div>

                <div className='d-flex align-items-center gap-2 fw-bold mt-3 bmac-div'>
                  <span style={{ color: "#dee2e6" }}>You can also</span>
                  <img src={bmac} alt="bmac" />
                  <a className='bmac text-decoration-none' href="https://www.buymeacoffee.com/bhavyakhurana"
                    target="_blank" rel="noreferrer"
                  >
                    buy me a coffee
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </ThemeProvider >
    </>
  )
}

export default About;