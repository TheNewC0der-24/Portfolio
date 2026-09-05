/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { fadeUp, staggerContainer, scaleIn } from "../../../animations/variants";
import { Link } from "react-router-dom";
import TechOrbit from "../../../assets/hero-image.svg";
import "./Hero.css";

const technologies = [
    "React",
    "Next.js",
    "Angular",
    "JavaScript",
    "TypeScript",
];

const Hero = () => {
    const scrollToWork = () => {
        document.getElementById("work")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="hero">
            <div className="hero__grid" />

            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />

            <div className="container hero__container">
                <motion.div
                    className="hero__content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="hero__availability"
                        variants={fadeUp}
                    >
                        <span className="hero__status-dot" />
                        Open to opportunities
                    </motion.div>

                    <motion.p
                        className="eyebrow hero__eyebrow"
                        variants={fadeUp}
                    >
                        <span className="hero__eyebrow-dot" />
                        Software Engineer
                    </motion.p>

                    <motion.h1
                        className="hero__title"
                        variants={fadeUp}
                    >
                        Building digital
                        <span> experiences </span>
                        that feel as good as they work.
                    </motion.h1>

                    <motion.p
                        className="hero__description"
                        variants={fadeUp}
                    >
                        I'm Bhavya Khurana — a software engineer who builds scalable applications, solves complex problems, and turns ideas into reliable digital experiences.
                    </motion.p>

                    <motion.div
                        className="hero__technologies"
                        variants={fadeUp}
                    >
                        {technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}

                        <span>AI Automation</span>
                    </motion.div>

                    <motion.div
                        className="hero__actions"
                        variants={fadeUp}
                    >
                        <Link
                            to="/work"
                            className="hero__button hero__button--primary"
                        >
                            Explore my work
                            <FiArrowUpRight />
                        </Link>

                        <Link
                            to="https://github.com/TheNewC0der-24"
                            target="_blank"
                            rel="noreferrer"
                            className="hero__button hero__button--secondary"
                        >
                            <FiGithub />
                            GitHub
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero__visual"
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                >
                    <img src={TechOrbit} alt="Hero Visual" />
                </motion.div>
            </div>

            <motion.button
                className="hero__scroll"
                onClick={scrollToWork}
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.6,
                }}
            >
                <span>Scroll to explore</span>
                <FiArrowDown />
            </motion.button>
        </section>
    );
};

export default Hero;