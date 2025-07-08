export const contactVariants = {
  contactIn: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 , delay: 0.4 },
  },
  contactOut: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
  formIn: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 , delay: 0.4 },
  },
  formOut: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
  textAnimate: {
    y: [0 , 5 , 0],
    transition: { 
      duration: 0.3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2, 
    },
  },
  childIn: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  childOut: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const welcomeVariants = {
  textIn: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 1 },
  },
  textOut: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.2 },
  },
  textIn2: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 , delay: 1.4 },
  },
  textOut2: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
  textIn3: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 , delay: 1.4 },
  },
  textOut3: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  dividerIn: {
    scaleX: 1,
    transition: { duration: 0.8 , delay: 0.5 },
  },
  dividerOut: {
    scaleX: 0,
    transition: { duration: 0.5 },
  },
  textAnimate: {
    y: [0 , 5 , 0],
    transition: { 
      duration: 0.3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2, 
    },
  }
}

export const navVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 , delay: 0.4 },
  },
  closed: {
    opacity: 0,
    y: -20,
  },
}

export const navbarVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 , delay: 0.4 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
}

export const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0 at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export const heroVariants = {
    titleIn: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    titleOut: {
      opacity: 0,
      y: -20,
    },
    subtitleIn: {
      opacity: 1,
      transition: { duration: 0.5 , delay: 0.4 },
    },
    subtitleOut: {
      opacity: 0,
    },
    btnIn: {
      opacity: 1,
      transition: { duration: 0.5 , delay: 0.8 },
    },
    btnOut: {
      opacity: 0,
    },
    textBtnLoop: {
        y: [20 , 0 , 0, -20 , -20],
        opacity: [0,1,1,1,0],
        filter: ["blur(4px)","blur(0px)","blur(0px)","blur(0px)","blur(4px)"],
        transition: { 
          duration: 4,
          times: [0,0.04,0.96,0.99,1],
          type: 'easeOut',
          repeat: Infinity,
          
        },
    },
    textLoop: {
        scale: [1,1.1,1],
        transition: { 
          duration: 1,
          times: [0,0.5,1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1
        },
    }
    
} 

export const aboutVariants = {
  titleIn: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 , delay: 0.4 },

  },
  titleOut: {
    opacity: 0,
    y: 30,
  },
  subtitleIn: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 , delay: 0.4 },
  },
  subtitleOut: {
    opacity: 0,
    y: 30,
  },
  imageIn: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 , delay: 0.2 },
  },
  imageOut: {
    opacity: 0,
    scale: 0
  },
  imageLoop: {
    rotate:360,
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: 'linear'
    }
  },
  childIn: {
    transition: { staggerChildren: 0.1, delayChildren: 0.7 },
  },
  childOut: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const PortfolioVariants = {
  titleIn: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  titleOut: {
    opacity: 0,
    y: 20,
  },
  itemIn: {
    opacity: 1,
    transition: { duration: 1 , delay: 0.6 },
  },
  itemOut: {
    opacity: 0,
    transition: { duration: 1 , delay: 0.6},
  },
  childIn: {
    transition: { staggerChildren: 0.07, delayChildren: 0.4 },
  },
  childOut: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}


//child variants

export const childUpVariants = {
  childIn: {
    opacity: 1,
    y: 0,
    // transition: { duration: 0.5 },
  },
  childOut: {
    opacity: 0,
    y: 30
  }
}

export const childLeftVariants = {
  childIn: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  childOut: {
    opacity: 0,
    x: 30
  }
}

export const childCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } }
}

export const toastVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 ,type: 'spring', stiffness: 300, damping: 20},
}

export const bannerLoop = {
      hide: {
        y:50,
        opacity: 0,
        transition: {
          type: 'spring'
        }
      },
      visible: {
        y:0,
        opacity: 1,
        transition: {
          type: 'spring'
        }
      }
      
}