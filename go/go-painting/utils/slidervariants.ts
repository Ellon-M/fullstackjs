export const slider = {
    initial: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'linear',
            duration: 0.2
        },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            ease: 'easeOut',
            duration: 0.25
        },
    }
}