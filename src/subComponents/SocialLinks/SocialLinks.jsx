import React from 'react';
import styled from 'styled-components';
import './SocialLinks.css';

import { SiHashnode } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Line = styled(motion.span)`
width : 2px;
height : 8rem;
background-color: #6d2ae2;
`;

const SocialLinks = () => {
    return (
        <>
            <div className='icons'>
                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1 }}
                >
                    <a href="https://www.facebook.com/bhavya.khurana.399/" rel="noreferrer" target="_blank">
                        {/* <i className="mb-3 fs-4 fa-brands fa-facebook-square"></i> */}
                        <FaFacebookSquare className="mb-3 fs-4 fa-brands fa-facebook-square" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                >
                    <a href="https://github.com/TheNewC0der-24" rel="noreferrer" target="_blank">
                        <i className="mb-3 fs-4 fa-brands fa-github"></i>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.4 }}
                >
                    <a href="https://www.instagram.com/__khurana__._/" rel="noreferrer" target="_blank">
                        <i className="mb-3 fs-4 fa-brands fa-instagram-square"></i>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.6 }}
                >
                    <a href="https://www.linkedin.com/in/bhavyakhurana24/" rel="noreferrer" target="_blank">
                        <i className="mb-3 fs-4 fa-brands fa-linkedin"></i>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.8 }}
                >
                    <a href="https://medium.com/@bhavyakhurana24" rel="noreferrer" target="_blank">
                        <i className="mb-3 fs-4 fa-brands fa-medium"></i>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 2 }}
                >
                    <a href="https://hashnode.com/@BhavyaKhurana" rel="noreferrer" target="_blank">
                        <SiHashnode className="mb-3 fs-4 fa-brands fa-hashnode" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 2.2 }}
                >
                    <a href="https://stackoverflow.com/users/16262496/bhavya-khurana" rel="noreferrer" target="_blank">
                        <i className="mb-3 fs-4 fa-brands fa-stack-overflow"></i>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 2.4 }}
                >
                    <a href="https://twitter.com/Bhavya06001699" rel="noreferrer" target="_blank">
                        <i className="mb-3 fs-4 fa-brands fa-twitter"></i>
                    </a>
                </motion.div>

                <Line
                    initial={{ height: 0 }}
                    animate={{ height: "8rem" }}
                    transition={{ type: 'spring', duration: 1, delay: 0.8 }}
                />
            </div>

            <div>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fs-4 sayHi"
                    href='mailto:khuranabhavya24@gmail.com'>
                    <span className='s'>S</span>
                    <span className='a'>a</span>
                    <span className='y'>y</span>
                    <span className='hi ms-2'>Hi...</span>
                </motion.a>
            </div>
        </>
    )
}

export default SocialLinks;