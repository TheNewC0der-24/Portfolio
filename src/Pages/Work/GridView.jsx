import React, { useEffect, useState } from 'react';
import {
    Grid,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    CardActions,
    IconButton,
    Collapse,
    Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GoProject } from 'react-icons/go';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { MdOutlineExpandMore } from 'react-icons/md';
import Aos from 'aos';
import { formatDate } from '../../Helpers/formatDate';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const GridView = ({ filteredProjects, searchTerm }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [expanded, setExpanded] = useState({});

    const handleExpandClick = (projectId) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [projectId]: !prevExpanded[projectId],
        }));
    };

    return (
        <>
            <Grid container spacing={5} sx={{ mb: 5, mt: 5 }}>
                {filteredProjects?.length === 0 ? (
                    <Box sx={{ display: "flex", justifyContent: "center", margin: "auto", mt: 5 }}>
                        <Typography variant='h5'>No Work found with topic <span className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{searchTerm}</span></Typography>
                    </Box>
                ) :
                    filteredProjects?.map((item) => (
                        <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
                            <Card sx={{ borderTop: '5px solid #6d2ae2' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: "#DFD8FD", color: "#6d2ae2" }}>
                                            <GoProject />
                                        </Avatar>
                                    }
                                    title={item.name}
                                    subheader={formatDate(item.created_at)}
                                />
                                <LazyLoadImage
                                    src={item.image}
                                    alt={item.name}
                                    effect="blur"
                                    className='img-fluid'
                                />
                                <CardActions disableSpacing>
                                    <IconButton href={item.html_url} target="_blank" rel="noreferrer">
                                        <FiGithub className='links' />
                                    </IconButton>
                                    {
                                        item.homepage && (
                                            <IconButton href={item.homepage} target="_blank" rel="noreferrer">
                                                <FiExternalLink className='links' />
                                            </IconButton>
                                        )
                                    }

                                    <ExpandMore
                                        expand={expanded[item.id]}
                                        onClick={() => handleExpandClick(item.id)}
                                        aria-expanded={expanded[item.id]}
                                    >
                                        <MdOutlineExpandMore />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded[item.id]} timeout="auto" unmountOnExit>
                                    <CardContent sx={{ borderTop: "1px solid #6d2ae2" }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        <div className='d-flex flex-wrap gap-2 mt-2'>
                                            {
                                                item.topics.map((topic) => {
                                                    return (
                                                        <span key={topic} className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{topic}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </>

    )
}

export default GridView;