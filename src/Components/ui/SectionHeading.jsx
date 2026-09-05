/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";
import "./SectionHeading.css";

const SectionHeading = ({ eyebrow, title, description }) => {
    return (
        <motion.div
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3,
            }}
        >
            {eyebrow && (
                <span className="eyebrow">
                    {eyebrow}
                </span>
            )}

            <h2 className="heading-lg">
                {title}
            </h2>

            {description && (
                <p className="section-heading__description">
                    {description}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;