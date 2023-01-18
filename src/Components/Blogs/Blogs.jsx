import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Image
import underConstruction from '../../assets/Images/blog.svg'

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
                <div className="container">
                    <div className='p-4'>
                        <div className="alert alert-dismissible fade show" role="alert">
                            <h4 className="alert-heading fw-bold">No Blogs to read!!</h4>
                            <hr />
                            <p className="mb-0">This page is Under Construction...</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>

                    <div className='text-center'>
                        <img src={underConstruction} alt="underConstruction" width={300} className="img-fluid" />

                        <h3 className='mt-3 fw-bold'>Under</h3>
                        <div className="d-flex justify-content-center mx-auto">
                            <div className="progress" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "65%", backgroundColor: "#6d2ae2" }}></div>
                            </div>
                        </div>
                        <h3 className='fw-bold'>Construction</h3>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Blogs;