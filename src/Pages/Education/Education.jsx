/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FiBookOpen, FiExternalLink, FiMapPin } from "react-icons/fi";
import educationData from "../../Data/educationData.json";
import "./Education.css";
import { Link } from "react-router-dom";

const Education = () => {
    document.title = "Bhavya Khurana | Education";

    return (
        <main className="education-page">
            <section className="education-hero">
                <div className="education-container">
                    <motion.div
                        className="education-hero__eyebrow"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="education-hero__line" />
                        <span>Academic journey</span>
                    </motion.div>

                    <motion.h1
                        className="education-hero__title"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        Where I
                        <br />
                        <span>learned.</span>
                    </motion.h1>

                    <motion.div
                        className="education-hero__bottom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            My academic journey gave me the foundation to
                            understand technology, solve problems and
                            eventually turn those ideas into software.
                        </p>

                        <div className="education-hero__meta">
                            <span>01</span>
                            <span>Education</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EDUCATION */}
            <section className="education-content">
                <div className="education-container">
                    <div className="education-section-heading">
                        <span>02</span>

                        <div>
                            <p>Academic background</p>
                            <h2>The foundation.</h2>
                        </div>
                    </div>

                    <div className="education-list">
                        {educationData.map((data, index) => (
                            <motion.article
                                key={data.id}
                                className="education-item"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                            >
                                <div className="education-item__number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="education-item__icon">
                                    <FiBookOpen />
                                </div>

                                <div className="education-item__content">
                                    <div className="education-item__top">
                                        <span className="education-item__duration">
                                            {data.duration}
                                        </span>

                                        {data.grade && (
                                            <span className="education-item__grade">
                                                {data.grade}
                                            </span>
                                        )}
                                    </div>

                                    <h3>{data.institutionName}</h3>

                                    <h4>{data.degreeName}</h4>

                                    {data.location && (
                                        <div className="education-item__location">
                                            <FiMapPin />
                                            <span>{data.location}</span>
                                        </div>
                                    )}

                                    {data.link && (
                                        <Link
                                            to={data.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="education-item__link"
                                        >
                                            <span>Visit institution</span>
                                            <FiExternalLink />
                                        </Link>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ACADEMIC NOTE */}
            <section className="education-note">
                <div className="education-container">
                    <motion.div
                        className="education-note__content"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <span>03 / Beyond academics</span>

                        <h2>
                            Learning didn't
                            <br />
                            <em>stop there.</em>
                        </h2>

                        <p>
                            Education gave me the fundamentals. Building
                            products, working with teams and exploring new
                            technologies continue to shape how I learn today.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Education;