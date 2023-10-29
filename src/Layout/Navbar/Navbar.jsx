import React, { useState } from 'react';
import styles from "./Navbar.module.css";

import { NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Button } from '@mui/material';

import SoundBar from '../../SubComponents/SoundBar';

import Profile from '../../assets/Images/MyImgs/portrait.png';
import Sidebar from '../Sidebar/Sidebar';
import DisplayImg from '../../Components/DisplayImg/DisplayImg';

import { FaBars, FaTimes } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
.active {
    font-weight: bold;
    color: #6d2ae2 !important;
    border-bottom: 3px solid #6d2ae2 !important;
}
`;

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle);

    return (
        <React.Fragment>
            <GlobalStyle />
            <nav className={`${styles.navbar} navbar navbar-expand-lg sticky-top`}>
                <div className="container-fluid">
                    <div className={`${styles.navbarBrand} navbar-brand fw-bolder me-4 d-flex`}>
                        <img src={Profile} className={`${styles.img} rounded-circle me-2`} alt="bhavya" width="30" height="30" data-bs-toggle="modal" data-bs-target="#imgModal" title='Click here' />
                        <div className={styles.name}>
                            <span>.bhavya</span>&lt;/&gt;
                        </div>
                    </div>
                    <SoundBar className='soundbar' />
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            toggle ? <FaTimes /> : <FaBars />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className={`${styles.navbarNav} navbar-nav gap-1 ms-auto mb-2 mb-lg-0`}>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} activeclassname='active' className={`${styles.navLink} nav-link`} aria-current="page" to="/">
                                    .is()
                                </NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/about">.about()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/work">.work()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/experience">.experience()</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/blogs">.blogs()</NavLink>
                            </li>

                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/contact">.contact Me()</NavLink>
                            </li>

                            <Button
                                onClick={handleClick}
                                variant="contained"
                                size="small"
                                sx={{
                                    color: '#fff',
                                    backgroundColor: '#6d2ae2',
                                    '&:hover': {
                                        backgroundColor: '#6d2ae2',
                                        boxShadow: 'none',
                                    },

                                }}
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasWithBothOptions">Others</Button>
                        </ul>
                    </div>
                </div>
            </nav>
            <DisplayImg />
            <Sidebar />
        </React.Fragment>
    )
}

export default Navbar;