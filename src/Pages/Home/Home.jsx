import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes';
import { Box, Button, Divider, Typography } from '@mui/material';
import { BsDot } from 'react-icons/bs';
import { IoCall } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import { Typewriter } from "react-simple-typewriter";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        overflow-x: hidden;
    }

    .intro {
        margin-top: 5rem;
        max-width: 100%;
    }

    .know-more-btn {
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
    }

    .dot {
        animation: upDown 1s linear infinite;
    }

    .main {
        position: relative;
    }

    .card {
        background-color: rgb(248, 248, 248);
        box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
    }

    .color-box {
        position: absolute;
        bottom: -40px;
        left: -90px;
        display: flex;
        justify-content: space-around;
        background-color: rgb(248, 248, 248);
        box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
        padding: 8px;
        border-radius: 5px;
    }

    .box {
        width: 40px;
        height: 40px;
        margin: 3px;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    }

    pre {
        font-size: 1rem;
        font-family: Montserrat, sans-serif;
        color: #6d2ae2;
        margin-bottom: 0.5rem;
    }

    @keyframes upDown {
        0% {
            transform: translateY(-5px);
        }
        25% {
            transform: translateY(5px);
        }
        50% {
            transform: translateY(10px);
        }
        75% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(-5px);
        }
    }

  @media (max-width: 991.5px) {
    .intro-text {
        text-align: center;
    }

    pre {
        font-size: 0.8rem;
    }

    .color-box {
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%) !important;
    }
  }

  @media (max-width: 767.5px) {
    .welcome {
        flex-direction: column;
        text-align: center;
    }

    .know-more-btn {
        margin-top: 1rem !important;
        border-radius: 5px;
    }
}
`;

const Welcome = styled.div`
    background: ${props => props.theme.body};
    color: #dee2e6;
    width: 80%;
    margin: auto;
