import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import { lightTheme, darkTheme } from '../Themes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dee2e6;
  }

.section_subtitle{
    display: block;
    margin-bottom: 3rem;
    color: #6d2ae2;
}

.qualification_tabs{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2rem;
}

.qualification_button{
    font-size: 1.125rem;
    font-weight: 900;
     background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
}

.icon{
    font-size: 1.8rem;
    margin-right: 0.25rem;
}

.qualification_data{
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
}

.qualification_title{
    font-size: 0.938rem;
    font-weight: 500;
}

.qualification_subtitle{
    display: inline-block;
    font-size: 0.813rem;
    margin-bottom: 1rem;
    color: #6d2ae2;
}

.qualification_calender{
    font-size: 0.75rem;
    color: grey;
}

.qualification_rounder{
    display: inline-block;
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: #6d2ae2;
    border-radius: 50%;
    z-index: 99;
}

.qualification_line{
    display: block;
    width: 1px;
    height: 100%;
    background-color: white;
    transform: translate(5.3px,0px);
}
`;


const Education = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className="container">
                <div className="qualification container mt-5 section text-center">
                    <h2 className="section_title">Qualification</h2>
                    <span className="section_subtitle">My personal journey</span>

                    <div className="qualification_container container">
                        <div className="qualification_tabs">
                            <div className="qualification_button button-flex">
                                <lord-icon
                                    src="https://cdn.lordicon.com/stxtcyyo.json"
                                    trigger="loop"
                                    colors="primary:#6d2ae2"
                                    state="morph"
                                    style={{ width: '25px', height: '25px' }}>
                                </lord-icon>
                                <span className='ms-2'>
                                    Education
                                </span>
                            </div>
                        </div>


                        <div className="qualification_sections container">
                            <div className="qualification_content">
                                <div className="qualification_data">
                                    <div>
                                        <h3 className="qualification_title">Secondary</h3>
                                        <span className="qualification_subtitle">St. Anselm's Sr. Sec. School</span>
                                        <div className="qualification_calender">
                                            <i className="far fa-calendar-alt me-1"></i>
                                            2016 - 2017
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>
                                </div>

                                <div className="qualification_data">
                                    <div></div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification_title">Higher Secondary</h3>
                                        <span className="qualification_subtitle">St. Anselm's Sr. Sec. School</span>
                                        <div className="qualification_calender">
                                            <i className="far fa-calendar-alt me-1"></i>
                                            2018 - 2019
                                        </div>
                                    </div>
                                </div>

                                <div className="qualification_data">
                                    <div>
                                        <h3 className="qualification_title">Computer Science Engineering</h3>
                                        <span className="qualification_subtitle">Jaypee University Of Engineering And Technology</span>
                                        <div className="qualification_calender">
                                            <i className="far fa-calendar-alt me-1"></i>
                                            2019 - 2023
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification_rounder"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider >
    )
}

export default Education;