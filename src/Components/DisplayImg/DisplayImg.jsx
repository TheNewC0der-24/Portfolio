import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/Images/MyImgs/portrait.svg';
import img2 from '../../assets/Images/MyImgs/portrait.png';
import img3 from '../../assets/Images/MyImgs/myDog.png';

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

const DisplayImg = () => {

    const navigate = useNavigate();

    const btnClose = useRef(null);

    const closeModal = () => {
        // const modalBackdrop = document.querySelector('.modal-backdrop');
        // if (modalBackdrop) {
        //     modalBackdrop.classList.remove('show');
        //     modalBackdrop.remove();
        // }
        // document.body.classList.remove('modal-open');
        btnClose.current.click();
    };

    useEffect(() => {
        closeModal();
    }, [navigate]);

    const images = [
        img1,
        img2,
        img3
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
                                That's {img3 === images[currentSlide] ? 'my dog' : 'me'} <TiArrowForward className="icon fs-4" />
                            </h5>
                            <button ref={btnClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <button
                                className='btn btn-dark'
                                onClick={goToPrevSlide}
                                disabled={currentSlide === 0}
                                style={{ backgroundColor: '#6d2ae2', border: 'none' }}
                            >
                                Prev
                            </button>
                            <button
                                onClick={goToNextSlide}
                                className='btn btn-dark'
                                style={{ backgroundColor: '#6d2ae2', border: 'none' }}
                                disabled={currentSlide === images.length - 1}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DisplayImg;
