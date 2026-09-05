/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scrolling while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close menu when viewport becomes desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const MotionLink = motion(Link);

    return (
        <>
            <motion.header
                className="navbar"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <div className="navbar__inner">

                    <Link
                        to="/"
                        className="navbar__logo"
                        onClick={closeMenu}
                        aria-label="Bhavya Khurana - Home"
                    >
                        BK
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="navbar__desktop" aria-label="Primary navigation">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="navbar__link"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <Link to="/contact" className="navbar__cta">
                        Let's talk
                        <FiArrowUpRight />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="navbar__mobile">
                        <button
                            type="button"
                            className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label={
                                isOpen
                                    ? "Close navigation"
                                    : "Open navigation"
                            }
                            aria-expanded={isOpen}
                        >
                            <span className="navbar__hamburger">
                                <span />
                                <span />
                                <span />
                            </span>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                    >
                        <nav aria-label="Mobile navigation">
                            {navigation.map((item, index) => (
                                <MotionLink
                                    key={item.href}
                                    to={item.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <span className="mobile-menu__number">
                                        0{index + 1}
                                    </span>

                                    <span className="mobile-menu__label">
                                        {item.label}
                                    </span>

                                    <FiArrowUpRight />
                                </MotionLink>
                            ))}
                        </nav>

                        <div className="mobile-menu__footer">
                            <span>
                                Software Engineer
                            </span>

                            <Link
                                href="https://github.com/TheNewC0der-24"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGithub />
                                GitHub
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >

            {/* Mobile backdrop */}
            <AnimatePresence AnimatePresence >
                {isOpen && (
                    <motion.div
                        className="mobile-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                    />
                )
                }
            </AnimatePresence >
        </>
    );
};

export default Navbar;