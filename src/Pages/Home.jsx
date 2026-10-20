import Hero from "../components/sections/home/Hero";
import TechStack from "../components/sections/home/TechStack";
import FeaturedWork from "../components/sections/home/FeaturedWork";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bhavya Khurana | Software Engineer & Developer</title>
                <meta
                    name="description"
                    content="Explore Bhavya Khurana's portfolio featuring software engineering projects, technical skills, professional experience, and development work."
                />
                <link rel="canonical" href="https://bhavya-khurana.vercel.app/" />
                <meta property="og:title" content="Bhavya Khurana | Software Engineer & Developer" />
                <meta
                    property="og:description"
                    content="Explore my software engineering portfolio, projects, skills, and experience."
                />
                <meta property="og:url" content="https://bhavya-khurana.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://bhavya-khurana.vercel.app/logo512.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bhavya Khurana | Software Engineer & Developer" />
                <meta
                    name="twitter:description"
                    content="Explore my software engineering portfolio, projects, skills, and experience."
                />
                <meta name="twitter:image" content="https://bhavya-khurana.vercel.app/logo512.png" />
            </Helmet>


            <Hero />
            <TechStack />
            <FeaturedWork />
        </>
    );
};

export default Home;