import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { darkTheme } from '../Themes';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
    Avatar,
    Divider,
    List,
    ListItem,
    IconButton,
    ListItemButton,
    ListItemText,
} from '@mui/material';

import { FaPlus, FaMinus, FaExternalLinkAlt, FaReact, FaAngular, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiRedux, SiJquery, SiMui, SiJavascript } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';

// Image
import bookeeLogo from '../../assets/Images/Experience/bookeeLogo.png';
import egslogo from '../../assets/Images/Experience/egsLogo.png';
import tslogo from '../../assets/Images/Experience/tsLogo.png';
import vlogo from '../../assets/Images/Experience/vLogo.png';

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

    const title = "Bhavya Khurana | Experience";
    document.title = title;

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


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

                            <Box sx={{ mt: 5 }}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary expandIcon={expanded === 'panel1' ? <FaMinus color="#dee2e6" /> : <FaPlus color="#dee2e6" />}
                                        sx={{ backgroundColor: 'rgba(109, 42, 226, 1)' }}
                                    >
                                        <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", }}>
                                            <Avatar alt="Bookee" src={bookeeLogo} />
                                            <Typography variant='h5' color="#dee2e6">Bookee</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: "#0e1313", border: '1px solid rgba(109, 42, 226, 1)' }}>
                                        <Typography variant='h5' color="#dee2e6">Software Developer Engineer (Frontend) - INTERNSHIP</Typography>
                                        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                            <Typography variant='subtitle1' color="#dee2e6">March 2023 - Present</Typography>
                                            <Typography variant='subtitle1' color="#dee2e6">Bengaluru, Karnataka, India</Typography>
                                        </Box>
                                        <Divider sx={{ bgcolor: "#dee2e6", mt: 2, mb: 2 }} />
                                        <List sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2" }}>
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" href='https://crm.bookeeapp.com/' target="_blank" rel="noreferrer">
                                                        <FaExternalLinkAlt color='#6d2ae2' />
                                                    </IconButton>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} dense>
                                                    <ListItemText
                                                        primary="Bookee CRM"
                                                        secondary={
                                                            <React.Fragment>
                                                                <ul>
                                                                    <li>Working on Customer relationship management system.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaAngular /> <BsBootstrapFill />
                                                </Box>
                                            </Box>
                                        </List>
                                        <List sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2", mt: 2 }}>
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" href='https://halofitnessbrooklyn.weebly.com/reserve.html#/login' target="_blank" rel="noreferrer">
                                                        <FaExternalLinkAlt color='#6d2ae2' />
                                                    </IconButton>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} dense>
                                                    <ListItemText
                                                        primary="Embed"
                                                        secondary={
                                                            <React.Fragment>
                                                                <ul>
                                                                    <li>Working on Embed</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaReact /> <SiRedux />
                                                </Box>
                                            </Box>
                                        </List>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ mt: 3 }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary expandIcon={expanded === 'panel2' ? <FaMinus color="#dee2e6" /> : <FaPlus color="#dee2e6" />}
                                        sx={{ backgroundColor: 'rgba(109, 42, 226, 1)' }}
                                    >
                                        <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", }}>
                                            <Avatar alt="EGS" src={egslogo} />
                                            <Typography variant='h5' color="#dee2e6">Evren Global Solutions Pvt. Ltd.</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: "#0e1313", border: '1px solid rgba(109, 42, 226, 1)' }}>
                                        <Typography variant='h5' color="#dee2e6">Frontend Developer - INTERNSHIP</Typography>
                                        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                            <Typography variant='subtitle1' color="#dee2e6">July 2022 - Feb 2023</Typography>
                                            <Typography variant='subtitle1' color="#dee2e6">Delhi, India</Typography>
                                        </Box>
                                        <Divider sx={{ bgcolor: "#dee2e6", mt: 2, mb: 2 }} />
                                        <List sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2" }}>
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" href='https://injobs.careers/' target="_blank" rel="noreferrer">
                                                        <FaExternalLinkAlt color='#6d2ae2' />
                                                    </IconButton>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} dense>
                                                    <ListItemText
                                                        primary="InJOBS"
                                                        secondary={
                                                            <React.Fragment>
                                                                <ul>
                                                                    <li>Created landing page.</li>
                                                                    <li>Created a Job portal that helps student to find Jobs and Internships, apart from that MSME and Working professional can post jobs, internships, and research project.Created the InJOBS portal for where jobseekers can find jobs, research projects, freelancing and internships related opportunities. Apart from that, MSME and Working professionals can post these opportunities.</li>
                                                                    <li>Created an admin panel for InJOBS portal - Admin can see the statistics and can see which candidates are under which Mentor.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaHtml5 /> <FaCss3Alt /> <BsBootstrapFill /> <SiJquery /> <FaReact />
                                                </Box>
                                            </Box>
                                        </List>
                                        <List sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2", mt: 2 }}>
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" href='https://www.acu1stchoice.com/' target="_blank" rel="noreferrer">
                                                        <FaExternalLinkAlt color='#6d2ae2' />
                                                    </IconButton>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} dense>
                                                    <ListItemText
                                                        primary="Acu 1st Insurance"
                                                        secondary={
                                                            <React.Fragment>
                                                                <ul>
                                                                    <li>Created landing page.</li>
                                                                    <li>Created a CRM for an insurance company.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaReact /> <SiRedux /> <SiMui />
                                                </Box>
                                            </Box>
                                        </List>
                                        <List sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2", mt: 2 }}>
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" href='https://matrimonial.boindia.org/' target="_blank" rel="noreferrer">
                                                        <FaExternalLinkAlt color='#6d2ae2' />
                                                    </IconButton>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} dense>
                                                    <ListItemText
                                                        primary="BOI Matrimony"
                                                        secondary={
                                                            <React.Fragment>
                                                                <ul>
                                                                    <li>Created the landing page.</li>
                                                                    <li>Created the web portal for Brahmin Organization of India.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaReact /> <SiMui />
                                                </Box>
                                            </Box>
                                        </List>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ mt: 3 }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary expandIcon={expanded === 'panel3' ? <FaMinus color="#dee2e6" /> : <FaPlus color="#dee2e6" />}
                                        sx={{ backgroundColor: 'rgba(109, 42, 226, 1)' }}
                                    >
                                        <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", }}>
                                            <Avatar alt="Talent Sumo" src={tslogo} />
                                            <Typography variant='h5' color="#dee2e6">Talent Sumo</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: "#0e1313", border: '1px solid rgba(109, 42, 226, 1)' }}>
                                        <Typography variant='h5' color="#dee2e6">Frontend Developer - INTERNSHIP</Typography>
                                        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                            <Typography variant='subtitle1' color="#dee2e6">June 2022 - July 2022</Typography>
                                            <Typography variant='subtitle1' color="#dee2e6">Nagpur, Maharashtra, India</Typography>
                                        </Box>
                                        <Divider sx={{ bgcolor: "#dee2e6", mt: 2, mb: 2 }} />
                                        <List sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2" }}>
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" href='https://sandbox.coachbots.com/login' target="_blank" rel="noreferrer">
                                                        <FaExternalLinkAlt color='#6d2ae2' />
                                                    </IconButton>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton role={undefined} dense>
                                                    <ListItemText
                                                        primary="CLOUD COACH"
                                                        secondary={
                                                            <React.Fragment>
                                                                <ul>
                                                                    <li>Created the end-to-end User interface of the product, which is an AI bot for automatic assessment and feedback that can be used for interviews, training like sales or leadership, course testing, screening, job simulation etc.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaHtml5 /> <FaCss3Alt /> <SiMui /> <FaReact />
                                                </Box>
                                            </Box>
                                        </List>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ mt: 3 }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary expandIcon={expanded === 'panel4' ? <FaMinus color="#dee2e6" /> : <FaPlus color="#dee2e6" />}
                                        sx={{ backgroundColor: 'rgba(109, 42, 226, 1)' }}
                                    >
                                        <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", }}>
                                            <Avatar alt="Verzeo" src={vlogo} />
                                            <Typography variant='h5' color="#dee2e6">GMAT Verzeo</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: "#0e1313", border: '1px solid rgba(109, 42, 226, 1)' }}>
                                        <Typography variant='h5' color="#dee2e6">Web Developer - APPRENTICESHIP</Typography>
                                        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                            <Typography variant='subtitle1' color="#dee2e6">May 2020 - July 2020</Typography>
                                            <Typography variant='subtitle1' color="#dee2e6">Bengaluru, Karnataka, India</Typography>
                                        </Box>
                                        <Divider sx={{ bgcolor: "#dee2e6", mt: 2, mb: 2 }} />
                                        <List sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2" }}>
                                            <ListItem disablePadding>
                                                <ListItemButton role={undefined} dense>
                                                    <ListItemText
                                                        secondary={
                                                            <React.Fragment>
                                                                <ul>
                                                                    <li>It is a two month online course for learning web-development technologies.</li>
                                                                    <li>Learned so many technologies for web-development like - HTML5, CSS3, Bootstrap, JavaScript, DOM, AJAX, and jQuery.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaHtml5 /> <FaCss3Alt /> <BsBootstrapFill /> <SiJavascript /> <SiJquery />
                                                </Box>
                                            </Box>
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </div>
                    </div>
                </div>
            </ThemeProvider >
        </>
    )
}

export default Experience;