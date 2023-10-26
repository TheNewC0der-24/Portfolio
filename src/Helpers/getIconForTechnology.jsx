import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiRedux, SiJquery, SiMui, SiJavascript, SiTypescript, SiOpenai, SiRecoil } from 'react-icons/si';
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
            return <FaGitAlt className='fs-5' />;
        case 'React':
            return <FaReact className='fs-5' />;
        case 'Redux':
            return <SiRedux className='fs-5' />;
        case 'HTML5':
            return <FaHtml5 className='fs-5' />;
        case 'JavaScript':
            return <SiJavascript className='fs-5' />;
        case 'CSS3':
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
        default:
            return null;
    }
};