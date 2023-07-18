import React, { forwardRef } from 'react';
import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    Typography,
    Slide,
} from '@mui/material';

import { IoMdCloseCircle } from 'react-icons/io';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="bottom" ref={ref} {...props} />;
});

export default function Modal({ handleCloseModal, open }) {

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseModal}
                sx={{
                    '& .MuiDialog-paper': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(10px)',
                        color: '#dee2e6',
                        boxShadow: 'none',
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'none',
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", padding: '1rem 2rem 0 2rem' }}>
                    <Typography sx={{ bgcolor: '#6d2ae2', padding: '0.2rem 0.5rem', borderRadius: "4px" }}>More about me</Typography>
                    <IoMdCloseCircle fontSize={30} color='#6d2ae2' cursor='pointer' onClick={handleCloseModal} />
                </Box>
                <DialogContent sx={{
                    '& .MuiDialogContentText-root': {
                        color: '#dee2e6',
                    }
                }}>
                    <DialogContentText sx={{ textAlign: "center" }}>
                        I am a creative and proficient Frontend Developer with over 1 year of experience, I have successfully worked on various web projects
                        for clients across different industries. My expertise lies in responsive design, accessibility, and website optimization. Additionally,
                        I have completed several online certification courses. I am a problem-solver with excellent communication skills, and I thrive under
                        pressure. My commitment is to deliver high-quality solutions that not only meet user needs but also exceed client expectations.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}