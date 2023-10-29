import React, { useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from '../../Themes';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import educationData from '../../Data/educationData.json';
import Aos from 'aos';

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

  .img {
    box-shadow:  5px 5px 10px #abaeb1, -5px -5px 10px #ffffff;
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
                        <span className='ms-2'>
                            .education()
                        </span>
                    </h1>
                    <h6 className="section_subtitle fw-bold">ACADEMIC <span>LEARNING</span></h6>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            {
                                educationData.map((data) => (
                                    <div key={data.id} className={data.className}>
                                        <div className="card border-0 h-100" data-aos="zoom-in" style={{ backgroundColor: `${data.bgColor}`, color: `${data.color}` }}>
                                            <div className="card-body">
                                                <h5 className='card-title my-3'>{data.duration}</h5>
                                                <h4 className='fw-bold'>{data.institutionName}</h4>
                                                <h5 className='card-title my-3'>{data.degreeName}</h5>
                                                <div className='my-3'>
                                                    <span className='fw-bold me-1 badge bg-light text-dark'>{data.grade}</span>
                                                </div>
                                                <button
                                                    href={data.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className='d-flex gap-2 align-items-center btn btn-dark fw-bold'
                                                    style={{ border: "none", backgroundColor: '#6d2ae2', color: "#dee2e6" }}
                                                >
                                                    Visit <FaExternalLinkAlt />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Education;