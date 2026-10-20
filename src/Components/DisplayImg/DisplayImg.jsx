/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MyImage from "../../assets/Images/MyPic.png";
import MyDog from "../../assets/Images/MyDog.png";
import './DisplayImg.css';

const gallerySlides = [
    {
        image: MyImage,
        label: "That's me",
        description: "The person behind the code.",
    },
    {
        image: MyDog,
        label: "That's my dog",
        description: "My favourite four-legged companion.",
    },
];

const DisplayImg = ({ isGalleryOpen, closeGallery, activeSlide, setActiveSlide }) => {
    const showNextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % gallerySlides.length);
    };

    const showPreviousSlide = () => {
        setActiveSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
    };

    return (
        <AnimatePresence>
            {isGalleryOpen && (
                <motion.div
                    className="gallery-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeGallery}
                >
                    <motion.div
                        className="gallery-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Personal photo gallery"
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="gallery-header">
                            <div>
                                <span className="gallery-eyebrow">A LITTLE ABOUT ME</span>
                                <h2>Life beyond the code.</h2>
                            </div>

                            <button
                                type="button"
                                className="gallery-close"
                                onClick={closeGallery}
                                aria-label="Close gallery"
                            >
                                <FiX />
                            </button>
                        </div>

                        <div className="gallery-image-wrap">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeSlide}
                                    src={gallerySlides[activeSlide].image}
                                    alt={gallerySlides[activeSlide].label}
                                    className="gallery-image"
                                    initial={{ opacity: 0, x: 18 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -18 }}
                                    transition={{ duration: 0.22 }}
                                />
                            </AnimatePresence>

                            <button
                                type="button"
                                className="gallery-arrow gallery-arrow-left"
                                onClick={showPreviousSlide}
                                aria-label="Previous photo"
                            >
                                <FiChevronLeft />
                            </button>

                            <button
                                type="button"
                                className="gallery-arrow gallery-arrow-right"
                                onClick={showNextSlide}
                                aria-label="Next photo"
                            >
                                <FiChevronRight />
                            </button>
                        </div>

                        <div className="gallery-caption">
                            <div>
                                <span className="gallery-eyebrow">
                                    0{activeSlide + 1} / 02
                                </span>

                                <h3>{gallerySlides[activeSlide].label}</h3>

                                <p>{gallerySlides[activeSlide].description}</p>
                            </div>

                            <div className="gallery-indicators">
                                {gallerySlides.map((slide, index) => (
                                    <button
                                        key={slide.label}
                                        type="button"
                                        className={`gallery-indicator ${activeSlide === index ? "gallery-indicator-active" : ""
                                            }`}
                                        onClick={() => setActiveSlide(index)}
                                        aria-label={`Show ${slide.label}`}
                                        aria-current={activeSlide === index ? "true" : undefined}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default DisplayImg;


