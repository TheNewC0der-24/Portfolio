import React, { useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { FcCalendar } from 'react-icons/fc';

import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import Aos from 'aos';
import "aos/dist/aos.css";

import { lightTheme } from '../Themes';

import school from '../../assets/Image/school.svg';
import college from '../../assets/Image/college.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }

  .section_title {
    color: ${({ theme }) => theme.text};
    font-weight : bold;
  }

  .section_subtitle{
    display: block;
    margin-bottom: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
    background-clip: text !important;
    -moz-background-clip: text !important;
    -webkit-background-clip: text !important;
    -moz-text-fill-color: transparent !important;
    -webkit-text-fill-color: transparent !important;
 }

  .card {
    background: none !important;
    box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);
  }

  .img {
    box-shadow: inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3);
 }
`;


const Education = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className="container">
                <div className="my-5 text-center">
                    <h2 className="section_title">
                        <lord-icon
                            src="https://cdn.lordicon.com/stxtcyyo.json"
                            trigger="loop"
                            colors="primary:#0e1313"
                            state="morph"
                            style={{ width: '30px', height: '30px' }}>
                        </lord-icon>
                        <span className='ms-2'>
                            .education()
                        </span>
                    </h2>
                    <span className="section_subtitle">My journey</span>
                </div>
                <div className="container">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <div className="card border-0 h-100">
                                    <div className="card-body">
                                        <img src={school} alt="school" width={150} className='img-fluid mx-auto img rounded-circle p-2' />
                                        <h3 className='card-title'>Secondary</h3>
                                        <h5>St. Anselm's Sr. Sec. School</h5>
                                        <div className="text-secondary">
                                            <FcCalendar className='fs-2' />
                                            2016 - 2017
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="card border-0 h-100">
                                    <div className="card-body">
                                        <img src={school} alt="school" width={150} className='img-fluid mx-auto img rounded-circle p-2' />
                                        <h3>Higher Secondary</h3>
                                        <h5>St. Anselm's Sr. Sec. School</h5>
                                        <div className="text-secondary">
                                            <FcCalendar className='fs-2' />
                                            2018 - 2019
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="card border-0 h-100">
                                    <div className="card-body">
                                        <img src={college} alt="school" width={150} className='img-fluid mx-auto img rounded-circle p-2' />
                                        <h3>B.tech</h3>
                                        <h5>Jaypee University Of Engineering And Technology</h5>
                                        <div className="text-secondary">
                                            <FcCalendar className='fs-2' />
                                            2019 - 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Education;