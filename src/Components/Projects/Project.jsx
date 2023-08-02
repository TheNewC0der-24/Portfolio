import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import {
    TextField,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    CardActions,
    IconButton,
    Collapse,
    Box,
    Button
} from '@mui/material';

import { styled } from '@mui/material/styles';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { lightTheme } from '../Themes';

import project from '../../Data/projectsData.json';

// Icons
import { FaRegFolder } from 'react-icons/fa';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { MdOutlineExpandMore } from 'react-icons/md';

import { formatDate } from '../../Helpers/formatData';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
  }

  .sub-title span {
        background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
        background-clip: text !important;
        -moz-background-clip: text !important;
        -webkit-background-clip: text !important;
        -moz-text-fill-color: transparent !important;
        -webkit-text-fill-color: transparent !important;
    }

    input {
        color: #6d2ae2 !important;
    }

    input::placeholder {
        color: #000 !important;
    }

    .links {
        color: ${props => props.theme.text};
        transition: 0.3s ease-in-out;
    }

    .links:hover {
        color: #6d2ae2;
    }
`;

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Project = () => {

    const title = "Bhavya Khurana | Work";
    document.title = title;

    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState({});

    const filteredProjects = project.filter(project =>
        project.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleExpandClick = (projectId) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [projectId]: !prevExpanded[projectId],
        }));
    };


    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className="container">
                <div className="container">
                    <div className="container">
                        <h1 className="mt-3 text-center">.work()</h1>
                        <h6 className='sub-title text-center fw-bold mb-4'>MY <span>PROJECTS</span></h6>

                        <Box sx={{ display: "flex", justifyContent: "end", marginBottom: '1rem', }}>
                            <TextField
                                fullWidth
                                size='small'
                                placeholder="Search topics..."
                                sx={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#6d2ae2',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#6d2ae2',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#6d2ae2',
                                        },
                                    },
                                }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Box>

                        <Grid container spacing={2} sx={{ mb: 5 }}>
                            {
                                filteredProjects?.length === 0 ? (
                                    <Box sx={{ display: "flex", justifyContent: "center", margin: "auto", mt: 5 }}>
                                        <Typography variant='h5'>No Work found with topic <span className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{searchTerm}</span></Typography>
                                    </Box>
                                ) :
                                    filteredProjects?.map((item) => (
                                        <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
                                            <Card sx={{ borderBottom: '5px solid #6d2ae2' }}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar sx={{ bgcolor: "#DFD8FD", color: "#6d2ae2" }}>
                                                            <FaRegFolder />
                                                        </Avatar>
                                                    }
                                                    title={item.name}
                                                    subheader={formatDate(item.created_at)}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    image={item.image}
                                                    alt={item.name}
                                                />
                                                <CardActions disableSpacing>
                                                    <IconButton href={item.html_url} target="_blank" rel="noreferrer">
                                                        <FiGithub className='links' />
                                                    </IconButton>
                                                    {
                                                        item.homepage && (
                                                            <IconButton href={item.homepage} target="_blank" rel="noreferrer">
                                                                <FiExternalLink className='links' />
                                                            </IconButton>
                                                        )
                                                    }

                                                    <ExpandMore
                                                        expand={expanded[item.id]}
                                                        onClick={() => handleExpandClick(item.id)}
                                                        aria-expanded={expanded[item.id]}
                                                    >
                                                        <MdOutlineExpandMore />
                                                    </ExpandMore>
                                                </CardActions>
                                                <Collapse in={expanded[item.id]} timeout="auto" unmountOnExit>
                                                    <CardContent>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.description}
                                                        </Typography>
                                                        <div className='d-flex flex-wrap gap-2 mt-2'>
                                                            {
                                                                item.topics.map((topic) => {
                                                                    return (
                                                                        <span key={topic} className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{topic}</span>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </CardContent>
                                                </Collapse>
                                            </Card>
                                        </Grid>
                                    ))
                            }

                        </Grid>

                        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: '#6d2ae2',
                                    color: '#6d2ae2',
                                    '&:hover': {
                                        backgroundColor: '#6d2ae2',
                                        color: '#fff'
                                    }
                                }}
                                href="https://github.com/TheNewC0der-24"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View More On Github
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Project;