/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import DisplayImg from "../DisplayImg/DisplayImg";
import "./Navbar.css";
import { mainNavigation, moreNavigation } from "../../Data/navbarData";

const Navbar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const moreRef = useRef(null);

    useEffect(() => {
        setIsOpen(false);
        setIsMoreOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                moreRef.current &&
                !moreRef.current.contains(event.target)
            ) {
                setIsMoreOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };

    const isMoreActive = moreNavigation.some((section) =>
        section.items.some((item) =>
            location.pathname.startsWith(item.path)
        )
    );

    const handleMoreToggle = () => {
        setIsMoreOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
        setIsMoreOpen(false);
    };

    const closeGallery = () => setIsGalleryOpen(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMobileMenu}
                    />
                )}
            </AnimatePresence>

            <header className="navbar">
                <div className="navbar__inner">

                    <div className="navbar__logo">
                        <button
                            type="button"
                            className="navbar__logo-mark"
                            onClick={() => {
                                setActiveSlide(0);
                                setIsGalleryOpen(true);
                            }}
                            aria-label="Open personal photo gallery"
                        >
                            BK
                        </button>

                        <span className="navbar__logo-name">
                            Bhavya Khurana
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="navbar__desktop">
                        {mainNavigation.map((item) => {
                            if (item.external) {
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="navbar__link navbar__link--external"
                                    >
                                        {item.label}
                                        <FiArrowUpRight />
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`navbar__link ${isActive(item.path)
                                        ? "navbar__link--active"
                                        : ""
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* More */}
                        <div className="navbar__more" ref={moreRef}>
                            <button
                                type="button"
                                className={`navbar__link navbar__more-trigger ${isMoreActive
                                    ? "navbar__link--active"
                                    : ""
                                    } ${isMoreOpen
                                        ? "navbar__more-trigger--open"
                                        : ""
                                    }`}
                                onClick={handleMoreToggle}
                                aria-expanded={isMoreOpen}
                                aria-haspopup="menu"
                            >
                                More
                                <FiChevronDown />
                            </button>

                            <AnimatePresence>
                                {isMoreOpen && (
                                    <motion.div
                                        className="more-menu"
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                            scale: 0.98,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 10,
                                            scale: 0.98,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <div className="more-menu__header">
                                            <span>Explore</span>

                                            <p>
                                                More about my work, interests
                                                and journey.
                                            </p>
                                        </div>

                                        <div className="more-menu__sections">
                                            {moreNavigation.map((section) => (
                                                <div className="more-menu__section" key={section.title}>
                                                    <span className="more-menu__section-title">
                                                        {section.title}
                                                    </span>

                                                    <div className="more-menu__items">
                                                        {section.items.map((item) => {
                                                            const Icon = item.icon;

                                                            return (
                                                                <Link
                                                                    key={item.label}
                                                                    to={item.path}
                                                                    className="more-menu__item"
                                                                    onClick={() =>
                                                                        setIsMoreOpen(false)
                                                                    }
                                                                >
                                                                    <span className="more-menu__icon">
                                                                        <Icon />
                                                                    </span>

                                                                    <span className="more-menu__item-content">
                                                                        <strong>
                                                                            {item.label}
                                                                        </strong>

                                                                        <small>
                                                                            {item.description}
                                                                        </small>
                                                                    </span>

                                                                    <FiArrowUpRight className="more-menu__arrow" />
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/contact" className="navbar__cta">
                            Let's Talk
                            <FiArrowUpRight />
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}
                        onClick={() =>
                            setIsOpen((prev) => !prev)
                        }
                        aria-label={isOpen
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

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="mobile-menu__inner">
                                <div className="mobile-menu__main">
                                    {mainNavigation.map((item, index) => {
                                        if (item.external) {
                                            return (
                                                <Link
                                                    key={item.label}
                                                    to={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mobile-menu__link"
                                                    onClick={closeMobileMenu}
                                                >
                                                    <span>
                                                        0{index + 1}
                                                    </span>

                                                    {item.label}

                                                    <FiArrowUpRight />
                                                </Link>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={item.label}
                                                to={item.path}
                                                className={`mobile-menu__link ${isActive(item.path)
                                                    ? "mobile-menu__link--active"
                                                    : ""
                                                    }`}
                                                onClick={closeMobileMenu}
                                            >
                                                <span>
                                                    0{index + 1}
                                                </span>

                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="mobile-menu__more">
                                    <span className="mobile-menu__label">
                                        More
                                    </span>

                                    {moreNavigation.map((section) => (
                                        <div className="mobile-menu__section" key={section.title}>
                                            <span className="mobile-menu__section-title">
                                                {section.title}
                                            </span>

                                            {section.items.map((item) => {
                                                const Icon = item.icon;

                                                return (
                                                    <Link
                                                        key={item.label}
                                                        to={item.path}
                                                        className={`mobile-menu__more-item ${isActive(item.path)
                                                            ? "mobile-menu__more-item--active"
                                                            : ""
                                                            }`}
                                                        onClick={closeMobileMenu}
                                                    >
                                                        <span className="mobile-menu__more-icon">
                                                            <Icon />
                                                        </span>

                                                        <span>
                                                            <strong>
                                                                {item.label}
                                                            </strong>

                                                            <small>
                                                                {item.description}
                                                            </small>
                                                        </span>

                                                        <FiArrowUpRight />
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/contact"
                                    className="mobile-menu__cta"
                                    onClick={closeMobileMenu}
                                >
                                    Let's Talk
                                    <FiArrowUpRight />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <DisplayImg
                isGalleryOpen={isGalleryOpen}
                closeGallery={closeGallery}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
            />
        </>
    );
};

export default Navbar;