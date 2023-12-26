import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme } from '../../Themes';
import {
    Box,
    TextField,
    ButtonGroup,
    Button,
    Select,
    MenuItem,
    IconButton,
    Tooltip,
    Divider,
    FormControl
} from '@mui/material';
import { IoGrid } from "react-icons/io5";
import { FaSortAmountUp, FaSortAmountDownAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import project from '../../Data/projectsData.json';
import GridView from './GridView';
import ListView from './ListView';

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

const Work = () => {

    const title = "Bhavya Khurana | Work";
    document.title = title;

    const [searchTerm, setSearchTerm] = useState('');
    const [view, setView] = useState('list');
    const [sortField, setSortField] = useState('name');
    const [isAscending, setIsAscending] = useState(true);

    const sortedProjects = project.sort((a, b) => {
        if (sortField === 'name') {
            return isAscending
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        } else {
            return isAscending
                ? new Date(a.created_at) - new Date(b.created_at)
                : new Date(b.created_at) - new Date(a.created_at);
        }
    });

    const filteredProjects = sortedProjects.filter(project =>
        project.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const toggleSortOrder = () => {
        setIsAscending(!isAscending);
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className="container px-5">
                <h1 className="mt-3 text-center">.work()</h1>
                <h6 className='sub-title text-center fw-bold mb-4'>MY <span>PROJECTS</span></h6>

                <Box sx={{ display: "flex", justifyContent: "end", mt: 3, mb: 3 }}>
                    <ButtonGroup sx={{ borderColor: '#6d2ae2' }}>
                        <Button
                            onClick={() => setView('list')}
                            size='large'
                            variant={view === 'list' ? 'contained' : 'outlined'}
                            sx={{
                                backgroundColor: view === 'list' ? '#6d2ae2' : 'transparent',
                                borderColor: '#6d2ae2',
                                color: view === 'list' ? "#fff" : '#6d2ae2',
                                '&:hover': {
                                    backgroundColor: '#6d2ae2',
                                    color: '#fff'
                                }
                            }}
                            title='List View'
                            disableElevation
                        >
                            <FaBars />
                        </Button>
                        <Button
                            onClick={() => setView('grid')}
                            variant={view === 'grid' ? 'contained' : 'outlined'}
                            size='large'
                            sx={{
                                backgroundColor: view === 'grid' ? '#6d2ae2' : 'transparent',
                                borderColor: '#6d2ae2',
                                color: view === 'grid' ? "#fff" : '#6d2ae2',
                                '&:hover': {
                                    backgroundColor: '#6d2ae2',
                                    color: '#fff'
                                }
                            }}
                            title='Grid View'
                            disableElevation
                        >
                            <IoGrid />
                        </Button>
                    </ButtonGroup>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: '1rem', gap: "1rem", flexWrap: "wrap" }}>
                    <TextField
                        fullWidth
                        size='small'
                        placeholder="Search topics..."
                        sx={{
                            width: '300px',
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

                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Tooltip title="Reverse sort direction" placement="bottom">
                            <IconButton
                                size="large"
                                onClick={toggleSortOrder}
                                sx={{ ml: 2 }}
                            >
                                {isAscending ? <FaSortAmountUp /> : <FaSortAmountDownAlt />}
                            </IconButton>
                        </Tooltip>

                        <FormControl size="small" sx={{
                            width: '150px',
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
                        }}>
                            <Select
                                value={sortField}
                                onChange={(e) => setSortField(e.target.value)}
                            >
                                <MenuItem value="name">Name</MenuItem>
                                <MenuItem value="createdAt">Date Created</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Divider sx={{ border: "1px solid #0e1313" }} />

                {view === 'list' && <ListView filteredProjects={filteredProjects} searchTerm={searchTerm} />}
                {view === 'grid' && <GridView filteredProjects={filteredProjects} searchTerm={searchTerm} />}

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
        </ThemeProvider>
    )
}

export default Work
