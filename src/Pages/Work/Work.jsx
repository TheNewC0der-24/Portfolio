/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiSearch, FiSliders, FiExternalLink } from "react-icons/fi";
import { FaBars, FaSortAlphaDown, FaSortAlphaUp, FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../../Data/projects.json";
import GridView from "../../components/sections/work/GridView";
import ListView from "../../components/sections/work/ListView";
import "./Work.css";

const categories = [
    "All",
    "Web Application",
    "Developer Tools",
    "Productivity",
    "API Integration",
    "Utility",
    "UI Development",
    "AI",
];

const Work = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [view, setView] = useState("grid");
    const [sortField, setSortField] = useState("name");
    const [isAscending, setIsAscending] = useState(true);
    const [category, setCategory] = useState("All");

    useEffect(() => {
        document.title = "Bhavya Khurana | Work";
    }, []);

    const filteredProjects = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();

        const result = projects.filter((project) => {
            const matchesSearch = !search ||
                project.name?.toLowerCase().includes(search) ||
                project.description?.toLowerCase().includes(search) ||
                project.topics?.some((topic) =>
                    topic.toLowerCase().includes(search)
                );

            const matchesCategory = category === "All" ||
                project.categories?.includes(category) ||
                project.category?.includes(category);

            return matchesSearch && matchesCategory;
        });

        return [...result].sort((a, b) => {
            if (sortField === "name") {
                const comparison = a.name.localeCompare(b.name);
                return isAscending ? comparison : -comparison;
            }

            const dateA = new Date(a.created_at || 0);
            const dateB = new Date(b.created_at || 0);

            return isAscending ? dateA - dateB : dateB - dateA;
        });
    }, [searchTerm, category, sortField, isAscending]);

    const featuredProjects = useMemo(
        () => projects.filter((project) => project.featured).slice(0, 3),
        []
    );

    const toggleSortOrder = () => {
        setIsAscending((previous) => !previous);
    };

    return (
        <main className="work-page">
            <div className="work-page__glow work-page__glow--one" />
            <div className="work-page__glow work-page__glow--two" />

            <div className="work-container">
                {/* Hero */}
                <section className="work-hero">
                    <motion.div
                        className="work-hero__content"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="work-hero__eyebrow">
                            <span className="work-hero__eyebrow-dot" />
                            Selected work
                        </span>

                        <h1>
                            Things I've
                            <br />
                            <em>built.</em>
                        </h1>

                        <p>
                            A collection of applications, developer tools and experiments
                            I've built while exploring the web, software engineering and
                            emerging technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        className="work-hero__meta"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <span className="work-hero__count">
                            {projects.length.toString().padStart(2, "0")}
                        </span>

                        <span className="work-hero__count-label">
                            Projects
                            <br />
                            & experiments
                        </span>
                    </motion.div>
                </section>

                {/* Featured */}
                {featuredProjects.length > 0 && (
                    <section className="featured-work">
                        <div className="section-heading">
                            <div>
                                <span className="section-heading__eyebrow">
                                    01 / Highlights
                                </span>

                                <h2>
                                    Featured <em>work.</em>
                                </h2>
                            </div>

                            <span className="section-heading__line" />
                        </div>

                        <div className="featured-projects">
                            {featuredProjects.map((project, index) => (
                                <motion.article
                                    className="featured-project"
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                >
                                    {/* Project number */}
                                    <div className="featured-project__index">
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                    </div>

                                    {/* Visual */}
                                    <a
                                        href={project.homepage || project.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="featured-project__visual"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            loading="lazy"
                                        />

                                        <span className="featured-project__visit">
                                            View project
                                            <FiArrowUpRight />
                                        </span>
                                    </a>

                                    {/* Content */}
                                    <div className="featured-project__content">
                                        <span className="featured-project__eyebrow">
                                            Featured project
                                        </span>

                                        <h3>{project.name}</h3>

                                        <p>{project.description}</p>

                                        <div className="featured-project__topics">
                                            {project.topics?.map((topic) => (
                                                <span key={topic}>{topic}</span>
                                            ))}
                                        </div>

                                        <div className="featured-project__actions">
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
                                                    Live
                                                    <FiExternalLink />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>
                )}

                {/* All projects */}
                <section className="all-work">
                    <div className="section-heading section-heading--projects">
                        <div>
                            <span className="section-heading__eyebrow">
                                02 / Project archive
                            </span>

                            <h2>
                                All <em>projects.</em>
                            </h2>
                        </div>

                        <span className="section-heading__result">
                            {filteredProjects.length} results
                        </span>
                    </div>

                    {/* Toolbar */}
                    <div className="work-toolbar">
                        <div className="work-search">
                            <FiSearch />

                            <input
                                type="text"
                                placeholder="Search projects or technologies..."
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />

                            {searchTerm && (
                                <button
                                    type="button"
                                    onClick={() => setSearchTerm("")}
                                    aria-label="Clear search"
                                >
                                    ×
                                </button>
                            )}
                        </div>

                        <div className="work-toolbar__right">
                            {/* Category */}
                            <div className="category-filter">
                                <FiSliders />

                                <select
                                    value={category}
                                    onChange={(event) => setCategory(event.target.value)}
                                    aria-label="Filter projects by category"
                                >
                                    {categories.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort */}
                            <div className="sort-control">
                                <select
                                    value={sortField}
                                    onChange={(event) => setSortField(event.target.value)}
                                    aria-label="Sort projects"
                                >
                                    <option value="name">Name</option>
                                    <option value="createdAt">Date</option>
                                </select>

                                <button
                                    type="button"
                                    onClick={toggleSortOrder}
                                    aria-label="Toggle sort direction"
                                    title="Toggle sort direction"
                                >
                                    {sortField === "name" ? (
                                        isAscending ? (
                                            <FaSortAlphaDown />
                                        ) : (
                                            <FaSortAlphaUp />
                                        )
                                    ) : isAscending ? (
                                        "↑"
                                    ) : (
                                        "↓"
                                    )}
                                </button>
                            </div>

                            {/* View */}
                            <div className="view-switcher">
                                <button
                                    type="button"
                                    className={view === "grid" ? "active" : ""}
                                    onClick={() => setView("grid")}
                                    aria-label="Grid view"
                                >
                                    <FaThLarge />
                                </button>

                                <button
                                    type="button"
                                    className={view === "list" ? "active" : ""}
                                    onClick={() => setView("list")}
                                    aria-label="List view"
                                >
                                    <FaBars />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Active filter */}
                    {(searchTerm || category !== "All") && (
                        <div className="active-filter">
                            <span>Showing results for</span>

                            {searchTerm && (
                                <button type="button" onClick={() => setSearchTerm("")}>
                                    “{searchTerm}” ×
                                </button>
                            )}

                            {category !== "All" && (
                                <button type="button" onClick={() => setCategory("All")}>
                                    {category} ×
                                </button>
                            )}
                        </div>
                    )}

                    {/* Projects */}
                    <div className="work-results">
                        {view === "grid" ? (
                            <GridView
                                filteredProjects={filteredProjects}
                                searchTerm={searchTerm}
                            />
                        ) : (
                            <ListView
                                filteredProjects={filteredProjects}
                                searchTerm={searchTerm}
                            />
                        )}
                    </div>
                </section>

                {/* GitHub CTA */}
                <section className="work-github">
                    <div className="work-github__icon">
                        <FiGithub />
                    </div>

                    <div>
                        <span>More experiments & repositories</span>

                        <h2>
                            Explore my
                            <em> GitHub.</em>
                        </h2>
                    </div>

                    <a
                        href="https://github.com/TheNewC0der-24"
                        target="_blank"
                        rel="noreferrer"
                        className="work-github__button"
                    >
                        Visit GitHub
                        <FiArrowUpRight />
                    </a>
                </section>

                {/* Bottom navigation */}
                <div className="work-bottom-nav">
                    <span>Want to know more?</span>

                    <Link to="/about">
                        About me
                        <FiArrowUpRight />
                    </Link>

                    <Link to="/contact">
                        Get in touch
                        <FiArrowUpRight />
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Work;