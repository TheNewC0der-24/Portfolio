import React, { useEffect } from 'react'
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
`;

const Home = () => {

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
                    <p className="mt-5 mb-5 d-flex welcome justify-content-between p-2 fw-bold">
                        𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 &lt;𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 /&gt;!
                        <span className="badge text-white" style={{ backgroundColor: '#6d2ae2' }}>made with ❤️</span>
                    </p>
                </Welcome>
                <Intro theme={lightTheme} className="intro text-center">
                    <h3 className='mb-4 mt-5'>
                        bhavya <span className='fw-bold' style={{ color: '#6d2ae2' }}>.is()</span>
                    </h3>
                    <h1 className='name'>Bhavya Khurana</h1>
                    <h5>I am a{" "}
                        <em className='fw-bold' style={{ color: '#6d2ae2' }}>{text}</em>
                        <Cursor cursorStyle='_' />
                    </h5>
                </Intro>
                <div className="mt-5 container">
                    <div className="container cards my-5 row row-cols-1 row-cols-md-3 g-4">
                        <div data-aos="zoom-in" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <p className="card-text mt-2">There are only{" "}
                                        <span className='fs-3'>10</span>
                                        {" "}types of people in this world who
                                        know binary and those who don't.
                                    </p>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-out" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <p className="card-text mt-3">
                                        <span className='fw-bold'>Only half of programming is coding.</span>{" "}
                                        The other 90% is debugging.
                                    </p>
                                    <FaQuoteRight className='d-flex justify-content-end ms-auto' />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <FaQuoteLeft />
                                    <p className="card-text mt-3">
                                        Building a website is easy, designing one takes skill.
                                    </p>
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