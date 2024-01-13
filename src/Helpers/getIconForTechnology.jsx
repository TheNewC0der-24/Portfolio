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
    FaNode
} from 'react-icons/fa';
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
    SiHeroku,
    SiNetlify,
    SiVercel,
    SiGithubpages,
    SiMysql,
    SiPycharm,
    SiAtom,
    SiWindows11,
    SiLatex,
    SiVisualstudiocode,
    SiOpenai,
    SiRecoil,
    SiChakraui,
    SiFirebase,
    SiMongodb,
    SiExpress,
    SiPostman
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsBootstrapFill } from 'react-icons/bs';

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
        case 'OpenAI':
            return <SiOpenai className='fs-5' />;
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
        case 'Heroku':
            return <SiHeroku className='fs-5' />;
        case 'Netlify':
            return <SiNetlify className='fs-5' />;
        case 'Vercel':
            return <SiVercel className='fs-5' />;
        case 'GitHub Pages':
            return <SiGithubpages className='fs-1' />;
        case 'gh Pages':
            return <SiGithubpages className='fs-1' />;
        case 'MySQL':
            return <SiMysql className='fs-5' />;
        case 'PyCharm':
            return <SiPycharm className='fs-5' />;
        case 'Atom':
            return <SiAtom className='fs-5' />;
        case 'Windows':
            return <SiWindows11 className='fs-5' />;
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
        case 'Visual Studio Code':
            return <SiVisualstudiocode className='fs-5' />;
        case 'Visual Studio':
            return <SiVisualstudiocode className='fs-5' />;
        case 'VS Code':
            return <SiVisualstudiocode className='fs-5' />;
        case 'VSCode':
            return <SiVisualstudiocode className='fs-5' />;
        case 'NPM':
            return <FaNpm className='fs-5' />;
        case 'Yarn':
            return <FaYarn className='fs-5' />;
        case 'GitHub':
            return <FaGithub className='fs-5' />;
        case 'Chakra UI':
            return <SiChakraui className='fs-5' />;
        case 'Firebase':
            return <SiFirebase className='fs-5' />;
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
        default:
            return null;
    }
};