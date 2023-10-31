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

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);

    const APIKey = import.meta.env.VITE_HASHNODE_API_KEY;

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const query = `
                query {
                    post(slug: "${slug}", hostname: "cynophilist.hashnode.dev") {
                        slug
                        title
                        contentMarkdown
                        readTime
                        totalReactions
                        popularity
                        views
                        tags {
                            name
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
            setPost(data.data.post);
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
            <Container maxWidth="lg" sx={{ my: 5 }}>
                <Typography variant="h3" gutterBottom>{post.title}</Typography>
                <Divider sx={{ mb: 3, bgcolor: "#000" }} />
                <Box sx={{ display: "flex", justifyContent: { xs: "start", sm: "space-between" }, alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
                    <Link href={`https://cynophilist.hashnode.dev/${slug}`} underline="hover" target='_blank' sx={{
                        color: "#0e1313", '&:hover': {
                            color: "#6d2ae2"
                        }
                    }}>
                        <CountUp end={post.totalReactions} /> Reactions <FaHeart />
                    </Link>

                    <Typography variant="body1">
                        <CountUp end={post.popularity} /> Popularity
                    </Typography>

                    <Typography variant="body1">
                        <CiViewTimeline className='fs-4' /> <CountUp end={post.views} /> views
                    </Typography>
                    <Typography variant="body1">
                        <BsBook /> {post.readTime} min read
                    </Typography>
                </Box>
                <Divider sx={{ my: 3, bgcolor: "#000" }} />

                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {post.contentMarkdown}
                </ReactMarkdown>

                <Box my={3}>
                    {post.tags && post.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            sx={{ mr: 2, border: "none", bgcolor: "#6d2ae2", color: "#DFD8FD" }}
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
                    <Grid item xs={12} sm={7}>
                        <Typography variant="h5" gutterBottom>
                            Bhavya Khurana
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            👋 Hi there! I'm Bhavya Khurana, a frontend developer with a passion for crafting delightful user experiences.
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            🔧 With expertise in HTML, CSS, and JavaScript, I specialize in building responsive and interactive web applications. I love diving into the intricacies of frontend frameworks such as React and Angular, harnessing their power to create dynamic and engaging user interfaces.
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            📚 I'm also adept at managing documentation, ensuring that projects are well-documented and easy to understand for both developers and stakeholders. Clear and concise documentation is crucial for efficient collaboration and future maintainability.
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            🌟 Passionate about staying up-to-date with the latest trends and best practices in frontend development, I constantly seek opportunities to expand my knowledge and skill set. I'm an avid learner and enjoy sharing my expertise with others through mentoring.
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            🚀 If you're looking for a dedicated frontend developer who can bring your vision to life, or if you're interested in exploring the world of frontend development through mentoring, feel free to reach out! Let's collaborate and create remarkable digital experiences together.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
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
        </ThemeProvider >
    )
}

export default BlogPost
