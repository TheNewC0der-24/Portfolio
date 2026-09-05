import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiGithub,
} from "react-icons/fi";
import "./Navbar.css";

const navigation = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
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

                    {/* Logo */}
                    <a
                        href="/"
                        className="navbar__logo"
                        onClick={closeMenu}
                        aria-label="Bhavya Khurana - Home"
                    >
                        BK
                    </a>

                    {/* Desktop navigation */}
                    <nav
                        className="navbar__desktop"
                        aria-label="Primary navigation"
                    >
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="navbar__link"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href="/contact"
                        className="navbar__cta"
                    >
                        Let's talk
                        <FiArrowUpRight />
                    </a>

                    {/* Mobile menu button */}
                    <div className="navbar__mobile">
                        <button
                            type="button"
                            className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""
                                }`}
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
                        initial={{
                            opacity: 0,
                            y: -15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -15,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <nav aria-label="Mobile navigation">
                            {navigation.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.05,
                                    }}
                                >
                                    <span className="mobile-menu__number">
                                        0{index + 1}
                                    </span>

                                    <span className="mobile-menu__label">
                                        {item.label}
                                    </span>

                                    <FiArrowUpRight />
                                </motion.a>
                            ))}
                        </nav>

                        <div className="mobile-menu__footer">
                            <span>
                                Software Engineer
                            </span>

                            <a
                                href="https://github.com/TheNewC0der-24"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGithub />
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;