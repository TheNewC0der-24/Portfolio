import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { createGlobalStyle } from 'styled-components';
import { Box, Button } from '@mui/material';
import { IoCall } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks'
import Benefits from '../../Components/Synergies/Benefits'
import CollaborativeExpertise from '../../Components/Synergies/CollaborativeExpertise';

const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(90deg, #dee2e6 50%, #0e1313 50%);
    }

    .text-purple {
        color: #6d2ae2 !important;
    }

    .slate-bg:hover {
        background: #dee2e6;
    }
    
    .btn .btn-icon {
        transition: all 0.3s ease-in-out;
    }

    .btn:hover .btn-icon {
        transform  translateX(5px);
    }
`;

const tabs = ["Benefits", "Collaborative Expertise",];

const Synergy = () => {
    const navigate = useNavigate();

    const [selected, setSelected] = useState(tabs[0]);

    return (
        <>
            <GlobalStyle />
            <SocialLinks />
            <div className="container">
                <div className="container">
                    <div className="container">
                        <Box className="px-5 py-5" sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', 'sm': 'center', 'md': 'flex-start' },
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            background: 'linear-gradient(90deg, #0e1313 50%, #dee2e6 50%)',
                            borderBottomLeftRadius: "50px",
                            borderBottomRightRadius: "50px"
                        }}>
                            {tabs.map((tab) => (
                                <Chip
                                    text={tab}
                                    selected={selected === tab}
                                    setSelected={setSelected}
                                    key={tab}
                                />
                            ))}
                        </Box>

                        {selected === "Benefits" && <Benefits />}
                        {selected === "Collaborative Expertise" && <CollaborativeExpertise />}

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
                                className='btn'
                                endIcon={<FaLongArrowAltRight className='btn-icon' />}
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
        </>
    )
}

const Chip = ({
    text,
    selected,
    setSelected,
}) => {
    return (
        <Button
            onClick={() => setSelected(text)}
            size="large"
            sx={{ position: 'relative', textTransform: "none", borderRadius: "4px" }}
            className={`${selected ? "text-white fs-5" : `text-purple fw-bold fs-5 slate-bg`}`}
        >
            <span style={{ position: "relative", zIndex: 10 }}>{text}</span>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: 0,
                        background: 'linear-gradient(to right, #7C3AED, #4F46E5)',
                        borderRadius: '4px'
                    }}
                ></motion.span>
            )}
        </Button>
    );
};

export default Synergy
