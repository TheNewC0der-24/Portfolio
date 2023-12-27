import React, { useState, useEffect } from 'react'
import { Card, CardContent, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Avatar } from '@mui/material'
import { FaArrowRight, FaXmark } from "react-icons/fa6";
import Aos from 'aos';
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const data = [
    {
        id: 1,
        title: "You can Email me here",
        text: "khuranabhavya24@gmail.com",
        link: "mailto:khuranabhavya24@gmail.com"
    },
    {
        id: 2,
        title: "Give me a call on",
        text: "+91 9352433995",
        link: "tel:+919352433995"
    },
    {
        id: 3,
        title: "Location",
        text: "Somewhere in the world",
    }
]

const ContactCard = () => {
    const [locationModal, setLocationModal] = useState(false);

    const openLocationModal = () => {
        setLocationModal(true);
    }

    const closeLocationModal = () => {
        setLocationModal(false);
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            {data.map((item) => (
                <Card sx={{ bgcolor: "#dee2e6", mb: 2 }} key={item.id}>
                    <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: '2rem' }}>
                        <div>
                            <Typography variant="subtitle1" sx={{ textTransform: "capitalize", wordBreak: "break-all" }} gutterBottom>{item.title}</Typography>
                            <Typography fontWeight="bold" variant="subtitle1" sx={{ wordBreak: "break-all" }}>{item.text}</Typography>
                        </div>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "40px",
                            height: "40px",
                            borderRadius: "4px",
                            border: "2px solid #0e1313",
                            color: "#0e1313",
                            cursor: "pointer",
                        }}
                            onClick={() =>
                                item.id === 3 ? openLocationModal() : window.open(item.link, "_blank")
                            }>
                            <FaArrowRight size={20} />
                        </Box>
                    </CardContent>
                </Card>
            ))}

            <Box mt={5}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#6d2ae2", textAlign: { xs: "center", sm: "center", md: "start" } }}>
                    My Social Profiles
                </Typography>

                <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "center", md: "start" }, alignItems: "center" }}>
                    <Box sx={{
                        bgcolor: "#dee2e6",
                        mt: 1,
                        width: "100%",
                        maxWidth: { xs: "250px", sm: "275px", md: "300px" },
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: 2,
                        borderRadius: "4px",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}>
                        <a href="https://github.com/TheNewC0der-24" rel="noreferrer" target="_blank">
                            <Avatar sx={{ bgcolor: "#6d2ae2", width: 50, height: 50, mx: "auto", boxShadow: 'inset 0 0 5px 5px #9265df', borderRadius: "8px" }}>
                                <FaGithub className='fs-3' />
                            </Avatar>
                        </a>
                        <a href="https://www.linkedin.com/in/bhavya-khurana/" rel="noreferrer" target="_blank">
                            <Avatar sx={{ bgcolor: "#6d2ae2", width: 50, height: 50, mx: "auto", boxShadow: 'inset 0 0 5px 5px #9265df', borderRadius: "8px" }}>
                                <FaLinkedin className='fs-3' />
                            </Avatar>
                        </a>
                        <a href="https://twitter.com/Cynophilist_B" rel="noreferrer" target="_blank">
                            <Avatar sx={{ bgcolor: "#6d2ae2", width: 50, height: 50, mx: "auto", boxShadow: 'inset 0 0 5px 5px #9265df', borderRadius: "8px" }}>
                                <FaXTwitter className='fs-3' />
                            </Avatar>
                        </a>
                    </Box>
                </Box>
            </Box>

            <Dialog
                open={locationModal}
                onClose={closeLocationModal}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                        <Typography variant="h5">Location</Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={closeLocationModal}>
                            <FaXmark style={{ color: "#0e1313" }} />
                        </IconButton>
                        <Typography
                            align="center"
                            variant="body2"
                            color="#6d2ae2"
                            fontWeight="bold"
                        >
                            Esc
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent dividers>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.235556106043!2d75.76865537515083!3d26.89601837665712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db467cd6dec99%3A0x4fb9c9e79e7fb618!2s5%2C%20Ambeshwar%20Colony%2C%20Shiv%20Puri%20Colony%2C%20Ramnagar%2C%20Jaipur%2C%20Rajasthan%20302007!5e0!3m2!1sen!2sin!4v1698606854285!5m2!1sen!2sin"
                        width="100%"
                        height="400px"
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={closeLocationModal}
                        sx={{
                            color: "#6d2ae2", borderColor: "#6d2ae2",
                            '&:hover': {
                                backgroundColor: "#6d2ae2",
                                color: "#fff",
                            }
                        }}
                    >Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ContactCard
