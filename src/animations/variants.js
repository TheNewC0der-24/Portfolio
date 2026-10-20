export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const staggerContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const slideFromLeft = {
    hidden: {
        opacity: 0,
        x: -40,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const slideFromRight = {
    hidden: {
        opacity: 0,
        x: 40,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};