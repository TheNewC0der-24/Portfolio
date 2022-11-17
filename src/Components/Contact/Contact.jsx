import React from 'react';

import styles from './Contact.module.css';

import chat from '../../assets/Image/Chat.svg';

import BackgroundAnimation from '../../subComponents/BackgroundAnimate/BackgroundAnimate';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../Themes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.text};
    }

    .card {
        background: none !important;
        border-radius : 0px !important;
        border : 2px solid #dee2e6 !important;
        backdrop-filter: blur(4px) !important;
    }
`;

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully!!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <BackgroundAnimation />
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <div className='container my-4'>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-7 m-auto" theme={lightTheme} style={{ color: "#dee2e6" }}>
                                    <h1 className={styles.getInTouch}>Get In Touch</h1>
                                    <h5>Any question or remarks? Just write a message!</h5>
                                    <form className={`${styles.form} d-grid col-10 my-5`}>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" id="message" rows="5" placeholder="Go ahead, I am listening..."></textarea>
                                        </div>
                                        <button onClick={handleSubmit} type="submit" className={styles.submitBtn}>Submit</button>
                                    </form>
                                </div>
                                <div className="col-md-5 m-auto" theme={lightTheme} style={{ color: "#dee2e6" }}>
                                    <img src={chat} alt="let's chat" className='img-fluid' />
                                    <div className='my-5'>
                                        <h5 className={styles.contact}><i className="fas fa-map-marker-alt"></i> Address</h5>
                                        <p>5, Ambeshwar Colony, Opp. Shyam Nagar Metro Station, Jaipur, Rajasthan, India</p>
                                    </div>
                                    <div className='my-5'>
                                        <h5 className={styles.contact}><i className="fas fa-phone"></i> Phone Number</h5>
                                        <p>+91 9352-433995</p>
                                    </div>
                                    <div className='my-5'>
                                        <h5 className={styles.contact}><i className="fas fa-envelope"></i> Email</h5>
                                        <p>
                                            <a href="mailto:khuranabhavya24@gmail.com" className={styles.mail}>khuranabhavya24@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center flex-wrap gap-4'>
                                    <h5><i className="fas fa-map-marker-alt"></i></h5>
                                    <h5><i className="fas fa-map-marker-alt"></i></h5>
                                    <h5><i className="fas fa-map-marker-alt"></i></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Contact;