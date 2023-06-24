import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

import { darkTheme } from '../Themes';

import InterestCard from './InterestCard';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0e1313;
    color : #dee2e6;
  }

  .intro {
    background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
    background-clip: text !important;
    -moz-background-clip: text !important;
    -webkit-background-clip: text !important;
    -moz-text-fill-color: transparent !important;
    -webkit-text-fill-color: transparent !important;
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
    padding: 15px;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    width: 75px;
    height: 75px;
    background: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3);
    font-size: 36px;
    line-height: 1;
    color: #dee2e6;
}
`;

const Quote = styled.div`
    font-family: 'Special Elite', cursive;
    color: #6d2ae2;
`;

const Interest = () => {

    const title = "Bhavya Khurana | Interests";
    document.title = title;

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className="container text-center my-5">
                <div>
                    <h1>.interest()</h1>
                    <h6 className='fw-bold'>THINGS <span className='intro'>I LOVE</span></h6>
                </div>
                <Quote className='my-5 mx-4'>
                    <blockquote className="blockquote mb-0">
                        <p><span>PASSION</span> IS NOT ABOUT DOING SOMETHING <span>BIG PASSION</span> IS DOING SMALL THINGS WITH 100%</p>
                    </blockquote>
                </Quote>
                <div className="container d-flex justify-content-center mx-auto">
                    <InterestCard />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Interest;