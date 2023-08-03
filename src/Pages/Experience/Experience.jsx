import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { darkTheme } from '../../Components/Themes';

import experience from '../../Data/experienceData.json';

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
    ListItemIcon,
} from '@mui/material';

import { FaPlus, FaMinus, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSitepoint } from 'react-icons/si';

import { getIconForTechnology } from '../../Helpers/getIconForTechnology';

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
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className='container'>
                <div className='container'>
                    <div className='container my-3'>
                        <h1 className='title text-center'>.experience()</h1>
                        <h6 className='sub-title text-center fw-bold'>PROFESSIONAL <span>JOURNEY</span></h6>

                        <Box sx={{ mt: 5 }}>
                            {
                                experience.map((exp, index) => (
                                    <Accordion sx={{ mt: 3 }} key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                                        <AccordionSummary expandIcon={expanded === `panel${index + 1}` ? <FaMinus color="#dee2e6" /> : <FaPlus color="#dee2e6" />}
                                            sx={{ backgroundColor: 'rgba(109, 42, 226, 1)' }}
                                        >
                                            <Box sx={{ display: "flex", gap: '0.5rem', alignItems: "center", }}>
                                                <Avatar alt={experience.companyName} src={exp.logoSrc} />
                                                <Typography variant='h5' color="#dee2e6">{exp.companyName}</Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ backgroundColor: "#0e1313", border: '1px solid rgba(109, 42, 226, 1)' }}>
                                            <Typography variant='h5' color="#dee2e6">{exp.position}</Typography>
                                            <Box mt={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                                <Typography variant='subtitle1' color="#dee2e6">{exp.duration}</Typography>
                                                <Typography variant='subtitle1' color="#dee2e6">{exp.location}</Typography>
                                            </Box>
                                            <Divider sx={{ bgcolor: "#dee2e6", mt: 2, mb: 2 }} />
                                            {exp.projects.map((project, projectIndex) => (
                                                <List key={projectIndex} sx={{ bgcolor: '#DFD8FD', color: "#6d2ae2", borderBottom: "1px solid #6d2ae2", paddingBottom: "2rem" }}>
                                                    <ListItem>
                                                        <ListItemText
                                                            primary={
                                                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                                                    <Typography variant='h6' color="#6d2ae2">
                                                                        {project.name}
                                                                    </Typography>
                                                                    {
                                                                        project.link && (
                                                                            <IconButton edge="end" href={project.link} target="_blank" rel="noreferrer">
                                                                                <FaExternalLinkAlt color='#6d2ae2' />
                                                                            </IconButton>
                                                                        )
                                                                    }
                                                                </Box>
                                                            }
                                                            secondary={
                                                                <List>
                                                                    {project.description.map((desc, descIndex) => (
                                                                        <ListItem key={descIndex}>
                                                                            <ListItemButton role={undefined} dense>
                                                                                <ListItemIcon>
                                                                                    <SiSitepoint />
                                                                                </ListItemIcon>
                                                                                <ListItemText
                                                                                    secondary={desc}
                                                                                />
                                                                            </ListItemButton>
                                                                        </ListItem>
                                                                    ))}
                                                                </List>
                                                            }
                                                        />
                                                    </ListItem>
                                                    <Box px={2}>
                                                        <Typography variant='h6'>Technologies used:</Typography>
                                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: '0.5rem', alignItems: "center", mt: 1 }}>
                                                            {project.technologiesUsed.map((tech) => (
                                                                <span className='badge d-flex align-items-center gap-2' style={{ border: "2px solid #6d2ae2", color: "#6d2ae2" }}>
                                                                    {getIconForTechnology(tech)}
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                </List>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }
                        </Box>
                    </div>
                </div>
            </div>
        </ThemeProvider >
    )
}

export default Experience;