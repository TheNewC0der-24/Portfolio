/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { fadeUp, staggerContainer } from "../../../animations/variants";
import "./FeaturedWork.css";

const projects = [
    {
        number: "01",
        category: "Enterprise Platform",
        title: "Airport Immigration Platform",
        description:
            "A large-scale government platform designed to support airport immigration workflows, passenger processing, and operational management.",
        technologies: [
            "React",
            "TypeScript",
            "MUI",
            "REST APIs",
        ],
        accent: "purple",
        href: "#",
        github: "#",
    },

    {
        number: "02",
        category: "Web Application",

        title: "Project Two",

        description:
            "A modern web application focused on delivering a fast, intuitive and scalable user experience.",

        technologies: [
            "React",
            "JavaScript",
            "API",
        ],

        accent: "blue",

        href: "#",
        github: "#",
    },

    {
        number: "03",
        category: "AI / Engineering",

        title: "AI-Powered Application",

        description:
            "An application integrating modern AI capabilities into a practical workflow to improve productivity and user experience.",

        technologies: [
            "React",
            "TypeScript",
            "AI",
        ],

        accent: "violet",

        href: "#",
        github: "#",
    },
];

const FeaturedWork = () => {
    return (
        <section id="work" className="featured-work section">
            <div className="container">
                <motion.div
                    className="featured-work__heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                >
                    <div>
                        <span className="eyebrow">
                            Selected work
                        </span>

                        <h2 className="heading-lg">
                            Things I've built.
                        </h2>
                    </div>

                    <p>
                        A selection of products, platforms and
                        engineering work I've contributed to.
                    </p>
                </motion.div>

                <motion.div
                    className="featured-work__list"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.number}
                            project={project}
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <motion.article
            className={`project-card project-card--${project.accent}`}
            variants={fadeUp}
        >
            {/* Preview */}
            <div className="project-card__preview">
                <div className="project-card__window">
                    <div className="project-card__window-header">
                        <div className="project-card__dots">
                            <span />
                            <span />
                            <span />
                        </div>

                        <span>
                            {project.category}
                        </span>
                    </div>

                    <div className="project-card__mockup">
                        <div className="project-card__mockup-line" />
                        <div className="project-card__mockup-content">
                            <div className="project-card__mockup-sidebar">
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="project-card__mockup-main">
                                <div className="project-card__mockup-title" />
                                <div className="project-card__mockup-cards">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <div className="project-card__mockup-chart" />
                            </div>
                        </div>
                    </div>
                </div>

                <span className="project-card__number">
                    {project.number}
                </span>
            </div>

            {/* Content */}
            <div className="project-card__content">
                <div>
                    <span className="project-card__category">
                        {project.category}
                    </span>
                    <h3>
                        {project.title}
                    </h3>

                    <p>
                        {project.description}
                    </p>

                    <div className="project-card__technologies">
                        {project.technologies.map(
                            (technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            )
                        )}
                    </div>
                </div>

                <div className="project-card__links">
                    <a
                        href={project.href}
                        aria-label={`View ${project.title}`}
                    >
                        View project
                        <FiArrowUpRight />
                    </a>

                    <a
                        href={project.github}
                        aria-label={`View ${project.title} on GitHub`}
                    >
                        <FiGithub />
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

export default FeaturedWork;