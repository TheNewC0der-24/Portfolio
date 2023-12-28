import React from 'react'
import { motion } from 'framer-motion';

const ReadMore = ({ isVisible }) => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
            className="p-3 mt-3"
            style={{ backgroundColor: "#6d2ae2" }}
        >
            <div className="fw-bold" style={{ color: "#DFD8FD" }}>
                I am a creative and proficient Frontend Developer with over 1 year of experience, I have successfully
                worked on various web projects for clients across different industries. My expertise lies in responsive
                design, accessibility, and website optimization. Additionally, I have completed several online certification
                courses. I am a problem-solver with excellent communication skills, and I thrive under pressure. My
                commitment is to deliver high-quality solutions that not only meet user needs but also exceed client
                expectations.
            </div>
        </motion.div>
    )
}

export default ReadMore
