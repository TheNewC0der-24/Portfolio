import React from 'react';
import styles from './Skills.module.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Images
import html from "../../assets/Languages/html.png";
import css from "../../assets/Languages/css.png";
import js from "../../assets/Languages/js.png";
import reactJs from "../../assets/Languages/reactJs.png";
import bootstrap from "../../assets/Languages/bootstrap.png";
import mui from "../../assets/Languages/mui.png";
import tailwindCss from "../../assets/Languages/tailwindCss.png";
import antD from "../../assets/Languages/antD.png";
import npm from "../../assets/Languages/npm.png";
import yarn from "../../assets/Languages/yarn.png";
import vite from "../../assets/Languages/vite.png";
import git from "../../assets/Languages/git.png";
import github from "../../assets/Languages/github.png";
import heroku from "../../assets/Languages/heroku.png";
import netlify from "../../assets/Languages/netlify.png";
import vercel from "../../assets/Languages/vercel.png";
import sql from "../../assets/Languages/sql.png";
import redux from "../../assets/Languages/redux.svg";
import ts from "../../assets/Languages/ts.svg";

// Social Links
import SocialLinks from '../../subComponents/SocialLinks/SocialLinks';

// Theme
import { lightTheme } from '../Themes';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }

    .card {
        background: none !important;
        box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 
                    5px 5px 9px rgba(94,104,121,0.3);
        cursor: pointer;
    }

    .img {
        box-shadow: 5px 5px 10px #abaeb1,
                    -5px -5px 10px #ffffff;
        transition: all 0.2s ease;
        
    }
    .img:hover {
        box-shadow: inset -5px 5px 7px #bdc0c4,
                    inset 5px -5px 7px #ffffff;
        transform: translateY(2px);
    }
`;

const Skills = () => {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <SocialLinks />
                <div className='container my-3'>
                    <div className={styles.sectionTitle}>
                        <span>.skills()</span>
                        <h2>-My Learnings-</h2>
                        <p className='text-center mx-auto w-75'>
                            These are my skills and this contains all the web technologies, programming languages, databases, frameworks, libraries, tools and hosting platforms that I have learnt
                            until now. I am constantly learning, therefore I may update this section more often.
                        </p>
                    </div>
                    <div className="container">
                        <div className="container">
                            <div className="container">
                                <div className="row g-4">
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={html} alt="html" width={125} className='img-fluid mx-auto img p-3' />
                                                <h3 className="card-title my-3">HTML</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={css} width={125} className='img-fluid mx-auto img p-3' alt="css" />
                                                <h3 className="card-title my-3">CSS</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={js} width={125} className='img-fluid mx-auto img p-3' alt="js" />
                                                <h3 className="card-title my-3">JavaScript</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={reactJs} width={125} className='img-fluid mx-auto img p-3' alt="react" />
                                                <h3 className="card-title my-3">React.JS</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={bootstrap} width={125} className='img-fluid mx-auto img p-3' alt="bootstrap" />
                                                <h3 className="card-title my-3">Bootstrap</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={mui} width={125} className='img-fluid mx-auto img p-3' alt="mui" />
                                                <h3 className="card-title my-3">Material UI</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={tailwindCss} width={125} className='img-fluid mx-auto img p-3' alt="tailwindCss" />
                                                <h3 className="card-title my-3">Tailwind Css</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={antD} width={125} className='img-fluid mx-auto img p-3' alt="antD" />
                                                <h3 className="card-title my-3">Ant Design</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={npm} width={125} className='img-fluid mx-auto img p-3' alt="npm" />
                                                <h3 className="card-title my-3">NPM</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={yarn} width={125} className='img-fluid mx-auto img p-3' alt="yarn" />
                                                <h3 className="card-title my-3">Yarn</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={vite} width={125} className='img-fluid mx-auto img p-3' alt="vite" />
                                                <h3 className="card-title my-3">Vite</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={git} width={125} className='img-fluid mx-auto img p-3' alt="git" />
                                                <h3 className="card-title my-3">Git</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={github} width={125} className='img-fluid mx-auto img p-3' alt="github" />
                                                <h3 className="card-title my-3">GitHub</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={heroku} width={125} className='img-fluid mx-auto img p-3' alt="heroku" />
                                                <h3 className="card-title my-3">Heroku</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={netlify} width={125} className='img-fluid mx-auto img p-3' alt="netlify" />
                                                <h3 className="card-title my-3">Netlify</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={vercel} width={125} className='img-fluid mx-auto img p-3' alt="vercel" />
                                                <h3 className="card-title my-3">Vercel</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={sql} width={125} className='img-fluid mx-auto img p-3' alt="sql" />
                                                <h3 className="card-title my-3">My SQL</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={redux} width={125} className='img-fluid mx-auto img p-3' alt="redux" />
                                                <h3 className="card-title my-3">Redux</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="card border-0 h-100">
                                            <div className="card-body text-center">
                                                <img src={ts} width={125} className='img-fluid mx-auto img p-3' alt="typescript" />
                                                <h3 className="card-title my-3">TypeScript</h3>
                                            </div>
                                        </div>
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