import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { lightTheme } from '../Themes';

import axios from 'axios';

import ReactPaginate from 'react-paginate';

// Particles
import ParticleComponent from '../../subComponents/ParticleComponent';

// Icons
import { FaRegFolder } from 'react-icons/fa';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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
        backdrop-filter: blur(4px);
        background-color: rgba(255, 255, 255, 0.1);
    }

    .icon {
        color: #6d2ae2;
    }

    .links {
        color: ${props => props.theme.text};
        transition: 0.3s ease-in-out;
    }

    .links:hover {
        color: #6d2ae2;
    }
`;

const Project = () => {

    const [project, setProject] = useState();

    const [loading, setLoading] = useState(false);

    const perPage = 8;

    const url = `https://api.github.com/users/TheNewC0der-24/repos?per_page=${perPage}&page=1`;

    useEffect(() => {
        setLoading(true);
        axios.get(url)  // Get the data from the API
            .then((response) => {
                setProject(response.data);  // Set the data to the state
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchProject = async (pageNumber) => {
        const response = await fetch(
            `https://api.github.com/users/TheNewC0der-24/repos?per_page=${perPage}&page=${pageNumber}`
        );
        const data = await response.json();
        return data;
    };

    const handlePageClick = (data) => {
        let selected = data.selected;
        fetchProject(selected + 1).then((data) => {
            setProject(data);
        });
    }

    return (
        <>
            {
                loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <div className="spinner-border" style={{ color: "#6d2ae2" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <ThemeProvider theme={lightTheme}>
                        <GlobalStyle />
                        <SocialLinks />
                        <ParticleComponent theme="light" />
                        <div className="container">
                            <div className="container">
                                <div className="container">
                                    <h1 className="mt-3 text-center">.work()</h1>
                                    <h6 className='sub-title text-center fw-bold mb-4'>My <span>Projects</span></h6>

                                    <div className="row g-4">
                                        {
                                            project && project.map((post) => {
                                                return (
                                                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
                                                        <div className="card shadow border-0 h-100" key={post.id}>
                                                            <div className="card-body d-flex justify-content-between flex-column">
                                                                <div className='d-flex justify-content-between align-items-center gap-2 mb-3'>
                                                                    <div>
                                                                        <FaRegFolder className='icon' size={30} />
                                                                    </div>
                                                                    <div className='d-flex gap-2 align-items-center my-3'>
                                                                        <a href={post.html_url} target="_blank" rel="noreferrer">
                                                                            <FiGithub className='links' size={20} />
                                                                        </a>

                                                                        {
                                                                            post.homepage && (
                                                                                <a href={post.homepage} target="_blank" rel="noreferrer">
                                                                                    <FiExternalLink className='links' size={23} />
                                                                                </a>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <h4 className="card-title fw-bold">{post.name}</h4>
                                                                <p className="card-text">{post.description}</p>

                                                                <div className='d-flex flex-wrap gap-2'>
                                                                    {
                                                                        post.topics.map((topic) => {
                                                                            return (
                                                                                <span key={topic} className='badge' style={{ backgroundColor: "#DFD8FD", color: "#6d2ae2" }}>{topic}</span>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className='my-3 sticky-bottom'>
                                        <ReactPaginate
                                            previousLabel={"<<"}
                                            nextLabel={">>"}
                                            breakLabel={"..."}
                                            pageCount={7}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={3}
                                            onPageChange={handlePageClick}
                                            containerClassName={"pagination justify-content-center flex-wrap"}
                                            pageClassName={"page-item"}
                                            pageLinkClassName={"page-link"}
                                            previousClassName={"page-item"}
                                            previousLinkClassName={"page-link"}
                                            nextClassName={"page-item"}
                                            nextLinkClassName={"page-link"}
                                            breakClassName={"page-item"}
                                            breakLinkClassName={"page-link"}
                                            activeClassName={"active"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ThemeProvider>
                )
            }
        </>
    )
}

export default Project;