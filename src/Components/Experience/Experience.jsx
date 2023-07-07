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

import { FaPlus, FaMinus, FaExternalLinkAlt, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaCss3 } from 'react-icons/fa';
import { SiRedux, SiJquery, SiMui, SiJavascript, SiTypescript, SiOpenai } from 'react-icons/si';
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
                                            <Typography variant='subtitle1' color="#dee2e6">March 2023 - June 2023</Typography>
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
                                                                    <li>Developed responsive user interfaces using Angular framework for a CRM application, ensuring seamless user experience across multiple devices and browsers.</li>
                                                                    <li>Collaborated with backend developers and designers to integrate frontend components with backend APIs, ensuring smooth data flow and system functionality.</li>
                                                                    <li>Implemented complex UI features such as dynamic form validations, and data filtering to enhance the usability and effectiveness of the CRM application.</li>
                                                                    <li>Designed and implemented a modular and scalable code structure, allowing for easy maintenance and future enhancements of the CRM application.</li>
                                                                    <li>Actively participated in agile development processes, attending daily stand-ups, sprint planning, and retrospectives to effectively deliver features within project timelines.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaAngular /> <BsBootstrapFill /> <FaSass /> <SiTypescript /> <FaGitAlt />
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
                                                                    <li>Make API calls.</li>
                                                                    <li>Fix UI bugs.</li>
                                                                    <li>Handling form errors.</li>
                                                                    <li>Implemented new functionalities.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaReact /> <SiRedux /> <SiJavascript /> <FaCss3 /> <FaGitAlt />
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
                                                                    <li>Created landing page for InJOBS.</li>
                                                                    <li>Created the InJOBS portal, a platform where jobseekers can discover job opportunities, research projects, freelance gigs, and internships. Additionally, MSMEs (Micro, Small, and Medium Enterprises) and working professionals can post their own opportunities on the platform.</li>
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
                                                    <FaHtml5 /> <FaCss3Alt /> <BsBootstrapFill /> <SiJquery /> <FaReact /> <FaGitAlt />
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
                                                                    <li>Implemented responsive designs and mobile-first development principles, resulting in improved accessibility across devices.</li>
                                                                    <li>Developed a robust CRM application for managing insurance policies, claims, and customer data using React, Redux, and Material-UI.</li>
                                                                    <li>Implemented form validation and error handling to ensure accurate data entry and improve data integrity.</li>
                                                                    <li>Integrated with RESTful APIs to fetch and update data from external systems, including underwriting systems and payment gateways.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaReact /> <SiMui /> <SiRedux /> <FaGitAlt />
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
                                                                    <li>Implemented the chat feature.</li>
                                                                    <li>Implemented secure user sign up and login.</li>
                                                                </ul>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Box p={2}>
                                                <Typography variant='subtitle1'>Technologies Used :</Typography>
                                                <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                    <FaReact /> <SiRedux /> <SiMui /> <FaGitAlt />
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
                                                    <FaHtml5 /> <FaCss3Alt /> <SiMui /> <FaReact /> <SiOpenai />
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
                                                                    <li>It was a two-month online course focused on web development technologies, where I learned HTML5, CSS3, Bootstrap, JavaScript, DOM manipulation, AJAX, and jQuery</li>
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