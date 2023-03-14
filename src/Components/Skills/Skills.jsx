import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Images`
import cpp from '../../assets/Languages/c++.png';
import python from '../../assets/Languages/python.png';
import js from "../../assets/Languages/js.png";
import ts from "../../assets/Languages/ts.svg";
import sass from "../../assets/Languages/sass.png";
import html from "../../assets/Languages/html.png";
import css from "../../assets/Languages/css.png";
import reactJs from "../../assets/Languages/reactJs.png";
import angular from "../../assets/Languages/angular.png";
import bootstrap from "../../assets/Languages/bootstrap.png";
import mui from "../../assets/Languages/mui.png";
import tailwindCss from "../../assets/Languages/tailwindCss.png";
import antD from "../../assets/Languages/antD.png";
import jquery from "../../assets/Languages/jquery.png";
import redux from "../../assets/Languages/redux.svg";
import npm from "../../assets/Languages/npm.png";
import yarn from "../../assets/Languages/yarn.png";
import vite from "../../assets/Languages/vite.png";
import git from "../../assets/Languages/git.png";
import github from "../../assets/Languages/github.png";
import heroku from "../../assets/Languages/heroku.png";
import netlify from "../../assets/Languages/netlify.png";
import vercel from "../../assets/Languages/vercel.png";
import sql from "../../assets/Languages/sql.png";
import windows from "../../assets/Languages/windows.png";
import linux from "../../assets/Languages/linux.png";
import ubuntu from "../../assets/Languages/ubuntu.png";
import vscode from "../../assets/Languages/vscode.png";
import pycharm from "../../assets/Languages/pycharm.png";
import atom from "../../assets/Languages/atom.png";
import markdown from "../../assets/Languages/markdown.png";
import latex from "../../assets/Languages/latex.png";

// Icons
import { FaCode } from 'react-icons/fa';

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { lightTheme } from '../Themes';

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

    .card-img-top {
        width: 90%;
    }

    // .card-img-top:hover {
    //     width: 100%;
    // }

    .icon {
        font-size: 2.5rem;
        color: ${props => props.theme.body};
        background: linear-gradient(to right top, #6610f2, #6d2ae2, #a020f0, #b24bf3);
        border-radius: 50%;
        padding: 5px;
    }

    .img {
        box-shadow: inset -3px 3px 7px #bdc0c4,
                    inset 3px -3px 7px #ffffff;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    .img-not-hover {
        box-shadow: inset -3px 3px 7px #bdc0c4,
                    inset 3px -3px 7px #ffffff;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    .img:hover {
        box-shadow: 3px 3px 10px #abaeb1,
                    -3px -3px 10px #ffffff;
        transform: translateY(-2px);
    }

    .line {
        border: 2px solid #6d2ae2;
    }
`;

