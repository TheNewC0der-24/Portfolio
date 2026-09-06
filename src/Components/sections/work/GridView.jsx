/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiChevronDown, FiExternalLink, FiGithub } from "react-icons/fi";

const GridView = ({ filteredProjects, searchTerm }) => {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded((previous) => ({
            ...previous,
            [id]: !previous[id],
        }));
    };

    if (!filteredProjects?.length) {
        return (
            <div className="work-empty">
                <span>404</span>

                <h3>No projects found.</h3>

                <p>
                    We couldn't find anything matching{" "}
                    <strong>{searchTerm || "your filters"}</strong>.
                </p>
            </div>
        );
    }

    return (
        <div className="projects-grid">
            {filteredProjects.map((project, index) => {
                const isExpanded = expanded[project.id];

                return (
                    <motion.article
                        className="project-card"
                        key={project.id}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                            duration: 0.45,
                            delay: Math.min(index * 0.04, 0.2),
                        }}
                    >
                        <div className="project-card__image">
                            <img
                                src={project.image}
                                alt={project.name}
                                className={project.imageFit === "contain" ? "image-contain" : ""}
                                loading="lazy"
                            />

                            <div className="project-card__image-overlay">
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {project.homepage && (
                                    <a
                                        href={project.homepage}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Open ${project.name}`}
                                    >
                                        <FiArrowUpRight />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="project-card__body">
                            <div className="project-card__heading">
                                <div>
                                    <span className="project-card__type">
                                        {project.featured ? "Featured project" : "Project"}
                                    </span>

                                    <h3>{project.name}</h3>
                                </div>

                                <button
                                    type="button"
                                    className={`project-card__expand ${isExpanded ? "active" : ""
                                        }`}
                                    onClick={() => toggleExpand(project.id)}
                                    aria-label="Show project details"
                                    aria-expanded={isExpanded}
                                >
                                    <FiChevronDown />
                                </button>
                            </div>

                            <p className="project-card__description">
                                {project.description}
                            </p>

                            <div className="project-topics">
                                {project.topics?.slice(0, 5).map((topic) => (
                                    <span key={topic}>{topic}</span>
                                ))}
                            </div>

                            <div className="project-card__actions">
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FiGithub />
                                    Source
                                </a>

                                {project.homepage && (
                                    <a
                                        href={project.homepage}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiExternalLink />
                                        Live
                                    </a>
                                )}
                            </div>

                            <AnimatePresence initial={false}>
                                {isExpanded && (
                                    <motion.div
                                        className="project-card__details"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <p>{project.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.article>
                );
            })}
        </div>
    );
};

export default GridView;