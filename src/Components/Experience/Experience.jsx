import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { darkTheme } from '../Themes';

// Image
import egslogo from '../../assets/Images/egsLogo.png';
import tslogo from '../../assets/Images/tsLogo.png';
import vlogo from '../../assets/Images/vLogo.svg';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
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

    .accordion-item {
        border: 1px solid rgba(109, 42, 226, 1) !important;
        background-color: rgba(109, 42, 226, 1) !important;
    }
    
    .accordion-body {
        background-color: #0e1313 !important;
        color: #fff !important;
    }

    .accordion-button {
        box-shadow: none !important;
        background-color: ${(props) => props.theme.text};
        color: #dee2e6;
    }

    .accordion-button:not(.collapsed) {
        background-color: rgba(109, 42, 226, 0.9) !important;
        color: #dee2e6;
    }

    .accordion-item:last-of-type .accordion-button.collapsed {
        border-radius: 0 !important;
    }

    .accordion-button:after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    }

    .accordion-button:not(.collapsed)::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    }
`;

const Experience = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container'>
                    <div className='container'>
                        <div className='container my-3'>
                            <h1 className='title text-center'>.experience()</h1>
                            <h6 className='sub-title text-center fw-bold'>PROFESSIONAL <span>JOURNEY</span></h6>
                            <div className="accordion accordion-flush my-5" id="accordionExample">
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <img src={egslogo} width={100} alt="egs" className='img-fluid' />Evren Global Solutions Pvt. Ltd.
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <h5>Frontend Developer - INTERNSHIP</h5>
                                            <div className='d-flex justify-content-between gap-5'>
                                                <p>July 2022 - Present</p>
                                                <p>Delhi, India</p>
                                            </div>
                                            <hr />
                                            <p><a href='https://injobs.careers/' target="_blank" rel="noreferrer" className='badge text-decoration-none' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>InJOBS</a></p>
                                            <ul>
                                                <li>Created landing page.</li>
                                                <li>Created an application that helps student to find Jobs and Internships, apart from that MSME and Working professional can post jobs, internships, and research project.</li>
                                                <li>Created an admin panel - Admin can see the statistics and can see which candidates are under which Mentor.</li>
                                            </ul>

                                            <p><span className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>Acu 1st Insurance</span></p>
                                            <ul>
                                                <li>Created landing page.</li>
                                                <li>Working an insurance application.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <img src={tslogo} width={100} alt="ts" className='img-fluid me-3' />Talent Sumo
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <h5>Frontend Developer - INTERNSHIP</h5>
                                            <div className='d-flex justify-content-between gap-5'>
                                                <p>June 2022 - August 2022</p>
                                                <p>Nagpur, India</p>
                                            </div>
                                            <hr />
                                            <p><span className='badge text-decoration-none' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>CLOUD COACH</span></p>
                                            <ul>
                                                <li>Created the frontend part of an application which is an AI bot for automatic assessment and feedback that can be used for
                                                    interviews, training like sales or leadership, course testing, screening, job simulation etc.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <img src={vlogo} alt="verzeo" className='img-fluid me-3' />GMAT Verzeo
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <h5>Web Developer - APPRENTICESHIP</h5>
                                            <div className='d-flex justify-content-between gap-5'>
                                                <p>May 2020 - July 2022</p>
                                                <p>Bangalore, India</p>
                                            </div>
                                            <hr />
                                            <ul>
                                                <li>It is a two month online course for learning web-development technologies.</li>
                                                <li>Learned so many web technologies like - HTML5, CSS3, Bootstrap, JavaScript, DOM, AJAX, and jQuery.</li>
                                            </ul>
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

export default Experience;