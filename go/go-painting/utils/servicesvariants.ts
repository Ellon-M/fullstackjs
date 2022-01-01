export const servicesVariants = {
    initial: {
      y: 1000,
      scale: 0.7
    },
    animate: {
      y: 0,
      scale: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        staggerChildren: 0.5
    }
    },
    exit: {
        y: -1000,
        scale: 0.7,
        transition: {
            ease: 'easeInOut',
            duration: 0.4
        }
    }
}