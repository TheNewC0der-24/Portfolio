import React, { useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FcCalendar } from 'react-icons/fc';

import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import Aos from 'aos';
import "aos/dist/aos.css";

import { lightTheme } from '../Themes';

import school from '../../assets/Images/school.svg';
import college from '../../assets/Images/college.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }

  .section_title {
    color: ${({ theme }) => theme.text};
    margin-bottom: 0 !important;
  }

  .section_subtitle{
    display: block;
    margin-bottom: 3rem;
 }

  .section_subtitle span {
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
    box-shadow:  5px 5px 10px #abaeb1,
             -5px -5px 10px #ffffff;
 }

 .visit {
    background: none !important;
    border-radius : 0px !important;
    border: none !important;
    color : #0e1313 !important;
    box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3) !important;
    transition: all 0.2s ease;
 }

    .visit:hover {
            box-shadow: inset -5px 5px 7px #bdc0c4,
                    inset 5px -5px 7px #ffffff !important;
    }
`;


const Education = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const title = "Bhavya Khurana | Education";
    document.title = title;

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="section_title fw-bold">
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
                    </h1>
                    <h6 className="section_subtitle fw-bold">ACADEMIC <span>LEARNING</span></h6>
                </div>
                <div className="container">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-4 mb-5">
                                <div className="card border-0 h-100">
                                    <div className="card-body">
                                        <LazyLoadImage effect="blur" src={school} alt="school" width={150} className='img-fluid mx-auto img rounded-circle p-2' />
                                        <h3 className='card-title my-2'>Secondary</h3>
                                        <h5 className='fw-bold' style={{ color: "#6d2ae2" }}>St. Anselm's Sr. Sec. School, Mansarovar, Jaipur</h5>
                                        <div className='d-flex gap-3 flex-wrap justify-content-between my-3'>
                                            <p>
                                                <FcCalendar className='fs-2' />
                                                2016 - 2017
                                            </p>
                                            <p>
                                                <span className='fw-bold me-1'>Score:</span>
                                                78.2%
                                            </p>
                                        </div>
                                        <a href='https://stanselmsmns.ac.in/' target="_blank" rel="noreferrer" className='visit btn btn-primary d-block'>Visit School</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4 mb-5">
                                <div className="card border-0 h-100">
                                    <div className="card-body">
                                        <LazyLoadImage effect="blur" src={school} alt="school" width={150} className='img-fluid mx-auto img rounded-circle p-2' />
                                        <h3 className='card-title my-2'>Higher Secondary</h3>
                                        <h5 className='fw-bold' style={{ color: "#6d2ae2" }}>St. Anselm's Sr. Sec. School, Mansarovar, Jaipur</h5>
                                        <div className='d-flex gap-3 flex-wrap justify-content-between my-3'>
                                            <p>
                                                <FcCalendar className='fs-2' />
                                                2018 - 2019
                                            </p>
                                            <p>
                                                <span className='fw-bold me-1'>Score:</span>
                                                61.2%
                                            </p>
                                        </div>
                                        <a href='https://stanselmsmns.ac.in/' target="_blank" rel="noreferrer" className='visit btn btn-primary d-block'>Visit School</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-4 mb-5">
                                <div className="card border-0 h-100">
                                    <div className="card-body">
                                        <LazyLoadImage effect="blur" src={college} alt="school" width={150} className='img-fluid mx-auto img rounded-circle p-2' />
                                        <h3 className='card-title my-2'>B. Tech</h3>
                                        <h5 className='fw-bold' style={{ color: "#6d2ae2" }}>Jaypee University Of Engineering And Technology</h5>
                                        <div className='d-flex gap-3 flex-wrap justify-content-between my-3'>
                                            <p>
                                                <FcCalendar className='fs-2' />
                                                2019 - 2023
                                            </p>
                                            <p>
                                                <span className='fw-bold me-1'>Score:</span>
                                                67.45%
                                            </p>
                                        </div>
                                        <a href='https://www.juet.ac.in/' target="_blank" rel="noreferrer" className='visit btn btn-primary d-block'>Visit College</a>
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