import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Routing
import { useNavigate } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// Icon
import { BsDot } from 'react-icons/bs';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Image
import profile from '../../assets/Images/profile.png';
import placeholderImg from '../../assets/Images/placeholderProfile.png';


// Animation
import Aos from 'aos';
import "aos/dist/aos.css";

// Theme
import { lightTheme, darkTheme } from '../Themes';

// Typewriter
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    overflow-x: hidden;
  }

  .img {
    border-radius: 50%;
  }

  .dot {
    animation: upDown 1s linear infinite;
  }

    @keyframes upDown {
        0% {
            transform: translateY(-5px);
        }
        25% {
            transform: translateY(5px);
        }
        50% {
            transform: translateY(10px);
        }
        75% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(-5px);
        }
    }

  @media (max-width: 767.5px) {
    .welcome {
        flex-direction: column;
        text-align: center;
    }

    .row {
        flex-direction: column-reverse !important;
    }

    .intro {
        text-align: center;
    }

    .img {
        margin-bottom : 1rem !important;
        width: 200px !important;
    }

    .know-more-btn {
        margin-top: 1rem !important;
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
    font-weight : 900;
}

.name span {
    background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
    background-clip: text !important;
    -moz-background-clip: text !important;
    -webkit-background-clip: text !important;
    -moz-text-fill-color: transparent !important;
    -webkit-text-fill-color: transparent !important;
}

.typewriter {
    font-family: 'Caveat', cursive;
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

    const image = [profile];

    const [profileImg, setProfileImage] = useState(profile);

    useEffect(() => {
        setProfileImage(image);
        // eslint-disable-next-line
    }, []);

    const navigate = useNavigate();

    const words = ['Web-Developer', 'Programmer', 'Tech Enthusiast', 'Writer'];
    const { text } = useTypewriter({
        words,
        loop: 0,
        delay: 100,
        deleteSpeed: 50,
        typeSpeed: 70,
    });

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container'>
                    <Welcome theme={darkTheme}>
                        <p className="mt-5 d-flex welcome justify-content-between p-2 fw-bold">
                            𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 &lt;𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 /&gt;!
                            <span className="badge text-white" style={{ backgroundColor: '#6d2ae2' }}>made with ❤️</span>
                        </p>
                    </Welcome>
                    <div className="container d-flex my-4">
                        <Intro theme={lightTheme} className="intro row mx-auto">
                            <div className="col-md-7 m-auto float-start">
                                <h1 className='name'>I<span>'</span>m Bhavya{" "}<span>Khurana</span></h1>
                                <h1>
                                    <em className='fw-bold typewriter' style={{ color: '#6d2ae2' }}>{text}</em>
                                    <Cursor cursorStyle='_' />
                                </h1>
                                <p className='my-3 fw-bold'>I design and Code simple yet beautiful websites.</p>
                                <button onClick={() => navigate("/about")} className='mt-5 know-more-btn'>Know more about me<BsDot className="dot ms-1" /></button>
                            </div>
                            <div className="col-md-5 m-auto float-end">
                                <LazyLoadImage placeholderSrc={placeholderImg} src={profileImg} effect="black-and-white" alt="profile" className='img-fluid img' />
                            </div>
                        </Intro>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Home;