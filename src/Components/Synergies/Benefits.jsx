import React from 'react'
import styles from './Synergies.module.css'
import { Box, Divider, Typography } from '@mui/material';

const Benefits = () => {

    const benefitsOne = [
        {
            id: 1,
            title: "Customized Designs Tailored to Your Needs",
            description: "I recognize the significance of crafting a distinctive and memorable brand identity. Through a collaborative process, I work closely with you to ensure that your website authentically mirrors your brand's personality, values, and objectives. The outcome is a tailor-made design that not only distinguishes you from the competition but also deeply resonates with your target audience."
        },
        {
            id: 2,
            title: "Creative Excellence that Captivates Visitors",
            description: "Capitalizing on a discerning eye for aesthetics and a fervor for creativity, I thrive in the art of crafting visually striking and compelling websites. Through the harmonious integration of exquisite visuals, captivating typography, and a strategic infusion of color, I orchestrate an immersive and impactful user experience. The end result ensures that your website not only captivates visitors but also leaves a lasting impression, elevating your brand's credibility and professionalism."
        }
    ];
    const benefitsTwo = [
        {
            id: 1,
            title: "User-Centric Approach for Optimal Experience",
            description: "Centrally focused on user experience (UX) design, I prioritize your visitors throughout the entire design process. Through thorough research and the application of user testing techniques, I guarantee that your website is not only intuitive but also effortlessly navigable, seamlessly guiding users towards their objectives. The outcome is a gratifying user journey that significantly enhances engagement and boosts conversion rates."
        },
        {
            id: 2,
            title: "Mobile-First Design for Broad Accessibility",
            description: "In the current mobile-centric environment, the significance of a responsive website cannot be overstated. My expertise lies in crafting user interfaces that are seamlessly compatible with various devices and screen dimensions. Regardless of whether your audience accesses your website from a desktop, smartphone, or tablet, the design will remain visually appealing and function smoothly. This ensures effective outreach and engagement with your audience across diverse platforms."
        },
        {
            id: 3,
            title: "Expertise in Cutting-Edge Technologies",
            description: "Armed with proficiency in HTML, CSS, JavaScript, and other front-end technologies, I have the technical acumen to transform your design concepts into reality. Utilizing the latest web technologies, I integrate seamless animations and interactive elements to elevate user engagement and deliver a dynamic user experience."
        }
    ];

    return (
        <>
            <Box sx={{ mt: 4, mb: 3 }}>
                <Typography variant="h4" className={styles.title} fontWeight="bold" textAlign="center">
                    Benefits
                </Typography>
                <Typography variant="subtitle1" textAlign="center" color="#6d2ae2">
                    Partnering with me for your web development needs means not only receiving a high-quality product but also benefiting
                </Typography>
                <div className="row g-4 mt-3">
                    {benefitsOne.map((benefit) => (
                        <div className="col-md-6" key={benefit.id}>
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <Typography variant="h6" sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }} fontWeight="bold" mb={2}>
                                        {benefit.title}
                                    </Typography>
                                    <Divider sx={{ border: "2px solid #ccc", mb: 2, display: { xs: "block", sm: "block", md: "none" } }} />
                                    <Typography variant="body1" sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }} color="text.secondary" paragraph>
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
                                    <Typography variant="h6" sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }} fontWeight="bold" mb={2}>
                                        {benefit.title}
                                    </Typography>
                                    <Divider sx={{ border: "2px solid #ccc", mb: 2, display: { xs: "block", sm: "block", md: "none" } }} />
                                    <Typography variant="body1" sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }} color="text.secondary" paragraph>
                                        {benefit.description}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Box>
        </>
    )
}

export default Benefits
