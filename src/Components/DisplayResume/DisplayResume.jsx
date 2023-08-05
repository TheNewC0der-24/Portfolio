import React, { useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { FaDownload, FaCheck } from 'react-icons/fa';

import resume from '../../assets/Resume.png';
import Resume from '../../assets/Resume.pdf';

const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(90deg, #dee2e6 50%, #0e1313 50%);
    }

    .title {
        background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
        background-clip: text !important;
        -moz-background-clip: text !important;
        -webkit-background-clip: text !important;
        -moz-text-fill-color: transparent !important;
        -webkit-text-fill-color: transparent !important;
    }
`;

const DisplayResume = () => {

    const navigate = useNavigate();

    const downloadRef = useRef(null);
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        const path = Resume;
        const link = document.createElement("a");
        link.href = path;
        link.setAttribute("download", "Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsDownloaded(true);

        setTimeout(() => {
            setIsDownloaded(false);
        }, 3000);
    };

    const title = "Bhavya Khurana | Resume";
    document.title = title;

    return (
        <React.Fragment>
            <GlobalStyle />
            <div className="container my-5">
                <div className='d-flex justify-content-between align-items-center gap-2 flex-wrap my-3'>
                    <h1 className='title'>RESUME</h1>
                    <div className='d-flex flex-wrap gap-2 align-items-center'>
                        <button
                            className='btn fw-bold'
                            style={{ background: 'none', color: '#6d2ae2', border: '1px solid #6d2ae2' }}
                            onClick={() => navigate('/about')}
                        >
                            Back
                        </button>
                        <button
                            className='btn fw-bold'
                            style={{ background: '#6d2ae2', color: '#dee2e6', border: 'none' }}
                            onClick={handleDownload}
                            ref={downloadRef}
                        >
                            {isDownloaded ? (
                                <React.Fragment>
                                    Downloaded <FaCheck />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    Download PDF <FaDownload />
                                </React.Fragment>
                            )}
                        </button>
                    </div>
                </div>
                <img src={resume} className='img-thumbnail' alt="Resume" />
            </div>
        </React.Fragment >
    )
}

export default DisplayResume;
