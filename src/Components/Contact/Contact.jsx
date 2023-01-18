import React, { useRef } from 'react';
import styles from './Contact.module.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Email.js
import emailjs from '@emailjs/browser';

// Icon
import { RiFunctionLine } from 'react-icons/ri';

// Image
import chat from '../../assets/Images/Chat.svg';

// Background Animation
import BackgroundAnimation from '../../subComponents/BackgroundAnimate/BackgroundAnimate';

// Themes
import { lightTheme, darkTheme } from '../Themes';

// Alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Form Validation
import { Formik, Form, Field } from "formik";

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

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const validateName = (value) => {
        let error;
        if (!value) {
            error = "*Name is required";
        }
        return error;
    };

    const validateEmail = (value) => {
        let error;
        if (!value) {
            error = "*E-mail is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "*Invalid e-mail address";
        }
        return error;
    };

    const validateSubject = (value) => {
        let error;
        if (!value) {
            error = "*Select Subject";
        } else if (value === "Select...") {
            error = "*Choose correct option";
        }
        return error;
    }

    const validateMessage = (value) => {
        let error;
        if (!value) {
            error = "*Message is required";
        }
        return error;
    };

    const form = useRef();

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
                                    <Formik initialValues={initialValues}
                                        onSubmit={() => {
                                            emailjs.sendForm('service_oept3k5', 'template_1u8sgyc', form.current, 'J0p498TOPVXH53bfO')
                                                .then((result) => {
                                                    console.warn(result.text);
                                                }, (error) => {
                                                    console.error(error.text);
                                                });

                                            toast.success('Message sent successfully!!', {
                                                position: "top-right",
                                                autoClose: 2000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "colored",
                                            })
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form ref={form} autoComplete='off' className={`${styles.form} d-grid col-10 my-5`}>
                                                <div className="mb-3">
                                                    <Field
                                                        type="text"
                                                        className={`form-control ${errors.name && touched.name ? "border-danger" : ""}`}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter your name"
                                                        validate={validateName}
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="form-text text-danger">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-3">
                                                    <Field
                                                        type="email"
                                                        className={`form-control ${errors.email && touched.email ? "border-danger" : ""}`}
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter your e-mail address"
                                                        validate={validateEmail}
                                                    />
                                                    {errors.email && touched.email && (
                                                        <div className="form-text text-danger">
                                                            {errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-3 form-floating">
                                                    <Field as="select"
                                                        className={`form-select  ${errors.subject && touched.subject ? "border-danger" : ""}`}
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        validate={validateSubject}>
                                                        <option selected value="Select">Select...</option>
                                                        <option value="Budget">Budget</option>
                                                        <option value="Questions">Questions</option>
                                                        <option value="Opinion">Opinion</option>
                                                        <option value="Suggestions">Suggestions</option>
                                                        <option value="Just chatting">Just chatting</option>
                                                        <option value="Questions">Other</option>
                                                    </Field>
                                                    <label className='fw-bold text-dark' htmlFor="floatingSelect">Subject</label>
                                                    {
                                                        errors.subject && touched.subject &&
                                                        <div className="form-text text-danger">
                                                            {errors.subject}
                                                        </div>
                                                    }
                                                </div>

                                                <div className="mb-3">
                                                    <Field as="textarea"
                                                        className={`form-control ${errors.message && touched.message ? "border-danger" : ""}`}
                                                        id="message"
                                                        name="message"
                                                        rows="5"
                                                        placeholder="Go ahead, I am listening..."
                                                        validate={validateMessage}
                                                    />
                                                    {errors.message && touched.message && (
                                                        <div className="form-text text-danger">
                                                            {errors.message}
                                                        </div>
                                                    )}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className={styles.submitBtn}
                                                    id="submitBtn"
                                                >
                                                    Send Message
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                <div className="col-md-5 m-auto" theme={lightTheme} style={{ color: "#dee2e6" }}>
                                    <img src={chat} alt="let's chat" width={400} className='img-fluid' />
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
                                    <RiFunctionLine />
                                    <RiFunctionLine />
                                    <RiFunctionLine />
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