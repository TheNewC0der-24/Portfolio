import React from 'react'
import styles from './Synergies.module.css'
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { FaBolt } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { MdTune, MdOutlineDiversity2 } from "react-icons/md";

import { HiUserGroup } from "react-icons/hi";

const CollaborativeExpertise = () => {
    const collaborativeExpertise = [
        {
            id: 1,
            title: "Collaborative Excellence",
            description: "In the field of web development, collaboration is my secret ingredient. While I am adept as a solo developer.",
            icon: <FaBolt />
        },
        {
            id: 2,
            title: "Collaborative Approach",
            description: "Collaboration lies at the core of my approach. Despite being a solo developer, I frequently join forces with a skilled team of designers.",
            icon: <IoSparkles />
        },
        {
            id: 3,
            title: "Collaborative Network",
            description: "Within my professional network, you'll discover a talented group of individuals who are equally dedicated to excellence.",
            icon: <BsFillGridFill />
        },
        {
            id: 4,
            title: "Diverse Perspectives",
            description: "Collaboration extends beyond mere cooperation; it involves harnessing a range of diverse perspectives.",
            icon: <MdOutlineDiversity2 />
        },
        {
            id: 5,
            title: "Seamless Integration",
            description: "Partnering with a team of experts doesn't imply complexity. Our collaboration is centered on smooth integration",
            icon: <MdTune />
        },
        {
            id: 6,
            title: "Client-Centeric Collaboration",
            description: "Collaboration goes beyond internal dynamics; it embodies a client-centric philosophy. We acknowledge the uniqueness of your project.",
            icon: <HiUserGroup />
        }
    ];

    return (
        <>
            <Box sx={{ mt: 4, mb: 3 }}>
                <Typography variant="h4" className={styles.title} fontWeight="bold" textAlign="center">
                    Collaborative Expertise
                </Typography>
                <Typography variant="subtitle1" textAlign="center" color="#6d2ae2">
                    I bring a well rounded skill set to the table, making me a versatile developer.
                </Typography>
                <div className="row g-4 mt-3">
                    {collaborativeExpertise.map((item) => (

                        <div className="col-md-6" key={item.id}>
                            <div className="card h-100 border-0">
                                <div className="row g-0">
                                    <div className={`col-md-5 d-flex align-items-center justify-content-center ${styles.icon}`}>
                                        <div className='p-2 rounded-circle' style={{ border: '2px solid #6d2ae2' }}>
                                            <div className='p-2 bg-dark rounded-circle'>
                                                <Avatar sx={{ width: 50, height: 50, bgcolor: "#6d2ae2", color: "#fff", }}>
                                                    {item.icon}
                                                </Avatar>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <Typography variant="h6" sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }} fontWeight="bold" mb={2}>
                                                {item.title}
                                            </Typography>
                                            <Divider sx={{ border: "2px solid #ccc", mb: 2, display: { xs: "block", sm: "block", md: "none" } }} />
                                            <Typography variant="body1" sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }} color="text.secondary" paragraph>
                                                {item.description}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Box>
        </>
    )
}

export default CollaborativeExpertise
