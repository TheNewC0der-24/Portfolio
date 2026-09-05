import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNextdotjs, SiJavascript, SiAngular, SiNodedotjs, SiPython, SiDocker, SiGit, SiPostgresql } from "react-icons/si";
import "./TechStack.css";

const technologies = [
    {
        name: "React",
        icon: SiReact,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "Angular",
        icon: SiAngular,
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
    },
    {
        name: "Python",
        icon: SiPython,
    },
    {
        name: "Docker",
        icon: SiDocker,
    },
    {
        name: "Git",
        icon: SiGit,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
    },
];

const TechStack = () => {
    return (
        <section className="tech-stack">
            <div className="container">
                <div className="tech-stack__header">
                    <span className="eyebrow">
                        Technologies
                    </span>

                    <p>
                        Tools I use to turn ideas into production-ready applications.
                    </p>
                </div>
            </div>

            <div className="tech-stack__marquee-wrapper">
                <motion.div
                    className="tech-stack__marquee"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...technologies, ...technologies].map(
                        ({ name, icon: Icon }, index) => (
                            <div
                                className="tech-stack__item"
                                key={`${name}-${index}`}
                            >
                                <Icon />

                                <span>{name}</span>
                            </div>
                        )
                    )}
                </motion.div>

            </div>
        </section>
    );
};

export default TechStack;