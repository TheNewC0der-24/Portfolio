import { FiAward, FiBookOpen, FiHeart, FiLayers, FiCode } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const primaryNavigation = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Work",
        path: "/work",
    },
    {
        label: "Experience",
        path: "/experience",
    },
    {
        label: "Blogs",
        href: "https://cynophilist.hashnode.dev/",
        external: true,
    },
];

export const exploreNavigation = [
    {
        title: "Engineering",
        items: [
            {
                label: "Skills",
                path: "/skills",
                icon: FiCode,
            },
            {
                label: "Education",
                path: "/education",
                icon: FiBookOpen,
            },
        ],
    },
    {
        title: "Beyond Code",
        items: [
            {
                label: "Interests",
                path: "/interest",
                icon: FiHeart,
            },
            {
                label: "Synergies",
                path: "/synergies",
                icon: FiLayers,
            },
        ],
    },
    {
        title: "Credentials",
        items: [
            {
                label: "Certificates",
                path: "/certificates",
                icon: FiAward,
            },
        ],
    },
];

export const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/TheNewC0der-24",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bhavya-khurana/",
        icon: FaLinkedinIn,
    },
];