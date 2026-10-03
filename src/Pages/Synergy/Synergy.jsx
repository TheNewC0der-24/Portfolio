/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";
import { benefits, collaborativeExpertise } from "../../Data/synergies";
import Button from "../../components/ui/Button";
import "./Synergy.css";

const tabs = ["Benefits", "Collaborative Expertise"];

const Synergy = () => {
    const [selected, setSelected] = useState(tabs[0]);

    const activeItems = selected === "Benefits" ? benefits : collaborativeExpertise;

    return (
        <main className="synergy-page">
            <section className="synergy-hero">
                <div className="synergy-container">
                    <motion.div
                        className="synergy-hero__eyebrow"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="synergy-hero__line" />
                        <span>How I work</span>
                    </motion.div>

                    <motion.h1
                        className="synergy-hero__title"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        Beyond
                        <br />
                        <span>the stack.</span>
                    </motion.h1>

                    <motion.div
                        className="synergy-hero__bottom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            Good products are rarely built by technology
                            alone. They come from understanding problems,
                            collaborating with people and finding the right
                            way to turn ideas into useful experiences.
                        </p>

                        <div className="synergy-hero__meta">
                            <span>01</span>
                            <span>Synergies</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TABS */}
            <section className="synergy-tabs-section">
                <div className="synergy-container">
                    <div className="synergy-tabs">
                        {tabs.map((tab) => (
                            <button
                                type="button"
                                key={tab}
                                className={`synergy-tab ${selected === tab
                                    ? "synergy-tab--active"
                                    : ""
                                    }`}
                                onClick={() => setSelected(tab)}
                            >
                                <span>{tab}</span>

                                {selected === tab && (
                                    <motion.span
                                        layoutId="synergy-tab-indicator"
                                        className="synergy-tab__indicator"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="synergy-content">
                <div className="synergy-container">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="synergy-section-heading">
                            <span>02</span>

                            <div>
                                <p>
                                    {selected === "Benefits" ? "Working together" : "Working with people"}
                                </p>

                                <h2>
                                    {selected === "Benefits" ? "What I bring to the table." : "How I collaborate."}
                                </h2>
                            </div>
                        </div>

                        <div className="synergy-list">
                            {activeItems.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.article
                                        className="synergy-item"
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                    >
                                        <div className="synergy-item__number">
                                            {item.id}
                                        </div>

                                        <div className="synergy-item__icon">
                                            <Icon />
                                        </div>

                                        <div className="synergy-item__content">
                                            <h3>{item.title}</h3>

                                            <p>{item.description}</p>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="synergy-cta">
                <div className="synergy-container">
                    <motion.div
                        className="synergy-cta__content"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span>03 / Let's build</span>

                        <h2>
                            Good work
                            <br />
                            <em>starts together.</em>
                        </h2>

                        <p>
                            Whether it's a product idea, a technical
                            challenge or simply an interesting problem, I'm
                            always interested in building something meaningful.
                        </p>

                        <div className="synergy-cta__link">
                            <Button
                                href="https://calendly.com/khuranabhavya24/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="dark"
                            >
                                Book a call
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Synergy;