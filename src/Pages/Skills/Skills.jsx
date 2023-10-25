import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Typography } from '@mui/material';

// Icons
import { FaSass, FaNpm, FaYarn, FaGitAlt, FaGithub, FaLinux, FaUbuntu, FaMarkdown } from 'react-icons/fa';
import {
    SiCplusplus,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiAngular,
    SiMui,
    SiTailwindcss,
    SiAntdesign,
    SiRedux,
    SiJquery,
    SiVite,
    SiHeroku,
    SiNetlify,
    SiVercel,
    SiGithubpages,
    SiMysql,
    SiPycharm,
    SiAtom,
    SiWindows11,
    SiLatex,
    SiVisualstudiocode
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { BsBootstrapFill } from 'react-icons/bs';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { lightTheme } from '../../Themes';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }

    .sub-title span {
        background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
        background-clip: text !important;
        -moz-background-clip: text !important;
        -webkit-background-clip: text !important;
        -moz-text-fill-color: transparent !important;
        -webkit-text-fill-color: transparent !important;
    }

    .card {
        background-color: #DFD8FD;
        border-left: 5px solid #6d2ae2;
        border-right: 5px solid #6d2ae2;
        border-color: #6d2ae2;
    }

    .icon {
        font-size: 2.5rem;
        color: ${props => props.theme.body};
        background: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3);
        border-radius: 50%;
        padding: 5px;
    }

    .line {
        border: 2px solid #6d2ae2;
    }
`;

const Skills = () => {

    const title = "Bhavya Khurana | Skills";
    document.title = title;

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container my-3'>
                    <div className='text-center mb-5'>
                        <h1>.skills()</h1>
                        <h6 className='sub-title fw-bold'>MY <span>LEARNINGS</span></h6>
                    </div>
                    <p className='text-center mx-auto w-75'>
                        These are my skills and this contains all the web technologies, programming languages, databases, frameworks, libraries, tools and hosting platforms that I have learnt
                        until now. I am constantly learning, therefore I may update this section more often.
                    </p>

                    <hr className="my-4 mx-5 line" />

                    <div className="container mt-5">
                        <div className="container">
                            <div className="container">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <Typography variant='h5' sx={{ fontWeight: "bold" }} style={{ color: "#6d2ae2" }}>LANGUAGES & WEB TECHNOLOGIES</Typography>
                                        <div className='d-flex flex-wrap gap-4 mt-4'>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiCplusplus style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiPython style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiHtml5 style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiCss3 style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaSass style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiJavascript style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiTypescript style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiReact style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiAngular style={{ color: "#6d2ae2" }} /></span></h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow mt-5">
                                    <div className="card-body">
                                        <Typography variant='h5' sx={{ fontWeight: "bold" }} style={{ color: "#6d2ae2" }}>FRAMEWORKS, PLATFORMS & LIBRARIES</Typography>
                                        <div className='d-flex flex-wrap gap-4 mt-4'>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><BsBootstrapFill style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiMui style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiTailwindcss style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiAntdesign style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><IoLogoJavascript style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiRedux style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiJquery style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaNpm style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaYarn style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiVite style={{ color: "#6d2ae2" }} /></span></h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow mt-5">
                                    <div className="card-body">
                                        <Typography variant='h5' sx={{ fontWeight: "bold" }} style={{ color: "#6d2ae2" }}>TOOLS & HOSTING</Typography>
                                        <div className='d-flex flex-wrap gap-4 mt-4'>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaGitAlt style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaGithub style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiHeroku style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiNetlify style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiVercel style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiGithubpages style={{ color: "#6d2ae2" }} /></span></h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow mt-5">
                                    <div className="card-body">
                                        <Typography variant='h5' sx={{ fontWeight: "bold" }} style={{ color: "#6d2ae2" }}>DATABASE, IDES / EDITORS & OS</Typography>
                                        <div className='d-flex flex-wrap gap-4 mt-4'>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiMysql style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiVisualstudiocode style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiPycharm style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiAtom style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiWindows11 style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaLinux style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaUbuntu style={{ color: "#6d2ae2" }} /></span></h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow mt-5">
                                    <div className="card-body">
                                        <Typography variant='h5' sx={{ fontWeight: "bold" }} style={{ color: "#6d2ae2" }}>OTHERS</Typography>
                                        <div className='d-flex flex-wrap gap-4 mt-4'>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><FaMarkdown style={{ color: "#6d2ae2" }} /></span></h1>
                                            <h1><span className="badge" style={{ border: "2px solid #6d2ae2" }}><SiLatex style={{ color: "#6d2ae2" }} /></span></h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow mt-5">
                                    <div className='card-body'>
                                        <Typography variant='h5' sx={{ fontWeight: "bold" }} style={{ color: "#6d2ae2" }}>KNOWLEDGE</Typography>
                                        <div className='d-flex flex-wrap gap-3 mt-4'>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>Object Oriented Programming</span> </h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>REST APIs</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>Error Handling</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>Asynchronous Programming</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>Responsive and Mobile Ready</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>Agile Methodologies</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>Version Control</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>Unit Testing</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>API Integration</span></h5>
                                            <h5><span className="badge" style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>PWA (Progressive Web App)</span></h5>
                                        </div>
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

export default Skills;