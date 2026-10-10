/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiShield } from "react-icons/fi";
import certificatesData from "../../Data/certificatesData.json";
import "./Certificates.css";
import { Link } from "react-router-dom";

const Certificates = () => {
    document.title = "Bhavya Khurana | Certificates";

    return (
        <main className="certificates-page">
            <section className="certificates-hero">
                <div className="certificates-container">
                    <motion.div
                        className="certificates-hero__eyebrow"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="certificates-hero__line" />
                        <span>Credentials</span>
                    </motion.div>

                    <motion.h1
                        className="certificates-hero__title"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        Proof of
                        <br />
                        <span>learning.</span>
                    </motion.h1>

                    <motion.div
                        className="certificates-hero__bottom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            A collection of certifications and credentials
                            representing the skills, technologies and areas
                            I've explored throughout my learning journey.
                        </p>

                        <div className="certificates-hero__meta">
                            <span>
                                {String(certificatesData.length).padStart(2, "0")}
                            </span>

                            <span>Certificates</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CERTIFICATES */}
            <section className="certificates-content">
                <div className="certificates-container">
                    <div className="certificates-section-heading">
                        <span>01</span>

                        <div>
                            <p>Learning milestones</p>
                            <h2>Credentials worth keeping.</h2>
                        </div>
                    </div>

                    <div className="certificates-list">
                        {certificatesData.map((certificate, index) => (
                            <motion.article
                                className="certificate-item"
                                key={certificate.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="certificate-item__number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="certificate-item__icon">
                                    <FiAward />
                                </div>

                                <div className="certificate-item__content">
                                    <div className="certificate-item__top">
                                        {certificate.date && (
                                            <span className="certificate-item__date">
                                                {certificate.date}
                                            </span>
                                        )}
                                    </div>

                                    <h3>{certificate.title}</h3>

                                    <h4>{certificate.issuer}</h4>

                                    {certificate.description && (
                                        <p>
                                            {certificate.description}
                                        </p>
                                    )}

                                    {certificate.skills?.length > 0 && (
                                        <div className="certificate-item__skills">
                                            {certificate.skills.map(
                                                (skill) => (
                                                    <span key={skill}>
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    )}

                                    {certificate.link && (
                                        <Link
                                            to={certificate.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="certificate-item__link"
                                        >
                                            <span>Show credential</span>
                                            <FiExternalLink />
                                        </Link>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="certificates-closing">
                <div className="certificates-container">
                    <motion.div
                        className="certificates-closing__content"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="certificates-closing__icon">
                            <FiShield />
                        </div>

                        <span>02 / Continuous learning</span>

                        <h2>
                            Credentials are
                            <br />
                            <em>milestones, not endpoints.</em>
                        </h2>

                        <p>
                            Every certificate represents something learned,
                            but the real value comes from applying that
                            knowledge to meaningful work.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main >
    );
};

export default Certificates;