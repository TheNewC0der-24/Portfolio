import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Button.css";

const Button = ({
    children,
    href,
    variant = "primary",
    icon = true,
}) => {
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            className={`button button--${variant}`}
            whileHover={{
                y: -2,
            }}
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