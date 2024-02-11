import React, { useRef } from 'react';
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";

import { FaArrowRight } from "react-icons/fa6";

const WorkList = ({ heading, imgSrc, subheading, href, topics }) => {

    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["10%", "10%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["10%", "10%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                borderBottom: "2px solid #0e1313",
                textDecoration: "none",
            }}
            className='pt-4 pb-5 animated-link'
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    style={{
                        position: "relative",
                        zIndex: 10,
                        display: "block",
                        fontSize: "2.25rem",
                        fontWeight: "bold",
                        color: "#0e1313",
                    }}
                    className='animated-link-heading'
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16, color: "#6d2ae2" },
                            }}
                            transition={{ type: "spring" }}
                            // style={{ display: "inline-block" }}
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                <span
                    className='py-3'
                    style={{
                        position: "relative",
                        zIndex: 10,
                        display: "block",
                        color: "#4B5563",
                    }}>
                    {subheading}
                </span>

                <div className='d-flex flex-wrap gap-2 mt-2 animated-link-topics'>
                    {
                        topics.map((item, index) => (
                            <span key={index} className='badge mr-2' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{item}</span>
                        ))
                    }
                </div>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    zIndex: 99,
                    width: "300px",
                    // height: "150px",
                    borderRadius: "0.5rem",
                    objectFit: "cover",
                }}
                className='img-fluid'
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                alt={`Image representing a link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                style={{
                    position: "relative",
                    zIndex: 10,
                    padding: "1rem",
                }}
                className="p-4 arrow-right"
            >
                <FaArrowRight style={{ fontSize: "2.5rem", color: "#0e1313" }} />
            </motion.div>
        </motion.a >
    )
}

export default WorkList;