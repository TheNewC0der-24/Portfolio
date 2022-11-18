import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import { darkTheme } from '../Themes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0e1313;
    color : #dee2e6;
  }

  .card {
    background: none !important;
    border-radius : 0px !important;
    box-shadow:  5px 5px 10px #060808,
             -5px -5px 10px #161e1e;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .card:hover {
    box-shadow: inset 5px 5px 10px #060808,
            inset -5px -5px 10px #161e1e !important;
    transform: translateY(2px);
  }

 .card-title {
    color : #6d2ae2 !important;
    font-family: 'Caveat', cursive;
  }

  .icon{
    margin: 0 auto 20px auto;
    padding-top: 17px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    background: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3);
}

.icon i{
    font-size: 36px;
    line-height: 1;
    color: #dee2e6;
}
`;

const Intro = styled.div`
.intro{
    font-family: 'Caveat', cursive;
}
.intro::before {
   content : "-";
}
.intro::after {
   content : "-";
}
`;

const Quote = styled.p`
    font-family: 'Special Elite', cursive;
    color: #6d2ae2;
`;

const Interest = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className="container text-center my-5">
                <Intro>
                    <h1>.interest()</h1>
                    <h5><span className='intro'>Things I Love</span></h5>
                </Intro>
                <Quote className='my-5 mx-4'>
                    <blockquote className="blockquote mb-0">
                        <p><span>PASSION</span> IS NOT ABOUT DOING SOMETHING <span>BIG PASSION</span> IS DOING SMALL THINGS WITH 100%</p>
                    </blockquote>
                </Quote>
                <div className="container d-flex justify-content-center mx-auto">
                    <div className="container row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon"><i className="fa-solid fa-terminal"></i></div>
                                    <h5 className="card-title">COMPETITIVE CODING</h5>
                                    <p className="card-text">In my free time, i prefer to try to do some problem-solving on various Competitive Coding platforms.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon"><i className="fas fa-graduation-cap"></i></div>
                                    <h5 className="card-title">LEARNING NEW THINGS</h5>
                                    <p className="card-text">I believe in constantly updating myself by learning something new with practical Implementations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon"><i className="fa-solid fa-code"></i></div>
                                    <h5 className="card-title">DEVELOP FRONTEND</h5>
                                    <p className="card-text">I love designing websites, web apps, and upgrading myself by learning new skills and implementing them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider >
    )
}

export default Interest;