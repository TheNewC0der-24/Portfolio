import { FiArrowUp, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { primaryNavigation, exploreNavigation, socialLinks } from "../../Data/footer";
import bmac from "../../assets/Images/bmac.png";
import "./Footer.css";

const Footer = () => {
    const location = useLocation();

    const currentYear = new Date().getFullYear();

    const visiblePrimaryNavigation = primaryNavigation.filter(
        (item) => item.path !== location.pathname
    );

    const visibleExploreNavigation = exploreNavigation.map((section) => ({
        ...section,
        items: section.items.filter(
            (item) => item.path !== location.pathname
        ),
    }))
        .filter((section) => section.items.length > 0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="site-footer">
            <div className="footer-main">

                {/* Brand */}
                <div className="footer-brand">
                    <Link to="/" className="footer-brand__logo">
                        BK
                    </Link>

                    <p>
                        Software Engineer building scalable applications,
                        exploring AI, and solving interesting problems.
                    </p>

                    <Link to="mailto:bhavyakhurana.dev@gmail.com" className="footer-brand__email">
                        bhavyakhurana.dev@gmail.com
                        <FiArrowUpRight />
                    </Link>
                </div>


                {/* Primary Navigation */}
                <div className="footer-column">
                    <span className="footer-column__title">
                        Navigate
                    </span>

                    <nav className="footer-links">
                        {visiblePrimaryNavigation.map((item) => {
                            if (item.external) {
                                return (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                    >
                                        {item.label}
                                        <FiArrowUpRight />
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="footer-link"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>


                {/* Explore */}
                <div className="footer-column footer-column--explore">
                    <span className="footer-column__title">
                        Explore
                    </span>

                    <div className="footer-explore">
                        {visibleExploreNavigation.map((section) => (
                            <div className="footer-explore__section" key={section.title}>
                                <span>
                                    {section.title}
                                </span>

                                {section.items.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.label}
                                            to={item.path}
                                            className="footer-explore__link"
                                        >
                                            <Icon />
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Connect */}
                <div className="footer-column">
                    <span className="footer-column__title">
                        Connect
                    </span>

                    <div className="footer-connect">

                        {socialLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social"
                                    aria-label={item.label}
                                >
                                    <span>
                                        <Icon />
                                    </span>

                                    {item.label}

                                    <FiArrowUpRight />
                                </Link>
                            );
                        })}

                        <Link to="/resume" className="footer-social">
                            <span>
                                <FiDownload />
                            </span>

                            Resume

                            <FiArrowUpRight />
                        </Link>

                        <Link
                            to="https://www.buymeacoffee.com/bhavyakhurana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-coffee"
                        >
                            <img src={bmac} alt="buymeacoffee" />
                            Buy me a coffee
                        </Link>

                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <div className="footer-bottom__left">
                    <span>
                        © {currentYear} Bhavya Khurana
                    </span>

                    <span className="footer-bottom__dot">
                        •
                    </span>

                    <span>
                        Built with React
                    </span>
                </div>

                <button type="button" className="footer-top" onClick={scrollToTop}>
                    <span>
                        Back to top
                    </span>

                    <FiArrowUp />
                </button>

            </div>
        </footer>
    );
};

export default Footer;