const Skills = () => {

    const title = "Bhavya Khurana | Skills";
    document.title = title;

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container my-3'>
                    <div className='text-center mb-5'>
                        <h1>.skills()</h1>
                        <h6 className='sub-title fw-bold'>MY <span>LEARNINGS</span></h6>
                    </div>
                    <p className='text-center mx-auto w-75'>
                        These are my skills and this contains all the web technologies, programming languages, databases, frameworks, libraries, tools and hosting platforms that I have learnt
                        until now. I am constantly learning, therefore I may update this section more often.
                    </p>

                    <hr className="my-4 mx-5 line" />

                    <div className="container mt-5">
                        <div className="container">
                            <div className="container">
                                <div className="row g-5">
                                    {/* Languages and Web Technologies */}
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className='d-flex align-items-center gap-2'>
                                            <FaCode className='icon' />
                                            <h5>LANGUAGES</h5>
                                        </div>
                                        <hr className='w-50' />
                                        <div className='hstack mt-4 gap-3 flex-wrap'>
                                            <img src={cpp} width={75} className='img-fluid img' alt="C++" />
                                            <img src={python} width={75} className='img-fluid img p-1' alt="Python" />
                                            <img src={js} width={75} className='img-fluid img p-2' alt="JavaScript" />
                                            <img src={ts} width={75} className='img-fluid img p-1' alt="TypeScript" />
                                            <img src={sass} width={75} className='img-fluid img p-1' alt="Sass" />
                                        </div>
                                        <div className='d-flex align-items-center gap-2 mt-5'>
                                            <FaCode className='icon' />
                                            <h5>WEB TECHNOLOGIES</h5>
                                        </div>
                                        <hr className='w-50' />
                                        <div className='hstack mt-4 gap-3 flex-wrap'>
                                            <img src={html} width={75} className='img-fluid img p-2' alt="HTML" />
                                            <img src={css} width={75} className='img-fluid img p-2' alt="CSS" />
                                            <img src={js} width={75} className='img-fluid img p-2' alt="JavaScript" />
                                            <img src={reactJs} width={75} className='img-fluid img p-1' alt="React.JS" />
                                            <img src={angular} width={75} className='img-fluid img' alt="Angular" />
                                        </div>
                                    </div>

                                    {/* Frameworks, Platforms and Libraries */}
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className='d-flex align-items-center gap-2'>
                                            <FaCode className='icon' />
                                            <h5>FRAMEWORKS, PLATFORMS AND LIBRARIES</h5>
                                        </div>
                                        <hr className='w-50' />
                                        <div className='hstack mt-4 gap-4 flex-wrap'>
                                            <div className='vstack gap-3'>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={bootstrap} width={50} className='img-fluid' alt="Bootstrap" />
                                                    <h6>Bootstrap</h6>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={mui} width={50} className='img-fluid' alt="MUI" />
                                                    <h6>Material UI</h6>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={tailwindCss} width={50} className='img-fluid' alt="Tailwind CSS" />
                                                    <h6>Tailwind CSS</h6>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={antD} width={50} className='img-fluid' alt="antD" />
                                                    <h6>Ant Design</h6>
                                                </div>
                                            </div>
                                            <div className='vstack gap-3 mt-4'>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={js} width={50} className='img-fluid' alt="Vanills.JS" />
                                                    <h6>Vanilla JavaScript</h6>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={redux} width={50} className='img-fluid' alt="Redux" />
                                                    <h6>Redux</h6>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={jquery} width={50} className='img-fluid' alt="jQuery" />
                                                    <h6>jQuery</h6>
                                                </div>
                                            </div>
                                            <div className='vstack gap-3 mt-4'>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={npm} width={50} className='img-fluid' alt="npm" />
                                                    <h6>npm</h6>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={yarn} width={50} className='img-fluid' alt="Yarn" />
                                                    <h6>Yarn</h6>
                                                </div>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <img src={vite} width={50} className='img-fluid' alt="Vite" />
                                                    <h6>Vite</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    {/* Database and OS */}
                                    <div className='d-flex align-items-center gap-2'>
                                        <FaCode className='icon' />
                                        <h5>DATABASE AND OS</h5>
                                    </div>
                                    <hr className='w-50' />
                                    <div className="row g-5">
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card shadow border-0">
                                                <img src={sql} className='img-not-hover mx-auto p-3 card-img-top' alt="sql" />
                                                <div className="card-body text-center">
                                                    <h3 className="card-title my-3">MySQL</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card shadow border-0">
                                                <img src={windows} className='mx-auto img-not-hover p-3 card-img-top' alt="windows" />
                                                <div className="card-body text-center">
                                                    <h3 className="card-title my-3">Windows</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card shadow border-0">
                                                <img src={linux} className='mx-auto img-not-hover p-3 card-img-top' alt="linux" />
                                                <div className="card-body text-center">
                                                    <h3 className="card-title my-3">Linux</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card shadow border-0">
                                                <img src={ubuntu} className=' mx-auto img-not-hover p-3 card-img-top' alt="ubuntu" />
                                                <div className="card-body text-center">
                                                    <h3 className="card-title my-3">Ubuntu</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    {/* Tools and Hosting */}
                                    <div className='d-flex align-items-center gap-2'>
                                        <FaCode className='icon' />
                                        <h5>TOOLS AND HOSTING</h5>
                                    </div>
                                    <hr className='w-50' />
                                    <div className="row g-5">
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={git} className='img-fluid mx-auto img p-3 card-img-top' alt="git" />
                                                <div className="card-body text-center">
                                                    <h4 className="card-title my-3">Git</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={github} className='img-fluid mx-auto img p-3 card-img-top' alt="github" />
                                                <div className="card-body text-center">
                                                    <h4 className="card-title my-3">GiHhub</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={heroku} className='img-fluid mx-auto img p-3 card-img-top' alt="heroku" />
                                                <div className="card-body text-center">
                                                    <h4 className="card-title my-3">Heroku</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={netlify} className=' mx-auto img p-3 card-img-top' alt="netlify" />
                                                <div className="card-body text-center">
                                                    <h4 className="card-title my-3">Netlify</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={vercel} className=' mx-auto img p-3 card-img-top' alt="vercel" />
                                                <div className="card-body text-center">
                                                    <h4 className="card-title my-3">Vercel</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={github} className='img-fluid mx-auto img p-3 card-img-top' alt="github-pages" />
                                                <div className="card-body text-center">
                                                    <h4 className="card-title my-3">GitHub Pages</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    {/* IDEs / Editors */}
                                    <div className='d-flex align-items-center gap-2'>
                                        <FaCode className='icon' />
                                        <h5>IDES / EDITORS</h5>
                                    </div>
                                    <hr className='w-50' />
                                    <div className="row g-5">
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={vscode} className='mx-auto img-not-hover p-3 card-img-top' alt="vscode" />
                                                <div className="card-body text-center">
                                                    <h1 className="card-title my-3">VS Code</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={pycharm} className='mx-auto img-not-hover p-3 card-img-top' alt="pycharm" />
                                                <div className="card-body text-center">
                                                    <h1 className="card-title my-3">PyCharm</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={atom} className='mx-auto img-not-hover p-3 card-img-top' alt="atom" />
                                                <div className="card-body text-center">
                                                    <h1 className="card-title my-3">Atom</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    {/* Others */}
                                    <div className='d-flex align-items-center gap-2'>
                                        <FaCode className='icon' />
                                        <h5>OTHER</h5>
                                    </div>
                                    <hr className='w-50' />
                                    <div className="row g-5">
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={markdown} className='mx-auto img-not-hover p-3 card-img-top' alt="markdown" />
                                                <div className="card-body text-center">
                                                    <h1 className="card-title my-3">Markdown</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                            <div className="card h-100 shadow border-0">
                                                <img src={latex} className='mx-auto img-not-hover p-3 card-img-top' alt="latex" />
                                                <div className="card-body text-center">
                                                    <h1 className="card-title my-3">LaTeX</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className='d-flex align-items-center gap-2'>
                                        <FaCode className='icon' />
                                        <h5>Knowledge</h5>
                                    </div>
                                    <hr className='w-50' />

                                    <div className='mt-4'>
                                        <ul>
                                            <li>Object Oriented Programming</li>
                                            <li>REST APIs</li>
                                            <li>Error Handling</li>
                                            <li>Asynchronous Programming</li>
                                            <li>Responsive and Mobile Ready</li>
                                            <li>Agile Methodologies</li>
                                            <li>Version Control</li>
                                            <li>Unit Testing</li>
                                            <li>API Integration</li>
                                            <li>PWA (Progressive Web App)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Skills;