`;

const Intro = styled.div`
    color : ${props => props.theme.text};

    .name{
        font-weight : 900;
    }

    .name span {
        background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
        background-clip: text !important;
        -moz-background-clip: text !important;
        -webkit-background-clip: text !important;
        -moz-text-fill-color: transparent !important;
        -webkit-text-fill-color: transparent !important;
    }

    .typewriter {
        font-family: 'Caveat', cursive;
    }

    .know-more-btn {
        border: 1px solid #0e1313;
        color: #dee2e6;
        text-decoration: none;
        font-weight: bold;
        position: relative;
        font-weight: 600;
        padding: 12px 20px;
        outline: none;
        background-color: transparent;
        border-radius: 5px;
    }

    .know-more-btn:after {
        content: "";
        position: absolute;
        width: 100%;
        top: 7px;
        left: 7px;
        height: 100%;
        background-color: rgba(109, 42, 226, 0.5);
        z-index: -1;
        transition: all 0.35s;
        border-radius: inherit;
    }

    .know-more-btn:hover:after {
        top: 0px;
        left: 0px;
    }`;

const Home = () => {
    const navigate = useNavigate();

    const title = "Bhavya Khurana";
    document.title = title;

    const benefitsOne = [
        {
            id: 1,
            title: "Customized Designs Tailored to Your Needs",
            description: "I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand's personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience."
        },
        {
            id: 2,
            title: "Creative Excellence that Captivates Visitors",
            description: "With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand's credibility and professionalism."
        }
    ];
    const benefitsTwo = [
        {
            id: 1,
            title: "User-Centric Approach for Optimal Experience",
            description: "I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions."
        },
        {
            id: 2,
            title: "Mobile-First Design for Broad Accessibility",
            description: "In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly user-interfaces that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively."
        },
        {
            id: 3,
            title: "Expertise in Cutting-Edge Technologies",
            description: "With a strong command in HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web techs to enhance user engagement and create a dynamic user experience."
        }
    ];

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <SocialLinks />
            <div className='container'>
                <Welcome theme={darkTheme}>
                    <p className="d-flex welcome justify-content-between p-2 mt-5 fw-bold">
                        𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 &lt;𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 /&gt;!
                        <span className="badge text-white" style={{ backgroundColor: '#6d2ae2' }}>made with ❤️</span>
                    </p>
                </Welcome>

                <div className="container p-3-sm">
                    <div className="container">
                        <Intro theme={lightTheme} className="intro">
                            <div className="d-flex justify-content-around flex-wrap align-items-center gap-1 my-3">
                                <div className='intro-text'>
                                    <h1 className='name'>I<span>'</span>m Bhavya{" "}<span>Khurana</span></h1>
                                    <h1>
                                        <em className='fw-bold typewriter' style={{ color: '#6d2ae2' }}>
                                            <Typewriter
                                                words={['Web-Developer', 'Programmer', 'Tech Enthusiast', 'Writer']}
                                                loop={0}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </em>
                                    </h1>
                                    <p className='my-3 fw-bold'>
                                        Radiating creativity on a daily basis. <br /> I am a developer driven by passion and curiosity.
                                    </p>
                                    <button onClick={() => navigate("/about")} className='mt-4 mb-3 know-more-btn'>Know more about me<BsDot className="dot ms-1" /></button>
                                </div>
                                <div className='main mb-5'>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <pre>
                                                1&nbsp;class&nbsp;<b>Person</b>&nbsp;&#123;
                                            </pre>
                                            <pre>
                                                2&nbsp;&nbsp;&nbsp;&nbsp;constructor()&nbsp;&#123;
                                            </pre>
                                            <pre>
                                                3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name&nbsp;=&nbsp;"<b>Bhavya Khurana</b>";
                                            </pre>
                                            <pre>
                                                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.traits&nbsp;=&nbsp;["<b>DEV</b>", "<b>DESIGN</b>"];
                                            </pre>
                                            <pre>
                                                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age&nbsp;=&nbsp;new&nbsp;Date().getFullYear()&nbsp;-&nbsp;2001;
                                            </pre>
                                            <pre>
                                                6&nbsp;&nbsp;&nbsp;&nbsp;&#125;&nbsp;
                                            </pre>
                                            <pre>
                                                7&nbsp;&#125;&nbsp;
                                            </pre>
                                        </div>
                                    </div>
                                    <div className="color-box">
                                        <div className='box' style={{ background: "#6d2ae2" }}></div>
                                        <div className='box' style={{ background: "#9F8FEF" }}></div>
                                        <div className='box' style={{ background: "#8270DB" }}></div>
                                        <div className='box' style={{ background: "#0e1313" }}></div>
                                        <div className='box' style={{ background: "#DFD8FD" }}></div>
                                    </div>
                                </div>
                            </div>
                        </Intro>

                        <Box sx={{ mt: { sm: 5, md: 5, lg: 12 }, mb: 3 }}>
                            <Typography variant="h4" fontWeight="bold" textAlign="center">
                                Benefits
                            </Typography>
                            <Typography variant="subtitle1" textAlign="center" color="text.secondary">
                                Partnering with me for your web development needs means not only receiving a high-quality product but also benefiting
                            </Typography>
                            <div className="row g-4 mt-3">
                                {benefitsOne.map((benefit) => (
                                    <div className="col-md-6" key={benefit.id}>
                                        <div className="card h-100 border-0">
                                            <div className="card-body">
                                                <Typography variant="h6" fontWeight="bold" mb={2}>
                                                    {benefit.title}
                                                </Typography>
                                                <Divider sx={{ border: "2px solid #ccc", mb: 2, display: { xs: "block", sm: "block", md: "none" } }} />
                                                <Typography variant="body1" color="text.secondary" paragraph>
                                                    {benefit.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {benefitsTwo.map((benefit) => (
                                    <div className="col-md-4" key={benefit.id}>
                                        <div className="card h-100 border-0">
                                            <div className="card-body">
                                                <Typography variant="h6" fontWeight="bold" mb={2}>
                                                    {benefit.title}
                                                </Typography>
                                                <Divider sx={{ border: "2px solid #ccc", mb: 2, display: { xs: "block", sm: "block", md: "none" } }} />
                                                <Typography variant="body1" color="text.secondary" paragraph>
                                                    {benefit.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Box>
                        <Box className="d-flex justify-content-center align-items-center flex-wrap gap-3 my-3">
                            <a href="https://calendly.com/khuranabhavya24/30min" target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="contained"
                                    startIcon={<IoCall />}
                                    sx={{
                                        textTransform: "none",
                                        backgroundColor: "#6d2ae2",
                                        color: "#fff",
                                        "&:hover": {
                                            backgroundColor: "#6d2ae2",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    Book a Call
                                </Button>
                            </a>
                            <Button
                                variant="text"
                                endIcon={<FaLongArrowAltRight />}
                                sx={{
                                    textTransform: "none",
                                    color: "#6d2ae2",
                                    "&:hover": {
                                        color: "#6d2ae2",
                                    },
                                }}
                                onClick={() => navigate("/work")}
                            >
                                View Portfolio
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Home;

