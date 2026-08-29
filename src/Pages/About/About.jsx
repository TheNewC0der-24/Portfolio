/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme } from '../../Themes';
import { Button } from '@mui/material';
import bmac from '../../assets/Images/bmac.svg';
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import ParticleBackgroundAnimate from '../../SubComponents/ParticleBackgroundAnimate/ParticleBackgroundAnimate';

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

    .resume-card {
      justify-content: center !important;
    }

    .tag{
      display: none !important;
    }

    .bmac-div {
      justify-content: center !important;
    }
}
`;

const About = () => {
  const navigate = useNavigate();

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
                    I have 3+ years of experience building enterprise and government web applications, with a strong focus on
                    React.js, Next.js, TypeScript, JavaScript, HTML, and CSS. I've worked on large-scale platforms used by
                    thousands of users, where performance, reliability, accessibility, security, and maintainability aren't
                    just nice-to-haves — they're essential.
                  </p>

                  <p className="card-text">
                    I'm particularly interested in building <b>scalable frontend architectures</b>, optimizing application performance,
                    designing reusable components, integrating REST APIs, and creating responsive experiences that work
                    seamlessly across devices. I've also worked with technologies and tools across the modern frontend ecosystem,
                    including <b>Redux, Zustand, React Query, Material UI, Vite, Firebase, Keycloak, Docker, and PostgreSQL</b>.
                  </p>

                  <p className="card-text">
                    Beyond traditional frontend development, I'm exploring the intersection of <b>frontend engineering and AI</b> —
                    including <b>AI integrations, Microsoft Copilot, Copilot Studio, RAG, LLM-powered applications, and AI-driven
                      experiences</b>. I enjoy learning how emerging technologies can be turned into practical products rather than
                    simply following trends.
                  </p>

                  <div className='card border-0 note my-4'>
                    <div className="card-body">
                      <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center resume-card">
                        <h4 style={{ color: "#dee2e6" }}>
                          I'm obsessed with making things — and even more obsessed with making them better.
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
                    That mindset drives how I approach development. Whether it's improving a slow component, simplifying a
                    complicated piece of code, designing a better API interaction layer, or building a more intuitive user
                    experience, I believe there's almost always a better way to do it.
                  </p>

                  <p className='card-text'>
                    When I'm away from my laptop, I'm usually spending time with dogs 🐶, exploring new ideas, writing, or
                    learning something new. I'm also passionate about content writing and enjoy using words to explain ideas,
                    tell stories, and connect with people.
                  </p>

                  <p className="card-text">
                    I'm always interested in building meaningful products, solving interesting problems, and collaborating with
                    people who care about what they create.
                  </p>
                </div>

                <div className='card card-body border-0' style={{ backgroundColor: '#DFD8FD', color: '#6d2ae2', borderRadius: "0px" }}>
                  <p className='fw-bold mb-0'>
                    Explore my work, check out my projects, and feel free to connect. Whether you want to talk frontend
                    engineering, AI, building products, writing — or just dogs — I'm always up for a conversation. 🐾
                  </p>
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
      </ThemeProvider>
    </>
  )
}

export default About;