import { useEffect } from "react";
import Hero from "../components/sections/home/Hero";
import TechStack from "../components/sections/home/TechStack";
import FeaturedWork from "../components/sections/home/FeaturedWork";

const Home = () => {
    useEffect(() => {
        document.title = "Bhavya Khurana";
    }, []);

    return (
        <>
            <Hero />
            <TechStack />
            <FeaturedWork />
        </>
    );
};

export default Home;