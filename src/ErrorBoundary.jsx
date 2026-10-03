/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiRefreshCw, FiAlertTriangle } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

function ErrorFallback({ error, resetErrorBoundary }) {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
        resetErrorBoundary();
    }

    return (
        <main className="error-page">
            <div className="error-page__glow error-page__glow--one" />
            <div className="error-page__glow error-page__glow--two" />

            <motion.div
                className="error-page__card"
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Error Code */}
                <motion.p
                    className="error-page__code"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    500
                </motion.p>

                {/* Content */}
                <motion.div
                    className="error-page__content"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="error-page__eyebrow">
                        <FiAlertTriangle />
                        <span>Unexpected error</span>
                    </div>

                    <h1>Something went wrong.</h1>

                    <p className="error-page__description">
                        Looks like something took an unexpected turn.
                        Don't worry — you can try again or head back
                        to the homepage.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    className="error-page__actions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <button
                        type="button"
                        className="error-page__button error-page__button--secondary"
                        onClick={resetErrorBoundary}
                    >
                        <FiRefreshCw />
                        <span>Try again</span>
                    </button>

                    <button
                        type="button"
                        className="error-page__button error-page__button--primary"
                        onClick={handleGoHome}
                    >
                        <IoIosArrowBack />
                        <span>Go to Home</span>
                    </button>
                </motion.div>

                {/* Developer details */}
                {error?.message && (
                    <details className="error-page__details">
                        <summary>Technical details</summary>
                        <pre>{error.message}</pre>
                    </details>
                )}
            </motion.div>

            <p className="error-page__footer">
                Something went wrong, but I'm on it.
            </p>
        </main>
    );
}

export default ErrorFallback;