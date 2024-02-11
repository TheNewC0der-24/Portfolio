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
    IconButton
} from "@mui/material";
import { TfiWrite } from 'react-icons/tfi'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { formatDate } from '../../Helpers/formatDate';
import { gql, request } from 'graphql-request';

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

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [endCursor, setEndCursor] = useState("");
    const [hasNextPage, setHasNextPage] = useState(true);

    const postsPerPage = 6;

    const APIKey = import.meta.env.VITE_HASHNODE_API_KEY;
    const API_URL = "https://gql.hashnode.com";
    const API_HEADERS = {
        "Content-type": "application/json",
        "Authorization": `Bearer ${APIKey}`,
    }

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const cursor = currentPage === 1 ? endCursor : null;

        const query = gql`
            query {
                publication(host: "cynophilist.hashnode.dev") {
                    posts(first: ${postsPerPage}, ${cursor ? `after: "${cursor}"` : ''}) {
                        edges {
                            node {
                                id
                                title
                                brief
                                url
                                coverImage{
                                    url
                                }
                                slug
                                publishedAt
                            }
                        }
                        pageInfo {
                            hasNextPage
                            endCursor
                        }
                    }
                }
            }   
        `;

        try {
            const res = await request(API_URL, query, API_HEADERS);
            const blogs_data = res?.publication.posts.edges;
            const hasNextPage = res?.publication.posts.pageInfo.hasNextPage;
            setPosts(blogs_data);
            setEndCursor(res?.publication.posts.pageInfo.endCursor);
            setHasNextPage(hasNextPage);
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }

    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        fetch();
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
        fetch();
    }

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
                                {loading ? (
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
                                        {posts?.map((post) => (
                                            <Grid key={post.node.id} item xs={12} sm={12} md={6} lg={4}>
                                                <Card elevation={0} className='card' sx={{ height: "100%" }}>
                                                    <CardHeader
                                                        avatar={
                                                            <Avatar sx={{ bgcolor: "#6d2ae2", color: "#DFD8FD" }}>
                                                                <TfiWrite />
                                                            </Avatar>
                                                        }
                                                        title={post.node.title}
                                                        subheader={formatDate(post.node.publishedAt)}
                                                    />

                                                    <CardMedia
                                                        component="img"
                                                        image={post.node.coverImage.url}
                                                        alt={post.node.title}
                                                    />

                                                    <CardContent>
                                                        <Typography variant="body2" color="text.secondary" component="p">
                                                            {post.node.brief}
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
                                                            <Link to={`/blog/${post.node.slug}`}>Read More</Link>
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
                                                            <a href={post.node.url} target="_blank" rel="noreferrer">
                                                                Read On Hashnode
                                                            </a>
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}

                                {!loading && (
                                    <Box my={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                                        <IconButton
                                            onClick={handlePrevPage}
                                            disabled={currentPage === 1}
                                        >
                                            <MdKeyboardArrowLeft />
                                        </IconButton>
                                        <Avatar sx={{ bgcolor: "#6d2ae2", color: "#dee2e6", width: "35px", height: "35px", fontSize: "16px" }}>
                                            {currentPage}
                                        </Avatar>
                                        <IconButton
                                            onClick={handleNextPage}
                                            disabled={!hasNextPage}
                                        >
                                            <MdKeyboardArrowRight />
                                        </IconButton>
                                    </Box>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Blogs;