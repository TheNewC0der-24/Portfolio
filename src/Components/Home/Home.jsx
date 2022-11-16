import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import Aos from 'aos';
import "aos/dist/aos.css";

import { lightTheme, darkTheme } from '../Themes';

import { useTypewriter, Cursor } from "react-simple-typewriter";

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dee2e6;
    overflow-x: hidden;
  }

  .card {
    font-family: 'Special Elite', cursive !important;
    border: none !important;
    border-radius: 0 !important;
    border-top : 0.5rem solid #6d2ae2 !important;
    color: #6d2ae2 !important;
    cursor: pointer;
  }

  .card:hover {
    box-shadow:
        0px 0px 2.2px rgba(0, 0, 0, 0.07),
        0px 0px 5.3px rgba(0, 0, 0, 0.05),
        0px 0px 10px rgba(0, 0, 0, 0.042),
        0px 0px 17.9px rgba(0, 0, 0, 0.035),
        0px 0px 33.4px rgba(0, 0, 0, 0.028),
        0px 0px 80px rgba(0, 0, 0, 0.02);   

  }

  @media (max-width: 767.5px) {
    .welcome {
        flex-direction: column;
        text-align: center;
    }

    .intro {
        text-align: center;
    }

    .cards{
        margin-left: 0 !important;
    }
}
`;

const Welcome = styled.div`
background: ${props => props.theme.body};
color: #dee2e6;
width: 80%;
margin: auto;
`;

const Intro = styled.div`
color : ${props => props.theme.text};

.name{
    font-family: 'Caveat', cursive;
    color: #6d2ae2;
}

.know-more-btn {
    color: #0e1313;
    border: 2px solid #0e1313;
    text-decoration: none;
    padding: 10px;
    font-weight: bold;
}
`;

const Home = () => {

    const navigate = useNavigate();

    const words = ['Web-Developer', 'Programmer', 'Tech Enthusiast', 'Writer'];
    const { text } = useTypewriter({
        words,
        loop: 0,
    });

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className='container'>
                <Welcome theme={darkTheme}>
                    <p className="mt-5 mb-3 d-flex welcome justify-content-between p-2 fw-bold">
                        𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 &lt;𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 /&gt;!
                        <span className="badge text-white" style={{ backgroundColor: '#6d2ae2' }}>made with ❤️</span>
                    </p>
                </Welcome>
                <Intro theme={lightTheme} className="intro text-center">
                    <h2>I am <span className='name'>Bhavya Khurana</span></h2>
                    <h3>and</h3>
                    <h1>I am a{" "}
                        <em className='fw-bold' style={{ color: '#6d2ae2' }}>{text}</em>
                        <Cursor cursorStyle='_' />
                    </h1>
                    <button onClick={() => navigate("/about")} className='mt-3 know-more-btn'>Know more about me</button>
                </Intro>
                <div className="container mt-5">
                    <div className="container cards row row-cols-1 row-cols-md-3 g-4">
                        <div data-aos="zoom-in" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <h5 className="card-text mt-2">There are only{" "}
                                        <span className='fs-3'>10</span>
                                        {" "}types of people in this world who
                                        know binary and those who don't.
                                    </h5>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-out" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <h5 className="card-text mt-3">
                                        <span className='fw-bold'>Only half of programming is coding.</span>{" "}
                                        The other 90% is debugging.
                                    </h5>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <h5 className="card-text mt-3">
                                        Building a website is easy, designing one takes skill.
                                    </h5>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <h5 className="card-text mt-3">
                                        while (!(succeed = try()));
                                    </h5>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-out" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <h5 className="card-text mt-3">
                                        Where there's a CODE <br /> there's a BUG.
                                    </h5>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <h5 className="card-text mt-3">
                                        Code can't lie <br /> Comments can.
                                    </h5>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Home;