import { AnimatePresence , motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react'

interface WordSwapProps {
    words: string[];
    duration?: number;
    className?: string;
}

const parentvariants = {
    childIn: {
      transition: { staggerChildren: 0.1, delayChildren: 0.7 },
    },
    childOut: {
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
}

const childAnimate = {
  childIn: {
    opacity: 1,
    x: 0 ,
    filter: 'blur(0px)',
  },
  childOut: {
    opacity: 0,
    x: -20,
    filter: 'blur(4px)',
  }
}

export const WordSwap = ({words ,duration=3000 , className}: WordSwapProps) => {
  const [currentWord , setCurrentWord] = useState(words[0]);
  const [isAnimating , setIsAnimating] = useState(false);

  // swap word
  const startAnimation = useCallback(() => {
    setCurrentWord(words[words.indexOf(currentWord)+1] || words[0]);
    setIsAnimating(true);
  },[currentWord , words]);

  // delay animation
  useEffect(() => {
    if(!isAnimating) {
      setTimeout(() => {
        startAnimation();
      },duration)
    }
  },[isAnimating , duration , startAnimation]);

  return (
      <AnimatePresence onExitComplete={() => {setIsAnimating(false)}}>
        <motion.div
          variants={parentvariants}
          initial="childOut"
          animate="childIn"
          exit="childOut"
          key={currentWord}
          className={` ${isAnimating ? 'absolute' : ''} ${className}`}
          >
        {currentWord.split("").map((letter,Lindex) => (
          <motion.span 
          key={letter+Lindex}
          variants={childAnimate}
          >
            {letter}
          </motion.span>
        ))}
        </motion.div>
      </AnimatePresence>
  )
}
