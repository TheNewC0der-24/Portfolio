/* eslint-disable react/prop-types */
import {
    FaReact,
    FaAngular,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaNpm,
    FaYarn,
    FaFigma,
    FaGit,
    FaGithub,
    FaLinux,
    FaUbuntu,
    FaMarkdown,
    FaDocker,
    FaNode,
} from 'react-icons/fa';
import { FaGitlab } from "react-icons/fa6";
import {
    SiCplusplus,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiMui,
    SiTailwindcss,
    SiAntdesign,
    SiRedux,
    SiJquery,
    SiVite,
    SiNetlify,
    SiVercel,
    SiGithubpages,
    SiMysql,
    SiPycharm,
    SiLatex,
    SiRecoil,
    SiChakraui,
    SiMongodb,
    SiExpress,
    SiPostman,
    SiAuth0,
    SiKeycloak,
    SiAxios,
    SiShadcnui
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsBootstrapFill } from 'react-icons/bs';
import { GrHeroku } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiFirebaseFill } from "react-icons/ri";

export const getIconForTechnology = (technology) => {
    switch (technology) {
        case 'Angular':
            return <FaAngular className='fs-5' />;
        case 'Bootstrap':
            return <BsBootstrapFill className='fs-5' />;
        case 'Sass':
            return <FaSass className='fs-5' />;
        case 'TypeScript':
            return <SiTypescript className='fs-5' />;
        case 'Git':
            return <FaGit className='fs-5' />;
        case 'React':
            return <FaReact className='fs-5' />;
        case 'React.js':
            return <FaReact className='fs-5' />;
        case 'Redux':
            return <SiRedux className='fs-5' />;
        case 'HTML5':
            return <FaHtml5 className='fs-5' />;
        case 'HTML':
            return <FaHtml5 className='fs-5' />;
        case 'JavaScript':
            return <SiJavascript className='fs-5' />;
        case 'CSS3':
            return <FaCss3Alt className='fs-5' />;
        case 'CSS':
            return <FaCss3Alt className='fs-5' />;
        case 'Material-UI':
            return <SiMui className='fs-5' />;
        case 'MUI':
            return <SiMui className='fs-5' />;
        case 'jQuery':
            return <SiJquery className='fs-5' />;
        case 'Recoil':
            return <SiRecoil className='fs-5' />;
        case 'TailwindCSS':
            return <SiTailwindcss className='fs-5' />;
        case 'Tailwind CSS':
            return <SiTailwindcss className='fs-5' />;
        case 'Ant Design':
            return <SiAntdesign className='fs-5' />;
        case 'Vite':
            return <SiVite className='fs-5' />;
        case 'Netlify':
            return <SiNetlify className='fs-5' />;
        case 'Vercel':
            return <SiVercel className='fs-5' />;
        case 'Heroku':
            return <GrHeroku className='fs-5' />;
        case 'GitHub Pages':
            return <SiGithubpages className='fs-1' />;
        case 'gh Pages':
            return <SiGithubpages className='fs-1' />;
        case 'MySQL':
            return <SiMysql className='fs-5' />;
        case 'PyCharm':
            return <SiPycharm className='fs-5' />;
        case 'Linux':
            return <FaLinux className='fs-5' />;
        case 'Ubuntu':
            return <FaUbuntu className='fs-5' />;
        case 'LaTeX':
            return <SiLatex className='fs-5' />;
        case 'Markdown':
            return <FaMarkdown className='fs-5' />;
        case 'Python':
            return <SiPython className='fs-5' />;
        case 'C++':
            return <SiCplusplus className='fs-5' />;
        case 'NPM':
            return <FaNpm className='fs-5' />;
        case 'Yarn':
            return <FaYarn className='fs-5' />;
        case 'GitHub':
            return <FaGithub className='fs-5' />;
        case 'GitLab':
            return <FaGitlab className='fs-5' />;
        case 'Chakra UI':
            return <SiChakraui className='fs-5' />;
        case 'Firebase':
            return <RiFirebaseFill className='fs-5' />;
        case 'Next.js':
            return <TbBrandNextjs className='fs-5' />;
        case 'Docker':
            return <FaDocker className='fs-5' />;
        case 'MongoDB':
            return <SiMongodb className='fs-5' />;
        case 'Express':
            return <SiExpress className='fs-5' />;
        case 'Node.js':
            return <FaNode className='fs-5' />;
        case 'Postman':
            return <SiPostman className='fs-5' />;
        case 'Figma':
            return <FaFigma className='fs-5' />;
        case 'OAuth 2.0':
            return <SiAuth0 className='fs-5' />;
        case 'PostgreSQL':
            return <BiLogoPostgresql className='fs-5' />;
        case 'Keycloak':
            return <SiKeycloak className='fs-5' />;
        case 'Axios':
            return <SiAxios className='fs-5' />;
        case 'Shadcn/UI':
            return <SiShadcnui className='fs-5' />;
        default:
            return null;
    }
};