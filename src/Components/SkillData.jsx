import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getIconForTechnology } from '../Helpers/getIconForTechnology';
import { Avatar, Button } from '@mui/material';

const SkillData = ({ icon, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <Avatar variant='rounded' className='skill-avatar'>
                {getIconForTechnology(icon)}
            </Avatar>
        </motion.div>
    )
}

export default SkillData
