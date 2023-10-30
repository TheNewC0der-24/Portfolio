import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme } from '../../Themes';
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import { Box, Typography, Tabs, Tab, Button, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';
import languages from '../../Data/Skills/languages.json';
import fandl from '../../Data/Skills/fandl.json';
import packages from '../../Data/Skills/packages.json';
import hosting from '../../Data/Skills/hosting.json';
import knowledge from '../../Data/Skills/knowledge.json';
import { getIconForTechnology } from '../../Helpers/getIconForTechnology';

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

    .card {
        background-color: #DFD8FD;
        border-left: 5px solid #6d2ae2;
        border-right: 5px solid #6d2ae2;
        border-color: #6d2ae2;
    }

    .icon {
        font-size: 2.5rem;
        color: ${props => props.theme.body};
        background: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3);
        border-radius: 50%;
        padding: 5px;
    }

    .line {
        border: 2px solid #6d2ae2;
    }
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, border: "1px solid #6d2ae2" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function SkillCategoryButtons({ items }) {
    return (
        <div className='d-flex flex-wrap gap-4'>
            {items.map((item, index) => (
                <Button
                    key={index}
                    variant="outlined"
                    style={{
                        color: "#6d2ae2",
                        borderColor: "#6d2ae2",
                        textTransform: "none",
                        fontWeight: "bold",
                        border: "2px solid",
                        height: "40px",
                        borderRadius: "10px"
                    }}
                    startIcon={getIconForTechnology(item.name)}
                >
                    {item.name}
                </Button>
            ))}
        </div>
    );
}

const categories = [
    { label: "Languages", data: languages },
    { label: "Frameworks & Libraries", data: fandl },
    { label: "Packages", data: packages },
    { label: "Backend, Tools & Services", data: [{ name: "MongoDB" }, { name: "Firebase" }, { name: "Postman" }] },
    { label: "Version Control & Collaboration", data: [{ name: "Git" }, { name: "GitHub" }] },
    { label: "Hosting & Deployment", data: hosting },
    { label: "Integrated Development Environments (IDEs)", data: [{ name: "VS Code" }, { name: "PyCharm" }, { name: "Atom" }] },
    { label: "Operating Systems", data: [{ name: "Windows" }, { name: "Linux" }, { name: "Ubuntu" }] },
    { label: "Text Markup & Documentation", data: [{ name: "Markdown" }, { name: "LaTeX" }] },
    { label: "Knowledge", data: knowledge }
];

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Skills = () => {
    const title = "Bhavya Khurana | Skills";
    document.title = title;

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container my-3'>
                    <div className='text-center mb-5'>
                        <h1>.skills()</h1>
                        <h6 className='sub-title fw-bold'>MY <span>LEARNINGS</span></h6>
                    </div>
                    <p className='text-center mx-auto w-75'>
                        These are my current skills, encompassing a wide range of web technologies, programming languages, databases, frameworks, libraries,
                        tools, and hosting platforms. I am committed to continuous learning and may update this section regularly.
                    </p>

                    <hr className="my-4 mx-5 line" />

                    <div className="container mt-5">
                        <div className="container">
                            <div className="container">
                                <Box sx={{ width: '100%' }}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons="auto"
                                        sx={{
                                            backgroundColor: "#6d2ae2",
                                            color: "#DFD8FD",
                                            "&:hover": {
                                                backgroundColor: "#6d2ae2",
                                            },
                                            "& .MuiTabs-indicator": {
                                                backgroundColor: "#DFD8FD",
                                                height: "3px"
                                            },
                                            "& .MuiTab-root": {
                                                textTransform: "none",
                                                fontWeight: "bold",
                                                color: "#DFD8FD !important",
                                                "&:hover": {
                                                    color: "#DFD8FD",
                                                },
                                            },
                                        }}
                                    >
                                        {categories.map((category, index) => (
                                            <Tab key={index} label={category.label} {...a11yProps(index)} />
                                        ))}
                                    </Tabs>
                                </Box>
                                {categories.map((category, index) => (
                                    <TabPanel key={index} value={value} index={index}>
                                        <SkillCategoryButtons items={category.data} />
                                    </TabPanel>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Skills;