import React, { useState } from 'react';

import img1 from '../../assets/Images/portrait.png';
import img2 from '../../assets/Images/portrait.svg';

import { createGlobalStyle } from 'styled-components';

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
  margin-top: 10px;
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
}

`;

const DisplayImg = () => {

    const images = [
        img1,
        img2,
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
            <div className="modal fade" id="imgModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold me">
                                That's me <TiArrowForward className="icon fs-4" />
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="carousel-container">
                                <div className="carousel-box">
                                    {images.map((imageUrl, index) => (
                                        <div
                                            key={index}
                                            className={`slide ${index === currentSlide ? 'activeImg' : ''}`}
                                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                        >
                                            <img src={imageUrl} className='d-grid m-auto img-fluid rounded-circle w-75' alt={`Image ${index + 1}`} />
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
                        </div>
                        <div className="modal-footer">
                            <button data-bs-dismiss="modal">Close</button>
                            <button onClick={goToPrevSlide}>&lt; Prev</button>
                            <button onClick={goToNextSlide}>Next &gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DisplayImg;
