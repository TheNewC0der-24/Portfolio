import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Button } from '@mui/material';

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
                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "capitalize",
                                borderColor: "#6d2ae2",
                                color: "#6d2ae2",
                                "&:hover": {
                                    borderColor: "#6d2ae2",
                                },
                            }}
                            onClick={() => navigate('/about')}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "capitalize",
                                backgroundColor: "#6d2ae2",
                                "&:hover": {
                                    backgroundColor: "#6d2ae2",
                                },
                            }}
                            onClick={handleDownload}
                            endIcon={isDownloaded ? <FaCheck /> : <FaDownload />}
                        >
                            {isDownloaded ? "Downloaded" : "Download PDF"}
                        </Button>
                    </div>
                </div>
                <img src={resume} className='img-thumbnail' alt="Resume" />
            </div>
        </React.Fragment >
    )
}

export default DisplayResume;
