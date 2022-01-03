export const galleryVariants = {
    initial: {
        y: 1000,
        scale: 1
      },
      animate: {
        y: 0,
        scale: 1,
        transition: {
          ease: 'backInOut',
          duration: 1,
          staggerChildren: 0.5
      }
      },
      exit: {
          y: -1000,
          scale: 0.7,
          opacity: 0,
          transition: {
              ease: 'easeInOut',
              duration: 0.4
          }
      }
}