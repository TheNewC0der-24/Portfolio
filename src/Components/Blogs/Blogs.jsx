import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Image
import underConstruction from '../../assets/Images/underConstruction.svg'

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { lightTheme } from '../Themes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
  }
`;

const Blogs = () => {

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className="container text-center mt-3">
                    <img src={underConstruction} alt="underConstruction" width={600} className="img-fluid" />

                    <h1 className='mt-5 fw-bold'>Under</h1>
                    <div className="d-flex justify-content-center mx-auto">
                        <div className="progress" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "65%", backgroundColor: "#6d2ae2" }}></div>
                        </div>
                    </div>
                    <h1 className='fw-bold'>Construction</h1>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Blogs;