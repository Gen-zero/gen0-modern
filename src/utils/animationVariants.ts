export const createSectionVariants = (shouldReduceMotion: boolean) => ({
  hidden: { 
    opacity: 0, 
    y: shouldReduceMotion ? 0 : 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: shouldReduceMotion ? 0.3 : 0.8, 
      ease: "easeOut" 
    }
  }
});

export const createPageVariants = (shouldReduceMotion: boolean) => ({
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: shouldReduceMotion ? 0.2 : 0.5, 
      staggerChildren: shouldReduceMotion ? 0.1 : 0.2,
    }
  },
  exit: { opacity: 0 }
});