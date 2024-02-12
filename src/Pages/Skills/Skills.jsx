import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme } from '../../Themes';
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import languages from '../../Data/Skills/languages.json';
import fandl from '../../Data/Skills/fandl.json';
import packages from '../../Data/Skills/packages.json';
import hosting from '../../Data/Skills/hosting.json';
import tools from '../../Data/Skills/tools.json';
import knowledge from '../../Data/Skills/knowledge.json';
import SkillData from '../../Components/SkillData';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

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
                    <div className='text-center mb-4'>
                        <h1>.skills()</h1>
                        <h6 className='sub-title fw-bold'>MY <span>LEARNINGS</span></h6>
                    </div>
                    <p className='text-center mx-auto w-75'>
                        These are my current skills, encompassing a wide range of web technologies, programming languages, databases, frameworks, libraries,
                        tools, and hosting platforms. I am committed to continuous learning and may update this section regularly.
                    </p>

                    <hr className="my-4 mx-5 line" />

                    <div className="container mt-3">
                        <div className="container">
                            <div className="container">
                                <div className='mb-3 overflow-hidden'>
                                    <Marquee pauseOnHover={true} speed={50} direction='right' className='d-flex align-items-center justify-content-center'>
                                        {knowledge.map((item, index) => (
                                            <div className='marquee-box' style={{ marginRight: "5rem" }} key={index}>
                                                {item.name}
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>

                                <section id='skills' className='d-flex flex-column align-items-center justify-content-center gap-2 h-100 position-relative' style={{ overflow: "hidden", transform: "scale(0.9)" }}>
                                    <div className="d-flex flex-row justify-content-around flex-wrap gap-5 align-items-center">
                                        {languages.map((item, index) => (
                                            <SkillData key={index} icon={item.name} index={index} />
                                        ))}
                                    </div>
                                    <div className="d-flex flex-row justify-content-around flex-wrap mt-4 gap-5 align-items-center">
                                        {fandl.map((item, index) => (
                                            <SkillData key={index} icon={item.name} index={index} />
                                        ))}
                                    </div>
                                    <div className="d-flex flex-row justify-content-around flex-wrap mt-4 gap-5 align-items-center">
                                        {hosting.map((item, index) => (
                                            <SkillData key={index} icon={item.name} index={index} />
                                        ))}
                                    </div>
                                    <div className="d-flex flex-row justify-content-around flex-wrap mt-4 gap-5 align-items-center">
                                        {packages.map((item, index) => (
                                            <SkillData key={index} icon={item.name} index={index} />
                                        ))}
                                    </div>
                                    <div className="d-flex flex-row justify-content-around flex-wrap mt-4 gap-5 align-items-center">
                                        {tools.map((item, index) => (
                                            <SkillData key={index} icon={item.name} index={index} />
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div >
            </ThemeProvider >
        </>
    )
}

export default Skills;