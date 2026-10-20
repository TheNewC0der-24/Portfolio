/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Button.css";

const Button = ({ children, href, variant = "primary", icon = true, target }) => {
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            className={`button button--${variant}`}
            whileHover={{
                y: -2,
            }}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            whileTap={{
                scale: 0.97,
            }}
        >
            <span>{children}</span>

            {icon && <FiArrowUpRight />}
        </Component>
    );
};

export default Button;