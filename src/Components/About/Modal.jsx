import React, { forwardRef } from 'react';
import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", paddingRight: '2rem' }}>
                    <DialogTitle>More about me</DialogTitle>
                    <IoMdCloseCircle fontSize={30} color='#6d2ae2' cursor='pointer' onClick={handleCloseModal} />
                </Box>
                <DialogContent sx={{
                    '& .MuiDialogContentText-root': {
                        color: '#dee2e6',
                    }
                }}>
                    <DialogContentText sx={{ textAlign: "center" }}>
                        I am a creative and skilled Frontend Developer with a passion for building elegant and intuitive user interfaces. With over 1 year of experience, I have worked on various web projects for clients in industries. I have expertise in experience with responsive design, accessibility, and website optimization. I have completed several online certification courses. I am a problem-solver with excellent communication skills and the ability to work well under pressure. I am committed to delivering high-quality solutions that meet user needs and exceed client expectations.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}