import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme } from '../../Themes';
import { Container, Box, Typography, Skeleton, Divider, Chip, Link, Grid, Button } from '@mui/material';
import { BsBook } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { CiViewTimeline } from 'react-icons/ci';
import { BiCommentDetail } from 'react-icons/bi';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { TfiHeadphone } from "react-icons/tfi";
import { gql, request } from 'graphql-request';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CountUp from 'react-countup';
import author from '../../assets/Images/MyImgs/myPic.png'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }

    a {
        text-decoration: none;
        color: #6d2ae2;
    }
`;

const BlogPost = () => {
    const { slug } = useParams();

    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);

    const APIKey = import.meta.env.VITE_HASHNODE_API_KEY;
    const API_URL = "https://gql.hashnode.com";
    const API_HEADERS = {
        "Content-type": "application/json",
        "Authorization": `Bearer ${APIKey}`,
    }

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const query = gql`
                query {
                    publication(host: "cynophilist.hashnode.dev") {
                        post(slug: "${slug}") {
                            coverImage {
                                url
                            }
                            title
                            subtitle
                            slug
                            reactionCount
                            views
                            readTimeInMinutes
                            audioUrls {
                                male
                            }
                            content {
                                markdown
                            }
                            tags {
                                name
                            }
                            author {
                                name
                                bio {
                                    markdown
                                }
                            }
                        }
                    }
                }`;

        try {
            const response = await request(API_URL, query, API_HEADERS);
            const data = response;
            setPost(data.publication.post);
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ my: 5 }}>
                <Box sx={{ width: '100%' }}>
                    <Skeleton variant="rectangular" width="100%" height={400} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Box>
            </Container>
        )
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Container maxWidth="md" sx={{ my: 5 }}>
                <div className="d-flex justify-content-center mb-3">
                    <img src={post.coverImage.url} alt={post.title} className='rounded img-fluid' />
                </div>
                <Typography variant="h4" textAlign="center" gutterBottom>{post.title}</Typography>
                <Typography variant="h5" textAlign="center" gutterBottom>{post.subtitle}</Typography>

                {post.audioUrls && (
                    <Box p={3} mt={3} mb={3} sx={{ border: "1px solid #ccc", borderRadius: "0.5rem" }}>
                        <Typography variant="subtitle1" textAlign="center" mb={3} gutterBottom>
                            <TfiHeadphone className='fs-5' /> PLAY THIS ARTICLE
                        </Typography>
                        <audio controls style={{ width: "100%" }}>
                            <source src={post.audioUrls.male} />
                        </audio>
                    </Box>
                )}

                {/* <Divider sx={{ mb: 3, bgcolor: "#000" }} /> */}
                <Box sx={{ display: "flex", justifyContent: { xs: "start", sm: "space-between" }, alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
                    <Link href={`https://cynophilist.hashnode.dev/${slug}`} underline="hover" target='_blank' sx={{
                        color: "#0e1313", '&:hover': {
                            color: "#6d2ae2"
                        }
                    }}>
                        <CountUp end={post.reactionCount} /> Reactions <FaHeart />
                    </Link>

                    <Typography variant="body1">
                        <CiViewTimeline className='fs-4' /> <CountUp end={post.views} /> views
                    </Typography>
                    <Typography variant="body1">
                        <BsBook /> {post.readTimeInMinutes} min read
                    </Typography>
                </Box>
                <Divider sx={{ my: 3, bgcolor: "#000" }} />

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {post.content.markdown}
                </ReactMarkdown>

                <Box my={3} sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    {post.tags && post.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            sx={{ border: "none", bgcolor: "#6d2ae2", color: "#DFD8FD" }}
                            label={tag.name}
                        />
                    ))}
                </Box>
            </Container>

            <Divider sx={{ my: 3, bgcolor: "#000" }} />
            <Container maxWidth="lg">
                <Typography variant="subtitle1" gutterBottom>
                    <Link href={`https://cynophilist.hashnode.dev/${slug}`} underline="hover" target='_blank' sx={{
                        color: "#0e1313", '&:hover': {
                            color: "#6d2ae2"
                        }
                    }}>
                        <BiCommentDetail className='fs-1' /> Leave a comment or react to the blog post on Hashnode.
                    </Link>
                </Typography>

            </Container>
            <Divider sx={{ my: 3, bgcolor: "#000" }} />

            <Container maxWidth="lg" sx={{ mb: 5 }}>
                <Typography variant="h6" sx={{ borderBottom: "4px solid #6d2ae2", width: "fit-content" }} gutterBottom>
                    About the author
                </Typography>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={2}>
                        <img src={author} alt="Bhavya Khurana" className='img-fluid' width={150} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h5" gutterBottom>
                            {post.author.name}
                        </Typography>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {post.author.bio.markdown}
                        </ReactMarkdown>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "50px",
                                textTransform: "capitalize",
                                color: "#6d2ae2",
                                borderColor: "#6d2ae2",
                                '&:hover': {
                                    color: "#6d2ae2",
                                    borderColor: "#6d2ae2",
                                }
                            }}
                            startIcon={<HiOutlineUserAdd />}
                        >
                            <a href={`https://cynophilist.hashnode.dev/${slug}`} rel="noreferrer" target="_blank">
                                Follow
                            </a>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default BlogPost
