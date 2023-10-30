import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Navbar/Navbar.module.css';
import PropTypes from 'prop-types';

import { FaPlus, FaMinus } from 'react-icons/fa';

import SoundBar from '../SubComponents/SoundBar';
import Profile from '../assets/Images/MyImgs/myPic.png';
import DisplayImg from '../Components/DisplayImg/DisplayImg';

import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Collapse
} from '@mui/material';

import { FaBars } from 'react-icons/fa';

const drawerWidth = 240;

export const navItems = [
    {
        name: '.is()', link: '/'
    },
    {
        name: ".about()", link: "/about"
    },
    {
        name: ".work()", link: "/work"
    },
    {
        name: ".experience()", link: "/experience"
    },
    {
        name: ".blogs()", link: "/blogs"
    },
    {
        name: ".contact Me()", link: "/contact"
    }
]

export const otherNavItems = [
    {
        name: ".skills()", link: "/skills"
    },
    {
        name: ".interest()", link: "/interest"
    },
    {
        name: ".education()", link: "/education"
    }
]

function Navbar(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const { window } = props;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [displayImg, setDisplayImg] = useState(false);
    const [openOthers, setOpenOthers] = useState(false);

    const openMenu = Boolean(anchorEl);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleDisplayImg = () => {
        setDisplayImg(true);
    }

    const handleCloseDisplayImg = () => {
        setDisplayImg(false);
    }

    const handleClickOthers = (e) => {
        e.stopPropagation();
        setOpenOthers(!openOthers);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: "#0e1313", }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", mt: 2, mb: 2 }} >
                <Avatar
                    alt="Bhavya Khurana"
                    sx={{ cursor: "pointer" }}
                    src={Profile}
                />
                <Typography variant="h6" className={styles.navbarBrand} fontWeight="bold">
                    <span>.bhavya</span>&lt;/&gt;
                </Typography>
            </Box>
            <Divider sx={{ bgcolor: "#dee2e6" }} />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(`${item.link}`);
                                setMobileOpen(false);
                            }}
                            sx={{
                                borderRight: location.pathname === item.link ? '5px solid #6d2ae2' : 'none',
                                bgcolor: location.pathname === item.link && '#DFD8FD',
                                '&:hover': {
                                    bgcolor: location.pathname === item.link ? '#DFD8FD' : '#6d2ae2',
                                },
                                color: location.pathname === item.link ? '#0e1313' : '#dee2e6',
                            }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List component="nav">
                <ListItemButton onClick={handleClickOthers} sx={{
                    color: '#0e1313',
                    fontWeight: 'bold',
                    bgcolor: "#dee2e6",
                    '&:hover': {
                        bgcolor: '#dee2e6',
                    },
                }} >
                    <ListItemText primary="Others" />
                    {openOthers ? <FaMinus /> : <FaPlus />}
                </ListItemButton>
                <Collapse in={openOthers} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {otherNavItems.map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        navigate(`${item.link}`);
                                        setMobileOpen(false);
                                    }}
                                    sx={{
                                        pl: 4,
                                        '&:hover': {
                                            bgcolor: location.pathname === item.link ? '#DFD8FD' : '#6d2ae2',
                                        },
                                        color: location.pathname === item.link ? '#6d2ae2' : '#dee2e6',
                                    }}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex', fontFamily: 'Montserrat' }}>
                <AppBar component="nav" sx={{ bgcolor: "#0e1313" }}>
                    <Toolbar>
                        <Avatar
                            alt="Bhavya Khurana"
                            sx={{ mr: 2, cursor: "pointer" }}
                            src={Profile}
                            onClick={handleDisplayImg}
                        />
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <FaBars style={{ color: "#dee2e6" }} />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: "2rem" }}>
                            <Typography
                                variant="h6"
                                className={styles.navbarBrand}
                                fontWeight="bold"
                                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                            >
                                <span>.bhavya</span>&lt;/&gt;
                            </Typography>
                            <SoundBar className='soundbar' />
                        </Box>

                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item.name}
                                    sx={{
                                        borderRadius: '0px',
                                        color: location.pathname === item.link ? '#6d2ae2' : '#dee2e6',
                                        fontWeight: location.pathname === item.link ? 'bold' : 'normal',
                                        textTransform: "lowercase",
                                        borderBottom: location.pathname === item.link ? '2px solid #6d2ae2' : 'none',
                                    }}
                                    onClick={() => navigate(`${item.link}`)}
                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant='contained'
                                aria-controls={openMenu ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openMenu ? 'true' : undefined}
                                onClick={handleClickMenu}
                                sx={{
                                    ml: 1,
                                    color: '#dee2e6', textTransform: "capitalize", backgroundColor: "#6d2ae2",
                                    "&:hover": {
                                        backgroundColor: "#6d2ae2",
                                    },
                                }}
                            >
                                Others
                            </Button>
                            <Menu
                                sx={{
                                    display: { xs: 'none', sm: 'none', md: 'block' },
                                    '& .MuiPaper-root': { bgcolor: "#dee2e6", color: "#6d2ae2" },
                                }}
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleCloseMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}

                            >
                                {
                                    otherNavItems.map((item) => (
                                        <MenuItem key={item.name} onClick={() => {
                                            handleCloseMenu();
                                            navigate(`${item.link}`);
                                        }}
                                            sx={{
                                                bgcolor: location.pathname === item.link ? '#DFD8FD' : 'none',
                                                '&:hover': {
                                                    bgcolor: location.pathname === item.link ? '#DFD8FD' : '#6d2ae2',
                                                    color: location.pathname === item.link ? '#6d2ae2' : '#dee2e6',
                                                },
                                                color: location.pathname === item.link ? '#6d2ae2' : '#0e1313',
                                            }}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ))
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "#0e1313", color: "#dee2e6" },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
                <Box component="main" >
                    <Toolbar />
                </Box>
            </Box>

            {displayImg && <DisplayImg handleOpen={handleDisplayImg} handleClose={handleCloseDisplayImg} />}
        </>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;
