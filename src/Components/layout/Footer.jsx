/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowUp, FiMail, FiFileText } from "react-icons/fi";
import bmac from "../../assets/Images/bmac.png"
import { Link, useLocation } from "react-router-dom";
import { footerNavigation, socialLinks } from "../../Data/footer";
import "./Footer.css";

const Footer = () => {
    const location = useLocation();

    const visibleNavigation = footerNavigation.filter(
        (item) => item.path !== location.pathname
    );

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="footer__container">

                {/* Top */}
                <div className="footer__top">
                    <motion.div
                        className="footer__intro"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="footer__eyebrow">
                            Have an idea?
                        </span>

                        <h2>
                            Let's make it
                            <span> happen.</span>
                        </h2>

                        <p>
                            I'm always open to interesting conversations,
                            opportunities, and ideas worth building.
                        </p>

                        <Link
                            to="mailto:bhavyakhurana.dev@gmail.com"
                            className="footer__email"
                        >
                            <FiMail />
                            <span>
                                bhavyakhurana.dev@gmail.com
                            </span>
                            <FiArrowUpRight />
                        </Link>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        className="footer__navigation"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="footer__label">
                            Navigation
                        </span>

                        <nav aria-label="Footer navigation">
                            {visibleNavigation.map((item) => (
                                <Link key={item.path} to={item.path}>
                                    {item.label}
                                    <FiArrowUpRight />
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Connect */}
                    <motion.div
                        className="footer__connect"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="footer__label">
                            Connect
                        </span>

                        <div className="footer__socials">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    to={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                    <span>{social.label}</span>
                                    <FiArrowUpRight />
                                </Link>
                            ))}
                        </div>

                        {/* Resume */}
                        <div className="footer__resume">
                            {location.pathname !== "/resume" && (
                                <Link to="/resume">
                                    <FiFileText />
                                    <span>View Resume</span>
                                    <FiArrowUpRight />
                                </Link>
                            )}
                        </div>

                        {/* Buy Me a Coffee */}
                        <Link
                            to="https://www.buymeacoffee.com/bhavyakhurana"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__coffee"
                        >
                            {/* <FaCoffee /> */}
                            <img src={bmac} alt="buymeacoffee" />
                            <span>Buy Me a Coffee</span>
                            <FiArrowUpRight />
                        </Link>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="footer__divider" />

                {/* Bottom */}
                <div className="footer__bottom">

                    <div className="footer__copyright">
                        <span>
                            © {currentYear} Bhavya Khurana
                        </span>

                        <span className="footer__dot" />

                        <span>
                            Software Engineer
                        </span>
                    </div>

                    <button
                        type="button"
                        className="footer__top-button"
                        onClick={scrollToTop}
                    >
                        <span>Back to top</span>
                        <FiArrowUp />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;