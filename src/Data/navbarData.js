import { FiAward, FiBookOpen, FiHeart, FiLayers, FiCode } from "react-icons/fi";

export const mainNavigation = [
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

export const moreNavigation = [
    {
        title: "Engineering",
        items: [
            {
                label: "Skills",
                path: "/skills",
                description: "Technologies & tools I work with",
                icon: FiCode,
            },
            {
                label: "Education",
                path: "/education",
                description: "Academic background",
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
                description: "Things I enjoy beyond engineering",
                icon: FiHeart,
            },
            {
                label: "Synergies",
                path: "/synergies",
                description: "Where ideas, technology & creativity meet",
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
                description: "Certifications & credentials",
                icon: FiAward,
            },
        ],
    },
];