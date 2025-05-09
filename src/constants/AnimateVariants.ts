
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
    x: 20,
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
  }
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
    textBtnLoop: {
        y: [40 , 0 , 0 , -40],
        transition: { 
          duration: 5,
          times: [0,0.1,0.9,1],
          ease: "easeInOut",
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
