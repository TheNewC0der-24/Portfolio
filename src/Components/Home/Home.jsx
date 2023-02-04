import React, { useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Routing
import { useNavigate } from 'react-router-dom';

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

// Icon
import { BsDot } from 'react-icons/bs';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Image
// import profile from '../../assets/Images/profile.png';

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

    // .img {
    //     border-radius: 50%;
    //     width: 400px;
    // }

    .intro {
        margin-top: 5rem;
        max-width: 100%;
    }

    .know-more-btn {
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
    }

    .dot {
        animation: upDown 1s linear infinite;
    }

    .main {
        position: relative;
    }

    .card {
        background-color: rgb(248, 248, 248);
        box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
    }

    .color-box {
        position: absolute;
        bottom: -40px;
        left: -90px;
        display: flex;
        justify-content: space-around;
        background-color: rgb(248, 248, 248);
        box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
        padding: 8px;
        border-radius: 5px;
    }

    .box {
        width: 40px;
        height: 40px;
        margin: 3px;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    }

    pre {
        font-size: 1rem;
        font-family: Montserrat, sans-serif;
        color: #6d2ae2;
        margin-bottom: 0.5rem;
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

  @media (max-width: 991.5px) {
    .intro-text {
        text-align: center;
    }

    pre {
        font-size: 0.8rem;
    }

    .color-box {
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%) !important;
    }
  }

  @media (max-width: 767.5px) {
    .welcome {
        flex-direction: column;
        text-align: center;
    }

    // .row {
    //     flex-direction: column-reverse !important;
    // }

    // .img {
    //     margin-bottom : 1rem !important;
    //     width: 200px !important;
    // }

    .know-more-btn {
        margin-top: 1rem !important;
        border-radius: 5px;
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

    const navigate = useNavigate();

    const words = ['Web-Developer', 'Programmer', 'Tech Enthusiast', 'Writer'];
    const { text } = useTypewriter({
        words,
        loop: 0,
        delay: 100,
        deleteSpeed: 50,
        typeSpeed: 70,
    });

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container'>
                    <Welcome theme={darkTheme}>
                        <p className="d-flex welcome justify-content-between p-2 mt-5 fw-bold">
                            𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 &lt;𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 /&gt;!
                            <span className="badge text-white" style={{ backgroundColor: '#6d2ae2' }}>made with ❤️</span>
                        </p>
                    </Welcome>

                    <div className="container p-3-sm">
                        <Intro theme={lightTheme} className="intro">
                            <div className="d-flex justify-content-around flex-wrap align-items-center gap-1 my-3">
                                <div className='intro-text'>
                                    <h1 className='name'>I<span>'</span>m Bhavya{" "}<span>Khurana</span></h1>
                                    <h1>
                                        <em className='fw-bold typewriter' style={{ color: '#6d2ae2' }}>{text}</em>
                                        <Cursor cursorStyle='_' />
                                    </h1>
                                    <p className='my-3 fw-bold'>I design and Code simple yet beautiful websites.</p>
                                    <button onClick={() => navigate("/about")} className='mt-4 mb-3 know-more-btn'>Know more about me<BsDot className="dot ms-1" /></button>
                                </div>
                                <div className='main'>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <pre>
                                                1&nbsp;class&nbsp;<b>Person</b>&nbsp;&#123;
                                            </pre>
                                            <pre>
                                                2&nbsp;&nbsp;&nbsp;&nbsp;constructor()&nbsp;&#123;
                                            </pre>
                                            <pre>
                                                3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name&nbsp;=&nbsp;"<b>Bhavya Khurana</b>";
                                            </pre>
                                            <pre>
                                                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.traits&nbsp;=&nbsp;["<b>DEV</b>", "<b>DESIGN</b>"];
                                            </pre>
                                            <pre>
                                                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age&nbsp;=&nbsp;new&nbsp;Date().getFullYear()&nbsp;-&nbsp;2001;
                                            </pre>
                                            <pre>
                                                6&nbsp;&nbsp;&nbsp;&nbsp;&#125;&nbsp;
                                            </pre>
                                            <pre>
                                                7&nbsp;&#125;&nbsp;
                                            </pre>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className='box' style={{ background: "#6d2ae2" }}></div>
                                        <div className='box' style={{ background: "#9F8FEF" }}></div>
                                        <div className='box' style={{ background: "#8270DB" }}></div>
                                        <div className='box' style={{ background: "#0e1313" }}></div>
                                        <div className='box' style={{ background: "#DFD8FD" }}></div>
                                    </div>
                                </div>
                            </div>

                        </Intro>
                    </div>
                </div>
            </ThemeProvider>

            {/* <p className='tag' align="right">&lt;img&gt;</p>
            <LazyLoadImage data-aos="zoom-in" src={profile} effect="blur" alt="profile" className='img-fluid img' />
            <p className='tag' align="left">&lt;/img&gt;</p> */}
        </>
    )
}

export default Home;

