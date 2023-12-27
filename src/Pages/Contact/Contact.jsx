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
    IconButton,
    Avatar,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio
} from '@mui/material';
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaClock, FaBolt } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';
import { RiFunctionLine } from 'react-icons/ri';
import chat from '../../assets/Images/contact.svg';
import BackgroundAnimation from '../../SubComponents/BackgroundAnimate/BackgroundAnimate';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactCard from '../../Components/ContactCard';

const GlobalStyle = createGlobalStyle`
     body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.text};
    }

    // .card {
    //     backdrop-filter: blur(5px) saturate(180%) !important;
    //     -webkit-backdrop-filter: blur(5px) saturate(180%) !important;
    //     background-color: rgba(223, 216, 253, 0.6) !important;
    //     border-radius: 12px !important;
    //     border: 1px solid rgba(255, 255, 255, 0.125) !important;
    // }

    input, textarea {
        color: #0e1313 !important;
    }

    input::placeholder,
    textarea::placeholder {
        color: #000 !important;
    }
`;

const Contact = () => {
    const title = "Bhavya Khurana | Contact Me";
    document.title = title;

    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const ContactSchema = Yup.object().shape({
        fname: Yup.string().required('First Name is required'),
        lname: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        // subject: Yup.string().required('Select Subject'),
        message: Yup.string().required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            subject: "just chatting",
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
        { value: 'web design', label: 'Web Design' },
        { value: 'questions', label: 'Questions' },
        { value: 'opinion', label: 'Opinion' },
        { value: 'collaboration', label: 'Collaboration' },
        { value: 'others', label: 'Others' },
    ];

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <BackgroundAnimation />

                <Container maxWidth="lg">
                    <Box p={4}>
                        <Card sx={{ width: "100%", bgcolor: "#dee2e6" }}>
                            <CardContent>
                                <Avatar sx={{ bgcolor: "#6d2ae2", width: 60, height: 60, mx: "auto", mb: 2, boxShadow: 'inset 0 0 5px 5px #9265df', borderRadius: "8px" }}>
                                    <HiChatBubbleLeftRight className="fs-1" />
                                </Avatar>
                                <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
                                    I'd love to hear from you.
                                </Typography>
                                <Typography variant="h6" textAlign="center" gutterBottom>
                                    Ready to start your web project or have questions? I'm just a message away. Let's
                                    discuss your <span style={{ color: "#6d2ae2" }}>ideas</span> and bring them to life.
                                    Reach out for a free consultation.
                                </Typography>

                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 2, mt: 2 }}>
                                    <Button variant='outlined' startIcon={<FaClock style={{ color: "#6d2ae2" }} />}
                                        sx={{
                                            width: { xs: "100%", sm: "100%", md: "auto" },
                                            textTransform: "capitalize",
                                            borderColor: "#0e1313",
                                            color: "#0e1313",
                                            '&:hover': {
                                                borderColor: "#6d2ae2",
                                                color: "#6d2ae2",
                                            }
                                        }}>
                                        24/7 Assistance
                                    </Button>
                                    <Button variant='outlined' startIcon={<FaBolt style={{ color: "#6d2ae2" }} />}
                                        sx={{
                                            width: { xs: "100%", sm: "100%", md: "auto" },
                                            textTransform: "capitalize",
                                            borderColor: "#0e1313",
                                            color: "#0e1313",
                                            '&:hover': {
                                                borderColor: "#6d2ae2",
                                                color: "#6d2ae2",
                                            }
                                        }}>
                                        Quick Change Resolutions
                                    </Button>
                                    <Button variant='outlined' startIcon={<IoSparkles style={{ color: "#6d2ae2" }} />}
                                        sx={{
                                            width: { xs: "100%", sm: "100%", md: "auto" },
                                            textTransform: "capitalize",
                                            borderColor: "#0e1313",
                                            color: "#0e1313",
                                            '&:hover': {
                                                borderColor: "#6d2ae2",
                                                color: "#6d2ae2",
                                            }
                                        }}>
                                        Flexible Working Hours
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>

                        <Grid container spacing={5} mt={4}>
                            <Grid item xs={12} sm={12} md={5}>
                                <ContactCard />
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Card sx={{ width: "100%", bgcolor: "#dee2e6", p: 2 }}>
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
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={12} md={6}>
                                                        <TextField
                                                            fullWidth
                                                            placeholder="First Name"
                                                            type='text'
                                                            required
                                                            sx={{
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& fieldset': {
                                                                        border: '2px solid #0e1313',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#0e1313',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#0e1313',
                                                                    },
                                                                },
                                                            }}
                                                            {...getFieldProps('fname')}
                                                            error={Boolean(touched.fname && errors.fname)}
                                                            helperText={touched.fname && errors.fname}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} sm={12} md={6}>
                                                        <TextField
                                                            fullWidth
                                                            placeholder="Last Name"
                                                            type='text'
                                                            required
                                                            sx={{
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& fieldset': {
                                                                        border: '2px solid #0e1313',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#0e1313',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#0e1313',
                                                                    },
                                                                },
                                                            }}
                                                            {...getFieldProps('lname')}
                                                            error={Boolean(touched.lname && errors.lname)}
                                                            helperText={touched.lname && errors.lname}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <TextField
                                                            fullWidth
                                                            placeholder="Email"
                                                            required
                                                            type='email'
                                                            sx={{
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& fieldset': {
                                                                        border: '2px solid #0e1313',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#0e1313',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#0e1313',
                                                                    },
                                                                },
                                                            }}
                                                            {...getFieldProps('email')}
                                                            error={Boolean(touched.email && errors.email)}
                                                            helperText={touched.email && errors.email}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <Box sx={{
                                                            border: '2px solid #0e1313',
                                                            borderRadius: '4px',
                                                            p: 2
                                                        }}>
                                                            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                                                                <FormControl>
                                                                    <Typography color="text.secondary" gutterBottom>Why are you contacting me?</Typography>
                                                                    <RadioGroup sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }} aria-label="subject" {...getFieldProps('subject')}>
                                                                        {options.map((option) => (
                                                                            <FormControlLabel
                                                                                key={option.value}
                                                                                value={option.value}
                                                                                control={<Radio
                                                                                    sx={{
                                                                                        '&.Mui-checked': {
                                                                                            color: '#6d2ae2',
                                                                                        },
                                                                                    }}
                                                                                />}
                                                                                label={option.label}
                                                                            />
                                                                        ))}
                                                                    </RadioGroup>
                                                                </FormControl>
                                                            </Box>
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <TextField
                                                            fullWidth
                                                            placeholder="I would like to discuss about..."
                                                            required
                                                            multiline
                                                            rows={8}
                                                            sx={{
                                                                '& label': {
                                                                    color: '#0e1313',
                                                                },
                                                                '& label.Mui-focused': {
                                                                    color: '#0e1313',
                                                                },
                                                                '& .MuiOutlinedInput-root': {
                                                                    '& input': {
                                                                        color: '#0e1313',
                                                                    },
                                                                    '& fieldset': {
                                                                        border: '2px solid #0e1313',
                                                                    },
                                                                    '&:hover fieldset': {
                                                                        borderColor: '#0e1313',
                                                                    },
                                                                    '&.Mui-focused fieldset': {
                                                                        borderColor: '#0e1313',
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
                                                    sx={{
                                                        mt: 3,
                                                        display: "flex",
                                                        marginX: "auto",
                                                        backgroundColor: '#6d2ae2',
                                                        '&:hover': {
                                                            backgroundColor: '#6d2ae2',
                                                        },
                                                        '&.Mui-disabled': {
                                                            backgroundColor: '#9265df',
                                                            color: '#dee2e6',
                                                        }
                                                    }}
                                                    disabled={errors.email || errors.fname || errors.lname || errors.message ? true : false}
                                                >
                                                    Send
                                                </Button>
                                            </Form>
                                        </FormikProvider>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        {/* <Grid container spacing={5} mt={8}>
                            <Grid item xs={12} sm={12} md={7}>
                                <div className='bg-light'>
                                    dlkmdfkmvdfk
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}>
                                <Box p={2} sx={{ bgcolor: "#dee2e6", borderRadius: "4px" }}>
                                    lvdfvfd
                                </Box>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Contact;