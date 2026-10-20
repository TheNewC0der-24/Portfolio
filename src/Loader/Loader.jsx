import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Loader.css";

const SiteLoader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setVisible(false);
        }, 1500);

        return () => window.clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="site-loader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
                    }}
                >
                    <motion.div
                        className="site-loader__content"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <motion.div
                            className="site-loader__mark"
                            animate={{
                                boxShadow: [
                                    "0 0 0 rgba(141, 92, 255, 0)",
                                    "0 0 35px rgba(141, 92, 255, 0.22)",
                                    "0 0 0 rgba(141, 92, 255, 0)",
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span>BK<span className="site-loader__dot">.</span></span>
                        </motion.div>

                        <motion.h2
                            className="site-loader__headline"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Building something meaningful.
                        </motion.h2>

                        <p className="site-loader__subtitle">
                            SOFTWARE ENGINEER <span>·</span> PORTFOLIO
                        </p>

                        <div className="site-loader__progress">
                            <div className="site-loader__progress-meta">
                                <span>INITIALIZING EXPERIENCE</span>
                                <span>WELCOME</span>
                            </div>

                            <div className="site-loader__track">
                                <motion.div
                                    className="site-loader__bar"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.25, ease: "easeInOut" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.span
                        className="site-loader__index"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                    >
                        BHAVYA KHURANA — 2026
                    </motion.span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SiteLoader;