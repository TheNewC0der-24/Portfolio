import styled from 'styled-components';
import styles from './SocialLinks.module.css';
import { SiHashnode } from 'react-icons/si';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Line = styled(motion.span)`
    width : 2px;
    height : 8rem;
    background-color: #6d2ae2;
`;

const SocialLinks = () => {
    return (
        <>
            <div className={styles.icons}>
                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 0.8 }}
                >
                    <a href="https://github.com/TheNewC0der-24" rel="noreferrer" target="_blank">
                        <FaGithub className={`${styles.socialIcon} mb-3 fs-4`} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1 }}
                >
                    <a href="https://hashnode.com/@BhavyaKhurana" rel="noreferrer" target="_blank">
                        <SiHashnode className={`${styles.socialIcon} mb-3 fs-4`} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                >
                    <a href="https://www.instagram.com/__cynophilist__._/" rel="noreferrer" target="_blank">
                        <FaInstagram className={`${styles.socialIcon} mb-3 fs-4`} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.4 }}
                >
                    <a href="https://www.linkedin.com/in/bhavya-khurana/" rel="noreferrer" target="_blank">
                        <FaLinkedin className={`${styles.socialIcon} mb-3 fs-4`} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ transform: "scale(0)" }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.6 }}
                >
                    <a href="https://twitter.com/Cynophilist_B" rel="noreferrer" target="_blank">
                        <FaXTwitter className={`${styles.socialIcon} mb-3 fs-4`} />
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
                    className={`fs-4 ${styles.sayHi}`}
                    href='mailto:khuranabhavya24@gmail.com'>
                    <span className={styles.s}>S</span>
                    <span className={styles.a}>a</span>
                    <span className={styles.y}>y</span>
                    <span className={`${styles.hi} ms-2`}>Hi...</span>
                </motion.a>
            </div>
        </>
    )
}

export default SocialLinks;