import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    CardActions,
    IconButton,
    Collapse,
    Box,
    // Skeleton
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
    // const [isLoading, setIsLoading] = useState(true);
    // const [hoveredCard, setHoveredCard] = useState(null);

    const handleExpandClick = (projectId) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [projectId]: !prevExpanded[projectId],
        }));
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, []);


    // const handleHoverStart = (cardId) => {
    //     setHoveredCard(cardId);
    // };

    // const handleHoverEnd = () => {
    //     setHoveredCard(null);
    // };

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
                            {/* <motion.div
                                className={`card border-0 text-bg-dark ${hoveredCard === item.id ? 'hovered' : ''}`}
                                onMouseEnter={() => handleHoverStart(item.id)}
                                onMouseLeave={handleHoverEnd}
                            >

                                <img src={item.image} className="card-img img-fluid" alt={item.name} />
                                <motion.div className="card-img-overlay bg-dark"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: hoveredCard === item.id ? 1 : 0, y: hoveredCard === item.id ? 0 : 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card sx={{ borderBottom: '5px solid #6d2ae2' }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: "#DFD8FD", color: "#6d2ae2" }}>
                                                    <GoProject />
                                                </Avatar>
                                            }
                                            title={item.name}
                                            subheader={formatDate(item.created_at)}
                                        />
                                        <Box px={2}
                                            sx={{
                                                height: '100px',
                                                overflow: 'hidden'
                                            }}
                                        >
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
                                        </Box>
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
                                        </CardActions>

                                    </Card>
                                </motion.div>
                            </motion.div> */}

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
                                {/* {
                                    isLoading ? (
                                        <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
                                    ) : ( */}
                                <LazyLoadImage
                                    src={item.image}
                                    alt={item.name}
                                    effect="blur"
                                    className='img-fluid'
                                />
                                {/* )
                                } */}
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