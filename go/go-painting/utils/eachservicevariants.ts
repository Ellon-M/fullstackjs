export const serviceHeadingMain = {
    initial: {
        x: -700,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: [.2, .01, -.05, .85],
            duration: 1.2
        }
    }
}

export const serviceHeadingSub = {
    initial: {
        x: 700,
        opacity: 0
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: 'backOut',
            duration: 1,
            delay: 0.5
        }
    }
}

export const serviceImage = {
    initial: {
        y: 2000,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [.7, .01, -.01, .85],
            duration: 1.5,
            delay: 1
        }
    }
}

export const serviceText = {
    initial: {
        x: -2000,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease:  [.7, .01, -.01, .85],
            duration: 1.7,
            delay: 1.4
        }
    }
}

export const serviceFooterVariants = {
    initial: {
        y: 2000,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [.3, .31, -.08, .8],
            duration: 1.5,
            delay: 1.6
        }
    }
} 