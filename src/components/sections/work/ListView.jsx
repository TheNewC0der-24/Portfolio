/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

const ListView = ({ filteredProjects, searchTerm }) => {
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
        <div className="projects-list">
            {filteredProjects.map((project, index) => (
                <motion.article
                    className="project-list-item"
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.03, 0.15),
                    }}
                >
                    <div className="project-list-item__number">
                        {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="project-list-item__image">
                        <img
                            src={project.image}
                            alt={project.name}
                            loading="lazy"
                        />
                    </div>

                    <div className="project-list-item__content">
                        <span>
                            {project.featured ? "Featured project" : "Project"}
                        </span>

                        <h3>{project.name}</h3>

                        <p>{project.description}</p>

                        <div className="project-topics">
                            {project.topics?.slice(0, 4).map((topic) => (
                                <span key={topic}>{topic}</span>
                            ))}
                        </div>
                    </div>

                    <div className="project-list-item__actions">
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.name} source`}
                        >
                            <FiGithub />
                        </a>

                        {project.homepage && (
                            <a
                                href={project.homepage}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${project.name}`}
                            >
                                <FiExternalLink />
                            </a>
                        )}

                        <a
                            href={project.homepage || project.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-list-item__open"
                        >
                            <FiArrowUpRight />
                        </a>
                    </div>
                </motion.article>
            ))}
        </div>
    );
};

export default ListView;