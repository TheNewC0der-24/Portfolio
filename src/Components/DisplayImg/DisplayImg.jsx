import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material';

import img1 from '../../assets/Images/MyImgs/myPic.png';
import img2 from '../../assets/Images/MyImgs/myDog.png';

import { TiArrowForward } from 'react-icons/ti';

const GlobalStyle = createGlobalStyle`
.carousel-container {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-box {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
}

.dotts {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dott {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}

.dott.activeImg {
  background-color: #333;
}

.me {
    color: #6d2ae2;
    font-family: 'Caveat', cursive;
    transform: rotate(-5deg);
}

.icon {
    transform: rotate(50deg);
}`;

const DisplayImg = ({ handleOpen, handleClose }) => {

    const images = [
        img1,
        img2
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    return (
        <React.Fragment>
            <GlobalStyle />
            <Dialog open={handleOpen} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    <Box className="me" sx={{ mb: 5 }}>
                        That's {img2 === images[currentSlide] ? 'my dog' : 'me'} <TiArrowForward className="icon fs-4" />
                    </Box>
                </DialogTitle>
                <DialogContent dividers>
                    <div className="carousel-container">
                        <div className="carousel-box">
                            {images.map((imageUrl, index) => (
                                <div
                                    key={index}
                                    className={`slide ${index === currentSlide ? 'activeImg' : ''}`}
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    <img src={imageUrl} className='d-grid m-auto img-fluid rounded-circle w-75' alt={`Image ${index + 1}`} loading='lazy' />
                                </div>
                            ))}
                        </div>
                        <div className="dotts">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dott ${index === currentSlide ? 'activeImg' : ''}`}
                                    onClick={() => goToSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        sx={{
                            borderColor: "#6d2ae2",
                            color: "#6d2ae2",
                            "&:hover": {
                                borderColor: "#6d2ae2",
                            },
                        }}
                    >
                        Close
                    </Button>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}>
                        <Button
                            variant="outlined"
                            onClick={goToPrevSlide}
                            disabled={currentSlide === 0}
                            sx={{
                                borderColor: "#6d2ae2",
                                color: "#6d2ae2",
                                "&:hover": {
                                    borderColor: "#6d2ae2",
                                },
                            }}
                        >
                            Prev
                        </Button>
                        <Button
                            variant="contained"
                            onClick={goToNextSlide}
                            sx={{
                                backgroundColor: "#6d2ae2",
                                "&:hover": {
                                    backgroundColor: "#6d2ae2",
                                },
                            }}
                            disabled={currentSlide === images.length - 1}
                        >
                            Next
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default DisplayImg;
