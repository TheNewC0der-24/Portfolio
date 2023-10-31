import React, { useRef, useState } from 'react';
import styles from './Contact.module.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme } from '../../Themes';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
    Box,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
    Container,
    Card,
    CardContent,
    LinearProgress,
    IconButton
} from '@mui/material';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';
import { RiFunctionLine } from 'react-icons/ri';
import chat from '../../assets/Images/contact.svg';
import BackgroundAnimation from '../../SubComponents/BackgroundAnimate/BackgroundAnimate';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
     body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.text};
    }

    .card {
        background: none !important;
        border-radius : 0px !important;
        backdrop-filter: blur(4px) !important;
    }

    input {
        color: #dee2e6 !important;
    }

    input::placeholder {
        color: #dee2e6 !important;
    }
`;

const Contact = () => {
    const title = "Bhavya Khurana | Contact Me";
    document.title = title;

    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const ContactSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        subject: Yup.string().required('Select Subject'),
        message: Yup.string().required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: ContactSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                setLoading(true);
                emailjs.sendForm('service_oept3k5', 'template_1u8sgyc', formRef.current, 'J0p498TOPVXH53bfO')
                    .then((result) => {
                        console.warn(result.text);
                    }, (error) => {
                        console.error(error.text);
                    });
                toast.success('Message sent successfully!!')
            } catch (error) {
                setErrors({ afterSubmit: error.message });
                toast.error('Something went wrong!!')
            } finally {
                setLoading(false);
                resetForm({ values: '' });
            }
        }
    });

    const { errors, touched, values, handleSubmit, getFieldProps } = formik;

    const options = [
        { value: 'just chatting', label: 'Just chatting' },
        { value: 'budget', label: 'Budget' },
        { value: 'questions', label: 'Questions' },
        { value: 'opinion', label: 'Opinion' },
        { value: 'suggestions', label: 'Suggestions' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <BackgroundAnimation />

                <Box mb={3}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{
                                bgcolor: "#DFD8FD", display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "column", md: "row" }, height: "100%"
                            }}>
                                < LazyLoadImage src={chat} alt="let's chat" width="250px" className='img-fluid' effect="blur" />
                                <Box sx={{ textAlign: { xs: "center", sm: "center", md: "left" }, mb: 2 }}>
                                    <Typography variant="h4" fontFamily='Caveat' fontWeight="bold">
                                        Get In Touch
                                    </Typography>
                                    <Typography variant="h6" fontFamily='Caveat' fontWeight="bold">
                                        Any question or remarks? Just write a message!
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", bgcolor: "#6d2ae2", color: "#DFD8FD", p: 2, height: "100%" }}>
                                <Typography variant="h4" fontWeight="bold" textAlign="center">
                                    Follow Me On Social Media
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, mt: 2 }}>
                                    <motion.div
                                        initial={{ transform: "scale(0)" }}
                                        animate={{ scale: [0, 1, 1.5, 1] }}
                                        transition={{ type: 'spring', duration: 1, delay: 1 }}
                                    >
                                        <IconButton href="https://www.facebook.com/bhavya.khurana.399/" rel="noreferrer" target="_blank"
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: "#DFD8FD",
                                                    color: "#6d2ae2",
                                                }
                                            }}>
                                            <FaFacebookSquare className="fs-1" />
                                        </IconButton>
                                    </motion.div>

                                    <motion.div
                                        initial={{ transform: "scale(0)" }}
                                        animate={{ scale: [0, 1, 1.5, 1] }}
                                        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                                    >
                                        <IconButton href="https://github.com/TheNewC0der-24" rel="noreferrer" target="_blank"
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: "#DFD8FD",
                                                    color: "#6d2ae2",
                                                }
                                            }}>
                                            <FaGithub className="fs-1" />
                                        </IconButton>
                                    </motion.div>

                                    <motion.div
                                        initial={{ transform: "scale(0)" }}
                                        animate={{ scale: [0, 1, 1.5, 1] }}
                                        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
                                    >
                                        <IconButton href="https://www.instagram.com/__cynophilist__._/" rel="noreferrer" target="_blank"
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: "#DFD8FD",
                                                    color: "#6d2ae2",
                                                }
                                            }}>
                                            <FaInstagram className="fs-1" />
                                        </IconButton>
                                    </motion.div>

                                    <motion.div
                                        initial={{ transform: "scale(0)" }}
                                        animate={{ scale: [0, 1, 1.5, 1] }}
                                        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
                                    >
                                        <IconButton href="https://www.linkedin.com/in/bhavya-khurana/" rel="noreferrer" target="_blank"
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: "#DFD8FD",
                                                    color: "#6d2ae2",
                                                }
                                            }}>
                                            <FaLinkedin className="fs-1" />
                                        </IconButton>
                                    </motion.div>

                                    <motion.div
                                        initial={{ transform: "scale(0)" }}
                                        animate={{ scale: [0, 1, 1.5, 1] }}
                                        transition={{ type: 'spring', duration: 1, delay: 1.8 }}
                                    >
                                        <IconButton href="https://twitter.com/Cynophilist_B" rel="noreferrer" target="_blank"
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: "#DFD8FD",
                                                    color: "#6d2ae2",
                                                }
                                            }}>
                                            <FaTwitter className="fs-1" />
                                        </IconButton>
                                    </motion.div>

                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                    <Container maxWidth="xl" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Card className='card'>
                                    {loading &&
                                        <LinearProgress variant="indeterminate" sx={{
                                            backgroundColor: '#dee2e6',
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#6d2ae2',
                                            },
                                        }} />
                                    }
                                    <CardContent>
                                        <FormikProvider value={formik}>
                                            <Form ref={formRef} autoComplete="off" noValidate onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={12} md={6}>
                                                        <TextField
                                                            fullWidth
                                                            label="Name"
                                                            type='text'
                                                            required
                                                            sx={{
                                                                '& label': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& label.Mui-focused': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                },
                                                            }}
                                                            {...getFieldProps('name')}
                                                            error={Boolean(touched.name && errors.name)}
                                                            helperText={touched.name && errors.name}
                                                        />

                                                        <TextField
                                                            fullWidth
                                                            label="Email"
                                                            required
                                                            type='email'
                                                            sx={{
                                                                mt: 3,
                                                                '& label': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& label.Mui-focused': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                },
                                                            }}
                                                            {...getFieldProps('email')}
                                                            error={Boolean(touched.email && errors.email)}
                                                            helperText={touched.email && errors.email}
                                                        />

                                                        <TextField
                                                            fullWidth
                                                            label="Subject"
                                                            select
                                                            required
                                                            sx={{
                                                                mt: 3,
                                                                '& .MuiSelect-select': {
                                                                    color: '#dee2e6',
                                                                },
                                                                '& .MuiSelect-icon': {
                                                                    color: '#dee2e6',
                                                                },

                                                                '& label': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& label.Mui-focused': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                },
                                                            }}
                                                            {...getFieldProps('subject')}
                                                            error={Boolean(touched.subject && errors.subject)}
                                                            helperText={touched.subject && errors.subject}
                                                        >
                                                            {options.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                            ))}
                                                        </TextField>

                                                    </Grid>

                                                    <Grid item xs={12} sm={12} md={6}>
                                                        <TextField
                                                            fullWidth
                                                            label="Message"
                                                            required
                                                            multiline
                                                            rows={8}
                                                            sx={{
                                                                '& label': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& label.Mui-focused': {
                                                                    color: '#6d2ae2',
                                                                },
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#6d2ae2',
                                                                    },
                                                                },
                                                            }}
                                                            {...getFieldProps('message')}
                                                            error={Boolean(touched.message && errors.message)}
                                                            helperText={touched.message && errors.message}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Button
                                                    variant='contained'
                                                    type='submit'
                                                    size='large'
                                                    fullWidth
                                                    sx={{
                                                        mt: 3,
                                                        backgroundColor: '#6d2ae2',
                                                        '&:hover': {
                                                            backgroundColor: '#6d2ae2',
                                                        },
                                                        '&.Mui-disabled': {
                                                            backgroundColor: '#dee2e6',
                                                            color: 'grey',
                                                        }
                                                    }}
                                                    disabled={errors.email || errors.name || errors.subject || errors.message ? true : false}
                                                >
                                                    Send Message
                                                </Button>
                                            </Form>
                                        </FormikProvider>
                                    </CardContent>
                                </Card>

                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.235556106043!2d75.76865537515083!3d26.89601837665712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db467cd6dec99%3A0x4fb9c9e79e7fb618!2s5%2C%20Ambeshwar%20Colony%2C%20Shiv%20Puri%20Colony%2C%20Ramnagar%2C%20Jaipur%2C%20Rajasthan%20302007!5e0!3m2!1sen!2sin!4v1698606854285!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "0" }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">

                                </iframe>
                                <div className='d-flex justify-content-center flex-wrap gap-4 mt-2'>
                                    <RiFunctionLine />
                                    <RiFunctionLine />
                                    <RiFunctionLine />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </ThemeProvider >
        </>
    )
}

export default Contact;