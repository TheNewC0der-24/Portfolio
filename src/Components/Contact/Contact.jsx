import React, { useRef, useState } from 'react';
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
import { useFormik } from "formik";
import SelectSubject from './SelectSubject';

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

    // eslint-disable-next-line
    const [isClearable, setIsClearable] = useState(true);
    // eslint-disable-next-line
    const [isSearchable, setIsSearchable] = useState(true);

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = "*Name is required";
        }

        if (!values.email) {
            errors.email = "*E-mail is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "*Invalid e-mail address";
        }
        if (!values.subject) {
            errors.subject = "*Select Subject";
        } else if (values.subject === "Select...") {
            errors.subject = "*Choose correct option";
        }
        if (!values.message) {
            errors.message = "*Message is required";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validate,
        onSubmit: () => {
            emailjs.sendForm('service_oept3k5', 'template_1u8sgyc', form.current, 'J0p498TOPVXH53bfO')
                .then((result) => {
                    console.warn(result.text);
                }, (error) => {
                    console.error(error.text);
                });

            formik.resetForm();

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
        }
    });

    const form = useRef();

    const options = [
        { value: 'just chatting', label: 'Just chatting' },
        { value: 'budget', label: 'Budget' },
        { value: 'questions', label: 'Questions' },
        { value: 'opinion', label: 'Opinion' },
        { value: 'suggestions', label: 'Suggestions' },
        { value: 'other', label: 'Other' },
    ];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: "100%",
            textDecoration: "none",
            outline: 0,
            boxShadow: "none",
            borderRadius: 0,
            backgroundColor: "none",
            color: "#dee2e6",
            borderColor: state.isFocused ? "#6d2ae2" : "#dee2e6" && formik.errors.subject ? "#dc3545" : "#dee2e6",
            "&:hover": {
                borderColor: "#dee2e6",
            },
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#dee2e6' : '#0e1313',
            padding: 10,
            width: "100%",
            backgroundColor: state.isSelected ? '#6d2ae2' : '#dee2e6',
        }),
        singleValue: (provided, state) => {
            const color = "#dee2e6";
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition, color };
        }
    }

    const title = "Bhavya Khurana | Contact Me";
    document.title = title;

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
                                    <form ref={form} autoComplete='off' onSubmit={formik.handleSubmit} className={`${styles.form} d-grid col-10 my-5`}>
                                        <div className="mb-3">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className={`form-control ${formik.errors.name ? "border-danger" : ""}`}
                                                placeholder="Enter your name"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                            />
                                            {formik.errors.name ? (<div className="form-text text-danger">
                                                {formik.errors.name}
                                            </div>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id="email"
                                                name="email"
                                                className={`form-control ${formik.errors.email ? "border-danger" : ""}`}
                                                type="email"
                                                placeholder="Enter your e-mail address"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                            />
                                            {formik.errors.email ? (
                                                <div className="form-text text-danger">
                                                    {formik.errors.email}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <SelectSubject
                                                id="subject"
                                                name="subject"
                                                customStyles={customStyles}
                                                className={formik.errors.subject ? "border-danger" : ""}
                                                options={options}
                                                // defaultValue={options[0]}
                                                onChange={value => formik.setFieldValue('subject', value.value)}
                                                value={formik.values.subject}
                                                isClearable={isClearable}
                                                isSearchable={isSearchable}
                                            />
                                            {formik.errors.subject ? (
                                                <div className="form-text text-danger">
                                                    {formik.errors.subject}
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="mb-3">
                                            <textarea
                                                id="message"
                                                name="message"
                                                className={`form-control ${formik.errors.message ? "border-danger" : ""}`}
                                                rows="5"
                                                placeholder="Go ahead, I am listening..."
                                                onChange={formik.handleChange}
                                                value={formik.values.message}
                                            />
                                            {formik.errors.message ? (
                                                <div className="form-text text-danger">
                                                    {formik.errors.message}
                                                </div>
                                            ) : null}
                                        </div>
                                        <button
                                            type="submit"
                                            className={styles.submitBtn}
                                            id="submitBtn"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                    {/* )} */}
                                    {/* </Formik> */}
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