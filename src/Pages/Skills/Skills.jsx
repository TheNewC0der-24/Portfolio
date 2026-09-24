import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
    FiCode,
    FiLayers,
    FiDatabase,
    FiShield,
    FiCpu,
    FiServer,
    FiTool,
    FiPackage,
    FiCloud,
    FiBookOpen
} from "react-icons/fi";
import frontend from "../../Data/Skills/frontend.json";
import ui from "../../Data/Skills/ui.json";
import sm from "../../Data/Skills/sm.json";
import auth from "../../Data/Skills/auth.json";
import ai from "../../Data/Skills/ai.json";
import backend from "../../Data/Skills/backend.json";
import tools from "../../Data/Skills/tools.json";
import packages from "../../Data/Skills/packages.json";
import hosting from "../../Data/Skills/hosting.json";
import knowledge from "../../Data/Skills/knowledge.json";
import { getIconForTechnology } from "../../Helpers/getIconForTechnology";
import "./Skills.css";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        },
    },
};

const skillGroups = [
    {
        id: "frontend",
        number: "01",
        title: "Frontend Engineering",
        description:
            "Core technologies I use to build responsive, accessible and maintainable web applications.",
        icon: FiCode,
        items: frontend,
    },
    {
        id: "ui",
        number: "02",
        title: "UI Engineering & Design Systems",
        description:
            "UI libraries and design-system technologies I use to create consistent, scalable and polished interfaces.",
        icon: FiLayers,
        items: ui,
    },
    {
        id: "state",
        number: "03",
        title: "State & Data Management",
        description:
            "Tools and patterns I use to manage application state, server data and API communication.",
        icon: FiDatabase,
        items: sm,
    },
    {
        id: "auth",
        number: "04",
        title: "Authentication & Integration",
        description:
            "Authentication technologies and integration tools used to connect applications with secure services and APIs.",
        icon: FiShield,
        items: auth,
    },
    {
        id: "ai",
        number: "05",
        title: "AI & Automation",
        description:
            "Enterprise AI and automation technologies I've worked with to build intelligent and workflow-driven experiences.",
        icon: FiCpu,
        items: ai,
    },
    {
        id: "backend",
        number: "06",
        title: "Backend & Data",
        description:
            "Backend and database technologies I use to work with application services, structured data and APIs.",
        icon: FiServer,
        items: backend,
    },
    {
        id: "tools",
        number: "07",
        title: "DevOps & Tools",
        description:
            "Development, version control, API testing and collaboration tools used throughout the engineering lifecycle.",
        icon: FiTool,
        items: tools,
    },
    {
        id: "packages",
        number: "08",
        title: "Packages & Ecosystem",
        description:
            "Libraries and ecosystem packages that help me solve application-level problems and extend product capabilities.",
        icon: FiPackage,
        items: packages,
    },
    {
        id: "hosting",
        number: "09",
        title: "Hosting & Platforms",
        description:
            "Platforms and services used to deploy, host and support applications across development and production environments.",
        icon: FiCloud,
        items: hosting,
    },
];

const marqueeItems = [
    ...frontend,
    ...ui,
    ...ai,
    ...backend,
    ...tools,
    ...packages,
    ...hosting,
];

const getSkillName = (skill) => {
    if (typeof skill === "string") {
        return skill;
    }

    return skill?.name || skill?.title || skill?.label || "";
};

const Skills = () => {
    const title = "Bhavya Khurana | Skills";
    document.title = title;

    return (
        <main className="skills-page">
            <section className="skills-hero">
                <div className="skills-container">
                    <motion.div
                        className="skills-hero__eyebrow"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="skills-hero__line" />
                        <span>Skills &amp; technologies</span>
                    </motion.div>

                    <motion.h1
                        className="skills-hero__title"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        What I
                        <br />
                        <span>work with.</span>
                    </motion.h1>

                    <motion.div
                        className="skills-hero__bottom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2
                        }}
                    >
                        <p className="skills-hero__description">
                            A practical toolkit shaped by production systems,
                            enterprise applications, AI-powered solutions,
                            personal projects and continuous learning.
                        </p>

                        <div className="skills-hero__meta">
                            <span>01</span>
                            <span>Engineering toolkit</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="skills-marquee-section">
                <Marquee
                    speed={38}
                    gradient={true}
                    gradientWidth={100}
                    pauseOnHover
                >
                    {marqueeItems.map((skill, index) => (
                        <div
                            className="skills-marquee__item"
                            key={`${getSkillName(skill)}-${index}`}
                        >
                            <span>{getSkillName(skill)}</span>
                            <span className="skills-marquee__dot">✦</span>
                        </div>
                    ))}
                </Marquee>
            </section>

            <section className="skills-content">
                <div className="skills-container">
                    <motion.div
                        className="skills-groups"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.08
                        }}
                    >
                        {skillGroups.map((group) => {
                            const Icon = group.icon;

                            return (
                                <motion.article
                                    key={group.id}
                                    variants={itemVariants}
                                    className={`skill-group ${group.id === "ai" ? "skill-group--ai" : ""}`}
                                >
                                    <div className="skill-group__number">
                                        {group.number}
                                    </div>

                                    <div className="skill-group__main">
                                        <div className="skill-group__heading">
                                            <div className="skill-group__icon">
                                                <Icon />
                                            </div>

                                            <div>
                                                <h2>{group.title}</h2>

                                                <p>
                                                    {group.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="skill-group__items">
                                            {group.items?.map((skill, index) => (
                                                <span
                                                    className="skill-item"
                                                    key={`${group.id}-${getSkillName(skill)}-${index}`}
                                                >
                                                    {getIconForTechnology(getSkillName(skill))}

                                                    {getSkillName(skill)}
                                                </span>
                                            )
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="skills-knowledge">
                <div className="skills-container">
                    <motion.div
                        className="skills-knowledge__header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="skills-knowledge__eyebrow">
                            <span>10</span>
                            <span>Knowledge</span>
                        </div>

                        <div className="skills-knowledge__heading">
                            <div className="skills-group-icon">
                                <FiBookOpen />
                            </div>

                            <div>
                                <h2>Beyond the tools.</h2>

                                <p>
                                    Concepts and engineering practices that
                                    influence how I approach problems, design
                                    systems and build products.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-knowledge__items"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        variants={containerVariants}
                    >
                        {knowledge?.map((item, index) => (
                            <motion.div
                                className="knowledge-item"
                                variants={itemVariants}
                                key={`knowledge-${index}`}
                            >
                                <span className="knowledge-item__index">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="knowledge-item__name">
                                    {getSkillName(item)}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="skills-cta">
                <div className="skills-container">
                    <motion.div
                        className="skills-cta__content"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="skills-cta__eyebrow">
                            Always learning
                        </span>

                        <h2>
                            The stack keeps
                            <br />
                            <span>evolving.</span>
                        </h2>

                        <p>
                            Technology changes quickly. I focus on
                            understanding the fundamentals, learning new
                            tools and applying them where they create real
                            value.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Skills;