import { motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiMapPin,
    FiExternalLink,
} from "react-icons/fi";

import "./Experience.css";
import { experiences } from "../../Data/experienceData";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Experience = () => {
    return (
        <main className="experience-page">
            {/* Background */}
            <div className="experience-page__grid" />
            <div className="experience-page__glow experience-page__glow--one" />
            <div className="experience-page__glow experience-page__glow--two" />

            {/* Hero */}
            <section className="experience-hero">
                <motion.div
                    className="experience-hero__content"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <span className="experience-eyebrow">
                        <span className="experience-eyebrow__line" />
                        Experience
                    </span>

                    <h1>
                        How I got
                        <br />
                        <em>here.</em>
                    </h1>

                    <p>
                        From building web applications early in my career to working on
                        enterprise AI and large-scale government platforms.
                    </p>
                </motion.div>

                <motion.div
                    className="experience-hero__meta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                >
                    <span>Career timeline</span>
                    <strong>2020 — Present</strong>
                </motion.div>
            </section>

            {/* Timeline */}
            <section className="experience-timeline">
                {experiences.map((experience, index) => (
                    <motion.article
                        className={`experience-entry ${index === 0 ? "experience-entry--current" : ""
                            }`}
                        key={`${experience.companyName}-${experience.position}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                        variants={fadeUp}
                    >
                        {/* Timeline marker */}
                        <div className="experience-entry__marker">
                            <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>

                        {/* Company meta */}
                        <div className="experience-entry__company">
                            <div className="experience-company__logo">
                                <img
                                    src={experience.logoSrc}
                                    alt={`${experience.companyName} logo`}
                                    onError={(event) => {
                                        event.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>

                            <div>
                                <span className="experience-entry__duration">
                                    {experience.duration}
                                </span>

                                <h2>{experience.companyName}</h2>

                                <div className="experience-entry__location">
                                    <FiMapPin />
                                    {experience.location}
                                </div>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="experience-entry__content">
                            <div className="experience-entry__heading">
                                <div>
                                    <span className="experience-entry__label">
                                        {index === 0 ? "Current role" : "Role"}
                                    </span>

                                    <h3>{experience.position}</h3>
                                </div>
                            </div>

                            <p className="experience-entry__intro">
                                {experience.intro}
                            </p>

                            {/* What I worked on */}
                            <div className="experience-section">
                                <span className="experience-section__title">
                                    What I worked on
                                </span>

                                <div className="experience-focus">
                                    {experience.focus.map((item) => (
                                        <div className="experience-focus__item" key={item.number}>
                                            <span className="experience-focus__number">
                                                {item.number}
                                            </span>

                                            <div>
                                                <h4>{item.title}</h4>
                                                <p>{item.technologies}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Highlights — only where available */}
                            {experience.highlights && (
                                <div className="experience-highlights">
                                    <span className="experience-section__title">
                                        Selected highlights
                                    </span>

                                    <div className="experience-highlights__grid">
                                        {experience.highlights.map((item) => (
                                            <div
                                                className="experience-highlight"
                                                key={`${item.value}-${item.label}`}
                                            >
                                                <strong>{item.value}</strong>
                                                <span>{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Projects */}
                            <div className="experience-projects">
                                <span className="experience-section__title">
                                    Selected work
                                </span>

                                {experience.projects.map((project, projectIndex) => (
                                    <div
                                        className="experience-project"
                                        key={`${project.name}-${projectIndex}`}
                                    >
                                        <div className="experience-project__top">
                                            <span>
                                                {String(projectIndex + 1).padStart(2, "0")}
                                            </span>

                                            <h4>{project.name}</h4>

                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Open ${project.name}`}
                                                >
                                                    <FiArrowUpRight />
                                                </a>
                                            )}
                                        </div>

                                        <p>{project.description}</p>

                                        <div className="experience-project__tech">
                                            {project.technologies.split(" · ").map((tech) => (
                                                <span key={tech}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </section>

            {/* Bottom CTA */}
            <motion.section
                className="experience-cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <span>Next chapter</span>

                <h2>
                    Still building.
                    <br />
                    <em>Still learning.</em>
                </h2>

                <p>
                    I'm always interested in solving interesting problems, learning new
                    technologies, and building things that have real impact.
                </p>
            </motion.section>
        </main>
    );
};

export default Experience;