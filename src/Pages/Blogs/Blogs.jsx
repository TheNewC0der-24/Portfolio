import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme } from '../../Themes';
import SocialLinks from '../../SubComponents/SocialLinks/SocialLinks';
import {
    Box,
    Grid,
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Skeleton,
} from "@mui/material";
import { TfiWrite } from 'react-icons/tfi'
import { formatDate } from '../../Helpers/formatDate';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
    
    .sub-title span {
        background-image: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3) !important;
        background-clip: text !important;
        -moz-background-clip: text !important;
        -webkit-background-clip: text !important;
        -moz-text-fill-color: transparent !important;
        -webkit-text-fill-color: transparent !important;
    }

    .card {
        background: none !important;
    }

    a {
        text-decoration: none !important;
        color: #dee2e6;
    }

    .line {
        border: 1px solid #0e1313;
    }
`;

const Blogs = () => {
    const title = "Bhavya Khurana | Blogs";
    document.title = title;

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    const APIKey = import.meta.env.VITE_HASHNODE_API_KEY;

    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);

    const fetchPosts = async (page) => {
        const query = `
                query {
                    user(username: "BhavyaKhurana") {
                      publication {
                        posts(page: ${page - 1}) {
                          slug
                          title
                          brief
                          coverImage
                          dateAdded
                          cuid
                          _id
                        }
                      }
                    }
                }`;

        try {
            setLoading(true);
            const response = await fetch("https://api.hashnode.com", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${APIKey}`
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();
            setPosts(data.data.user.publication.posts);
            setLoading(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (posts.length === postsPerPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container my-3'>
                    <div className='text-center mb-5'>
                        <h1>.blogs()</h1>
                        <h6 className='sub-title fw-bold'>EXPLORE <span>INSIGHTS</span></h6>
                    </div>
                    <p className='text-center mx-auto w-75'>
                        Welcome to my blog, where I share my experiences, insights, and knowledge as a frontend developer.
                        Explore a wide range of topics, from web development best practices to the latest frontend technologies.
                        I'm passionate about learning and sharing, so I regularly update this space with fresh content.
                    </p>

                    <hr className="my-4 mx-5 line" />

                    <div className="container mt-5">
                        <div className="container">
                            <div className="container">
                                {
                                    loading ? (
                                        <Grid container spacing={2}>
                                            {Array.from(new Array(6)).map((index) => (
                                                <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                                                    <Card elevation={0} className='card'>
                                                        <CardHeader
                                                            avatar={
                                                                <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                                            }
                                                            title={
                                                                <Skeleton
                                                                    animation="wave"
                                                                    height={10}
                                                                    width="80%"
                                                                    style={{ marginBottom: 6 }}
                                                                />
                                                            }
                                                            subheader={
                                                                <Skeleton animation="wave" height={10} width="40%" />
                                                            }
                                                        />
                                                        <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
                                                        <CardContent>
                                                            <React.Fragment>
                                                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                                                <Skeleton animation="wave" height={10} width="80%" />
                                                            </React.Fragment>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    ) : (
                                        <Grid container spacing={2}>
                                            {currentPosts.map((post) => (
                                                <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                                                    <Card elevation={0} className='card' sx={{ height: "100%" }}>
                                                        <CardHeader
                                                            avatar={
                                                                <Avatar sx={{ bgcolor: "#6d2ae2", color: "#DFD8FD" }}>
                                                                    <TfiWrite />
                                                                </Avatar>
                                                            }
                                                            title={post.title}
                                                            subheader={formatDate(post.dateAdded)}
                                                        />

                                                        <CardMedia
                                                            component="img"
                                                            image={post.coverImage}
                                                            alt={post.title}
                                                        />

                                                        <CardContent>
                                                            <Typography variant="body2" color="text.secondary" component="p">
                                                                {post.brief}
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Button size="small" variant='contained'
                                                                sx={{
                                                                    textTransform: "capitalize",
                                                                    backgroundColor: "#6d2ae2",
                                                                    color: "#dee2e6",
                                                                    "&:hover": {
                                                                        backgroundColor: "#6d2ae2",
                                                                    },
                                                                }}>
                                                                <Link to={`/blog/${post.slug}`}>Read More</Link>
                                                            </Button>
                                                            <Button size="small" variant='contained'
                                                                sx={{
                                                                    textTransform: "capitalize",
                                                                    backgroundColor: "#6d2ae2",
                                                                    color: "#dee2e6",
                                                                    "&:hover": {
                                                                        backgroundColor: "#6d2ae2",
                                                                    },
                                                                }}>
                                                                <a href={`https://cynophilist.hashnode.dev/${post.slug}`} target="_blank" rel="noreferrer">
                                                                    Read On Hashnode
                                                                </a>
                                                            </Button>
                                                        </CardActions>
                                                    </Card>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    )
                                }

                                <Box my={5} sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "0.5rem" }}>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            textTransform: "capitalize",
                                            backgroundColor: "#6d2ae2",
                                            color: "#dee2e6",
                                            "&:hover": {
                                                backgroundColor: "#6d2ae2",
                                            },
                                        }}
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </Button>
                                    <Avatar variant='rounded' sx={{ bgcolor: "transparent", color: "#6d2ae2", border: "1px solid #6d2ae2" }}>
                                        {currentPage}
                                    </Avatar>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            textTransform: "capitalize",
                                            backgroundColor: "#6d2ae2",
                                            color: "#dee2e6",
                                            "&:hover": {
                                                backgroundColor: "#6d2ae2",
                                            },
                                        }}
                                        onClick={handleNextPage}
                                        disabled={currentPosts.length < postsPerPage}
                                    >
                                        Next
                                    </Button>
                                </Box>

                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider >
        </>
    )
}

export default Blogs;