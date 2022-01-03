export const layoutVariants = {
    initial: {
        y: -1000,
        scale: 1
    },
    animate: {
        y: 0,
        scale: 1,
        transition: {
          ease: 'backInOut',
          duration: 1,
          delay: 0.3,
          staggerChildren: 0.5
      }
    },
    exit: {
        y: -200,
        scale: 0.9,
        transition: {
            ease: 'easeInOut',
            duration: 0.7
        }
    }
}