/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheck, FaFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import resume from "../../assets/docs/Resume.png";
import ResumePDF from "../../assets/docs/Resume.pdf";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Resume.css";
import { Helmet } from "react-helmet-async";

const ViewResume = () => {
    const navigate = useNavigate();
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        const link = document.createElement("a");

        link.href = ResumePDF;
        link.setAttribute("download", "Bhavya-Khurana-Resume.pdf");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsDownloaded(true);

        setTimeout(() => {
            setIsDownloaded(false);
        }, 3000);
    };

    return (
        <>
            <Helmet>
                <title>Bhavya Khurana | Resume</title>
                <meta name="description" content="View Bhavya Khurana's resume, software engineering experience, technical skills, and professional qualifications." />
                <link rel="canonical" href="https://bhavya-khurana.vercel.app/resume" />
                <meta property="og:title" content="Bhavya Khurana | Resume" />
                <meta property="og:description" content="Explore Bhavya Khurana's resume, experience, and technical qualifications." />
                <meta property="og:url" content="https://bhavya-khurana.vercel.app/resume" />
                <meta property="og:type" content="website" />
            </Helmet>

            <main className="resume-page">
                <div className="resume-page__glow resume-page__glow--one" />
                <div className="resume-page__glow resume-page__glow--two" />

                <div className="app-container resume-container">
                    <header className="resume-header">
                        <div className="resume-heading">
                            <span className="resume-heading__eyebrow">
                                <FaFilePdf />
                                Professional profile
                            </span>

                            <h1>
                                My <span>Resume</span>
                            </h1>

                            <p>
                                A quick overview of my experience, skills, projects and
                                professional journey.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="resume-actions">
                            <Button
                                variant="outlined"
                                startIcon={<IoIosArrowBack />}
                                onClick={() => navigate(-1)}
                                className="resume-btn resume-btn--back"
                            >
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={isDownloaded ? <FaCheck /> : <FiDownload />}
                                onClick={isDownloaded ? null : handleDownload}
                                className={`resume-btn resume-btn--download ${isDownloaded ? "is-downloaded" : ""}`}
                            >
                                {isDownloaded ? "Downloaded" : "Download PDF"}
                            </Button>
                        </div>
                    </header>

                    {/* Resume Viewer */}
                    <section className="resume-viewer">
                        <div className="resume-viewer__top">
                            <div className="resume-viewer__dots">
                                <span />
                                <span />
                                <span />
                            </div>

                            <span className="resume-viewer__label">
                                Bhavya-Khurana-Resume.pdf
                            </span>

                            <span className="resume-viewer__format">PDF</span>
                        </div>

                        <div className="resume-viewer__content">
                            <LazyLoadImage
                                src={resume}
                                alt="Bhavya Khurana Resume"
                                className="resume-image"
                                effect="blur"
                            />
                        </div>
                    </section>

                    {/* Bottom CTA */}
                    <section className="resume-footer">
                        <div>
                            <span>Looking for something specific?</span>

                            <h2>
                                Let's <em>connect.</em>
                            </h2>
                        </div>

                        <Button
                            variant="outlined"
                            onClick={() => navigate("/contact")}
                            className="resume-contact-btn"
                        >
                            Get in touch
                        </Button>
                    </section>
                </div>
            </main>
        </>
    );
};

export default ViewResume;