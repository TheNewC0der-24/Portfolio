/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { fadeUp, staggerContainer } from "../../../animations/variants";
import projects from '../../../Data/projects.json';
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./FeaturedWork.css";

const FeaturedWork = () => {
    return (
        <section id="work" className="featured-work section">
            <div className="app-container">
                <motion.div
                    className="featured-work__heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
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
                        A selection of products, platforms and engineering work I've contributed to.
                    </p>
                </motion.div>

                <motion.div
                    className="featured-work__list"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.filter((project) => project.featured).map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            project={project}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ index, project }) => {
    return (
        <motion.article
            className={`project-card project-card--purple`}
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
                            𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰  <em>&lt;𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 /&gt;</em>!
                        </span>
                    </div>

                    <div className="project-card__mockup">
                        <div className="project-card__mockup-content">
                            <LazyLoadImage
                                src={project.featured_image}
                                alt={project.name}
                                effect="blur"
                            />
                        </div>
                    </div>
                </div>

                <span className="project-card__number">
                    {`0${index + 1}`}
                </span>
            </div>

            {/* Content */}
            <div className="project-card__content">
                <div>
                    <span className="project-card__category">
                        Made with ❤️ and Code
                    </span>
                    <h3>
                        {project.name}
                    </h3>

                    <p>
                        {project.description}
                    </p>

                    <div className="project-card__technologies">
                        {project.topics.map(
                            (topic) => (
                                <span key={topic}>
                                    {topic}
                                </span>
                            )
                        )}
                    </div>
                </div>

                <div className="project-card__links">
                    <Link
                        to={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name}`}
                    >
                        View project
                        <FiArrowUpRight />
                    </Link>

                    <Link
                        to={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                    >
                        <FiGithub />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default FeaturedWork;